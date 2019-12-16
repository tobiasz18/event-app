(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(n,e,t){n.exports=t(316)},157:function(n,e,t){},316:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(42),i=t.n(o),c=(t(157),t(6)),l=t(43),u=t(143),s=t(144),p=t(33),d=t(10),f={events:[],singleEvent:{},searchEvents:{},loading:!1},m=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_EVENTS":return Object(d.a)({},n,{events:e.events,result:e.result,loading:!1});case"ADD_EVENT":return Object(d.a)({},n,{loading:!1,events:Object(d.a)({},n.events,Object(p.a)({},e.event.id,e.event))});case"GET_EVENT":return Object(d.a)({},n,{loading:!1,singleEvent:Object(p.a)({},e.singleEvent.id,e.singleEvent)});case"SEARCH_EVENTS":return Object(d.a)({},n,{loading:!1,searchEvents:e.searchEvents});case"EDIT_EVENT":return Object(d.a)({},n,{loading:!1,events:Object(d.a)({},n.events,Object(p.a)({},e.updated.id,e.updated)),singleEvent:Object(p.a)({},e.updated.id,e.updated)});case"REMOVE_EVENT":return Object(d.a)({},n,{loading:!1});case"LOAD_EVENTS":return Object(d.a)({},n,{loading:!0});default:return n}},b=Object(l.createStore)(m,Object(u.composeWithDevTools)(Object(l.applyMiddleware)(s.a))),g=t(94),h=t(7),v=t(1),E=t(2);function x(){var n=Object(v.a)(["\n    @media (max-width: ","em) {\n      ","\n    }\n  "]);return x=function(){return n},n}var y={desktop:992,tablet:768,phone:576},O=Object.keys(y).reduce(function(n,e){return n[e]=function(){return Object(E.a)(x(),y[e]/16,E.a.apply(void 0,arguments))},n},{});function j(){var n=Object(v.a)(["display: block; "]);return j=function(){return n},n}function w(){var n=Object(v.a)(["\n    color: #646a6d;\n    float: right;\n    padding-right: 10px;\n    font-size: 23px;\n    cursor: pointer;\n    display: none;\n    padding: 0 20px;\n    \n    ","\n\n"]);return w=function(){return n},n}function k(){var n=Object(v.a)(["\n  display:flex;\n  flex-direction: column;\n  padding: 0;\n"]);return k=function(){return n},n}function S(){var n=Object(v.a)(["",""]);return S=function(){return n},n}function T(){var n=Object(v.a)(["\n  display: flex;\n  list-style-type: none;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  \n  li {\n    padding-right: 30px;\n    \n    a {\n      text-decoration: none;\n      color: #848b8e;\n      letter-spacing: 0.8px;\n      padding-right: 3px;\n\n      &:hover {\n        color: #ff7e28;\n      }     \n    }\n  }\n\n li:last-child a {\n   color: #357FC1;\n   font-weight: 700;\n }\n\n ","\n"]);return T=function(){return n},n}function D(){var n=Object(v.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Stylish&display=swap');\n  font-size: 25px;\n  font-family: 'Stylish', sans-serif;\n  color: #646a6d;\n\n"]);return D=function(){return n},n}function C(){var n=Object(v.a)(["flex-direction: column;"]);return C=function(){return n},n}function z(){var n=Object(v.a)(["\n  max-width: 1100px;\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: auto; \n  ","\n\n  a {\n    text-decoration: none;\n  }\n"]);return z=function(){return n},n}function L(){var n=Object(v.a)(["\n  transition: 0.3s;\n  box-shadow: rgba(0,0,0,.117647) 0 1px 3px;\n  background: #fff;\n  padding: ","\n  width: 100%;\n  z-index: 1;\n  top: 0;\n"]);return L=function(){return n},n}var A=E.b.nav(L(),function(n){return n.positionProp?"3px 0":"7px 0"}),_=E.b.div(z(),O.phone(C())),V=E.b.div(D()),N=E.b.ul(T(),O.phone(S(),function(n){return n.setDisplay?B:"display: none"})),B=Object(E.a)(k()),H=E.b.div(w(),O.phone(j())),R=function(){var n=Object(a.useState)(!1),e=Object(g.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)(!1),c=Object(g.a)(i,2),l=c[0],u=c[1],s=function(){var n=window.pageYOffset||document.documentElement.scrollTop;o(n>92)};return Object(a.useEffect)(function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}},[]),r.a.createElement(A,{positionProp:t},r.a.createElement(H,{onClick:function(){return u(!l)}},"\u2630"),r.a.createElement(_,null,r.a.createElement(h.b,{style:{color:"black"},to:"/"},r.a.createElement(V,null,"Events Home")),r.a.createElement(N,{setDisplay:l},r.a.createElement("li",null,r.a.createElement(h.b,{to:"/"},"Events")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/search"},"Search ")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/add_event"},"Add event")))))},U=t(32),F=t(13),M=t(14),P=t(17),q=t(15),I=t(18),G=t(24),W=t.n(G),J=t(44),Y=new J.b.Entity("events"),$=new J.b.Entity("search"),K=[Y],Q=[$];W.a.defaults.baseURL="/api";var X=function(){return function(n){n({type:"LOAD_EVENTS"}),W.a.get("/").then(function(e){var t=Object(J.a)(e.data,K),a=t.entities.events;n({type:"GET_EVENTS",events:a,result:t.result})}).catch(function(n){return console.log(n)})}};function Z(){var n=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  font-family: 'Source Sans Pro', sans-serif;\n  max-width: 950px;\n  min-height: 780px;\n  padding: 0 20px;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: ",";\n  margin-top: 150px;\n  box-shadow: ",";\n"]);return Z=function(){return n},n}function nn(){var n=Object(v.a)(["\n  border-bottom: 1px solid #0000000f;\n  padding: 100px 0 3px 0;\n  max-height: 250px;\n  background: #fdfdfd;\n  padding: 50px;\n\n  &:last-child {\n    border-bottom: none;\n  }\n"]);return nn=function(){return n},n}E.b.section(nn());var en=E.b.article(Z(),function(n){return n.loading?"center":"none"},function(n){return n.loading?" none ":"none"});function tn(){var n=Object(v.a)(['\n    padding-left: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n  div > a {\n    color: #3e3b3b\n    font-weight: 600;\n    font-family: Lato, sans-serif;\n    text-decoration: none;\n    font-size: 22px;\n    letter-spacing: 0.3px;\n\n    &:hover {\n      color: #e9a825;\n    }\n  }\n  div > p {\n    color: #524d46;\n    font-family: "Bree Serif", serif;\n    color: #000000;\n    font-size: 16.5px;\n    max-width: 640px;\n  } \n  div > div {\n    color: #524d46;\n    font-family: Lato,sans-serif;\n    font-size: 17px;\n  }\n']);return tn=function(){return n},n}function an(){var n=Object(v.a)(["\n  width: 300px;\n  display: flex;\n  height: fit-content;\n  \n  img {\n    width: 100%;\n    height: 100%;\n    flex-grow: 1;\n  }\n"]);return an=function(){return n},n}function rn(){var n=Object(v.a)(["\n  display: flex;\n  margin-top: 25px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #DDD!important;\n  width: 100%;\n  margin-bottom: 50px;\n  overflow-wrap: break-word;\n  word-wrap: break-word;  \n\n  div:nth-child(2) {\n    width: 100%;\n    overflow: hidden;\n  }\n"]);return rn=function(){return n},n}var on=E.b.section(rn()),cn=E.b.div(an()),ln=E.b.div(tn()),un=function(n){var e=n.title,t=n.desc,a=n.image,o=n.location,i=n.checkLengthDesc;return r.a.createElement(on,null,r.a.createElement(cn,null,r.a.createElement("img",{src:a})),r.a.createElement(ln,null,r.a.createElement("div",null,r.a.createElement(h.b,{to:"/events/".concat(e.replace(/\/|\||:\s*|\u2014|\u2019|\u2018|'|\.|\?|(<i[^>]+>|<i>|<\/i>)| /gi,"_"))},e),r.a.createElement("p",null,i(t)," ",r.a.createElement(h.b,{to:"/events/".concat(e.replace(/\/|\||:\s*|\u2014|\u2019|\u2018|'|\.|\?|(<i[^>]+>|<i>|<\/i>)| /gi,"_"))},"read more"))),r.a.createElement("div",null,r.a.createElement("div",null,"Location: ",o))))},sn=t(16),pn=t(65),dn=t.n(pn);function fn(){var n=Object(v.a)(["\n  position: absolute;\n  font-family: sans-serif;\n  color: #c5c5c5;\n  top: 47%;\n  font-size: 1.1em;\n"]);return fn=function(){return n},n}function mn(){var n=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  img {\n    width: 90px;\n  }\n"]);return mn=function(){return n},n}var bn=E.b.div(mn()),gn=(E.b.h2(fn()),function(n){function e(){var n,t;Object(F.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(P.a)(this,(n=Object(q.a)(e)).call.apply(n,[this].concat(r)))).componentDidMount=function(){t.props.getEvents(),document.getElementsByTagName("nav")[0].style.position="fixed"},t.componentWillUnmount=function(){document.getElementsByTagName("nav")[0].style.position="inherit"},t.checkLengthDesc=function(n){return n.length>50?"".concat(n.slice(0,160)):n},t}return Object(I.a)(e,n),Object(M.a)(e,[{key:"render",value:function(){var n=this,e=this.props,t=e.loading,a=e.events;return r.a.createElement(en,{loading:t},r.a.createElement(sn.Helmet,null,r.a.createElement("title",null,"Home - Events page")),t?r.a.createElement(bn,null,r.a.createElement("img",{src:dn.a})):a.map(function(e){return r.a.createElement(un,{key:e.id,title:e.title,desc:e.desc,checkLengthDesc:n.checkLengthDesc,location:e.location,image:e.imageUrl})}).reverse())}}]),e}(a.Component)),hn=Object(c.b)(function(n){return{events:Object.values(n.events),loading:n.loading}},{getEvents:X})(gn),vn=t(45),En=t.n(vn),xn=t(147),yn=t(66),On=function(){var n=Object(yn.a)(En.a.mark(function n(e){var t,a,r;return En.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.imgur.com/3/image",(t=new FormData).append("image",e),n.next=5,fetch("https://api.imgur.com/3/image",{body:t,headers:{Authorization:"Client-ID 4409588f10776f7"},method:"POST"});case 5:return a=n.sent,n.next=8,a.json();case 8:return r=n.sent,n.abrupt("return",r.data.link);case 10:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}();function jn(){var n=Object(v.a)(["\n  text-align: center;\n  padding-top: 250px; \n"]);return jn=function(){return n},n}function wn(){var n=Object(v.a)(["\n  color: red;\n  display: inline;\n  padding-left: 5px;\n"]);return wn=function(){return n},n}function kn(){var n=Object(v.a)(["\n  border: none;\n  padding: 8px 15px 8px 15px;\n  background: #FF8500;\n  color: #fff;\n  box-shadow: 1px 1px 4px #DADADA;\n  -moz-box-shadow: 1px 1px 4px #DADADA;\n  -webkit-box-shadow: 1px 1px 4px #DADADA;\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n"]);return kn=function(){return n},n}function Sn(){var n=Object(v.a)(["\n  border: 1px solid #C2C2C2;\n  border-radius: 3px;\n  outline: none;\n  box-shadow: 1px 1px 4px #ece9e9;\n  margin: 0px;\n  height: 195px;\n  max-width: 100%;\n  width: 600px;\n  max-height: 400px;\n  margin-top: 5px;\n\n  &:focus {\n    border-color: #00b6ff;\n  }\n"]);return Sn=function(){return n},n}function Tn(){var n=Object(v.a)(["\n  box-sizing: border-box;\n  padding: 7px;\n  border: 1px solid #C2C2C2;\n  box-shadow: 1px 1px 4px #ece9e9;\n  border-radius: 3px;\n  outline: none;\n  width: 60%;\n\n  &:focus {\n    border-color: #00b6ff;\n  }\n"]);return Tn=function(){return n},n}function Dn(){var n=Object(v.a)(["\n  box-sizing: border-box;\n  padding: 7px;\n  border: 1px solid #C2C2C2;\n  box-shadow: 1px 1px 4px #ece9e9;\n  border-radius: 3px;\n  outline: none;\n  width: 60%;\n\n  &:focus {\n    border-color: #00b6ff;\n  }\n"]);return Dn=function(){return n},n}function Cn(){var n=Object(v.a)(["\n  color:red;\n"]);return Cn=function(){return n},n}function zn(){var n=Object(v.a)(["\n  width: 100px;\n  font-weight: bold;\n  float: left;\n  padding-top: 8px;\n  padding-right: 5px;\n"]);return zn=function(){return n},n}function Ln(){var n=Object(v.a)(["\n  display: block;\n  margin: 0px 0px 23px 0px;\n"]);return Ln=function(){return n},n}function An(){var n=Object(v.a)(["\n  font-weight: bold;\n  font-style: italic;\n  border-bottom: 2px solid #ddd;\n  margin-bottom: 20px;\n  padding-bottom: 3px;\n  font-size: 15px;\n"]);return An=function(){return n},n}function _n(){var n=Object(v.a)(["\n  padding: 20px 12px 10px 20px;\n  font: 13px Arial, Helvetica, sans-serif;\n  margin: auto;\n  margin-top: 20px;\n  max-width: 500px;\n  min-width: 50vw;\n  margin-bottom: 23px;\n"]);return _n=function(){return n},n}var Vn=E.b.div(_n()),Nn=E.b.div(An()),Bn=E.b.label(Ln()),Hn=E.b.span(zn()),Rn=E.b.span(Cn()),Un=E.b.input(Dn()),Fn=(E.b.select(Tn()),E.b.textarea(Sn())),Mn=E.b.button(kn()),Pn=E.b.div(wn()),qn=E.b.div(jn()),In=t(51),Gn=In.object().shape({title:In.string().min(4,"Too Short!").max(120,"Too Long!").required("This field is required"),desc:In.string().min(200,"Too Short!").required("This field is required"),location:In.string().min(2,"Too Short!").max(150,"Too Long!").required("This field is required")}),Wn=t(150),Jn=function(n){var e=n.flag,t=n.actionSubmit,a=n.initialState,o=n.location,i=n.title;return r.a.createElement(Vn,null,r.a.createElement(Wn.a,{initialValues:a,onSubmit:function(){var n=Object(yn.a)(En.a.mark(function n(a){var r,i,c;return En.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r=a.file,i=Object(xn.a)(a,["file"]),!r){n.next=8;break}return n.next=4,On(r);case 4:c=n.sent,t(Object(d.a)({},i,{imageUrl:c})),n.next=9;break;case 8:t(Object(d.a)({},i));case 9:console.log(e),e?o.history.push("/events/".concat(a.title.replace(/\/|\||:\s*|\u2014|\u2019|\u2018|'|\.|\?|(<i[^>]+>|<i>|<\/i>)| /gi,"_"))):o.history.push("/");case 11:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),validationSchema:Gn,render:function(n){var e=n.values,t=n.errors,a=n.touched,o=n.handleChange,c=n.handleSubmit,l=n.setFieldValue;return r.a.createElement(Vn,null,r.a.createElement(Nn,null,i),r.a.createElement("form",{onSubmit:c},r.a.createElement(Bn,null,r.a.createElement(Hn,null,"Title",r.a.createElement(Rn,null,"*")),t.title&&a.title?r.a.createElement("div",null,r.a.createElement(Un,{name:"title",style:{backgroundColor:"rgb(255, 244, 244)",borderColor:"rgb(240, 61, 61)"},onChange:o,value:e.title}),r.a.createElement(Pn,null,t.title)):r.a.createElement(Un,{name:"title",onChange:o,value:e.title})),r.a.createElement(Bn,null,r.a.createElement(Hn,null,"Organization"),r.a.createElement(Un,{name:"organization",value:e.organization,onChange:o})),r.a.createElement(Bn,null,r.a.createElement(Hn,null,"Location",r.a.createElement(Rn,null," *")),t.location&&a.location?r.a.createElement("div",null,r.a.createElement(Un,{name:"location",style:{backgroundColor:"rgb(255, 244, 244)",borderColor:"rgb(240, 61, 61)"},value:e.location,onChange:o}),r.a.createElement(Pn,null,t.location)):r.a.createElement(Un,{name:"location",value:e.location,onChange:o})),r.a.createElement(Bn,null,r.a.createElement(Hn,null,"Description",r.a.createElement(Rn,null," *")),t.desc&&a.desc?r.a.createElement("div",null,r.a.createElement(Fn,{style:{backgroundColor:"rgb(255, 244, 244)",borderColor:"rgb(240, 61, 61)"},name:"desc",value:e.desc,onChange:o}),r.a.createElement(Pn,null,t.desc)):r.a.createElement(Fn,{name:"desc",value:e.desc,onChange:o})),r.a.createElement(Bn,null,r.a.createElement(Hn,null,"Date",r.a.createElement(Rn,null,"*"),"  "),r.a.createElement("input",{type:"date",name:"date",onChange:o,value:e.date})),r.a.createElement(Bn,null,r.a.createElement(Hn,null,"Image"),r.a.createElement("input",{name:"file",type:"file",onChange:function(n){l("file",n.currentTarget.files[0])}})),r.a.createElement(Bn,null,r.a.createElement(Mn,{type:"submit"},"Submit"))))}}))},Yn=t(69),$n=t.n(Yn),Kn=function(n){function e(){return Object(F.a)(this,e),Object(P.a)(this,Object(q.a)(e).apply(this,arguments))}return Object(I.a)(e,n),Object(M.a)(e,[{key:"render",value:function(){var n=this.props,e=n.loading,t=n.addEvent;return r.a.createElement("div",null,r.a.createElement(sn.Helmet,null,r.a.createElement("title",null,"Add new event - Events page")),e?r.a.createElement(qn,null,r.a.createElement("img",{src:$n.a})):r.a.createElement("div",null,r.a.createElement(Jn,{initialState:{title:"",desc:"",location:"",organization:"unknown",imageUrl:"https://i.imgur.com/216orqx.png"},flag:!1,location:this.props,actionSubmit:t,title:"Add new Event"})))}}]),e}(a.Component),Qn=Object(c.b)(function(n){return{events:n.events,loading:n.loading}},{addEvent:function(n){return function(e){e({type:"LOAD_EVENTS"}),W.a.post("/",n).then(function(n){return e({type:"ADD_EVENT",event:n.data})}).catch(function(n){return console.log(n)})}}})(Kn);function Xn(){var n=Object(v.a)(["\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: 15px;\n\n  a {\n    text-decoration: none;\n    border: none;\n    font-size: 15px;\n    cursor: pointer;\n    background: none;\n    color: #000000;\n    padding: 5px 20px;\n    font-weight: 600;\n    margin-right: 5px;\n    font-family: 'Lato',sans-serif;\n\n    &:hover {\n      color: #e9a825;\n    }\n  }\n  button {\n    border: none;\n    font-size: 15px;\n    cursor: pointer;\n    background: none;\n    color: #000000;\n    padding: 5px 20px;\n    font-weight: 600;\n    font-family: 'Lato',sans-serif;\n\n    &:hover {\n      color: #e9a825;\n    }\n  }\n"]);return Xn=function(){return n},n}function Zn(){var n=Object(v.a)(["\n  font-weight: 400;\n  font-family: 'Lato', sans-serif;\n  color: #4a4a4a;\n  font-size: 45px;\n  margin: 20px 0;\n"]);return Zn=function(){return n},n}function ne(){var n=Object(v.a)(["\n  margin: auto;\n  margin-top: 75px;\n  max-width: 1100px;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 50px;\n  padding: 0 15px;\n  word-break: break-all;\n  white-space: pre-wrap\n\n  p {\n    letter-spacing: 0.3px;\n    font-weight: 400px;\n    font-weight: 400;\n    font-family: 'Bree Serif', serif;\n    overflow: hidden;\n    line-height: 140%;\n    max-width: 645px;\n    margin: 0;\n  }\n"]);return ne=function(){return n},n}function ee(){var n=Object(v.a)(["\n  max-width: 800px;\n  min-height: 360px\n  max-height: 600px\n  width: 100%;\n  margin: 20px 0;\n"]);return ee=function(){return n},n}var te=E.b.img(ee()),ae=E.b.section(ne()),re=E.b.span(Zn()),oe=E.b.div(Xn()),ie=function(n){var e=n.event,t=n.removeEvent;return r.a.createElement(ae,null,r.a.createElement(oe,null,r.a.createElement(h.b,{to:"/edit/".concat(e.id)},"Edit"),r.a.createElement("button",{style:{dosplay:"flex"},onClick:t},"Remove")),r.a.createElement(re,null,e.title),r.a.createElement("p",null,e.desc),r.a.createElement(te,{src:e.imageUrl}),r.a.createElement("p",null,"Location: ",e.location),r.a.createElement("p",null,"Date event: ",e.date),r.a.createElement("p",null,"Organizers by ",e.organization))},ce=function(n){function e(n){var t;return Object(F.a)(this,e),(t=Object(P.a)(this,Object(q.a)(e).call(this,n))).componentDidMount=function(){var n=t.props.match.params.title.replace(/_/g," ");t.props.getEventByTitle(n)},t.componentDidUpdate=function(n){t.props.singleEvent!==n.singleEvent&&(console.log("true"),t.setState({data:t.props.singleEvent[0]}))},t.removeEvent=function(){t.state.data.removeFlag?(t.props.removeEvent(t.state.data.id),t.props.history.push("/"),t.props.getEvents()):alert("You can not delete older events, only those created by yourself")},t.state={data:null,updateFlag:!1},t}return Object(I.a)(e,n),Object(M.a)(e,[{key:"render",value:function(){var n=this.state.data?this.state.data.title:"loading",e=this.state.data&&this.props.match.params.title.replace(/_/g," ")==this.state.data.title;return r.a.createElement("div",{style:{minHeight:"760px",display:"flex",justifyContent:"center"}},r.a.createElement(sn.Helmet,null,r.a.createElement("title",null,n," - Events page")),e?r.a.createElement(ie,{removeEvent:this.removeEvent,event:this.state.data}):r.a.createElement(bn,null,r.a.createElement("img",{src:dn.a})," "))}}]),e}(a.Component),le=Object(c.b)(function(n){return{singleEvent:Object.values(n.singleEvent),loading:n.loading}},{getEventByTitle:function(n){return function(e){e({type:"LOAD_EVENTS"}),W.a.get("/search/title/".concat(n)).then(function(n){return e({type:"GET_EVENT",singleEvent:n.data})}).catch(function(n){return console.log(n)})}},getEvents:X,removeEvent:function(n){return function(e){e({type:"LOAD_EVENTS"}),W.a.delete("/".concat(n)).then(function(){return e({type:"REMOVE_EVENT",id:n})})}}})(ce);function ue(){var n=Object(v.a)(["\n    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');\n    padding: 10px;\n    -webkit-text-decoration: none;\n    text-decoration: none;\n    color: #fff;\n    font-family: Lato,sans-serif;\n    width: 100%;\n    font-size: 18px;\n    font-weight: 600;\n   \n"]);return ue=function(){return n},n}function se(){var n=Object(v.a)(["\n  flex: 0 1 48%;\n  position: relative;\n  margin: 1%;\n  cursor: pointer;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n\n  div {\n    position: absolute;\n    color: #fff;\n    bottom: 0px;\n    width: 100%;\n    text-align: center;\n    font-size: 20px;\n    height: 100%;\n    opacity: 0.8;\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) );\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n\n    &:hover  {\n      text-decoration: underline;\n      opacity: 1;\n    }\n  }\n"]);return se=function(){return n},n}var pe=E.b.figure(se()),de=E.b.span(ue()),fe=function(n){var e=n.image,t=n.title,a=n.titleText;return r.a.createElement(pe,null,r.a.createElement(sn.Helmet,null,r.a.createElement("title",null,a," - Search location")),r.a.createElement(h.b,{to:"/events/".concat(t)},r.a.createElement("img",{src:e}),r.a.createElement("div",null,r.a.createElement(de,null,t))))},me=function(n){function e(){var n,t;Object(F.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(P.a)(this,(n=Object(q.a)(e)).call.apply(n,[this].concat(r)))).componentDidMount=function(){console.log(t.props.match.params.location),t.props.getEventByLocation(t.props.match.params.location)},t.componentDidUpdate=function(n){n.match.params.location!==t.props.match.params.location&&t.props.getEventByLocation(t.props.match.params.location)},t}return Object(I.a)(e,n),Object(M.a)(e,[{key:"render",value:function(){var n=this;return r.a.createElement(r.a.Fragment,null,this.props.searchEvents.map(function(e){return r.a.createElement(fe,{key:e.id,titleText:n.props.match.params.location,image:e.imageUrl,title:e.title})}),0==this.props.searchEvents&&r.a.createElement("h2",null,'No results for "',r.a.createElement("span",{style:{fontWeight:"600"}},this.props.match.params.location),' " location'))}}]),e}(r.a.Component),be=Object(c.b)(function(n){return n.searchEvents?{searchEvents:Object.values(n.searchEvents)}:{searchEvents:[]}},{getEventByLocation:function(n){return function(e){e({type:"LOAD_EVENTS"}),W.a.get("/search/location/".concat(n)).then(function(n){var t=Object(J.a)(n.data,Q),a=t.entities.search;console.log(t,"asd",n.data),e({type:"SEARCH_EVENTS",searchEvents:a})}).catch(function(n){return console.log(n)})}}})(me);function ge(){var n=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 970px;\n  margin-bottom: 75px;\n  margin-top: 75px;\n"]);return ge=function(){return n},n}function he(){var n=Object(v.a)(["width: 100%"]);return he=function(){return n},n}function ve(){var n=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 50px 15px;\n  width: 100%;\n  background: #eae9e9;\n  box-sizing: border-box;\n  box-shadow: 0 2px 7px white;\n\n  input {\n    background: #1a1a1a;\n    border: 1px solid #e2dddd;\n    padding: 10px 32px;\n    font-size: 17px;\n    outline-color: #ff8628;\n    color: #ffffff;\n    ","\n  }\n\n  a {\n    background: #fd6600;\n    border: 0;\n    cursor: pointer;\n    padding: 11px 30px;\n    margin-left: 10px\n    color: #fff;\n    font-size: 17px;\n    text-decoration: none;\n  }\n\n"]);return ve=function(){return n},n}function Ee(){var n=Object(v.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Stylish&display=swap');\n  font-family: 'Source Sans Pro', sans-serif;\n\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 704px;\n\n  h2 {\n    font-weight: 100;\n  }\n"]);return Ee=function(){return n},n}var xe=E.b.article(Ee()),ye=E.b.section(ve(),O.phone(he())),Oe=E.b.section(ge()),je=Object(c.b)(function(n){return{events:Object.values(n.events).reverse().splice(0,2)}},null)(function(n){var e=n.events;return r.a.createElement("div",{style:{display:"flex"}},e.map(function(n){return r.a.createElement(fe,{key:n.id,titleText:"Search by location - Events page",image:n.imageUrl,title:n.title})}))}),we=function(n){function e(n){var t;return Object(F.a)(this,e),(t=Object(P.a)(this,Object(q.a)(e).call(this,n))).componentDidMount=function(){return t.props.getEvents()},t.handleChange=function(){var n=t.myRef.current.value;t.setState({value:n})},t.state={value:t.props.location.pathname.split("/")[2],text:""},t.myRef=r.a.createRef(),t}return Object(I.a)(e,n),Object(M.a)(e,[{key:"render",value:function(){var n=this.state.value?"".concat(this.props.match.url,"/").concat(this.state.value):"/search";return r.a.createElement(xe,null,r.a.createElement(sn.Helmet,null,r.a.createElement("title",null,"Search by location - Events page")),r.a.createElement(ye,null,r.a.createElement("input",{type:"text",ref:this.myRef,value:this.state.value,placeholder:"Search by location",onChange:this.handleChange}),r.a.createElement("div",null,r.a.createElement(h.b,{to:n},"Search"))),r.a.createElement(Oe,null,r.a.createElement(U.c,null,r.a.createElement(U.a,{exact:!0,path:"/search",component:je}),r.a.createElement(U.a,{exact:!0,path:"".concat(this.props.match.url,"/:location"),component:be}))))}}]),e}(r.a.Component),ke=Object(c.b)(null,{getEvents:X})(we);function Se(){var n=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Se=function(){return n},n}var Te=E.b.div(Se()),De=function(n){function e(n){var t;return Object(F.a)(this,e),(t=Object(P.a)(this,Object(q.a)(e).call(this,n))).componentDidMount=function(){t.props.getEventById(t.props.match.params.id)},t.state={initialState:t.props.singleEvent[0]},t}return Object(I.a)(e,n),Object(M.a)(e,[{key:"render",value:function(){return r.a.createElement(Te,null,void 0==this.props.singleEvent[0]?r.a.createElement("img",{src:$n.a}):r.a.createElement(Jn,{actionSubmit:this.props.editEvet,location:this.props,flag:!0,initialState:this.props.singleEvent[0],title:"Edit Event"}))}}]),e}(a.Component),Ce=Object(c.b)(function(n){return{singleEvent:Object.values(n.singleEvent)}},{editEvet:function(n){return function(e){e({type:"LOAD_EVENTS"}),W.a.put("/".concat(n.id),n).then(function(n){return e({type:"EDIT_EVENT",updated:n.data})})}},getEventById:function(n){return function(e){e({type:"LOAD_EVENTS"}),W.a.get("/".concat(n)).then(function(n){return e({type:"GET_EVENT",singleEvent:n.data})}).catch(function(n){return console.log(n)})}}})(De);function ze(){var n=Object(v.a)(["\n  text-align: center;\n  margin-top: 20%;\n  font-family: sans-serif;\n  line-height: 0;\n  min-height: 450px;\n  h1 {\n    font-size: 90px;\n    font-weight: 500;\n  }\n\n  p {\n    font-size: 31px;\n  }\n"]);return ze=function(){return n},n}var Le=E.b.div(ze()),Ae=function(){return r.a.createElement(Le,null,r.a.createElement(sn.Helmet,null,r.a.createElement("title",null,"Page not found - events page")),r.a.createElement("h1",null,"404"),r.a.createElement("p",null,"Page not found"))};function _e(){var n=Object(v.a)(["\n  font-size: 13px;\n  background: #313131;\n  padding: 20px;\n  color: rgb(255,255,255);\n  text-align: center;\n  margin-top: 210px;\n  font-family: sans-serif;\n\n"]);return _e=function(){return n},n}var Ve=E.b.div(_e()),Ne=function(){return r.a.createElement(Ve,null,"\xa9 2019 Copyright: https://events-api-heroku.herokuapp.com/")},Be=function(){return r.a.createElement(c.a,{store:b},r.a.createElement(h.a,null,r.a.createElement(R,null),r.a.createElement(U.c,null,r.a.createElement(U.a,{exact:!0,path:"/",component:hn}),r.a.createElement(U.a,{path:"/add_event",component:Qn}),r.a.createElement(U.a,{path:"/events/:title",component:le}),r.a.createElement(U.a,{path:"/search",component:ke}),r.a.createElement(U.a,{path:"/edit/:id",component:Ce}),r.a.createElement(U.a,{component:Ae})),r.a.createElement(Ne,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},65:function(n,e,t){n.exports=t.p+"static/media/eclipse.3b3ed108.svg"},69:function(n,e,t){n.exports=t.p+"static/media/spinner.f5de9172.svg"}},[[152,1,2]]]);
//# sourceMappingURL=main.780e60db.chunk.js.map