(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(0),a=n.n(s),o=n(2),r=n.n(o),c=n(3),i=n(4),l=n(7),u=n(6),p=n(5),m=n.n(p),d=(n(13),n(14),function(t){var e=t.goodsList;return a.a.createElement("ul",{className:"list"},e.map((function(t){return a.a.createElement("li",{key:t,className:"list__item"},t)})))}),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={goods:[].concat(b),startedList:!1},t.isStarted=function(){t.setState({startedList:!0})},t.resetList=function(){t.setState({goods:[].concat(b)})},t.sortedList=function(e){var n=t.state.goods.sort((function(t,n){switch(e){case"string":return t.localeCompare(n);case"length":return t.length-n.length;default:return 0}}));t.setState({goods:n})},t.isReversed=function(){t.setState((function(t){return{goods:t.goods.reverse()}}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.goods,s=e.startedList,o=n;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"App__title"},"Goods"),!s&&a.a.createElement("button",{type:"button",className:"App__button",onClick:this.isStarted},"Start"),s&&a.a.createElement(d,{goodsList:o}),a.a.createElement("div",{className:m()("App__buttons",{"App__buttons--visible":s})},a.a.createElement("button",{type:"button",className:"App__button",onClick:this.isReversed},"Reverse"),a.a.createElement("button",{type:"button",className:"App__button",onClick:function(){t.sortedList("string")}},"Sort alphabetically"),a.a.createElement("button",{type:"button",className:"App__button",onClick:function(){t.sortedList("length")}},"Sort by length"),a.a.createElement("button",{type:"button",className:"App__button",onClick:this.resetList},"Reset")))}}]),n}(a.a.Component);r.a.render(a.a.createElement(g,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.20717879.chunk.js.map