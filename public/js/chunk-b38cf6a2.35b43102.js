(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b38cf6a2"],{"682f":function(e,t,n){"use strict";var c=n("7a23");function i(e,t,n,i,a,r){return Object(c["q"])(),Object(c["d"])("span",{class:["badge",r.getClass()]},Object(c["z"])(n.content),3)}var a={name:"Badge",props:{content:String},methods:{getClass:function(){switch(this.content){case"AL":return"badge-light";case"3+":case"6+":case"9+":return"badge-secondary";case"12+":return"badge-info";case"16+":return"badge-warning";case"18+":return"badge-danger"}}}};a.render=i;t["a"]=a},f2e5:function(e,t,n){"use strict";n.r(t);n("a4d3"),n("e01a");var c=n("7a23"),i={class:"watchable"},a={class:"row"},r={class:"col-3"},s={key:0,class:"list-group"},o=Object(c["h"])("i",{class:"fas fa-plus-circle pr-3"},null,-1),l=Object(c["g"])("Nieuw "),u={key:0,class:"col-9"};function d(e,t,n,d,b,p){var h=Object(c["x"])("Navbar"),j=Object(c["x"])("EditWatchable"),m=Object(c["x"])("Watchable"),O=Object(c["x"])("Action"),f=Object(c["x"])("Footer");return Object(c["q"])(),Object(c["d"])("div",i,[Object(c["h"])(h),Object(c["h"])("div",a,[Object(c["h"])("div",r,[b.isEditing?Object(c["e"])("",!0):(Object(c["q"])(),Object(c["d"])("div",s,[Object(c["h"])("div",{class:"list-group-item list-group-item-action",onClick:t[1]||(t[1]=function(){return p.startNew.apply(p,arguments)})},[o,l]),(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(b.items,(function(e,n){return Object(c["q"])(),Object(c["d"])("div",{key:e,class:["list-group-item list-group-item-action d-flex justify-content-between align-items-center",{active:n==b.currentIndex}],onClick:function(t){return p.setActive(e,n)}},[Object(c["h"])("span",null,Object(c["z"])(e.title),1),n==b.currentIndex?(Object(c["q"])(),Object(c["d"])("i",{key:0,class:"fas fa-pen",onClick:t[2]||(t[2]=function(){return p.startEditing.apply(p,arguments)})})):Object(c["e"])("",!0)],10,["onClick"])})),128))])),b.isEditing?(Object(c["q"])(),Object(c["d"])(j,{key:1,populateWith:b.currentItem,onValueChange:p.hasEdited,onFinish:p.finishEditing},null,8,["populateWith","onValueChange","onFinish"])):Object(c["e"])("",!0)]),b.currentItem?(Object(c["q"])(),Object(c["d"])("div",u,[Object(c["h"])(m,{title:b.currentItem.title,description:b.currentItem.description,poster:b.currentItem.poster,length:b.currentItem.length,classification:b.currentItem.classification,class:"mb-3"},null,8,["title","description","poster","length","classification"]),b.isEditing?Object(c["e"])("",!0):(Object(c["q"])(),Object(c["d"])(O,{key:0,actions:b.normalActions,reset:b.reset,onExecuted:p.executed},null,8,["actions","reset","onExecuted"])),b.isEditing&&!b.isNew?(Object(c["q"])(),Object(c["d"])(O,{key:1,actions:b.editingActions,reset:b.reset,onExecuted:p.executed},null,8,["actions","reset","onExecuted"])):Object(c["e"])("",!0),b.isEditing&&b.isNew?(Object(c["q"])(),Object(c["d"])(O,{key:2,actions:b.newActions,reset:b.reset,onExecuted:p.executedNew},null,8,["actions","reset","onExecuted"])):Object(c["e"])("",!0)])):Object(c["e"])("",!0)]),Object(c["h"])(f)])}n("96cf");var b=n("1da1"),p={class:"card"},h={class:"row m-0"},j={class:"card-header border-0 col-auto"},m={class:"card-block m-3 px-2 col w-100"},O={class:"card-text"},f={class:"row m-0 card-footer"};function g(e,t,n,i,a,r){var s=Object(c["x"])("Badge");return Object(c["q"])(),Object(c["d"])("div",p,[Object(c["h"])("div",h,[Object(c["h"])("div",j,[Object(c["h"])("img",{class:"img-thumbnail",src:n.poster,alt:""},null,8,["src"])]),Object(c["h"])("div",m,[Object(c["h"])("h1",null,Object(c["z"])(n.title),1),Object(c["h"])("p",O,Object(c["z"])(n.description),1)])]),Object(c["h"])("div",f,[Object(c["h"])(s,{content:n.classification},null,8,["content"]),Object(c["h"])(s,{content:n.length+" min"},null,8,["content"])])])}n("a9e3");var v=n("682f"),I={name:"Watchable",components:{Badge:v["a"]},props:{title:String,description:String,poster:String,length:Number,classification:String,variations:Array}};I.render=g;var x=I,w={class:"edit-watchable"},k={class:"list-group mb-3"},E=Object(c["h"])("i",{class:"fas fa-caret-left pr-3"},null,-1),y=Object(c["g"])("Ga terug "),C={class:"form-group"},q=Object(c["h"])("label",{for:"title"},"Titel",-1),N={class:"form-group"},A=Object(c["h"])("label",{for:"length"},"Lengte",-1),W={class:"input-group"},F=Object(c["h"])("div",{class:"input-group-append"},[Object(c["h"])("div",{class:"input-group-text"},"minuten")],-1),V={class:"form-group"},U=Object(c["h"])("label",{for:"poster"},"Poster afbeelding URL",-1),B={class:"form-group"},S=Object(c["h"])("label",{for:"description"},"Beschrijving",-1),z={class:"form-group"},R=Object(c["h"])("label",{for:"classification"},"Klassificatie",-1);function L(e,t,n,i,a,r){return Object(c["q"])(),Object(c["d"])("div",w,[Object(c["h"])("div",k,[Object(c["h"])("div",{onClick:t[1]||(t[1]=function(){return r.finish.apply(r,arguments)}),class:"list-group-item list-group-item-action"},[E,y])]),Object(c["h"])("form",{onChange:t[7]||(t[7]=function(){return r.valueChange.apply(r,arguments)})},[Object(c["h"])("div",C,[q,Object(c["F"])(Object(c["h"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.updatedItem.title=e}),type:"text",class:"form-control",id:"title",placeholder:"Titel"},null,512),[[c["C"],a.updatedItem.title]])]),Object(c["h"])("div",N,[A,Object(c["h"])("div",W,[Object(c["F"])(Object(c["h"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.updatedItem.length=e}),type:"number",class:"form-control",id:"length",placeholder:"0"},null,512),[[c["C"],a.updatedItem.length]]),F])]),Object(c["h"])("div",V,[U,Object(c["F"])(Object(c["h"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.updatedItem.poster=e}),type:"text",class:"form-control",id:"poster",placeholder:"Link naar poster"},null,512),[[c["C"],a.updatedItem.poster]])]),Object(c["h"])("div",B,[S,Object(c["F"])(Object(c["h"])("textarea",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.updatedItem.description=e}),type:"text",class:"form-control",id:"description",rows:"5",placeholder:"Beschrijving van voorstelling"},null,512),[[c["C"],a.updatedItem.description]])]),Object(c["h"])("div",z,[R,Object(c["F"])(Object(c["h"])("input",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return a.updatedItem.classification=e}),type:"text",class:"form-control",id:"classification",placeholder:"Kijkwijzer"},null,512),[[c["C"],a.updatedItem.classification]])])],32)])}var _={name:"EditWatchable",props:{populateWith:Object},data:function(){return{updatedItem:{},doneButton:"Update"}},methods:{valueChange:function(){this.$emit("value-change",this.updatedItem)},finish:function(){this.$emit("finish")}},created:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:null!=e.populateWith?e.updatedItem=e.populateWith:delete e.updatedItem._id;case 1:case"end":return t.stop()}}),t)})))()}};_.render=L;var D=_,J=n("165a"),K=n("4c03"),T=n("1808"),$=n("e8d9"),G={name:"Watchables",components:{Watchable:x,Action:J["a"],EditWatchable:D,Footer:K["a"],Navbar:T["a"]},data:function(){var e=this;return{reset:Date.now(),items:[],currentIndex:-1,currentItem:null,normalActions:[{message:"Dupliceer",class:"btn-dark",action:function(){return $["a"].dupe(e.currentItem._id)}},{message:"Verwijder",class:"btn-danger",action:function(){return $["a"].delete(e.currentItem._id)}}],editingActions:[{message:"Sla op in database",class:"btn-dark",action:function(){return $["a"].edit(e.currentItem._id,e.currentItem)}}],newActions:[{message:"Voeg toe aan database",class:"btn-dark",action:function(){return $["a"].create(e.currentItem)}}],isEditing:!1,isNew:!1}},created:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$["a"].get();case 2:n=t.sent,e.items=n.data;case 4:case"end":return t.stop()}}),t)})))()},methods:{setActive:function(e,t){this.currentIndex=t,this.currentItem=e},resetIndex:function(){this.currentIndex=-1},executed:function(){var e=this;$["a"].get().then((function(t){e.items=t.data,e.items[e.currentIndex]&&e.items[e.currentIndex].id==e.currentItem.id?e.currentItem=e.items[e.currentIndex]:e.currentItem=null}))},executedNew:function(){var e=this;$["a"].get().then((function(t){e.items=t.data}))},startNew:function(){this.currentItem={},this.isNew=!0,this.isEditing=!0},startEditing:function(){this.isEditing=!0},finishEditing:function(){this.isNew=!1,this.isEditing=!1,this.executed()},hasEdited:function(e){this.currentItem=e}}};G.render=d;t["default"]=G}}]);
//# sourceMappingURL=chunk-b38cf6a2.35b43102.js.map