(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),s=(n(16),n(9)),u=n(8),l=n(1),i=n(2),m=n(4),b=n(3),h=n(5),p=(n(17),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("a",{href:"#",className:"navbar-brand"},"Navbar"," ",r.a.createElement("span",{className:"badge badge-pill badge-secondary"},this.props.totalCounts)))}}]),t}(a.Component)),d=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:this.getBadgeClasses()},this.formatCount()),r.a.createElement("button",{className:"btn btn-secondary btn-sm",onClick:function(){return e.props.onIncrement(e.props.counter)}},"Increment"),r.a.createElement("button",{className:"btn btn-danger btn-sm m-2",onClick:function(){return e.props.onDelete(e.props.counter.id)}},"Delete"),r.a.createElement("br",null))}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),t}(a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onReset,n=e.onDelete,a=e.onIncrement,c=e.counters;return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary btn-sm m-2",onClick:t},"Reset"),r.a.createElement("br",null),c.map(function(e){return r.a.createElement(d,{key:e.id,onIncrement:a,onDelete:n,counter:e})}))}}]),t}(a.Component),v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={counters:[{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},n.handleIncrement=function(e){var t=Object(u.a)(n.state.counters),a=t.indexOf(e);t[a]=Object(s.a)({},e),t[a].value+=1,n.setState({counters:t})},n.handleDelete=function(e){var t=n.state.counters.filter(function(t){return t.id!==e});n.setState({counters:t})},n.handleReset=function(){var e=n.state.counters.map(function(e){return e.value=0,e});n.setState({counters:e})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{totalCounts:this.state.counters.filter(function(e){return e.value>0}).length}),r.a.createElement("main",{className:"container"},r.a.createElement(f,{counters:this.state.counters,onReset:this.handleReset,onIncrement:this.handleIncrement,onDelete:this.handleDelete})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(18);o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.28908cdd.chunk.js.map