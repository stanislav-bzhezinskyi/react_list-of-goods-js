(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{13:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var s=e(6),c=e.n(s),o=e(5),i=e(7),a=(e(12),e(13),e(1)),r=e(0),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u="length",b="alphabetically",j=[].concat(l);function f(t,n){var e=Object(i.a)(t);return n===b&&e.sort(),n===u?e.sort((function(t,n){return t.length-n.length})):e}var h=function(){var t=Object(a.useState)(""),n=Object(o.a)(t,2),e=n[0],s=n[1],c=Object(a.useState)("off"),i=Object(o.a)(c,2),h=i[0],d=i[1],g=f(j,e);return"on"===h&&g.reverse(),"off"===h&&(g.reverse(),g=f(j,e)),Object(r.jsxs)("div",{className:"section content",children:[Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("button",{type:"button",className:e===b?"button is-info":"button is-info is-light",onClick:function(){s(b),f(j,b)},children:"Sort alphabetically"}),Object(r.jsx)("button",{type:"button",className:e===u?"button is-success":"button is-success is-light",onClick:function(){s(u),f(j,u)},children:"Sort by length"}),Object(r.jsx)("button",{type:"button",className:"on"===h?"button is-warning":"button is-warning is-light",onClick:function(){"off"===h&&d("on"),"on"===h&&d("off")},children:"Reverse"}),e||"on"===h?Object(r.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(""),d(""),j=[].concat(l)},children:"Reset"}):null]}),Object(r.jsx)("ul",{children:g.map((function(t){return Object(r.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2ffd362a.chunk.js.map