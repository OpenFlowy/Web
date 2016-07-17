/* globals describe, it */
import TestCase from '../testcase';
let siblingDownKey = '}';
let siblingUpKey = '{';

describe('visual line mode', function() {
  it('delete works in basic case', function() {
    let t = new TestCase([ 'hello', 'world', 'i', 'am', 'a', 'test', 'case' ]);
    t.sendKeys('Vjx');
    t.expect([ 'i', 'am', 'a', 'test', 'case' ]);
    t.sendKeys('u');
    return t.expect([ 'hello', 'world', 'i', 'am', 'a', 'test', 'case' ]);
  });

  it('change works in basic case', function() {
    let t = new TestCase([ 'hello', 'world', 'i', 'am', 'a', 'test', 'case' ]);
    t.sendKeys('GVkc');
    t.expect([ 'hello', 'world', 'i', 'am', 'a', '']);
    t.sendKeys('confused soul');
    t.expect([ 'hello', 'world', 'i', 'am', 'a', 'confused soul' ]);
    t.sendKey('esc');
    t.sendKeys('u');
    return t.expect([ 'hello', 'world', 'i', 'am', 'a', 'test', 'case' ]);
  });

  it('allows cursor switch', function() {
    let t = new TestCase([ 'hello', 'world', 'i', 'am', 'a', 'test', 'case' ]);
    t.sendKeys('jjjx');
    t.expect([ 'hello', 'world', 'i', 'm', 'a', 'test', 'case' ]);
    t.sendKeys('Vjjokkd');
    t.expect([ 'hello', 'case' ]);
    t.sendKeys('u');
    t.expect([ 'hello', 'world', 'i', 'm', 'a', 'test', 'case' ]);
    t.sendKey('ctrl+r');
    return t.expect([ 'hello', 'case' ]);
  });

  it('works with repeat', function() {
    let t = new TestCase([ '1', '2', '3', '4', '5', '6', '7' ]);
    t.sendKeys('Vjjx');
    t.expect([ '4', '5', '6', '7' ]);
    t.sendKeys('.');
    return t.expect([ '7' ]);
  });

  it('doesnt save on yank', function() {
    let t = new TestCase([ '1', '2' ]);
    t.sendKeys('xjVy');
    t.expect([ '', '2' ]);
    t.sendKeys('.'); // this is the x, not the y
    return t.expect([ '', '' ]);
  });

  it('works with deleting children', function() {
    let t = new TestCase([
      { text: 'nest', children: [
        'egg'
      ] },
      { text: 'nest 2', children: [
        'egg 2'
      ] },
      { text: 'nest 3', children: [
        'egg 3'
      ] }
    ]);
    t.sendKeys(['V', siblingDownKey, 'x']);
    t.expect([
      { text: 'nest 3', children: [
        'egg 3'
      ] }
    ]);
    t.sendKeys('p');
    t.expect([
      { text: 'nest 3', children: [
        { text: 'nest', children: [
          'egg'
        ] },
        { text: 'nest 2', children: [
          'egg 2'
        ] },
        'egg 3'
      ] }
    ]);
    // ends up on row 2
    t.sendKeys(['V', siblingDownKey, siblingDownKey, 'd', 'p']);
    t.expect([
      'nest 3',
      { text: 'nest', children: [
        'egg'
      ] },
      { text: 'nest 2', children: [
        'egg 2'
      ] },
      'egg 3'
    ]);
    // ends up on row 2
    t.sendKeys('x');
    t.expect([
      'nest 3',
      { text: 'est', children: [
        'egg'
      ] },
      { text: 'nest 2', children: [
        'egg 2'
      ] },
      'egg 3'
    ]);
    t.sendKeys('u');
    t.expect([
      'nest 3',
      { text: 'nest', children: [
        'egg'
      ] },
      { text: 'nest 2', children: [
        'egg 2'
      ] },
      'egg 3'
    ]);
    t.sendKeys('u');
    t.expect([ 'nest 3' ]);
    t.sendKeys('u');
    t.expect([
      { text: 'nest 3', children: [
        { text: 'nest', children: [
          'egg'
        ] },
        { text: 'nest 2', children: [
          'egg 2'
        ] },
        'egg 3'
      ] }
    ]);
    t.sendKeys('u');
    t.expect([
      { text: 'nest 3', children: [
        'egg 3'
      ] }
    ]);
    t.sendKeys('u');
    return t.expect([
      { text: 'nest', children: [
        'egg'
      ] },
      { text: 'nest 2', children: [
        'egg 2'
      ] },
      { text: 'nest 3', children: [
        'egg 3'
      ] }
    ]);
  });

  it('works with indent', function() {
    let t = new TestCase([
      { text: 'nest', children: [
        'egg'
      ] },
      { text: 'nest 2', children: [
        'egg 2',
        'egg 2 2'
      ] },
      { text: 'nest 3', children: [
        'egg 3'
      ] }
    ]);
    // does nothing when can't indent
    t.sendKeys(['j', 'V', '>']);
    t.expect([
      { text: 'nest', children: [
        'egg'
      ] },
      { text: 'nest 2', children: [
        'egg 2',
        'egg 2 2'
      ] },
      { text: 'nest 3', children: [
        'egg 3'
      ] }
    ]);
    // now can indent
    t.sendKeys(['j', 'V', siblingDownKey, '>']);
    t.expect([
      { text: 'nest', children: [
        'egg',
        { text: 'nest 2', children: [
          'egg 2',
          'egg 2 2'
        ] },
        { text: 'nest 3', children: [
          'egg 3'
        ] }
      ] }
    ]);
    // does nothing again
    t.sendKeys([siblingUpKey]);
    t.sendKeys('jV>');
    t.expect([
      { text: 'nest', children: [
        'egg',
        { text: 'nest 2', children: [
          'egg 2',
          'egg 2 2'
        ] },
        { text: 'nest 3', children: [
          'egg 3'
        ] }
      ] }
    ]);
    // unindent
    t.sendKeys('V<');
    t.expect([
      { text: 'nest', children: [
        'egg',
        { text: 'nest 2', children: [
          'egg 2 2'
        ] },
        'egg 2',
        { text: 'nest 3', children: [
          'egg 3'
        ] }
      ] }
    ]);
    // undo ignores things that didn't happen
    t.sendKeys('u');
    t.expect([
      { text: 'nest', children: [
        'egg',
        { text: 'nest 2', children: [
          'egg 2',
          'egg 2 2'
        ] },
        { text: 'nest 3', children: [
          'egg 3'
        ] }
      ] }
    ]);
    t.sendKeys('u');
    return t.expect([
      { text: 'nest', children: [
        'egg'
      ] },
      { text: 'nest 2', children: [
        'egg 2',
        'egg 2 2'
      ] },
      { text: 'nest 3', children: [
        'egg 3'
      ] }
    ]);
  });

  it('works when cursor/anchor are ancestors of each other', function() {
    let t = new TestCase([
      { text: 'nest', children: [
        'egg'
      ] },
      { text: 'nest 2', children: [
        'egg 2',
        'egg 2 2'
      ] },
      { text: 'nest 3', children: [
        'egg 3'
      ] }
    ]);
    t.sendKeys('Vjd');
    t.expect([
      { text: 'nest 2', children: [
        'egg 2',
        'egg 2 2'
      ] },
      { text: 'nest 3', children: [
        'egg 3'
      ] }
    ]);
    t.sendKeys('jVkd');
    return t.expect([
      { text: 'nest 3', children: [
        'egg 3'
      ] }
    ]);
  });

  it('has LCA behavior', function() {
    let t = new TestCase([
      { text: 'nest', children: [
        'egg'
      ] },
      { text: 'nest 2', children: [
        'egg 2',
        'egg 2 2'
      ] },
      { text: 'nest 3', children: [
        'egg 3'
      ] }
    ]);
    t.sendKeys('jVjd');
    t.expect([
      { text: 'nest 3', children: [
        'egg 3'
      ] }
    ]);

    t = new TestCase([
      { text: 'nest', children: [
        'egg'
      ] },
      { text: 'nest 2', children: [
        'egg 2',
        'egg 2 2'
      ] },
      { text: 'nest 3', children: [
        'egg 3'
      ] }
    ]);
    t.sendKeys('jVjjd');
    t.expect([
      { text: 'nest 3', children: [
        'egg 3'
      ] }
    ]);

    t = new TestCase([
      { text: 'this case', children: [
        { text: 'broke in ', children: [
          'real',
          'life'
        ] },
        'whoops!'
      ] }
    ]);
    t.sendKeys('jjjVkkd');
    return t.expect([
      { text: 'this case', children: [
        'whoops!'
      ] }
    ]);
  });

  return it('works with go to end of document', function() {
    let t = new TestCase([
      'yay',
      { text: 'hip', children: [
        { text: 'hop', children: [
          'hoop'
        ] }
      ] },
      'hooray!'
    ]);
    t.sendKeys('VGd');
    t.expect([ '' ]);
    t.sendKeys('u');
    return t.expect([
      'yay',
      { text: 'hip', children: [
        { text: 'hop', children: [
          'hoop'
        ] }
      ] },
      'hooray!'
    ]);
  });
});
