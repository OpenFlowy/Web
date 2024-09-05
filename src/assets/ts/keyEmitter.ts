import $ from 'jquery';
import * as _ from 'lodash';

import * as browser_utils from './utils/browser';
import EventEmitter from './utils/eventEmitter';
import logger from '../../shared/utils/logger';
import { Key } from './types';

/*
KeyEmitter is an EventEmitter that emits keys
A key corresponds to a keypress in the browser, including modifiers/special keys

The core function is to take browser keypress events, and normalize the key to have a string representation.

For more info, see its consumer, keyHandler.ts, as well as keyBindings.ts
Note that one-character keys are treated specially, in that they are insertable in insert mode.
*/

const shiftMap: {[key: string]: Key} = {
  '`': '~',
  '1': '!',
  '2': '@',
  '3': '#',
  '4': '$',
  '5': '%',
  '6': '^',
  '7': '&',
  '8': '*',
  '9': '(',
  '0': ')',
  '-': '_',
  '=': '+',
  '[': '{',
  ']': '}',
  ';': ':',
  '\'': '"',
  '\\': '|',
  '.': '>',
  ',': '<',
  '/': '?',
};

const ignoreMap: {[keyCode: number]: string} = {
  16: 'shift alone',
  17: 'ctrl alone',
  18: 'alt alone',
  91: 'left command alone',
  93: 'right command alone',
};

/*
 * KeyBindings.keyCode (used below) and KeyBindings.code (not used below) are
 * not to be ideally used to find which key was pressed. See
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode.
 *
 * Instead of changing all of code to use the standard keys, we just create this
 * mapping here that tells us which standard keys map to the keys expected by
 * the application, and we set the key to the mapped value so that the rest of
 * the code can continue to work unmodified.
 *
 * This change came about when I discovered that on
 * macOS(13.6.9)+Firefox(129.0.2) the key 'j' leads to Firefox sending the key
 * as 'a', which caused the application to go into INSERT mode, instead of the
 * expected behaviour move-down-to-next-line action.
 *
 * The old behaviour can be turned on again by setting applyFixes = false;
 *
 * TODO: Remove this hack, and actually change the keymaps in vim.ts to use the
 * standard key values (the one on the left side in the below mapping).
 *
 * TODO: Find more keys from the standard list that can be mapped here. As of
 * now I don't see any that are relevant to the current keys used in vim.ts.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
 */
const applyFixes: boolean = true;
const StandardKeyToVimFlowyMap: {[key:string]:Key} = {
      "Escape" : "esc"       ,
   "Backspace" : "backspace" ,
      "Delete" : "delete"    ,
     "ArrowUp" : "up"        ,
   "ArrowDown" : "down"      ,
   "ArrowLeft" : "left"      ,
  "ArrowRight" : "right"     ,
       "Enter" : "enter"     ,
         "Tab" : "tab"       ,
        "Home" : "home"      ,
         "End" : "end"       ,
      "PageUp" : "page up"   ,
    "PageDown" : "page down" ,
  " "          : "space"     ,
  /* Validate and add 'Meta -> 'meta' mapping. vim.ts has meta+home and some other uses for it */
};

const keyCodeMap: {[keyCode: number]: Key} = {
  8: 'backspace',
  9: 'tab',
  13: 'enter',
  27: 'esc',
  32: 'space',

  33: 'page up',
  34: 'page down',
  35: 'end',
  36: 'home',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',

  46: 'delete',

  48: '0',
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  53: '5',
  54: '6',
  55: '7',
  56: '8',
  57: '9',

  186: ';',
  187: '=',
  188: ',',
  189: '-',
  190: '.',
  191: '/',
  192: '`',

  219: '[',
  220: '\\',
  221: ']',
  222: '\'',
};

for (let j = 1; j <= 26; j++) {
  const keyCode = j + 64;
  const letter = String.fromCharCode(keyCode);
  const lower = letter.toLowerCase();
  keyCodeMap[keyCode] = lower;
  shiftMap[lower] = letter;
}

if (applyFixes)
{
  logger.debug("keyCodeMap: ");
  console.table(keyCodeMap);
}

if (browser_utils.isFirefox()) {
  keyCodeMap[173] = '-';
}

export default class KeyEmitter extends EventEmitter {
  // constructor() {
  //   super();
  // }

  public listen() {
    // IME event
    $(document).on('compositionend', (e: any) => {
      e.originalEvent.data.split('').forEach((key: string) => {
        this.emit('keydown', key);
      });
    });

    /* TODO: jQuery $.keydown(e ...) is deprecated; replace it with $.on("keydown", e ...) */
    return $(document).keydown(e => {
      logger.debug("Received keydown event:", e);
      // IME input keycode is 229
      if (e.keyCode === 229) {
        logger.debug("keyCode is 229; returning:");
        return false;
      }
      if (e.keyCode in ignoreMap) {
        logger.debug("keyCode is in ignoreMap; returning:");
        return true;
      }
      let key = 'error';

      if (applyFixes)
      {
        key = e.key;
        logger.debug("set key to:", key);
      }

      if (applyFixes && key in StandardKeyToVimFlowyMap)
      {
        let newKey = StandardKeyToVimFlowyMap[key];
        logger.debug("turned standard ", key," to ", newKey);
         key = newKey;
      }
      if (applyFixes){} else
      if (e.keyCode in keyCodeMap) {
        key = keyCodeMap[e.keyCode];
        logger.debug("keyCode is: ", e.keyCode);
        logger.debug("keyCodeMap[] returned", key);
      } else {
        // this is necessary for typing stuff..
        key = String.fromCharCode(e.keyCode);
        logger.debug("String.fromCharCode() returned", key);
      }

      if (e.shiftKey) {
        if (key in shiftMap) {
          if (!applyFixes) {
          key = shiftMap[key];
          logger.debug("shiftMap[] returned", key);
          }
        } else {
          key = `shift+${key}`;
          logger.debug("shift+: ", key);
        }
      }

      if (e.altKey) {
        key = `alt+${key}`;
      }

      if (e.ctrlKey) {
        key = `ctrl+${key}`;
      }

      if (e.metaKey) {
        key = `meta+${key}`;
      }

      logger.debug('keycode', e.keyCode, 'key', key);
      logger.debug('KeyBoardEvent.{code, key}', e.code, e.key);
      const results = this.emit('keydown', key);
      // return false to stop propagation, if any handler handled the key
      if (_.some(results)) {
        e.stopPropagation();
        e.preventDefault();
        return false;
        // return browser_utils.cancel(e);
      }
      return true;
    });
  }
}
