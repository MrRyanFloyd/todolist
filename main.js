!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=(e,t,n,o,r)=>{let l=document.getElementById("allTasksContainer"),a=r,c=document.createElement("div");c.className="row taskRow";let i=document.createElement("div"),d=document.createElement("input");d.className="checkbox",i.className="col-1 align-self-center",$(d).attr({type:"checkbox",name:"checkBox",value:"checkBox"});let s=document.createElement("div");s.className="col-7 align-self-center";let u=document.createElement("a");$(u).attr({tabindex:"0","data-placement":"bottom",role:"button","data-toggle":"popover","data-trigger":"focus","data-content":t}),u.innerHTML=e,$((function(){$('[data-toggle="popover"]').popover()})),$(".popover-dismiss").popover({trigger:"focus"});let p=document.createElement("div");p.className="col-1 align-self-center",p.innerHTML=o;let m=document.createElement("div");return m.className="col-2 align-self-center",m.innerHTML=n,i.appendChild(d),c.appendChild(i),s.appendChild(u),c.appendChild(s),c.appendChild(p),c.appendChild(m),l.appendChild(c),{allTasks:l,taskCheckBox:d,taskDate:m,taskPriority:p,taskRow:c,taskTitle:u,taskTitleContainer:s,taskCheckboxDiv:i,taskProject:a}},r=e=>{return{projectTitle:e,currentTasks:[],completedTasks:[],projectID:`project${e}`}},l=()=>{let e=document.getElementById("allTasksContainer"),t=document.getElementById("completedTasks");for(;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)t.removeChild(t.firstChild)};let a=[],c=[],i=r("Project 1");i=i.projectID.slice(7),console.log(i),a.push(i),console.log(a);let d=document.getElementById("activeProject");const s=e=>{let t=document.getElementById("completedTasks"),n=e.target.parentNode.parentNode,o=e.target.parentNode.parentNode.children[1].firstChild.innerHTML;e.target.parentNode.parentNode.children[0].firstChild.setAttribute("disabled",!0);for(let e=0;e<c.length;e++)o==c[e][0]&&c.splice(e,1);e.target.checked&&(t.appendChild(n),n.setAttribute("style","text-decoration: line-through;"))},u=()=>{let e=document.getElementsByClassName("checkbox");for(let t=0;t<=e.length;t++)e[t]&&e[t].addEventListener("click",s)},p=e=>{console.log("Active project changed");let t=e.target.id.slice(7);i=t,d.innerHTML=t,l(),console.log(i);for(let e=0;e<c.length;e++)t==c[e][4]&&o(c[e][0],c[e][1],c[e][2],c[e][3],c[e][4]);return u(),{currentProject:i}};let m=document.getElementById("formSubmit");m.addEventListener("submit",e=>{e.preventDefault();let t=m.elements[0].value,n=m.elements[1].value,r=m.elements[2].value;r=f(r);let l=m.elements[3].value,a=[t,n,r,l,i];console.log(a),c.push(a),console.log(c);let d=o(t,n,r,l,i);return m.reset(),$("#addTaskModal").modal("hide"),u(),{taskTitle:t,taskDescription:n,taskDate:r,taskPriority:l,todoArray:a,temporaryTask:d}}),document.getElementById("newProjectSubmit").addEventListener("submit",e=>{e.preventDefault();let t=newProjectSubmit.elements[0].value,n=r(t);newProjectSubmit.reset();let o=document.getElementById("dropDownMenuList");d.innerHTML=t;let c=document.createElement("a");return c.setAttribute("id",n.projectID),c.addEventListener("click",p),c.innerHTML=t,c.className="dropdown-item",o.appendChild(c),$("#newProjectModal").modal("hide"),i=(i=n.projectID).slice(7),console.log(i),a.push(i),console.log(a),l(),{projectTitle:t,currentProject:i}});(()=>{let e=['Add a new task with the "+" Button!',"Here's a description for the task","01/01/01","!!!",i];c.push(e),o('Add a new task with the "+" Button!',"Here's a description for the task","01/01/01","!!!",i);let t=document.getElementById("projectProject 1");t.addEventListener("click",p),d.innerHTML=t.innerHTML})();u(),$((function(){$('[data-toggle="popover"]').popover()})),$(".popover-dismiss").popover({trigger:"focus"});const f=e=>{let t=e.split("-");return t[0]=t[0].substring(2),t=t[1]+"/"+t[2]+"/"+t[0]}}]);