(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{100:function(e,t,n){},105:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(9),r=n.n(o),l=n(46),i=n(47),m=n(50),s=n(49),u=function(e){return c.a.createElement("ul",null,e.data.map((function(e){return c.a.createElement("li",{key:e.id},e.title)})))},p=function(e){return c.a.createElement("div",null,[1,2,3,4,5].map((function(t){return c.a.createElement("button",{key:t,onClick:function(){return e.getData(t)}},t)})))},d=(a.Component,n(74)),E=n(10),h=n(12),f=(n(100),function(){return c.a.createElement("header",null,c.a.createElement("nav",null,c.a.createElement(h.b,{activeClassName:"active",exact:!0,to:"/"},"React"),c.a.createElement(h.b,{activeClassName:"active",to:"/doc"},"\u6587\u6863"),c.a.createElement(h.b,{activeClassName:"active",to:"/tuto"},"\u6559\u7a0b"),c.a.createElement(h.b,{activeClassName:"active",to:"/blog"},"\u535a\u5ba2"),c.a.createElement(h.b,{activeClassName:"active",to:"/comm"},"\u793e\u533a")))}),b=function(e){return console.log(e),c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h2",null,"React"),c.a.createElement("p",null,"\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 JavaScript \u5e93"),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return e.history.push("/doc")}},"\u5feb\u901f\u5f00\u59cb"),c.a.createElement("button",{onClick:function(){return e.history.push("/tuto")}},"\u5165\u95e8\u6559\u7a0b")))},g=(n(105),n(26)),v=[{path:"/",exact:!0,component:b},{path:"/doc",component:Object(E.g)((function(e){return console.log(e),c.a.createElement("div",{className:"doc"},c.a.createElement("div",{className:"content"},e.routes.map((function(e){return c.a.createElement(I,e)})),c.a.createElement(E.a,{from:"/doc",to:"/doc/core"})),c.a.createElement("ol",null,c.a.createElement("li",null,c.a.createElement(h.b,{to:"/doc/core"},"\u6838\u5fc3\u6982\u5ff5")),c.a.createElement("li",null,c.a.createElement(h.b,{to:"/doc/guide"},"\u9ad8\u7ea7\u6307\u5f15")),c.a.createElement("li",null,c.a.createElement(h.b,{to:"/doc/api"},"API")),c.a.createElement("li",null,c.a.createElement(h.b,{to:"/doc/hooks"},"Hooks"))))})),pri:!0,routes:[{path:"/doc/:type",component:function(e){return c.a.createElement("h1",null,e.match.params.type)}}]},{path:"/tuto",component:function(){return c.a.createElement("div",null,"Tuto")},pri:!0},{path:"/blog",component:function(){return c.a.createElement("div",null,"Blog")}},{path:"/comm",component:function(){return c.a.createElement("div",null,"Comm")}},{path:"/login",component:function(e){return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){localStorage.setItem("userinfo","tom"),e.history.replace(e.location.state)}},"\u767b\u5f55"))}}],y=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={selectedTab:"blueTab"},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return c.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},c.a.createElement(g.a,{unselectedTintColor:"#949494",tintColor:"red",barTintColor:"white"},c.a.createElement(g.a.Item,{title:"\u9996\u9875",key:"home",icon:c.a.createElement("i",{className:"iconfont icon-Homehomepagemenu"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-Homehomepagemenu1"}),selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId"}),c.a.createElement(g.a.Item,{icon:c.a.createElement("i",{className:"iconfont icon-icon4"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-gouwuche"}),title:"\u8d2d\u7269\u8f66",key:"cart",selected:"/cart"===t,onPress:function(){e.props.history.push("/cart")},"data-seed":"logId1"}),c.a.createElement(g.a.Item,{icon:c.a.createElement("i",{className:"iconfont icon-dingdan"}),selectedIcon:c.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"}}),title:"\u8ba2\u5355\u5217\u8868",key:"Friend",selected:"greenTab"===this.state.selectedTab,onPress:function(){}}),c.a.createElement(g.a.Item,{icon:c.a.createElement("i",{className:"iconfont icon-wode"}),selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"},title:"\u6211\u7684\u6dd8\u5b9d",key:"my",selected:"yellowTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"yellowTab"})}})))}}]),n}(c.a.Component);Object(E.g)(y);function k(e){var t=e.component,n=e.routes,a=Object(d.a)(e,["component","routes"]);return c.a.createElement(E.b,Object.assign({},a,{render:function(e){var a=e.location;return localStorage.getItem("userinfo")?c.a.createElement(t,{routes:n}):c.a.createElement(E.a,{to:{pathname:"/login",state:a}})}}))}var I=function(e){var t=e.pri,n=e.path,a=e.routes,o=e.component,r=Object(d.a)(e,["pri","path","routes","component"]);return t?c.a.createElement(k,e):c.a.createElement(E.b,Object.assign({path:n},r,{render:function(e){return c.a.createElement(o,Object.assign({},e,{routes:a}))}}))},j=function(){return c.a.createElement(h.a,null,c.a.createElement(f,null),c.a.createElement(E.d,null,v.map((function(e){return c.a.createElement(I,e)}))))};n(173);r.a.render(c.a.createElement(j,null),document.getElementById("root"));fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},95:function(e,t,n){e.exports=n(174)}},[[95,1,2]]]);
//# sourceMappingURL=main.917e26dd.chunk.js.map