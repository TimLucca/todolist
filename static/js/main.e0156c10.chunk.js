(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,o){e.exports=o(40)},39:function(e,t,o){},40:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(24),l=o.n(r),c=o(18),i=o(6),d=o(7),s=o(9),u=o(8),p=o(10),m=o(15),f=o.n(m),b=o(13),h=o(11),g=function(e){function t(){var e,o;Object(i.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).getStyle=function(){return{color:"#60bdf0",background:"#4b4e57",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:o.props.todo.completed?"line-through":"none"}},o}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,o=e.title;return n.a.createElement("div",{style:this.getStyle()},n.a.createElement("p",null,n.a.createElement("input",{type:"checkbox",onChange:this.props.toggleComplete.bind(this,t)})," ","",o,n.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),style:y},"x")))}}]),t}(n.a.Component),y={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},v=g,E=o(5),j=o.n(E),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return n.a.createElement(v,{key:t.id,todo:t,toggleComplete:e.props.toggleComplete,delTodo:e.props.delTodo})})}}]),t}(n.a.Component);O.propType={todos:j.a.array.isRequired,toggleComplete:j.a.func.isRequired,delTodo:j.a.func.isRequired};var x=O;function C(){return n.a.createElement("header",{style:T},n.a.createElement("h1",null,"TodoList"),n.a.createElement("a",{style:w,href:"https://timlucca.dev/"},"Home")," |",n.a.createElement(b.b,{style:w,to:"/todolist/"}," Todo List")," |",n.a.createElement(b.b,{style:w,to:"/todolist/about/"}," About"))}var T={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},w={color:"#fff",textDecoration:"none"},k=o(27),S=function(e){function t(){var e,o;Object(i.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={title:""},o.onChange=function(e){return o.setState(Object(k.a)({},e.target.name,e.target.value))},o.onSubmit=function(e){e.preventDefault(),o.props.addTodo(o.state.title),o.setState({title:""})},o}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},n.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo ...",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),n.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),t}(a.Component);function A(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"About"),n.a.createElement("p",null,"Todo app built with React. Crash course from ",n.a.createElement("a",{href:"https://www.youtube.com/watch?v=sBws8MSXN7A&t=491s"},"Traversy Media")))}o(39);var R=function(e){function t(){var e,o;Object(i.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={todos:[{title:"Add an item",id:f.a.v4(),completed:!1}]},o.toggleComplete=function(e){o.setState({todos:o.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},o.addTodo=function(e){var t={title:e,id:f.a.v4(),completed:!1};o.setState({todos:[].concat(Object(c.a)(o.state.todos),[t])})},o.delTodo=function(e){o.setState({todos:Object(c.a)(o.state.todos.filter(function(t){return t.id!==e}))})},o}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(b.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement(C,null),n.a.createElement(h.a,{exact:!0,path:"/todolist/",render:function(t){return n.a.createElement(n.a.Fragment,null,n.a.createElement(S,{addTodo:e.addTodo}),n.a.createElement(x,{todos:e.state.todos,toggleComplete:e.toggleComplete,delTodo:e.delTodo}))}}),n.a.createElement(h.a,{path:"/todolist/about/",component:A}))))}}]),t}(n.a.Component);l.a.render(n.a.createElement(R,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.e0156c10.chunk.js.map