(this["webpackJsonpcoin-flipper"]=this["webpackJsonpcoin-flipper"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var c=e(0),s=e(1),i=e.n(s),a=e(8),o=e.n(a),r=(e(14),e(3)),u=e(4),l=e(2),f=e(6),b=e(5),h=(e(15),function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(r.a)(this,e),n.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"Coin",children:[Object(c.jsx)("h1",{className:"Coin-title",children:"Let's Flip a Coin"}),Object(c.jsx)("img",{className:"Coin-img",alt:this.props.alt,src:"marka-".concat(this.props.states,".png")})]})}}]),e}(i.a.Component));h.defaultProps={states:"front",alt:"front"};var j=h,p=(e(16),function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(t){var c;return Object(r.a)(this,e),(c=n.call(this,t)).state={states:"front",title:"front",counts:0,fronts:0,backs:0},c.flip=c.flip.bind(Object(l.a)(c)),c.count=c.count.bind(Object(l.a)(c)),c.handleClick=c.handleClick.bind(Object(l.a)(c)),c}return Object(u.a)(e,[{key:"flip",value:function(){this.setState((function(t){return Math.random()<.5?{states:"back",title:"back"}:{states:"front",title:"front"}}))}},{key:"count",value:function(){this.setState((function(t){return"front"===t.states?{fronts:t.fronts+1,counts:t.counts+1}:{backs:t.backs+1,counts:t.counts+1}}))}},{key:"handleClick",value:function(){this.flip(),this.count()}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{states:this.state.states,alt:this.state.title}),Object(c.jsx)("button",{onClick:this.handleClick,children:"Flip Coin!"}),Object(c.jsx)("p",{children:"Number of flips: ".concat(this.state.counts,", heads: ").concat(this.state.fronts,", backs: ").concat(this.state.backs)})]})}}]),e}(i.a.Component));e(17);var d=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(p,{})})},O=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,19)).then((function(n){var e=n.getCLS,c=n.getFID,s=n.getFCP,i=n.getLCP,a=n.getTTFB;e(t),c(t),s(t),i(t),a(t)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.5153c939.chunk.js.map