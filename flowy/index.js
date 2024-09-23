(function () {
    'use strict';

    (function(){
    var aa=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function g(a){var b=aa.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return !b&&a}function l(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return !(!a||!(a.__CE_isImportDocument||a instanceof Document))}
    function n(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
    function p(a,b,d){d=void 0===d?new Set:d;for(var c=a;c;){if(c.nodeType===Node.ELEMENT_NODE){var e=c;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){c=e.import;if(c instanceof Node&&!d.has(c))for(d.add(c),c=c.firstChild;c;c=c.nextSibling)p(c,b,d);c=n(a,e);continue}else if("template"===f){c=n(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)p(e,b,d);}c=c.firstChild?c.firstChild:n(a,c);}}function r(a,b,d){a[b]=d;}function u(){this.a=new Map;this.g=new Map;this.c=[];this.f=[];this.b=!1;}function ba(a,b,d){a.a.set(b,d);a.g.set(d.constructorFunction,d);}function ca(a,b){a.b=!0;a.c.push(b);}function da(a,b){a.b=!0;a.f.push(b);}function v(a,b){a.b&&p(b,function(b){return w(a,b)});}function w(a,b){if(a.b&&!b.__CE_patched){b.__CE_patched=!0;for(var d=0;d<a.c.length;d++)a.c[d](b);for(d=0;d<a.f.length;d++)a.f[d](b);}}
    function x(a,b){var d=[];p(b,function(b){return d.push(b)});for(b=0;b<d.length;b++){var c=d[b];1===c.__CE_state?a.connectedCallback(c):y(a,c);}}function z(a,b){var d=[];p(b,function(b){return d.push(b)});for(b=0;b<d.length;b++){var c=d[b];1===c.__CE_state&&a.disconnectedCallback(c);}}
    function A(a,b,d){d=void 0===d?{}:d;var c=d.u||new Set,e=d.i||function(b){return y(a,b)},f=[];p(b,function(b){if("link"===b.localName&&"import"===b.getAttribute("rel")){var d=b.import;d instanceof Node&&(d.__CE_isImportDocument=!0,d.__CE_hasRegistry=!0);d&&"complete"===d.readyState?d.__CE_documentLoadHandled=!0:b.addEventListener("load",function(){var d=b.import;if(!d.__CE_documentLoadHandled){d.__CE_documentLoadHandled=!0;var f=new Set(c);f.delete(d);A(a,d,{u:f,i:e});}});}else f.push(b);},c);if(a.b)for(b=
    0;b<f.length;b++)w(a,f[b]);for(b=0;b<f.length;b++)e(f[b]);}
    function y(a,b){if(void 0===b.__CE_state){var d=b.ownerDocument;if(d.defaultView||d.__CE_isImportDocument&&d.__CE_hasRegistry)if(d=a.a.get(b.localName)){d.constructionStack.push(b);var c=d.constructorFunction;try{try{if(new c!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{d.constructionStack.pop();}}catch(t){throw b.__CE_state=2,t;}b.__CE_state=1;b.__CE_definition=d;if(d.attributeChangedCallback)for(d=d.observedAttributes,c=0;c<d.length;c++){var e=
    d[c],f=b.getAttribute(e);null!==f&&a.attributeChangedCallback(b,e,null,f,null);}l(b)&&a.connectedCallback(b);}}}u.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a);};u.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&b.disconnectedCallback.call(a);};
    u.prototype.attributeChangedCallback=function(a,b,d,c,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,d,c,e);};function B(a){var b=document;this.c=a;this.a=b;this.b=void 0;A(this.c,this.a);"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}));}function C(a){a.b&&a.b.disconnect();}B.prototype.f=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||C(this);for(b=0;b<a.length;b++)for(var d=a[b].addedNodes,c=0;c<d.length;c++)A(this.c,d[c]);};function ea(){var a=this;this.b=this.a=void 0;this.c=new Promise(function(b){a.b=b;a.a&&b(a.a);});}function D(a){if(a.a)throw Error("Already resolved.");a.a=void 0;a.b&&a.b(void 0);}function E(a){this.c=!1;this.a=a;this.j=new Map;this.f=function(b){return b()};this.b=!1;this.g=[];this.o=new B(a);}
    E.prototype.l=function(a,b){var d=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!g(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.a.a.get(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var c=function(b){var a=e[b];if(void 0!==a&&!(a instanceof Function))throw Error("The '"+b+"' callback must be a function.");
    return a},e=b.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=c("connectedCallback");var t=c("disconnectedCallback");var k=c("adoptedCallback");var h=c("attributeChangedCallback");var m=b.observedAttributes||[];}catch(q){return}finally{this.c=!1;}b={localName:a,constructorFunction:b,connectedCallback:f,disconnectedCallback:t,adoptedCallback:k,attributeChangedCallback:h,observedAttributes:m,constructionStack:[]};ba(this.a,
    a,b);this.g.push(b);this.b||(this.b=!0,this.f(function(){return fa(d)}));};E.prototype.i=function(a){A(this.a,a);};
    function fa(a){if(!1!==a.b){a.b=!1;for(var b=a.g,d=[],c=new Map,e=0;e<b.length;e++)c.set(b[e].localName,[]);A(a.a,document,{i:function(b){if(void 0===b.__CE_state){var e=b.localName,f=c.get(e);f?f.push(b):a.a.a.get(e)&&d.push(b);}}});for(e=0;e<d.length;e++)y(a.a,d[e]);for(;0<b.length;){var f=b.shift();e=f.localName;f=c.get(f.localName);for(var t=0;t<f.length;t++)y(a.a,f[t]);(e=a.j.get(e))&&D(e);}}}E.prototype.get=function(a){if(a=this.a.a.get(a))return a.constructorFunction};
    E.prototype.m=function(a){if(!g(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.j.get(a);if(b)return b.c;b=new ea;this.j.set(a,b);this.a.a.get(a)&&!this.g.some(function(b){return b.localName===a})&&D(b);return b.c};E.prototype.s=function(a){C(this.o);var b=this.f;this.f=function(d){return a(function(){return b(d)})};};window.CustomElementRegistry=E;E.prototype.define=E.prototype.l;E.prototype.upgrade=E.prototype.i;E.prototype.get=E.prototype.get;
    E.prototype.whenDefined=E.prototype.m;E.prototype.polyfillWrapFlushCallback=E.prototype.s;var F=window.Document.prototype.createElement,G=window.Document.prototype.createElementNS,ha=window.Document.prototype.importNode,ia=window.Document.prototype.prepend,ja=window.Document.prototype.append,ka=window.DocumentFragment.prototype.prepend,la=window.DocumentFragment.prototype.append,H=window.Node.prototype.cloneNode,I=window.Node.prototype.appendChild,J=window.Node.prototype.insertBefore,K=window.Node.prototype.removeChild,L=window.Node.prototype.replaceChild,M=Object.getOwnPropertyDescriptor(window.Node.prototype,
    "textContent"),N=window.Element.prototype.attachShadow,O=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),P=window.Element.prototype.getAttribute,Q=window.Element.prototype.setAttribute,R=window.Element.prototype.removeAttribute,S=window.Element.prototype.getAttributeNS,T=window.Element.prototype.setAttributeNS,U=window.Element.prototype.removeAttributeNS,ma=window.Element.prototype.insertAdjacentElement,na=window.Element.prototype.insertAdjacentHTML,oa=window.Element.prototype.prepend,
    pa=window.Element.prototype.append,V=window.Element.prototype.before,qa=window.Element.prototype.after,ra=window.Element.prototype.replaceWith,sa=window.Element.prototype.remove,ta=window.HTMLElement,W=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),ua=window.HTMLElement.prototype.insertAdjacentElement,va=window.HTMLElement.prototype.insertAdjacentHTML;var wa=new function(){};function xa(){var a=X;window.HTMLElement=function(){function b(){var b=this.constructor,c=a.g.get(b);if(!c)throw Error("The custom element being constructed was not registered with `customElements`.");var e=c.constructionStack;if(0===e.length)return e=F.call(document,c.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=c,w(a,e),e;c=e.length-1;var f=e[c];if(f===wa)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
    e[c]=wa;Object.setPrototypeOf(f,b.prototype);w(a,f);return f}b.prototype=ta.prototype;Object.defineProperty(b.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});return b}();}function Y(a,b,d){function c(b){return function(d){for(var e=[],c=0;c<arguments.length;++c)e[c]=arguments[c];c=[];for(var f=[],m=0;m<e.length;m++){var q=e[m];q instanceof Element&&l(q)&&f.push(q);if(q instanceof DocumentFragment)for(q=q.firstChild;q;q=q.nextSibling)c.push(q);else c.push(q);}b.apply(this,e);for(e=0;e<f.length;e++)z(a,f[e]);if(l(this))for(e=0;e<c.length;e++)f=c[e],f instanceof Element&&x(a,f);}}void 0!==d.h&&(b.prepend=c(d.h));void 0!==d.append&&(b.append=c(d.append));}function ya(){var a=X;r(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var d=a.a.get(b);if(d)return new d.constructorFunction}b=F.call(this,b);w(a,b);return b});r(Document.prototype,"importNode",function(b,d){b=ha.call(this,b,!!d);this.__CE_hasRegistry?A(a,b):v(a,b);return b});r(Document.prototype,"createElementNS",function(b,d){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var c=a.a.get(d);if(c)return new c.constructorFunction}b=G.call(this,b,
    d);w(a,b);return b});Y(a,Document.prototype,{h:ia,append:ja});}function za(){function a(a,c){Object.defineProperty(a,"textContent",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)c.set.call(this,a);else{var d=void 0;if(this.firstChild){var e=this.childNodes,k=e.length;if(0<k&&l(this)){d=Array(k);for(var h=0;h<k;h++)d[h]=e[h];}}c.set.call(this,a);if(d)for(a=0;a<d.length;a++)z(b,d[a]);}}});}var b=X;r(Node.prototype,"insertBefore",function(a,c){if(a instanceof DocumentFragment){var e=Array.prototype.slice.apply(a.childNodes);
    a=J.call(this,a,c);if(l(this))for(c=0;c<e.length;c++)x(b,e[c]);return a}e=l(a);c=J.call(this,a,c);e&&z(b,a);l(this)&&x(b,a);return c});r(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=I.call(this,a);if(l(this))for(var e=0;e<c.length;e++)x(b,c[e]);return a}c=l(a);e=I.call(this,a);c&&z(b,a);l(this)&&x(b,a);return e});r(Node.prototype,"cloneNode",function(a){a=H.call(this,!!a);this.ownerDocument.__CE_hasRegistry?A(b,a):v(b,
    a);return a});r(Node.prototype,"removeChild",function(a){var c=l(a),e=K.call(this,a);c&&z(b,a);return e});r(Node.prototype,"replaceChild",function(a,c){if(a instanceof DocumentFragment){var e=Array.prototype.slice.apply(a.childNodes);a=L.call(this,a,c);if(l(this))for(z(b,c),c=0;c<e.length;c++)x(b,e[c]);return a}e=l(a);var f=L.call(this,a,c),d=l(this);d&&z(b,c);e&&z(b,a);d&&x(b,a);return f});M&&M.get?a(Node.prototype,M):ca(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=[],
    b=0;b<this.childNodes.length;b++){var f=this.childNodes[b];f.nodeType!==Node.COMMENT_NODE&&a.push(f.textContent);}return a.join("")},set:function(a){for(;this.firstChild;)K.call(this,this.firstChild);null!=a&&""!==a&&I.call(this,document.createTextNode(a));}});});}function Aa(a){function b(b){return function(e){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=[];for(var k=[],h=0;h<c.length;h++){var m=c[h];m instanceof Element&&l(m)&&k.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)d.push(m);else d.push(m);}b.apply(this,c);for(c=0;c<k.length;c++)z(a,k[c]);if(l(this))for(c=0;c<d.length;c++)k=d[c],k instanceof Element&&x(a,k);}}var d=Element.prototype;void 0!==V&&(d.before=b(V));void 0!==V&&(d.after=b(qa));void 0!==ra&&
    r(d,"replaceWith",function(b){for(var e=[],c=0;c<arguments.length;++c)e[c]=arguments[c];c=[];for(var d=[],k=0;k<e.length;k++){var h=e[k];h instanceof Element&&l(h)&&d.push(h);if(h instanceof DocumentFragment)for(h=h.firstChild;h;h=h.nextSibling)c.push(h);else c.push(h);}k=l(this);ra.apply(this,e);for(e=0;e<d.length;e++)z(a,d[e]);if(k)for(z(a,this),e=0;e<c.length;e++)d=c[e],d instanceof Element&&x(a,d);});void 0!==sa&&r(d,"remove",function(){var b=l(this);sa.call(this);b&&z(a,this);});}function Ba(){function a(a,b){Object.defineProperty(a,"innerHTML",{enumerable:b.enumerable,configurable:!0,get:b.get,set:function(a){var e=this,d=void 0;l(this)&&(d=[],p(this,function(a){a!==e&&d.push(a);}));b.set.call(this,a);if(d)for(var f=0;f<d.length;f++){var t=d[f];1===t.__CE_state&&c.disconnectedCallback(t);}this.ownerDocument.__CE_hasRegistry?A(c,this):v(c,this);return a}});}function b(a,b){r(a,"insertAdjacentElement",function(a,e){var d=l(e);a=b.call(this,a,e);d&&z(c,e);l(a)&&x(c,e);return a});}
    function d(a,b){function e(a,b){for(var e=[];a!==b;a=a.nextSibling)e.push(a);for(b=0;b<e.length;b++)A(c,e[b]);}r(a,"insertAdjacentHTML",function(a,c){a=a.toLowerCase();if("beforebegin"===a){var d=this.previousSibling;b.call(this,a,c);e(d||this.parentNode.firstChild,this);}else if("afterbegin"===a)d=this.firstChild,b.call(this,a,c),e(this.firstChild,d);else if("beforeend"===a)d=this.lastChild,b.call(this,a,c),e(d||this.firstChild,null);else if("afterend"===a)d=this.nextSibling,b.call(this,a,c),e(this.nextSibling,
    d);else throw new SyntaxError("The value provided ("+String(a)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");});}var c=X;N&&r(Element.prototype,"attachShadow",function(a){a=N.call(this,a);var b=c;if(b.b&&!a.__CE_patched){a.__CE_patched=!0;for(var e=0;e<b.c.length;e++)b.c[e](a);}return this.__CE_shadowRoot=a});O&&O.get?a(Element.prototype,O):W&&W.get?a(HTMLElement.prototype,W):da(c,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return H.call(this,!0).innerHTML},
    set:function(a){var b="template"===this.localName,c=b?this.content:this,e=G.call(document,this.namespaceURI,this.localName);for(e.innerHTML=a;0<c.childNodes.length;)K.call(c,c.childNodes[0]);for(a=b?e.content:e;0<a.childNodes.length;)I.call(c,a.childNodes[0]);}});});r(Element.prototype,"setAttribute",function(a,b){if(1!==this.__CE_state)return Q.call(this,a,b);var e=P.call(this,a);Q.call(this,a,b);b=P.call(this,a);c.attributeChangedCallback(this,a,e,b,null);});r(Element.prototype,"setAttributeNS",function(a,
    b,d){if(1!==this.__CE_state)return T.call(this,a,b,d);var e=S.call(this,a,b);T.call(this,a,b,d);d=S.call(this,a,b);c.attributeChangedCallback(this,b,e,d,a);});r(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return R.call(this,a);var b=P.call(this,a);R.call(this,a);null!==b&&c.attributeChangedCallback(this,a,b,null,null);});r(Element.prototype,"removeAttributeNS",function(a,b){if(1!==this.__CE_state)return U.call(this,a,b);var d=S.call(this,a,b);U.call(this,a,b);var e=S.call(this,
    a,b);d!==e&&c.attributeChangedCallback(this,b,d,e,a);});ua?b(HTMLElement.prototype,ua):ma?b(Element.prototype,ma):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");va?d(HTMLElement.prototype,va):na?d(Element.prototype,na):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");Y(c,Element.prototype,{h:oa,append:pa});Aa(c);}var Z=window.customElements;if(!Z||Z.forcePolyfill||"function"!=typeof Z.define||"function"!=typeof Z.get){var X=new u;xa();ya();Y(X,DocumentFragment.prototype,{h:ka,append:la});za();Ba();document.__CE_hasRegistry=!0;var customElements=new E(X);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements});}}).call(self);

    class Checkbox extends HTMLElement {
        constructor(id, checked = false) {
            super();
            this.onChange = () => {
                if (this.input.checked) {
                    this.setAttribute("checked", "true");
                }
                else {
                    this.removeAttribute("checked");
                }
            };
            const template = document.querySelector("#checkbox");
            this.node = document.importNode(template.content, true);
            this.appendChild(this.node);
            this.input = this.querySelector("input");
            this.input.id = `checkbox-${id}`;
            this.querySelector("label").setAttribute("for", `checkbox-${id}`);
            this.checked = checked;
            this.input.addEventListener("change", this.onChange);
        }
        get checked() {
            return this.hasAttribute("checked");
        }
        set checked(val) {
            if (val) {
                this.setAttribute("checked", "true");
            }
            else {
                this.removeAttribute("checked");
            }
            this.input.checked = val;
        }
    }
    window.customElements.define("x-checkbox", Checkbox);

    class Controls extends HTMLElement {
        constructor() {
            super();
            this.refresh = () => {
                if (this.currentTask) {
                    this.setIndentState(this.currentTask.isShiftable());
                    this.setOutdentState(this.currentTask.isUnshiftable());
                    this.setMoveDownState(this.currentTask.isMovableDownwards());
                    this.setMoveUpState(this.currentTask.isMovableUpwards());
                    this.setCheckboxState(true, !this.currentTask.checked);
                }
            };
            this.onIndent = async (e) => {
                e.preventDefault();
                if (this.currentTask) {
                    await this.currentTask.shift();
                    this.refresh();
                }
            };
            this.onOutdent = async (e) => {
                e.preventDefault();
                if (this.currentTask) {
                    await this.currentTask.unshift();
                    this.refresh();
                }
            };
            this.onMoveUp = async (e) => {
                e.preventDefault();
                if (this.currentTask) {
                    await this.currentTask.moveUp();
                    this.refresh();
                }
            };
            this.onMoveDown = async (e) => {
                e.preventDefault();
                if (this.currentTask) {
                    await this.currentTask.moveDown();
                    this.refresh();
                }
            };
            this.onToggleCheck = async (e) => {
                e.preventDefault();
                if (this.currentTask) {
                    await this.currentTask.toggleChecked();
                    this.refresh();
                }
            };
            this.toggleCheckCheckbox = new Checkbox("toggle-check-control");
            const template = document.querySelector("#controls");
            const node = document.importNode(template.content, true);
            node.querySelector("#toggleCheck").appendChild(this.toggleCheckCheckbox);
            this.appendChild(node);
            this.indent = this.querySelector("#indent");
            this.outdent = this.querySelector("#outdent");
            this.moveUp = this.querySelector("#moveUp");
            this.moveDown = this.querySelector("#moveDown");
            this.toggleCheck = this.querySelector("#toggleCheck");
            this.currentTask = null;
            this.indent.addEventListener("touchstart", this.onIndent);
            this.outdent.addEventListener("touchstart", this.onOutdent);
            this.moveUp.addEventListener("touchstart", this.onMoveUp);
            this.moveDown.addEventListener("touchstart", this.onMoveDown);
            this.toggleCheckCheckbox.addEventListener("touchstart", this.onToggleCheck, true);
            this.hide();
        }
        show() {
            this.style.display = "flex";
        }
        hide() {
            this.style.display = "none";
        }
        setCurrentTask(task) {
            this.currentTask = task;
            this.refresh();
        }
        removeCurrentTask(task) {
            if (this.currentTask === task) {
                this.currentTask = null;
                this.setOutdentState(false);
                this.setIndentState(false);
                this.setMoveDownState(false);
                this.setMoveUpState(false);
            }
        }
        setIndentState(state) {
            if (state) {
                this.indent.classList.add("active");
            }
            else {
                this.indent.classList.remove("active");
            }
        }
        setOutdentState(state) {
            if (state) {
                this.outdent.classList.add("active");
            }
            else {
                this.outdent.classList.remove("active");
            }
        }
        setMoveUpState(state) {
            if (state) {
                this.moveUp.classList.add("active");
            }
            else {
                this.moveUp.classList.remove("active");
            }
        }
        setMoveDownState(state) {
            if (state) {
                this.moveDown.classList.add("active");
            }
            else {
                this.moveDown.classList.remove("active");
            }
        }
        setCheckboxState(state, value = false) {
            if (state) {
                this.toggleCheck.classList.add("active");
            }
            else {
                this.toggleCheck.classList.remove("active");
            }
            this.toggleCheckCheckbox.checked = value;
        }
    }
    window.customElements.define("x-controls", Controls);

    let root;
    let nav;
    function createNavLink(task) {
        const a = document.createElement("a");
        if (task.id === "root") {
            a.innerText = "🏠";
        }
        else {
            a.innerText = task.textElement.innerText;
        }
        a.href = "#";
        a.setAttribute("data-task-id", task.id);
        a.addEventListener("click", onNavigationLinkClick);
        return a;
    }
    function onNavigationLinkClick(e) {
        e.preventDefault();
        const id = e.target.getAttribute("data-task-id");
        while (root.id !== id) {
            const parent = root.parent();
            if (!parent) {
                break;
            }
            parent.ancestor = false;
            root.root = false;
            parent.root = true;
            root = parent;
            const a = nav.querySelector("a:last-child");
            if (a) {
                a.remove();
            }
        }
    }
    function makeRoot(task) {
        const links = [];
        for (let p = task.parent(); p !== root; p = p.parent()) {
            links.push(createNavLink(p));
            p.ancestor = true;
        }
        links.push(createNavLink(root));
        for (const l of links.reverse()) {
            nav.appendChild(l);
        }
        root.ancestor = true;
        root.root = false;
        task.root = true;
        root = task;
    }
    function init(task) {
        root = task;
        nav = document.querySelector("nav");
    }

    class Store {
        constructor(dbName = 'keyval-store', storeName = 'keyval') {
            this.storeName = storeName;
            this._dbp = new Promise((resolve, reject) => {
                const openreq = indexedDB.open(dbName, 1);
                openreq.onerror = () => reject(openreq.error);
                openreq.onsuccess = () => resolve(openreq.result);
                // First time setup: create an empty object store
                openreq.onupgradeneeded = () => {
                    openreq.result.createObjectStore(storeName);
                };
            });
        }
        _withIDBStore(type, callback) {
            return this._dbp.then(db => new Promise((resolve, reject) => {
                const transaction = db.transaction(this.storeName, type);
                transaction.oncomplete = () => resolve();
                transaction.onabort = transaction.onerror = () => reject(transaction.error);
                callback(transaction.objectStore(this.storeName));
            }));
        }
    }
    let store;
    function getDefaultStore() {
        if (!store)
            store = new Store();
        return store;
    }
    function get(key, store = getDefaultStore()) {
        let req;
        return store._withIDBStore('readonly', store => {
            req = store.get(key);
        }).then(() => req.result);
    }
    function set(key, value, store = getDefaultStore()) {
        return store._withIDBStore('readwrite', store => {
            store.put(value, key);
        });
    }
    function del(key, store = getDefaultStore()) {
        return store._withIDBStore('readwrite', store => {
            store.delete(key);
        });
    }
    function keys(store = getDefaultStore()) {
        const keys = [];
        return store._withIDBStore('readonly', store => {
            // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
            // And openKeyCursor isn't supported by Safari.
            (store.openKeyCursor || store.openCursor).call(store).onsuccess = function () {
                if (!this.result)
                    return;
                keys.push(this.result.key);
                this.result.continue();
            };
        }).then(() => keys);
    }

    function uuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, () => {
            return Math.floor(Math.random() * 16).toString(16);
        });
    }

    const taskStore = {
        store: new Store("flowy", "tasks"),
        task(id) {
            return get(id, this.store);
        },
        async create(parent, text = "") {
            const id = uuid();
            const task = { id, text, checked: false, pinned: false, collapsed: false, children: [] };
            parent.children.push(id);
            await Promise.all([
                set(parent.id, parent, this.store),
                set(id, task, this.store),
            ]);
            return task;
        },
        async createBefore(parent, nextSibling, text = "") {
            const id = uuid();
            const task = { id, text, checked: false, pinned: false, collapsed: false, children: [] };
            const index = parent.children.indexOf(nextSibling.id);
            parent.children.splice(index, 0, id);
            await Promise.all([
                set(parent.id, parent, this.store),
                set(id, task, this.store),
            ]);
            return task;
        },
        update(task) {
            return set(task.id, task, this.store);
        },
        remove(task) {
            return del(task.id);
        },
        async initialize() {
            const root = { id: "root", text: " ", checked: false, pinned: false, collapsed: false, children: [] };
            await set("root", root, this.store);
            await this.create(root, "This is flowy, a small WorkFlowy clone");
            const l1 = await this.create(root, "It allows you to organize your life into lists");
            const l2 = await this.create(l1, "Lists can have sublists");
            await this.create(l2, "and they can have sublists");
            const l3 = await this.create(l2, "Once an item is finished, it can be marked completed");
            l3.checked = true;
            await this.update(l3);
            const l4 = await this.create(l2, "Important Nested items can be pinned on top for direct attention");
            l4.pinned = true;
            await this.update(l4);
            await this.create(root, "It works out of the box in the browser, and optionally allows you to plug in a storage server to back tasks up.");
            await this.create(root, "It also works offline.");
            await this.create(root, "For more details on different features, open the hamburger menu on the top left.");
            await this.create(root, "The app is open source at https://github.com/suyash/flowy, file any issues there.");
            return root;
        },
    };
    async function clear() {
        const ids = await keys(taskStore.store);
        await Promise.all(ids.map((id) => del(id, taskStore.store)));
    }

    const store$1 = {
        apiKey: null,
        url: null,
        async create(parent, text) {
            return await taskStore.create(parent, text);
        },
        async createBefore(parent, nextSibling, text) {
            return await taskStore.createBefore(parent, nextSibling, text);
        },
        async task(id) {
            return await taskStore.task(id);
        },
        async update(task) {
            await taskStore.update(task);
            if (!this.url) {
                return;
            }
            this._updateRemoteSingle(task);
        },
        async _updateRemoteSingle(task) {
            const item = document.getElementById(task.id);
            item.unsynced = true;
            try {
                await fetch(`${this.url}/set`, {
                    body: JSON.stringify(task),
                    headers: {
                        "Content-Type": "application/json",
                        "X-API-Key": this.apiKey,
                    },
                    method: "POST",
                });
                item.unsynced = false;
            }
            catch (err) {
                console.error(err);
            }
        },
        async remove(task) {
            await taskStore.remove(task);
            if (!this.url) {
                return;
            }
            this._removeRemoteSingle(task);
        },
        async _removeRemoteSingle(task) {
            const item = document.getElementById(task.id);
            if (item) {
                item.unsynced = true;
            }
            try {
                await fetch(`${this.url}/${task.id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-API-Key": this.apiKey,
                    },
                    method: "DELETE",
                });
                if (item) {
                    item.unsynced = false;
                }
            }
            catch (err) {
                console.error(err);
            }
        },
        async initialize() {
            return await taskStore.initialize();
        },
        async resyncLocal(url, apiKey) {
            this.url = url;
            this.apiKey = apiKey;
            updateSyncCredentials(url, apiKey);
            try {
                const resRoot = await fetch(`${this.url}/root`, {
                    headers: {
                        "Accept": "application/json",
                        "X-API-Key": this.apiKey,
                    },
                });
                const root = await resRoot.json();
                if (!root || !root.children || !root.children.length) {
                    return;
                }
                await clear();
                await this._updateLocal(root);
            }
            catch (err) {
                console.error(err);
            }
        },
        async _updateLocal(task) {
            if (!task.children) {
                task.children = [];
            }
            taskStore.update(task);
            await Promise.all(task.children.map(async (id) => {
                const res = await fetch(`${this.url}/${id}`, {
                    headers: {
                        "Accept": "application/json",
                        "X-API-Key": this.apiKey,
                    },
                });
                const childTask = await res.json();
                await this._updateLocal(childTask);
            }));
        },
        async resyncRemote(url, apiKey) {
            this.url = url;
            this.apiKey = apiKey;
            updateSyncCredentials(url, apiKey);
            const task = await taskStore.task("root");
            await this._updateRemote(task);
        },
        async _updateRemote(task) {
            await this._updateRemoteSingle(task);
            await Promise.all(task.children.map(async (id) => {
                await this._updateRemote(await taskStore.task(id));
            }));
        },
    };
    function updateSyncCredentials(url, apiKey) {
        window.localStorage.setItem("url", url);
        window.localStorage.setItem("apiKey", apiKey);
        document.querySelector("#status").classList.remove("hidden");
        document.querySelector("#status a").innerText = url;
        document.querySelector("#status a").href = url;
    }
    store$1.url = window.localStorage.getItem("url");
    store$1.apiKey = window.localStorage.getItem("apiKey");
    if (store$1.url && store$1.apiKey) {
        updateSyncCredentials(store$1.url, store$1.apiKey);
    }

    class Pin extends HTMLElement {
        constructor(task) {
            super();
            this.onLinkClick = async (e) => {
                e.preventDefault();
                await this.task.togglePinned();
                this.remove();
            };
            this.onKeyPress = async (e) => {
                if (e.shiftKey) {
                    switch (e.keyCode) {
                        case 9:
                        case 38:
                        case 40:
                            e.preventDefault();
                            return;
                    }
                }
                if (e.ctrlKey) {
                    switch (e.keyCode) {
                        case 8:
                        case 13:
                        case 38:
                        case 40:
                            e.preventDefault();
                            return;
                    }
                }
                switch (e.keyCode) {
                    case 9:
                    case 13:
                    case 38:
                    case 40:
                        e.preventDefault();
                        return;
                }
            };
            this.onKeyUp = async () => {
                await this.task.updateText(this.tasktext.innerText);
            };
            this.onStatusChange = async () => {
                await Promise.all([
                    this.task.toggleChecked(),
                ]);
                this.remove();
            };
            this.task = task;
            const template = document.querySelector("#task");
            const node = document.importNode(template.content, true);
            this.appendChild(node);
            this.id = `pinned-${task.id}`;
            this.checkbox = new Checkbox(this.id);
            this.tasktext = document.createElement("span");
            this.tasktext.innerText = task.textElement.innerText;
            this.tasktext.setAttribute("contenteditable", "true");
            const header = this.querySelector("header");
            header.appendChild(this.checkbox);
            header.appendChild(this.tasktext);
            this.querySelector("header > a:nth-child(2)").addEventListener("click", this.onLinkClick);
            this.tasktext.addEventListener("keypress", this.onKeyPress);
            this.tasktext.addEventListener("keyup", this.onKeyUp);
            this.checkbox.addEventListener("change", this.onStatusChange);
        }
        updateLocation() {
            const footer = this.querySelector("footer");
            while (footer.hasChildNodes()) {
                footer.removeChild(footer.lastChild);
            }
            const s = [];
            for (let p = this.task.parent(); p && p.id !== "root"; p = p.parent()) {
                s.push(p.textElement.innerText);
            }
            for (const x of s.reverse()) {
                const item = document.createElement("div");
                item.innerHTML = x;
                footer.appendChild(item);
            }
        }
        connectedCallback() {
            if (this.task.isConnected) {
                this.updateLocation();
            }
        }
    }
    window.customElements.define("x-pin", Pin);

    class Task extends HTMLElement {
        constructor(task, controls) {
            super();
            this.onCheckboxChange = async (e) => {
                const newValue = e.target.checked;
                if (newValue !== this.checked) {
                    await this.toggleChecked();
                }
            };
            this.verifyChecked = async () => {
                const uncheckedSubtask = this.subtasks.querySelector("x-task:not([checked])");
                if ((this.checked && uncheckedSubtask) || (!this.checked && !uncheckedSubtask)) {
                    await this.toggleChecked();
                }
            };
            this.addSubtaskBefore = (task, nextSibling) => {
                this.expanded = true;
                task.remove();
                this.subtasks.insertBefore(task, nextSibling);
            };
            this.addSubtaskAfter = (task, prevSibling) => {
                this.expanded = true;
                task.remove();
                const next = prevSibling.nextSibling;
                if (next) {
                    this.subtasks.insertBefore(task, next);
                }
                else {
                    this.subtasks.appendChild(task);
                }
            };
            this.onRoot = (e) => {
                e.preventDefault();
                makeRoot(this);
            };
            this.onLinkClick = (e) => {
                e.preventDefault();
                if (this.hasSubtasks) {
                    this.toggleExpanded();
                }
                else {
                    this.togglePinned();
                }
            };
            this.onTryResync = async (e) => {
                e.preventDefault();
                await store$1.update(this.task);
            };
            this.onKeyPress = async (e) => {
                if (e.shiftKey) {
                    switch (e.keyCode) {
                        case 9:
                            e.preventDefault();
                            await this.unshift();
                            break;
                        case 38:
                            e.preventDefault();
                            await this.moveUp();
                            break;
                        case 40:
                            e.preventDefault();
                            await this.moveDown();
                            break;
                    }
                    return;
                }
                if (e.ctrlKey) {
                    switch (e.keyCode) {
                        case 8:
                            e.preventDefault();
                            await this.drop();
                            break;
                        case 13:
                            e.preventDefault();
                            await this.toggleChecked();
                            break;
                        case 38:
                            e.preventDefault();
                            this.expanded = false;
                            break;
                        case 40:
                            e.preventDefault();
                            this.expanded = true;
                            break;
                    }
                    return;
                }
                switch (e.keyCode) {
                    case 9:
                        e.preventDefault();
                        await this.shift();
                        break;
                    case 13:
                        e.preventDefault();
                        await this.addSibling();
                        break;
                    case 38:
                        e.preventDefault();
                        await this.moveFocusUp();
                        break;
                    case 40:
                        e.preventDefault();
                        await this.moveFocusDown();
                        break;
                }
            };
            this.removeSubtask = async (id) => {
                this.task.children = this.task.children.filter((cid) => cid !== id);
                if (this.task.children.length === 0) {
                    this.hasSubtasks = false;
                    this.expanded = false;
                }
                await store$1.update(this.task);
            };
            this.drop = async () => {
                const parent = this.parent();
                this.remove();
                await Promise.all([
                    parent.removeSubtask(this.id),
                    store$1.remove(this.task),
                ]);
            };
            this.addSibling = async () => {
                if (this.hasAttribute("root")) {
                    return;
                }
                const parent = this.parent();
                const nextSibling = this.nextSibling;
                if (!nextSibling) {
                    const newTask = await store$1.create(parent.task);
                    const newTaskElement = new Task(newTask, this.controls);
                    parent.addSubtask(newTaskElement);
                    newTaskElement.tasktext.focus();
                }
                else {
                    const newTask = await store$1.createBefore(parent.task, nextSibling.task);
                    const newTaskElement = new Task(newTask, this.controls);
                    parent.addSubtaskBefore(newTaskElement, nextSibling);
                    newTaskElement.tasktext.focus();
                }
            };
            this.updateTextCache = async () => {
                this.task.text = this.tasktext.innerText;
                if (this.task.text) {
                    await store$1.update(this.task);
                }
                else {
                    await this.drop();
                }
                this.controls.removeCurrentTask(this);
            };
            this.onFocusText = () => {
                this.controls.setCurrentTask(this);
            };
            this.moveFocusUp = async () => {
                const element = this.previousSibling;
                if (element) {
                    this.moveFocus(element);
                    return;
                }
                const parent = this.parent();
                if (!parent.root) {
                    this.moveFocus(parent);
                }
            };
            this.moveFocusDown = async () => {
                const element = this.nextSibling;
                if (element) {
                    this.moveFocus(element);
                }
            };
            this.moveFocus = (task) => {
                const pos = this.getCursorPosition();
                this.tasktext.blur();
                task.tasktext.focus();
                task.setCursorPosition(pos);
            };
            this.getCursorPosition = () => {
                const selection = window.getSelection();
                if (!selection) {
                    return 0;
                }
                if (selection.rangeCount) {
                    const range = selection.getRangeAt(0);
                    if (range.commonAncestorContainer.parentNode === this.tasktext) {
                        return range.endOffset;
                    }
                }
                return 0;
            };
            this.setCursorPosition = (pos) => {
                if (!this.tasktext.childNodes || !this.tasktext.childNodes.length) {
                    return;
                }
                const range = document.createRange();
                range.setStart(this.tasktext.childNodes[0], pos);
                range.collapse(true);
                const sel = window.getSelection();
                if (!sel) {
                    return;
                }
                sel.removeAllRanges();
                sel.addRange(range);
            };
            this.task = task;
            this.controls = controls;
            const template = document.querySelector("#task");
            const node = document.importNode(template.content, true);
            this.appendChild(node);
            this.id = task.id;
            this.subtasks = this.querySelector("footer");
            this.checkbox = new Checkbox(task.id);
            this.checked = task.checked;
            this.tasktext = document.createElement("span");
            if (task.text) {
                this.tasktext.innerText = task.text;
            }
            this.tasktext.setAttribute("contenteditable", "true");
            this.isPinned = task.pinned;
            const header = this.querySelector("header");
            header.appendChild(this.checkbox);
            header.appendChild(this.tasktext);
            this.querySelector("header > a:nth-child(1)").addEventListener("click", this.onRoot);
            this.querySelector("header > a:nth-child(2)").addEventListener("click", this.onLinkClick);
            this.querySelector("header > a:nth-child(3)").addEventListener("click", this.onTryResync);
            this.tasktext.addEventListener("keydown", this.onKeyPress);
            this.tasktext.addEventListener("blur", this.updateTextCache);
            this.tasktext.addEventListener("focus", this.onFocusText);
            this.checkbox.addEventListener("change", this.onCheckboxChange);
        }
        connectedCallback() {
            if (this.isPinned) {
                document.querySelector(`#pinned-${this.id}`).updateLocation();
            }
        }
        disconnectedCallback() {
            if (this.isPinned) {
                const pinElement = document.querySelector(`#pinned-${this.id}`);
                pinElement.remove();
            }
        }
        get expanded() {
            return this.hasAttribute("expanded");
        }
        set expanded(val) {
            if (val) {
                this.setAttribute("expanded", "true");
                this.task.collapsed = false;
            }
            else {
                this.removeAttribute("expanded");
                this.task.collapsed = true;
            }
        }
        get hasSubtasks() {
            return this.hasAttribute("has-subtasks");
        }
        set hasSubtasks(val) {
            if (val) {
                this.setAttribute("has-subtasks", "true");
                this.isPinned = false;
            }
            else {
                this.removeAttribute("has-subtasks");
            }
        }
        get root() {
            return this.hasAttribute("root");
        }
        set root(val) {
            if (val) {
                this.setAttribute("root", "true");
            }
            else {
                this.removeAttribute("root");
            }
        }
        get ancestor() {
            return this.hasAttribute("ancestor");
        }
        set ancestor(val) {
            if (val) {
                this.setAttribute("ancestor", "true");
            }
            else {
                this.removeAttribute("ancestor");
            }
        }
        get isPinned() {
            return this.hasAttribute("is-pinned");
        }
        set isPinned(val) {
            if (val) {
                this.setAttribute("is-pinned", "true");
                this.task.pinned = true;
                document.querySelector("#pins").appendChild(new Pin(this));
            }
            else {
                this.removeAttribute("is-pinned");
                this.task.pinned = false;
                const pinElement = document.querySelector(`#pinned-${this.id}`);
                if (pinElement) {
                    pinElement.remove();
                }
            }
        }
        get checked() {
            return this.hasAttribute("checked");
        }
        set checked(val) {
            if (val) {
                this.setAttribute("checked", "true");
                this.isPinned = false;
            }
            else {
                this.removeAttribute("checked");
            }
            this.checkbox.checked = val;
            if (this.isConnected) {
                const parent = this.parent();
                if (parent) {
                    parent.verifyChecked();
                }
            }
        }
        get unsynced() {
            return this.hasAttribute("unsynced");
        }
        set unsynced(val) {
            if (val) {
                this.setAttribute("unsynced", "true");
            }
            else {
                this.removeAttribute("unsynced");
            }
        }
        get textElement() {
            return this.tasktext;
        }
        addSubtask(task) {
            task.remove();
            this.subtasks.appendChild(task);
            this.expanded = true;
            this.hasSubtasks = true;
        }
        freezeText() {
            this.tasktext.removeAttribute("contenteditable");
        }
        async updateText(text) {
            this.tasktext.innerText = text;
            await this.updateTextCache();
        }
        parent() {
            const candidate = this.parentElement.parentElement;
            if (candidate instanceof Task) {
                return candidate;
            }
            return null;
        }
        async toggleChecked() {
            this.checked = !this.checked;
            this.task.checked = this.checked;
            await store$1.update(this.task);
        }
        async toggleExpanded() {
            this.expanded = !this.expanded;
            await store$1.update(this.task);
        }
        async togglePinned() {
            this.isPinned = !this.isPinned;
            await store$1.update(this.task);
        }
        isShiftable() {
            if (this.hasAttribute("root")) {
                return false;
            }
            const prevSibling = this.previousSibling;
            if (!prevSibling) {
                return false;
            }
            return true;
        }
        async shift() {
            if (this.hasAttribute("root")) {
                return;
            }
            const prevSibling = this.previousSibling;
            if (!prevSibling) {
                return;
            }
            const pos = this.getCursorPosition();
            const parent = this.parent();
            parent.removeSubtask(this.task.id);
            prevSibling.task.children.push(this.task.id);
            await store$1.update(prevSibling.task);
            prevSibling.addSubtask(this);
            this.tasktext.focus();
            this.setCursorPosition(pos);
        }
        isUnshiftable() {
            if (this.hasAttribute("root")) {
                return false;
            }
            const parent = this.parent();
            const grandParent = parent.parent();
            if (!grandParent || !(grandParent instanceof Task)) {
                return false;
            }
            return true;
        }
        async unshift() {
            if (this.hasAttribute("root")) {
                return;
            }
            const parent = this.parent();
            const grandParent = parent.parent();
            if (!grandParent || !(grandParent instanceof Task)) {
                return;
            }
            const pos = this.getCursorPosition();
            const nextSibling = parent.nextSibling;
            if (!nextSibling) {
                grandParent.task.children.push(this.id);
                grandParent.addSubtask(this);
            }
            else {
                const idx = grandParent.task.children.indexOf(nextSibling.id);
                grandParent.task.children.splice(idx, 0, this.id);
                grandParent.addSubtaskBefore(this, nextSibling);
            }
            await Promise.all([
                parent.removeSubtask(this.task.id),
                store$1.update(grandParent.task),
            ]);
            this.tasktext.focus();
            this.setCursorPosition(pos);
        }
        isMovableUpwards() {
            const element = this.previousSibling;
            if (!element) {
                return false;
            }
            const parent = this.parent();
            if (!parent) {
                return false;
            }
            if (this.root) {
                return false;
            }
            return true;
        }
        async moveUp() {
            const element = this.previousSibling;
            if (!element) {
                return;
            }
            const parent = this.parent();
            if (!parent) {
                return;
            }
            if (this.root) {
                return;
            }
            const cursor = this.getCursorPosition();
            const idx = parent.task.children.indexOf(element.id);
            parent.task.children[idx] = this.id;
            parent.task.children[idx + 1] = element.id;
            parent.addSubtaskBefore(this, element);
            this.tasktext.focus();
            this.setCursorPosition(cursor);
            await store$1.update(parent.task);
        }
        isMovableDownwards() {
            const element = this.nextSibling;
            if (!element) {
                return false;
            }
            const parent = this.parent();
            if (!parent) {
                return false;
            }
            if (this.root) {
                return false;
            }
            return true;
        }
        async moveDown() {
            const element = this.nextSibling;
            if (!element) {
                return;
            }
            const parent = this.parent();
            if (!parent) {
                return;
            }
            if (this.root) {
                return;
            }
            const cursor = this.getCursorPosition();
            const idx = parent.task.children.indexOf(element.id);
            parent.task.children[idx] = this.id;
            parent.task.children[idx - 1] = element.id;
            parent.addSubtaskAfter(this, element);
            this.tasktext.focus();
            this.setCursorPosition(cursor);
            await store$1.update(parent.task);
        }
    }
    window.customElements.define("x-task", Task);

    async function main() {
        const root = await store$1.task("root");
        if (!root) {
            await store$1.initialize();
        }
        const controls = new Controls();
        document.querySelector("body").appendChild(controls);
        let height = window.innerHeight;
        window.addEventListener("resize", () => {
            if (window.innerHeight < height) {
                document.querySelector("body").classList.add("withControls");
                controls.show();
            }
            else {
                if (window.innerHeight > height) {
                    height = window.innerHeight;
                }
                document.querySelector("body").classList.remove("withControls");
                controls.hide();
            }
        });
        let rootElement = await createElement("root", controls);
        reroot(rootElement);
        document.querySelector("aside > a").addEventListener("click", onInfoLinkClick);
        document.querySelector("#storage a").addEventListener("click", onInfoLinkClick);
        document.querySelector("#shortcuts a").addEventListener("click", onInfoLinkClick);
        document.querySelector("#about a").addEventListener("click", onInfoLinkClick);
        const storageForm = document.querySelector("#storage form");
        storageForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const url = storageForm[0].value;
            const apiKey = storageForm[1].value;
            const resyncLocal = storageForm[3].checked;
            if (resyncLocal) {
                await store$1.resyncLocal(url, apiKey);
                rootElement.remove();
                rootElement = await createElement("root", controls);
                reroot(rootElement);
            }
            else {
                await store$1.resyncRemote(url, apiKey);
            }
            document.querySelector("aside").removeAttribute("data-open");
        });
    }
    function reroot(root) {
        root.root = true;
        root.freezeText();
        init(root);
        document.querySelector("#work").appendChild(root);
    }
    async function createElement(id, controls) {
        const task = await store$1.task(id);
        const element = new Task(task, controls);
        const collapsed = task.collapsed;
        const items = await Promise.all(task.children.map((cid) => createElement(cid, controls)));
        for (const item of items) {
            element.addSubtask(item);
        }
        if (collapsed) {
            element.removeAttribute("expanded");
        }
        return element;
    }
    function onInfoLinkClick(e) {
        e.preventDefault();
        const parent = this.parentElement;
        if (parent.hasAttribute("data-open")) {
            parent.removeAttribute("data-open");
        }
        else {
            parent.setAttribute("data-open", "true");
        }
    }

    window.addEventListener("DOMContentLoaded", main);

}());
//# sourceMappingURL=index.js.map
