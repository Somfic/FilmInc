(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6e78c1c"],{"13d5":function(e,t,n){"use strict";var c=n("23e7"),i=n("d58f").left,s=n("a640"),r=n("ae40"),a=n("2d00"),u=n("605d"),o=s("reduce"),d=r("reduce",{1:0}),l=!u&&a>79&&a<83;c({target:"Array",proto:!0,forced:!o||!d||l},{reduce:function(e){return i(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"1dde":function(e,t,n){var c=n("d039"),i=n("b622"),s=n("2d00"),r=i("species");e.exports=function(e){return s>=51||!c((function(){var t=[],n=t.constructor={};return n[r]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"22f0":function(e,t,n){"use strict";n("d3b7");var c=n("d4ec"),i=n("bee2"),s=n("2ea1"),r=n("2262"),a=n("bc3a").default,u=n("a078").apiServer+"/scheduled",o={headers:{Authorization:"Bearer ".concat(s["a"].read("token"))}},d=function(){function e(){Object(c["a"])(this,e)}return Object(i["a"])(e,null,[{key:"get",value:function(){return new Promise((function(e,t){a.get(u,o).then((function(t){e(t)})).catch((function(e){Object(r["a"])(e),t(e.response)}))}))}},{key:"getOne",value:function(e){return new Promise((function(t,n){a.get(u+"/"+e,o).then((function(e){t(e)})).catch((function(e){Object(r["a"])(e),n(e.response)}))}))}},{key:"create",value:function(e){return new Promise((function(t,n){a.post(u,e,o).then((function(e){t(e)})).catch((function(e){Object(r["a"])(e),n(e.response)}))}))}},{key:"edit",value:function(e,t){return new Promise((function(n,c){a.put(u+"/"+e,t,o).then((function(e){n(e)})).catch((function(e){Object(r["a"])(e),c(e.response)}))}))}},{key:"editMany",value:function(e){return new Promise((function(t,n){a.put(u,e,o).then((function(e){t(e)})).catch((function(e){Object(r["a"])(e),n(e.response)}))}))}},{key:"delete",value:function(e){return new Promise((function(t,n){a.delete(u+"/"+e,o).then((function(e){t(e)})).catch((function(e){Object(r["a"])(e),n(e.response)}))}))}},{key:"dupe",value:function(e){return new Promise((function(t,n){a.post(u+"/"+e,null,o).then((function(e){t(e)})).catch((function(e){Object(r["a"])(e),n(e.response)}))}))}}]),e}();t["a"]=d},2532:function(e,t,n){"use strict";var c=n("23e7"),i=n("5a34"),s=n("1d80"),r=n("ab13");c({target:"String",proto:!0,forced:!r("includes")},{includes:function(e){return!!~String(s(this)).indexOf(i(e),arguments.length>1?arguments[1]:void 0)}})},"30c3":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),i={class:"seat-selection"},s={class:"row"},r={class:"col-3"},a={class:"list-group"},u=Object(c["h"])("i",{class:"fas fa-caret-left pr-3","aria-hidden":"true"},null,-1),o=Object(c["g"])(" Terug naar tickets "),d={class:"row"},l={class:"col my-1 d-flex flex-column"},h={class:"col-auto align-self-center border-left h-100"},f={class:"badge badge-primary badge-pill"},b={key:0,class:"col-9"};function O(e,t,n,O,p,j){var v=Object(c["x"])("router-link"),m=Object(c["x"])("SeatPlan");return Object(c["q"])(),Object(c["d"])("div",i,[Object(c["h"])("div",s,[Object(c["h"])("div",r,[Object(c["h"])("div",a,[Object(c["h"])(v,{to:"/",class:"list-group-item list-group-item-action"},{default:Object(c["F"])((function(){return[u,o]})),_:1})]),(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(p.tickets,(function(e){return Object(c["q"])(),Object(c["d"])("div",{class:"list-group list-group-item-action mt-3",key:e,onClick:function(t){return j.selected(e[0].id)},"v-class":{active:"ticketGroup[0].id = selected.id"}},[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(e,(function(e){return Object(c["q"])(),Object(c["d"])("div",{class:"list-group-item",key:e},[Object(c["h"])("div",d,[Object(c["h"])("div",l,[Object(c["h"])("small",null,Object(c["z"])(e.title),1),Object(c["h"])("span",null,Object(c["z"])(e.type),1),Object(c["h"])("small",null,Object(c["z"])(e.date),1)]),Object(c["h"])("div",h,[Object(c["h"])("span",f,Object(c["z"])(e.amount),1)])])])})),128))],8,["onClick"])})),128))]),null!=p.scheduled?(Object(c["q"])(),Object(c["d"])("div",b,[Object(c["h"])(m,{scheduled:p.scheduled,totalTickets:p.totalTickets,onSeatsselected:j.seatsSelected,onDone:j.done},null,8,["scheduled","totalTickets","onSeatsselected","onDone"])])):Object(c["e"])("",!0)])])}n("4de4"),n("13d5"),n("96cf");var p=n("1da1"),j=(n("caad"),n("2532"),Object(c["I"])("data-v-842546d6"));Object(c["t"])("data-v-842546d6");var v={class:"seatplan"},m={class:"row d-flex align-items-baseline ml-1"},g={class:"mr-3 badge-dark rounded px-3"},k={class:"mr-3"},w=Object(c["h"])("i",{class:"fas fa-couch"},null,-1);Object(c["r"])();var y=j((function(e,t,n,i,s,r){var a=Object(c["x"])("Action");return Object(c["q"])(),Object(c["d"])("div",v,[Object(c["h"])("div",m,[Object(c["h"])("h1",g,Object(c["z"])(n.scheduled.location),1),Object(c["h"])("h1",k,Object(c["z"])(n.scheduled.watchableTitle),1),Object(c["h"])("small",null,Object(c["z"])(n.scheduled.start)+" - "+Object(c["z"])(n.scheduled.end),1)]),Object(c["h"])("div",{class:"seat-plan border rounded",style:{"grid-template-columns":"repeat("+this.scheduled.columns+", 1rem)","grid-template-rows":"repeat("+this.scheduled.rows+", 1rem)"}},[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(this.scheduled.rows*this.scheduled.columns,(function(e){return Object(c["q"])(),Object(c["d"])("div",{class:["seat",{"text-success":s.selectedPlaces.includes(e),"text-danger":n.scheduled.takenTickets.includes(e)}],key:e,onClick:function(t){return r.active(e)}},[w],10,["onClick"])})),128))],4),Object(c["h"])(a,{class:"mt-3",onExecuted:r.done,actions:s.actions},null,8,["onExecuted","actions"])])})),x=(n("4160"),n("a9e3"),n("165a")),S=n("22f0"),T={name:"Seatplan",props:{scheduled:Object,totalTickets:Number},components:{Action:x["a"]},data:function(){var e=this;return{selectedPlaces:[],scheduledEdited:{},actions:[{message:"Sla wijzigingen op",class:"btn-dark",action:function(){return S["a"].edit(e.scheduled._id,e.scheduledEdited)}}]}},watch:{scheduled:function(){this.selectedPlaces=[]}},methods:{done:function(){this.$emit("done")},active:function(e){for(var t=this,n=[],c=0;c<this.totalTickets;c++){var i=e+c;if(i>this.scheduled.rows*this.scheduled.columns)return;if(this.scheduled.takenTickets.includes(i))return;n.push(i)}this.selectedPlaces=n,this.scheduledEdited=JSON.parse(JSON.stringify(this.scheduled)),n.forEach((function(e){t.scheduledEdited.takenTickets.push(e)}))}}};n("a212");T.render=y,T.__scopeId="data-v-842546d6";var P=T,E=n("a18c"),z=n("2ea1"),q={name:"SeatSelection",data:function(){var e=this;return{tickets:[],scheduled:null,totalTickets:0,selectedSeats:[],actions:[{message:"Bevestig stoelen",class:"btn-dark",action:function(){return S["a"].editMany(e.items)}}]}},created:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.update();case 1:case"end":return t.stop()}}),t)})))()},methods:{update:function(){var e=z["a"].readObject("tickets");this.tickets=this.groupBy(e,"id"),0==e.length&&E["a"].push("/finish")},done:function(){var e=this,t=z["a"].readObject("tickets");z["a"].writeObject("tickets",t.filter((function(t){return t.id!=e.scheduled._id}))),this.update()},seatsSelected:function(e,t){this.selectedSeats[e._id]=t},groupBy:function(e,t){return e.reduce((function(e,n){return(e[n[t]]=e[n[t]]||[]).push(n),e}),{})},selected:function(e){var t=this;this.totalTickets=this.tickets[e].reduce((function(e,t){return e+t.amount}),0),S["a"].getOne(e).then((function(e){return t.scheduled=e.data}))}},components:{SeatPlan:P}};q.render=O;t["default"]=q},"44e7":function(e,t,n){var c=n("861d"),i=n("c6b6"),s=n("b622"),r=s("match");e.exports=function(e){var t;return c(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==i(e))}},"4de4":function(e,t,n){"use strict";var c=n("23e7"),i=n("b727").filter,s=n("1dde"),r=n("ae40"),a=s("filter"),u=r("filter");c({target:"Array",proto:!0,forced:!a||!u},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,n){var c=n("44e7");e.exports=function(e){if(c(e))throw TypeError("The method doesn't accept regular expressions");return e}},"6d91":function(e,t,n){},a212:function(e,t,n){"use strict";n("6d91")},ab13:function(e,t,n){var c=n("b622"),i=c("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,"/./"[e](t)}catch(c){}}return!1}},caad:function(e,t,n){"use strict";var c=n("23e7"),i=n("4d64").includes,s=n("44d2"),r=n("ae40"),a=r("indexOf",{ACCESSORS:!0,1:0});c({target:"Array",proto:!0,forced:!a},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),s("includes")},d58f:function(e,t,n){var c=n("1c0b"),i=n("7b0b"),s=n("44ad"),r=n("50c4"),a=function(e){return function(t,n,a,u){c(n);var o=i(t),d=s(o),l=r(o.length),h=e?l-1:0,f=e?-1:1;if(a<2)while(1){if(h in d){u=d[h],h+=f;break}if(h+=f,e?h<0:l<=h)throw TypeError("Reduce of empty array with no initial value")}for(;e?h>=0:l>h;h+=f)h in d&&(u=n(u,d[h],h,o));return u}};e.exports={left:a(!1),right:a(!0)}}}]);
//# sourceMappingURL=chunk-a6e78c1c.76a98177.js.map