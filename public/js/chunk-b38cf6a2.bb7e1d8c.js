(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b38cf6a2"],{"682f":function(e,t,n){"use strict";var c=n("7a23");function i(e,t,n,i,a,r){return Object(c["q"])(),Object(c["d"])("span",{class:["badge mr-1",r.getClass()]},Object(c["z"])(n.content),3)}var a={name:"Badge",props:{content:String},methods:{getClass:function(){switch(this.content){case"AL":return"badge-light";case"3+":case"6+":case"9+":return"badge-secondary";case"12+":return"badge-info";case"16+":return"badge-warning";case"18+":return"badge-danger"}}}};a.render=i;t["a"]=a},f2e5:function(e,t,n){"use strict";n.r(t);n("a4d3"),n("e01a");var c=n("7a23"),i={class:"watchable"},a={class:"row"},r={class:"col-3"},s={key:0,class:"list-group"},o=Object(c["h"])("i",{class:"fas fa-plus-circle pr-3"},null,-1),l=Object(c["g"])("Nieuw "),u={key:0,class:"col-9"},d={class:"sticky-top pt-3"};function b(e,t,n,b,p,h){var j=Object(c["x"])("Navbar"),m=Object(c["x"])("EditWatchable"),O=Object(c["x"])("Watchable"),f=Object(c["x"])("Action"),g=Object(c["x"])("Footer");return Object(c["q"])(),Object(c["d"])("div",i,[Object(c["h"])(j),Object(c["h"])("div",a,[Object(c["h"])("div",r,[p.isEditing?Object(c["e"])("",!0):(Object(c["q"])(),Object(c["d"])("div",s,[Object(c["h"])("div",{class:"list-group-item list-group-item-action",onClick:t[1]||(t[1]=function(){return h.startNew&&h.startNew.apply(h,arguments)})},[o,l]),(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(p.items,(function(e,n){return Object(c["q"])(),Object(c["d"])("div",{key:e,class:["list-group-item list-group-item-action d-flex justify-content-between align-items-center",{active:n==p.currentIndex}],onClick:function(t){return h.setActive(e,n)}},[Object(c["h"])("span",null,Object(c["z"])(e.title),1),n==p.currentIndex?(Object(c["q"])(),Object(c["d"])("i",{key:0,class:"fas fa-pen",onClick:t[2]||(t[2]=function(){return h.startEditing&&h.startEditing.apply(h,arguments)})})):Object(c["e"])("",!0)],10,["onClick"])})),128))])),p.isEditing?(Object(c["q"])(),Object(c["d"])(m,{key:1,populateWith:p.currentItem,onValueChange:h.hasEdited,onFinish:h.finishEditing},null,8,["populateWith","onValueChange","onFinish"])):Object(c["e"])("",!0)]),p.currentItem?(Object(c["q"])(),Object(c["d"])("div",u,[Object(c["h"])("div",d,[Object(c["h"])(O,{title:p.currentItem.title,description:p.currentItem.description,poster:p.currentItem.poster,length:p.currentItem.length,classification:p.currentItem.classification,class:"mb-3"},null,8,["title","description","poster","length","classification"]),p.isEditing?Object(c["e"])("",!0):(Object(c["q"])(),Object(c["d"])(f,{key:0,actions:p.normalActions,reset:p.reset,onExecuted:h.executed},null,8,["actions","reset","onExecuted"])),p.isEditing&&!p.isNew?(Object(c["q"])(),Object(c["d"])(f,{key:1,actions:p.editingActions,reset:p.reset,onExecuted:h.executed},null,8,["actions","reset","onExecuted"])):Object(c["e"])("",!0),p.isEditing&&p.isNew?(Object(c["q"])(),Object(c["d"])(f,{key:2,actions:p.newActions,reset:p.reset,onExecuted:h.executedNew},null,8,["actions","reset","onExecuted"])):Object(c["e"])("",!0)])])):Object(c["e"])("",!0)]),Object(c["h"])(g)])}n("96cf");var p=n("1da1"),h={class:"card"},j={class:"row m-0"},m={class:"card-header border-0 col-auto"},O={class:"card-block m-3 px-2 col w-100"},f={class:"card-text"},g={class:"row m-0 card-footer"};function v(e,t,n,i,a,r){var s=Object(c["x"])("Badge");return Object(c["q"])(),Object(c["d"])("div",h,[Object(c["h"])("div",j,[Object(c["h"])("div",m,[Object(c["h"])("img",{class:"img-thumbnail",src:n.poster,alt:""},null,8,["src"])]),Object(c["h"])("div",O,[Object(c["h"])("h1",null,Object(c["z"])(n.title),1),Object(c["h"])("p",f,Object(c["z"])(n.description),1)])]),Object(c["h"])("div",g,[Object(c["h"])(s,{content:n.classification},null,8,["content"]),Object(c["h"])(s,{content:n.length+" min"},null,8,["content"])])])}n("a9e3");var I=n("682f"),w={name:"Watchable",components:{Badge:I["a"]},props:{title:String,description:String,poster:String,length:Number,classification:String,variations:Array}};w.render=v;var x=w,k={class:"edit-watchable"},E={class:"list-group mb-3"},y=Object(c["h"])("i",{class:"fas fa-caret-left pr-3"},null,-1),C=Object(c["g"])("Ga terug "),N={class:"form-group"},q=Object(c["h"])("label",{for:"title"},"Titel",-1),A={class:"form-group"},W=Object(c["h"])("label",{for:"length"},"Lengte",-1),F={class:"input-group"},V=Object(c["h"])("div",{class:"input-group-append"},[Object(c["h"])("div",{class:"input-group-text"},"minuten")],-1),U={class:"form-group"},B=Object(c["h"])("label",{for:"poster"},"Poster afbeelding URL",-1),S={class:"form-group"},z=Object(c["h"])("label",{for:"description"},"Beschrijving",-1),R={class:"form-group"},L=Object(c["h"])("label",{for:"classification"},"Klassificatie",-1);function _(e,t,n,i,a,r){return Object(c["q"])(),Object(c["d"])("div",k,[Object(c["h"])("div",E,[Object(c["h"])("div",{onClick:t[1]||(t[1]=function(){return r.finish&&r.finish.apply(r,arguments)}),class:"list-group-item list-group-item-action"},[y,C])]),Object(c["h"])("form",{onChange:t[7]||(t[7]=function(){return r.valueChange&&r.valueChange.apply(r,arguments)})},[Object(c["h"])("div",N,[q,Object(c["F"])(Object(c["h"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.updatedItem.title=e}),type:"text",class:"form-control",id:"title",placeholder:"Titel"},null,512),[[c["C"],a.updatedItem.title]])]),Object(c["h"])("div",A,[W,Object(c["h"])("div",F,[Object(c["F"])(Object(c["h"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.updatedItem.length=e}),type:"number",class:"form-control",id:"length",placeholder:"0"},null,512),[[c["C"],a.updatedItem.length]]),V])]),Object(c["h"])("div",U,[B,Object(c["F"])(Object(c["h"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.updatedItem.poster=e}),type:"text",class:"form-control",id:"poster",placeholder:"Link naar poster"},null,512),[[c["C"],a.updatedItem.poster]])]),Object(c["h"])("div",S,[z,Object(c["F"])(Object(c["h"])("textarea",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.updatedItem.description=e}),type:"text",class:"form-control",id:"description",rows:"5",placeholder:"Beschrijving van voorstelling"},null,512),[[c["C"],a.updatedItem.description]])]),Object(c["h"])("div",R,[L,Object(c["F"])(Object(c["h"])("input",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return a.updatedItem.classification=e}),type:"text",class:"form-control",id:"classification",placeholder:"Kijkwijzer"},null,512),[[c["C"],a.updatedItem.classification]])])],32)])}var D={name:"EditWatchable",props:{populateWith:Object},data:function(){return{updatedItem:{},doneButton:"Update"}},methods:{valueChange:function(){this.$emit("value-change",this.updatedItem)},finish:function(){this.$emit("finish")}},created:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:null!=e.populateWith?e.updatedItem=e.populateWith:delete e.updatedItem._id;case 1:case"end":return t.stop()}}),t)})))()}};D.render=_;var J=D,K=n("165a"),T=n("4c03"),$=n("1808"),G=n("e8d9"),P={name:"Watchables",components:{Watchable:x,Action:K["a"],EditWatchable:J,Footer:T["a"],Navbar:$["a"]},data:function(){var e=this;return{reset:Date.now(),items:[],currentIndex:-1,currentItem:null,normalActions:[{message:"Dupliceer",class:"btn-dark",action:function(){return G["a"].dupe(e.currentItem._id)}},{message:"Verwijder",class:"btn-danger",action:function(){return G["a"].delete(e.currentItem._id)}}],editingActions:[{message:"Sla op in database",class:"btn-dark",action:function(){return G["a"].edit(e.currentItem._id,e.currentItem)}}],newActions:[{message:"Voeg toe aan database",class:"btn-dark",action:function(){return G["a"].create(e.currentItem)}}],isEditing:!1,isNew:!1}},created:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,G["a"].get();case 2:n=t.sent,e.items=n.data;case 4:case"end":return t.stop()}}),t)})))()},methods:{setActive:function(e,t){this.currentIndex=t,this.currentItem=e},resetIndex:function(){this.currentIndex=-1},executed:function(){var e=this;G["a"].get().then((function(t){e.items=t.data,e.items[e.currentIndex]&&e.items[e.currentIndex].id==e.currentItem.id?e.currentItem=e.items[e.currentIndex]:e.currentItem=null}))},executedNew:function(){var e=this;G["a"].get().then((function(t){e.items=t.data}))},startNew:function(){this.currentItem={},this.isNew=!0,this.isEditing=!0},startEditing:function(){this.isEditing=!0},finishEditing:function(){this.isNew=!1,this.isEditing=!1,this.executed()},hasEdited:function(e){this.currentItem=e}}};P.render=b;t["default"]=P}}]);
//# sourceMappingURL=chunk-b38cf6a2.bb7e1d8c.js.map