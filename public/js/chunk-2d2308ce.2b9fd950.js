(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2308ce"],{ed81:function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),s={class:"users"},o={class:"row"},r={class:"col-3"},a={class:"list-group"},i=Object(n["h"])("i",{class:"fas fa-plus-circle pr-3"},null,-1),u=Object(n["g"])("Nieuw "),l={class:"col-auto"},d={class:"form-group row"},b=Object(n["h"])("label",{for:"name",class:"col-form-label col-sm-4"},"Naam",-1),f={class:"col-sm-8"},h={class:"form-group row"},j=Object(n["h"])("label",{for:"name",class:"col-form-label col-sm-4"},"Inlog",-1),m={class:"col-sm-8"},O={class:"form-group row"},p=Object(n["h"])("label",{for:"name",class:"col-form-label col-sm-4"},"Pincode",-1),v={class:"col-sm-8"},w={class:"form-check"},k=Object(n["h"])("label",{class:"form-check-label",for:"defaultCheck1"}," Is Administrator ",-1),g={class:"row mt-3"};function y(e,t,c,y,A,x){var N=Object(n["x"])("Navbar"),q=Object(n["x"])("Action"),C=Object(n["x"])("Footer");return Object(n["q"])(),Object(n["d"])("div",s,[Object(n["h"])(N),Object(n["h"])("div",o,[Object(n["h"])("div",r,[Object(n["h"])("div",a,[Object(n["h"])("div",{class:"list-group-item list-group-item-action",onClick:t[1]||(t[1]=function(){return x.newItem.apply(x,arguments)})},[i,u]),(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(A.users,(function(e){return Object(n["q"])(),Object(n["d"])("div",{class:["list-group-item list-group-item-action",{active:e._id==A.user._id}],key:e,onClick:function(t){return x.setActive(e)}},Object(n["z"])(e.name),11,["onClick"])})),128))])]),Object(n["h"])("div",l,[Object(n["h"])("div",d,[b,Object(n["h"])("div",f,[Object(n["G"])(Object(n["h"])("input",{class:"form-control",type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return A.user.name=e})},null,512),[[n["D"],A.user.name]])])]),Object(n["h"])("div",h,[j,Object(n["h"])("div",m,[Object(n["G"])(Object(n["h"])("input",{class:"form-control",type:"number","onUpdate:modelValue":t[3]||(t[3]=function(e){return A.user.uid=e})},null,512),[[n["D"],A.user.uid]])])]),Object(n["h"])("div",O,[p,Object(n["h"])("div",v,[Object(n["G"])(Object(n["h"])("input",{class:"form-control",type:"password",placeholder:"••••",pattern:"[0-9]{4}",inputmode:"numeric","onUpdate:modelValue":t[4]||(t[4]=function(e){return A.user.code=e})},null,512),[[n["D"],A.user.code]])])]),Object(n["h"])("div",w,[Object(n["G"])(Object(n["h"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=function(e){return A.user.isAdmin=e}),id:"defaultCheck1"},null,512),[[n["B"],A.user.isAdmin]]),k]),Object(n["h"])("div",g,[A.isNew?(Object(n["q"])(),Object(n["d"])(q,{key:0,actions:A.newActions,onExecuted:x.update},null,8,["actions","onExecuted"])):Object(n["e"])("",!0),A.isNew?Object(n["e"])("",!0):(Object(n["q"])(),Object(n["d"])(q,{key:1,actions:A.editActions,onExecuted:x.update},null,8,["actions","onExecuted"]))])])]),Object(n["h"])(C)])}c("96cf");var A=c("1da1"),x=c("1808"),N=c("4c03"),q=c("165a"),C=(c("d3b7"),c("d4ec")),P=c("bee2"),U=c("2ea1"),E=c("2262"),G=c("bc3a").default,I=c("a078").apiServer+"/user",V={headers:{Authorization:"Bearer ".concat(U["a"].read("token"))}},z=function(){function e(){Object(C["a"])(this,e)}return Object(P["a"])(e,null,[{key:"get",value:function(){return new Promise((function(e,t){G.get(I,V).then((function(t){e(t)})).catch((function(e){Object(E["a"])(e),t(e.response)}))}))}},{key:"create",value:function(e){return new Promise((function(t,c){G.post(I,e,V).then((function(e){t(e)})).catch((function(e){Object(E["a"])(e),c(e.response)}))}))}},{key:"edit",value:function(e,t){return new Promise((function(c,n){G.put(I+"/"+e,t,V).then((function(e){c(e)})).catch((function(e){Object(E["a"])(e),n(e.response)}))}))}},{key:"delete",value:function(e){return new Promise((function(t,c){G.delete(I+"/"+e,V).then((function(e){t(e)})).catch((function(e){Object(E["a"])(e),c(e.response)}))}))}}]),e}(),D=z,_={name:"Users",data:function(){var e=this;return{users:[],user:{},passcode:"",isNew:!0,newActions:[{message:"Maak gebruiker aan",class:"btn-dark",action:function(){return D.create(e.user)}}],editActions:[{message:"Sla wijzigingen op",class:"btn-dark",action:function(){return D.edit(e.user._id,e.user)}}]}},methods:{newItem:function(){this.user={},this.isNew=!0},setActive:function(e){this.isNew=!1,this.user=e},update:function(){var e=this;D.get().then((function(t){e.users=t.data}))}},created:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.update();case 1:case"end":return t.stop()}}),t)})))()},components:{Navbar:x["a"],Footer:N["a"],Action:q["a"]}};_.render=y;t["default"]=_}}]);
//# sourceMappingURL=chunk-2d2308ce.2b9fd950.js.map