!function(n){var e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(r,i,function(e){return n[e]}.bind(null,i));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=(A=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(A))))+" */"),o=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(o).concat([i]).join("\n")}var A;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<n.length;i++){var A=n[i];null!=A[0]&&r[A[0]]||(t&&!A[2]?A[2]=t:t&&(A[2]="("+A[2]+") and ("+t+")"),e.push(A))}},e}},function(n,e,t){var r=t(2);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(4)(r,i);r.locals&&(n.exports=r.locals)},function(n,e,t){(e=n.exports=t(0)(!0)).i(t(3),""),e.push([n.i,'* {\n  box-sizing: border-box; }\n\nbody {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }\n\nh1, h2, h3, h4, h5 {\n  padding: 0;\n  margin: 0; }\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.page-title {\n  text-align: center;\n  margin: 20px; }\n\nul.games-list {\n  padding: 0 15px;\n  width: 600px;\n  max-width: 100%;\n  margin: 0 auto; }\n\n.game {\n  background: #1abc9c;\n  border-radius: 10px;\n  margin: 20px 0;\n  padding: 15px;\n  text-align: center;\n  width: 100%; }\n  .game:nth-of-type(odd) {\n    background: #2c3e50;\n    color: white; }\n  .game.hidden {\n    display: none; }\n\n.game {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n  .game__info {\n    order: 0;\n    width: 100%;\n    margin-bottom: 15px; }\n  .game__team {\n    flex: 0 0 45%;\n    max-width: 45%;\n    order: 1; }\n    .game__team:last-of-type {\n      order: 3; }\n    .game__team h4 {\n      font-size: 1.6em; }\n    .game__team span {\n      font-size: 0.825em; }\n    .game__team img {\n      max-width: 40px; }\n  .game:before {\n    content: "x";\n    flex: 0 0 10%;\n    max-width: 10%;\n    order: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 2.5em;\n    padding-bottom: 30px; }\n\n.menu {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  display: flex;\n  height: 100%;\n  flex-direction: row-reverse;\n  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.3));\n  transform: translate3d(-100%, 0, 0);\n  transition: 300ms ease; }\n  .menu__button {\n    background: #fff;\n    border: 0;\n    padding: 5px;\n    margin: 5px 0;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    transition: 300ms ease;\n    border-radius: 0 5px 5px 0;\n    position: absolute;\n    top: 0;\n    left: 100%; }\n    @media screen and (max-width: 500px) {\n      .menu__button {\n        font-size: 0;\n        color: transparent;\n        line-height: 0; } }\n    .menu__button:before {\n      content: "";\n      display: block;\n      width: 30px;\n      height: 30px;\n      position: relative;\n      margin-right: 5px;\n      background-repeat: repeat;\n      background-color: transparent;\n      background-size: contain;\n      background-position: center;\n      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAAk0lEQVR4Ae3XwRGCMBRF0bTgQgdqYHDG/IbVEqAm2AA1xLXLrIjjOa+E5C9u+gYAAAAAQ5fn2KOcvD3PQ5fqjZdYozSy9XFNteIZpZ3ld6oVW5SGtqVaeWnqBZYf/0LxSrXut5aOeLyketHnKY4oJ+/IU/QJAIA/bmJNrIk1sSbWxAAAaGJNrIk1sSbWxAAAAADwAf414hqfaDf3AAAAAElFTkSuQmCC); }\n    .menu__button:hover, .menu__button:focus {\n      background: #1abc9c; }\n  .menu__list {\n    background: #2c3e50;\n    max-width: 80vw;\n    padding: 20px;\n    color: #fff; }\n    .menu__list li {\n      padding: 5px; }\n    .menu__list a {\n      color: currentColor;\n      display: block;\n      padding: 5px;\n      border-radius: 5px;\n      transition: 300ms ease;\n      text-align: center; }\n      .menu__list a:hover, .menu__list a:focus {\n        background: #fff;\n        color: #2c3e50; }\n  .menu.show {\n    transform: translate3d(0, 0, 0); }\n',"",{version:3,sources:["C:/Users/dsantosn/Desktop/Daniel/jogos-hoje/javascript/src/css/javascript/src/css/_global.scss","C:/Users/dsantosn/Desktop/Daniel/jogos-hoje/javascript/src/css/javascript/src/css/_variables-mixins.scss","C:/Users/dsantosn/Desktop/Daniel/jogos-hoje/javascript/src/css/javascript/src/css/_games-list.scss","C:/Users/dsantosn/Desktop/Daniel/jogos-hoje/javascript/src/css/javascript/src/css/_menu.scss"],names:[],mappings:"AAAA;EACI,sBAAsB,EAAA;;AAG1B;EACI,iGCJ8F,EAAA;;ADOlG;EACI,UAAU;EACV,SAAS,EAAA;;AAGb;EACI,gBAAgB;EAChB,SAAS;EACT,UAAU,EAAA;;AAGd;EACI,kBAAkB;EAClB,YAAY,EAAA;;AErBhB;EACI,eAAe;EACf,YAAY;EACZ,eAAe;EACf,cAAc,EAAA;;AAGlB;EACI,mBDJe;ECUf,mBAAmB;EACnB,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,WAAW,EAAA;EAXf;IAGQ,mBDLW;ICMX,YAAY,EAAA;EAJpB;IAcQ,aAAa,EAAA;;AAIrB;EACI,aAAa;EACb,eAAe;EACf,uBAAuB,EAAA;EACvB;IACI,QAAQ;IACR,WAAW;IACX,mBAAmB,EAAA;EAEvB;IACI,aAAa;IACb,cAAc;IACd,QAAQ,EAAA;IAHX;MAKO,QAAQ,EAAA;IALf;MAQO,gBAAgB,EAAA;IARvB;MAWO,kBAAkB,EAAA;IAXzB;MAcO,eAAe,EAAA;EAvB3B;IA2BQ,YAAY;IACZ,aAAa;IACb,cAAc;IACd,QAAQ;IACR,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,oBAAoB,EAAA;;AC3D5B;EACI,eAAe;EACf,YAAY;EACZ,MAAM;EACN,OAAO;EACP,aAAa;EACb,YAAY;EACZ,2BAA2B;EAC3B,+CAA6C;EA6D7C,mCAAmC;EACnC,sBAAsB,EAAA;EA7DtB;IACI,gBAAgB;IAChB,SAAS;IACT,YAAY;IACZ,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,sBAAsB;IACtB,0BAA0B;IAC1B,kBAAkB;IAClB,MAAM;IACN,UAAU,EAAA;IACV;MAbJ;QAcQ,YAAY;QACZ,kBAAkB;QAClB,cAAc,EAAA,EAqBrB;IArCA;MAmBO,WAAW;MACX,cAAc;MACd,WAAW;MACX,YAAY;MACZ,kBAAkB;MAClB,iBAAiB;MAEb,yBAAc;MACd,6BAAkB;MAClB,wBAAa;MACb,2BAAgB;MAChB,6TAAkT,EAAA;IA9B7T;MAmCO,mBFzCO,EAAA;EE4Cf;IACI,mBF5CW;IE6CX,eAAe;IACf,aAAa;IACb,WAAW,EAAA;IAJd;MAMO,YAAY,EAAA;IANnB;MASO,mBAAmB;MACnB,cAAc;MACd,YAAY;MACZ,kBAAkB;MAClB,sBAAsB;MACtB,kBAAkB,EAAA;MAdzB;QAgBW,gBAAgB;QAChB,cF5DG,EAAA;EEJnB;IAwEQ,+BAA+B,EAAA",file:"style.scss",sourcesContent:["* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: $font-family;\r\n}\r\n\r\nh1, h2, h3, h4, h5 {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.page-title {\r\n    text-align: center;\r\n    margin: 20px;\r\n}\r\n",'\r\n$font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\r\n\r\n// Cores\r\n$color-one: #1abc9c;\r\n$color-two: #2c3e50;','ul.games-list {\r\n    padding: 0 15px;\r\n    width: 600px;\r\n    max-width: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.game {\r\n    background: $color-one;\r\n    &:nth-of-type(odd) {\r\n        background: $color-two;\r\n        color: white;\r\n    }\r\n    \r\n    border-radius: 10px;\r\n    margin: 20px 0;\r\n    padding: 15px;\r\n    text-align: center;\r\n    width: 100%;\r\n\r\n    &.hidden {\r\n        display: none;\r\n    }\r\n}\r\n\r\n.game {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    &__info {\r\n        order: 0;\r\n        width: 100%;\r\n        margin-bottom: 15px;\r\n    }\r\n    &__team {\r\n        flex: 0 0 45%;\r\n        max-width: 45%;\r\n        order: 1;\r\n        &:last-of-type {\r\n            order: 3;\r\n        }\r\n        h4 {\r\n            font-size: 1.6em;\r\n        }\r\n        span {\r\n            font-size: 0.825em;\r\n        }\r\n        img {\r\n            max-width: 40px;\r\n        }\r\n    }\r\n    &:before {\r\n        content: "x";\r\n        flex: 0 0 10%;\r\n        max-width: 10%;\r\n        order: 2;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        font-size: 2.5em;\r\n        padding-bottom: 30px;\r\n    }\r\n}','\r\n.menu {\r\n    position: fixed;\r\n    z-index: 100;\r\n    top: 0;\r\n    left: 0;\r\n    display: flex;\r\n    height: 100%;\r\n    flex-direction: row-reverse;\r\n    filter: drop-shadow(0 0 3px rgba(black, 0.3));\r\n    &__button {\r\n        background: #fff;\r\n        border: 0;\r\n        padding: 5px;\r\n        margin: 5px 0;\r\n        display: flex;\r\n        align-items: center;\r\n        cursor: pointer;\r\n        transition: 300ms ease;\r\n        border-radius: 0 5px 5px 0;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 100%;\r\n        @media screen and (max-width: 500px) {\r\n            font-size: 0;\r\n            color: transparent;\r\n            line-height: 0;\r\n        }\r\n        &:before {\r\n            content: "";\r\n            display: block;\r\n            width: 30px;\r\n            height: 30px;\r\n            position: relative;\r\n            margin-right: 5px;\r\n            background: {\r\n                repeat: repeat;\r\n                color: transparent;\r\n                size: contain;\r\n                position: center;\r\n                image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAAk0lEQVR4Ae3XwRGCMBRF0bTgQgdqYHDG/IbVEqAm2AA1xLXLrIjjOa+E5C9u+gYAAAAAQ5fn2KOcvD3PQ5fqjZdYozSy9XFNteIZpZ3ld6oVW5SGtqVaeWnqBZYf/0LxSrXut5aOeLyketHnKY4oJ+/IU/QJAIA/bmJNrIk1sSbWxAAAaGJNrIk1sSbWxAAAAADwAf414hqfaDf3AAAAAElFTkSuQmCC);\r\n            }\r\n        }\r\n\r\n        &:hover, &:focus {\r\n            background: $color-one;\r\n        }\r\n    }\r\n    &__list {\r\n        background: $color-two;\r\n        max-width: 80vw;\r\n        padding: 20px;\r\n        color: #fff;\r\n        li {\r\n            padding: 5px;\r\n        }\r\n        a {\r\n            color: currentColor;\r\n            display: block;\r\n            padding: 5px;\r\n            border-radius: 5px;\r\n            transition: 300ms ease;\r\n            text-align: center;\r\n            &:hover, &:focus {\r\n                background: #fff;\r\n                color: $color-two;\r\n            }\r\n        }\r\n    }\r\n    \r\n    transform: translate3d(-100%, 0, 0);\r\n    transition: 300ms ease;\r\n    &.show {\r\n        transform: translate3d(0, 0, 0);\r\n    }\r\n}'],sourceRoot:""}])},function(n,e,t){(n.exports=t(0)(!0)).push([n.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',"",{version:3,sources:["C:/Users/dsantosn/Desktop/Daniel/jogos-hoje/node_modules/normalize.css/normalize.css"],names:[],mappings:"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf",file:"normalize.css",sourcesContent:['/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n'],sourceRoot:""}])},function(n,e,t){var r,i,o={},A=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),a=null,c=0,l=[],d=t(5);function E(n,e){for(var t=0;t<n.length;t++){var r=n[t],i=o[r.id];if(i){i.refs++;for(var A=0;A<i.parts.length;A++)i.parts[A](r.parts[A]);for(;A<r.parts.length;A++)i.parts.push(b(r.parts[A],e))}else{var s=[];for(A=0;A<r.parts.length;A++)s.push(b(r.parts[A],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function u(n,e){for(var t=[],r={},i=0;i<n.length;i++){var o=n[i],A=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[A]?r[A].parts.push(s):t.push(r[A]={id:A,parts:[s]})}return t}function m(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),l.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(n.insertAt.before,t);t.insertBefore(e,i)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=l.indexOf(n);e>=0&&l.splice(e,1)}function f(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return p(e,n.attrs),m(n,e),e}function p(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function b(n,e){var t,r,i,o;if(e.transform&&n.css){if(!(o="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=o}if(e.singleton){var A=c++;t=a||(a=f(e)),r=B.bind(null,t,A,!1),i=B.bind(null,t,A,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",p(e,n.attrs),m(n,e),e}(e),r=function(n,e,t){var r=t.css,i=t.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=d(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var A=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(A),s&&URL.revokeObjectURL(s)}.bind(null,t,e),i=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=f(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){h(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else i()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=A()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=u(n,e);return E(t,e),function(n){for(var r=[],i=0;i<t.length;i++){var A=t[i];(s=o[A.id]).refs--,r.push(s)}n&&E(u(n,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var a=0;a<s.parts.length;a++)s.parts[a]();delete o[s.id]}}}};var g,C=(g=[],function(n,e){return g[n]=e,g.filter(Boolean).join("\n")});function B(n,e,t,r){var i=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=C(e,i);else{var o=document.createTextNode(i),A=n.childNodes;A[e]&&n.removeChild(A[e]),A.length?n.insertBefore(o,A[e]):n.appendChild(o)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var i,o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"anotherDate",function(){return o}),t.d(r,"getNowGames",function(){return A}),t.d(r,"showAllGames",function(){return s});function i(n){n.closeMenu()}function o(n,e){n.preventDefault(),i(e)}function A(n,e,t){n.preventDefault(),i(e),t.hideOldGames()}function s(n,e,t){n.preventDefault(),i(e),t.showHiddenGames()}class a{constructor(n,e,t,r,i=["touchstart","click"]){this.events=i,this.menu=e,this.games=t,this.menuItem="string"==typeof n?document.querySelector(n):n,this.action=void 0===r?this.menuItem.attributes.href.value.slice(1):r}addMenuLinkAction(){const n=r[this.action];this.action=(e=>n(e,this.menu,this.games)),this.menuItem.addEventListener("click",this.action)}removeMenuLinkAction(){"function"==typeof this.action&&this.menuItem.removeEventListener("click",this.action)}init(){return this.addMenuLinkAction(),this}}t(1);const c=new class{constructor(n,e){this.url=n,this.selector=e,this.gamesList=document.querySelector(this.selector),this.hidden=[],this.gameClass="game",this.hiddenClass="hidden"}createElement(n,e=[]){const t=document.createElement(n);return e.length&&t.classList.add(...e),t}createTeam(n){const e=this.createElement("div",[`${this.gameClass}__team`]);return e.innerHTML=`<img src="${n.logo}"><h4>${n.alternateName}</h4><span>${n.name}</span>`,e}createInfo(n,e){const t=this.createElement("div",[`${this.gameClass}__info`]);return t.innerHTML=`<h3>${n}</h3><h5>${e}</h5>`,t}createGame(n){const e=this.createElement("li",[this.gameClass]);return e.dataset.startDate=n.startDate.timestamp,e.appendChild(this.createInfo(n.name,n.startDate.time.full)),e.appendChild(this.createTeam(n.teams.homeTeam)),e.appendChild(this.createTeam(n.teams.awayTeam)),e}insertGames(n){const e=this.createGame(n);this.gamesList.appendChild(e)}hideGames(n){this.hidden=n.map(n=>(n.classList.add(this.hiddenClass),n))}hideOldGames(){const n=new Date,e=Math.floor((n.getTime()-54e5)/1e3),t=Array.from(document.querySelectorAll(`.${this.gameClass}`)).filter(n=>+n.dataset.startDate<e);this.hideGames(t)}showHiddenGames(){this.hidden.length&&(this.hidden=this.hidden.filter(n=>(n.classList.remove(this.hiddenClass),n.classList.contains(this.hiddenClass))))}async init(){try{const n=await fetch(this.url);(await n.json()).forEach(n=>this.insertGames(n))}catch(n){console.log(n)}}}("../api/example.json",".games-list");c.init(),new class{constructor(n,e,t,r,i=["touchstart","click"]){this.menuButton=document.querySelector(n),this.menuList=document.querySelector(e),this.activeClass="show",this.events=i,this.menuLinks=t,this.games=r,this.openMenu=this.openMenu.bind(this)}openMenu(){this.menuList.classList.toggle(this.activeClass),this.menuButton.classList.toggle(this.activeClass),function(n,e,t){const r=document.documentElement,i="data-outside";function o(A){n.contains(A.target)||(n.removeAttribute(i),e.forEach(n=>{r.removeEventListener(n,o)}),t())}n.hasAttribute(i)||(e.forEach(n=>{setTimeout(()=>r.addEventListener(n,o))}),n.setAttribute(i,""))}(this.menuList,this.events,()=>{this.menuList.classList.remove(this.activeClass),this.menuButton.classList.remove(this.activeClass)})}closeMenu(){this.menuList.classList.remove(this.activeClass),this.menuButton.classList.remove(this.activeClass)}addMenuMobileEvents(){this.events.forEach(n=>this.menuButton.addEventListener(n,this.openMenu))}addMenuLinks(){this.menuLinks=function(n,e,t){let r=document.querySelectorAll(n);return(r=Array.from(r)).map(n=>new a(n,e,t).init())}(this.menuLinks,this,this.games)}init(){return this.menuButton&&this.menuList&&(this.addMenuMobileEvents(),this.menuLinks&&this.addMenuLinks()),this}}(".menu__button",".menu",".menu a",c).init()}]);