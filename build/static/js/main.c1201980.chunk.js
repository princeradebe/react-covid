(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),l=(n(12),n(3)),i=n(4),u=n(6),s=n(5),h=(n(13),n(14),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"".concat(e.country.countryInfo.flag)}),r.a.createElement("h2",null," ",e.country.country," "),r.a.createElement("p",null," Confirmed Cases: ",e.country.cases," "),r.a.createElement("p",null," Recovered Cases: ",e.country.recovered," "),r.a.createElement("p",null," Critical Cases: ",e.country.critical," "),r.a.createElement("p",null," Deaths Cases: ",e.country.deaths," "),r.a.createElement("p",null," Active Cases: ",e.country.active," "))}),d=function(e){return r.a.createElement("div",{className:"card-list"},e.countries.filter((function(e){return null!=e.countryInfo._id})).map((function(e){return r.a.createElement(h,{key:e.countryInfo._id,country:e})})))},m=(n(15),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=(n(16),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={data:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://corona.lmao.ninja/v2/countries/").then((function(e){return e.json()})).then((function(t){return e.setState({data:t})}))}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.searchField,a=t.filter((function(e){return e.country.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null," React Covid "),r.a.createElement(m,{placeholder:"search country",handleChange:this.handleChange}),r.a.createElement(d,{countries:a}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.c1201980.chunk.js.map