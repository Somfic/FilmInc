(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c761897"],{1148:function(t,e,n){"use strict";var c=n("a691"),r=n("1d80");t.exports="".repeat||function(t){var e=String(r(this)),n="",i=c(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},1276:function(t,e,n){"use strict";var c=n("d784"),r=n("44e7"),i=n("825a"),a=n("1d80"),o=n("4840"),s=n("8aa5"),u=n("50c4"),l=n("14c3"),d=n("9263"),h=n("d039"),f=[].push,p=Math.min,b=4294967295,v=!h((function(){return!RegExp(b,"y")}));c("split",2,(function(t,e,n){var c;return c="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var c=String(a(this)),i=void 0===n?b:n>>>0;if(0===i)return[];if(void 0===t)return[c];if(!r(t))return e.call(c,t,i);var o,s,u,l=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,h+"g");while(o=d.call(v,c)){if(s=v.lastIndex,s>p&&(l.push(c.slice(p,o.index)),o.length>1&&o.index<c.length&&f.apply(l,o.slice(1)),u=o[0].length,p=s,l.length>=i))break;v.lastIndex===o.index&&v.lastIndex++}return p===c.length?!u&&v.test("")||l.push(""):l.push(c.slice(p)),l.length>i?l.slice(0,i):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,r,n):c.call(String(r),e,n)},function(t,r){var a=n(c,t,this,r,c!==e);if(a.done)return a.value;var d=i(t),h=String(this),f=o(d,RegExp),g=d.unicode,O=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),m=new f(v?d:"^(?:"+d.source+")",O),j=void 0===r?b:r>>>0;if(0===j)return[];if(0===h.length)return null===l(m,h)?[h]:[];var x=0,k=0,y=[];while(k<h.length){m.lastIndex=v?k:0;var S,I=l(m,v?h:h.slice(k));if(null===I||(S=p(u(m.lastIndex+(v?0:k)),h.length))===x)k=s(h,k,g);else{if(y.push(h.slice(x,k)),y.length===j)return y;for(var w=1;w<=I.length-1;w++)if(y.push(I[w]),y.length===j)return y;k=x=S}}return y.push(h.slice(x)),y}]}),!v)},"14c3":function(t,e,n){var c=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==c(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"1dde":function(t,e,n){var c=n("d039"),r=n("b622"),i=n("2d00"),a=r("species");t.exports=function(t){return i>=51||!c((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"22f0":function(t,e,n){"use strict";n("d3b7");var c=n("d4ec"),r=n("bee2"),i=n("a18c"),a=n("2ea1"),o=n("bc3a").default,s=n("a078").apiServer+"/scheduled",u={headers:{Authorization:"Bearer ".concat(a["a"].read("token"))}},l=function(){function t(){Object(c["a"])(this,t)}return Object(r["a"])(t,null,[{key:"get",value:function(){return new Promise((function(t,e){o.get(s,u).then((function(e){t(e)})).catch((function(t){401==t.response.status&&i["a"].push("/auth"),e(t.response)}))}))}},{key:"create",value:function(t){return new Promise((function(e,n){o.post(s,t,u).then((function(t){e(t)})).catch((function(t){401==t.response.status&&i["a"].push("/auth"),n(t.response)}))}))}},{key:"edit",value:function(t,e){return new Promise((function(n,c){o.put(s+"/"+t,e,u).then((function(t){n(t)})).catch((function(t){401==t.response.status&&i["a"].push("/auth"),c(t.response)}))}))}},{key:"editMany",value:function(t){return new Promise((function(e,n){o.put(s,t,u).then((function(t){e(t)})).catch((function(t){401==t.response.status&&i["a"].push("/auth"),n(t.response)}))}))}},{key:"delete",value:function(t){return new Promise((function(e,n){o.delete(s+"/"+t,u).then((function(t){e(t)})).catch((function(t){401==t.response.status&&i["a"].push("/auth"),n(t.response)}))}))}},{key:"dupe",value:function(t){return new Promise((function(e,n){o.post(s+"/"+t,null,u).then((function(t){e(t)})).catch((function(t){401==t.response.status&&i["a"].push("/auth"),n(t.response)}))}))}}]),t}();e["a"]=l},"408a":function(t,e,n){var c=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=c(t))throw TypeError("Incorrect invocation");return+t}},"44e7":function(t,e,n){var c=n("861d"),r=n("c6b6"),i=n("b622"),a=i("match");t.exports=function(t){var e;return c(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}},"4de4":function(t,e,n){"use strict";var c=n("23e7"),r=n("b727").filter,i=n("1dde"),a=n("ae40"),o=i("filter"),s=a("filter");c({target:"Array",proto:!0,forced:!o||!s},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5319:function(t,e,n){"use strict";var c=n("d784"),r=n("825a"),i=n("7b0b"),a=n("50c4"),o=n("a691"),s=n("1d80"),u=n("8aa5"),l=n("14c3"),d=Math.max,h=Math.min,f=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,b=/\$([$&'`]|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};c("replace",2,(function(t,e,n,c){var g=c.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,O=c.REPLACE_KEEPS_$0,m=g?"$":"$0";return[function(n,c){var r=s(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,r,c):e.call(String(r),n,c)},function(t,c){if(!g&&O||"string"===typeof c&&-1===c.indexOf(m)){var i=n(e,t,this,c);if(i.done)return i.value}var s=r(t),f=String(this),p="function"===typeof c;p||(c=String(c));var b=s.global;if(b){var x=s.unicode;s.lastIndex=0}var k=[];while(1){var y=l(s,f);if(null===y)break;if(k.push(y),!b)break;var S=String(y[0]);""===S&&(s.lastIndex=u(f,a(s.lastIndex),x))}for(var I="",w=0,E=0;E<k.length;E++){y=k[E];for(var C=String(y[0]),R=d(h(o(y.index),f.length),0),A=[],T=1;T<y.length;T++)A.push(v(y[T]));var $=y.groups;if(p){var P=[C].concat(A,R,f);void 0!==$&&P.push($);var _=String(c.apply(void 0,P))}else _=j(C,f,R,A,$,c);R>=w&&(I+=f.slice(w,R)+_,w=R+C.length)}return I+f.slice(w)}];function j(t,n,c,r,a,o){var s=c+t.length,u=r.length,l=b;return void 0!==a&&(a=i(a),l=p),e.call(o,l,(function(e,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,c);case"'":return n.slice(s);case"<":o=a[i.slice(1,-1)];break;default:var l=+i;if(0===l)return e;if(l>u){var d=f(l/10);return 0===d?e:d<=u?void 0===r[d-1]?i.charAt(1):r[d-1]+i.charAt(1):e}o=r[l-1]}return void 0===o?"":o}))}}))},6547:function(t,e,n){var c=n("a691"),r=n("1d80"),i=function(t){return function(e,n){var i,a,o=String(r(e)),s=c(n),u=o.length;return s<0||s>=u?t?"":void 0:(i=o.charCodeAt(s),i<55296||i>56319||s+1===u||(a=o.charCodeAt(s+1))<56320||a>57343?t?o.charAt(s):i:t?o.slice(s,s+2):a-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"682f":function(t,e,n){"use strict";var c=n("7a23");function r(t,e,n,r,i,a){return Object(c["q"])(),Object(c["d"])("span",{class:["badge mr-1",a.getClass()]},Object(c["z"])(n.content),3)}var i={name:"Badge",props:{content:String},methods:{getClass:function(){switch(this.content){case"AL":return"badge-light";case"3+":case"6+":case"9+":return"badge-secondary";case"12+":return"badge-info";case"16+":return"badge-warning";case"18+":return"badge-danger"}}}};i.render=r;e["a"]=i},"7db0":function(t,e,n){"use strict";var c=n("23e7"),r=n("b727").find,i=n("44d2"),a=n("ae40"),o="find",s=!0,u=a(o);o in[]&&Array(1)[o]((function(){s=!1})),c({target:"Array",proto:!0,forced:s||!u},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},"8aa5":function(t,e,n){"use strict";var c=n("6547").charAt;t.exports=function(t,e,n){return e+(n?c(t,e).length:1)}},9263:function(t,e,n){"use strict";var c=n("ad6d"),r=n("9f7f"),i=RegExp.prototype.exec,a=String.prototype.replace,o=i,s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=r.UNSUPPORTED_Y||r.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=s||l||u;d&&(o=function(t){var e,n,r,o,d=this,h=u&&d.sticky,f=c.call(d),p=d.source,b=0,v=t;return h&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),v=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(p="(?: "+p+")",v=" "+v,b++),n=new RegExp("^(?:"+p+")",f)),l&&(n=new RegExp("^"+p+"$(?!\\s)",f)),s&&(e=d.lastIndex),r=i.call(h?n:d,v),h?r?(r.input=r.input.slice(b),r[0]=r[0].slice(b),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:s&&r&&(d.lastIndex=d.global?r.index+r[0].length:e),l&&r&&r.length>1&&a.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=o},"9f7f":function(t,e,n){"use strict";var c=n("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=c((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=c((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var c=n("23e7"),r=n("9263");c({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},b680:function(t,e,n){"use strict";var c=n("23e7"),r=n("a691"),i=n("408a"),a=n("1148"),o=n("d039"),s=1..toFixed,u=Math.floor,l=function(t,e,n){return 0===e?n:e%2===1?l(t,e-1,n*t):l(t*t,e/2,n)},d=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},h=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){s.call({})}));c({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,n,c,o,s=i(this),h=r(t),f=[0,0,0,0,0,0],p="",b="0",v=function(t,e){var n=-1,c=e;while(++n<6)c+=t*f[n],f[n]=c%1e7,c=u(c/1e7)},g=function(t){var e=6,n=0;while(--e>=0)n+=f[e],f[e]=u(n/t),n=n%t*1e7},O=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var n=String(f[t]);e=""===e?n:e+a.call("0",7-n.length)+n}return e};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(p="-",s=-s),s>1e-21)if(e=d(s*l(2,69,1))-69,n=e<0?s*l(2,-e,1):s/l(2,e,1),n*=4503599627370496,e=52-e,e>0){v(0,n),c=h;while(c>=7)v(1e7,0),c-=7;v(l(10,c,1),0),c=e-1;while(c>=23)g(1<<23),c-=23;g(1<<c),v(1,1),g(2),b=O()}else v(0,n),v(1<<-e,0),b=O()+a.call("0",h);return h>0?(o=b.length,b=p+(o<=h?"0."+a.call("0",h-o)+b:b.slice(0,o-h)+"."+b.slice(o-h))):b=p+b,b}})},be41:function(t,e,n){"use strict";n.r(e);n("4de4");var c=n("7a23"),r={class:"ticket-selection"},i={class:"row"},a={class:"col-auto"},o={class:"list-group"},s={class:"col"},u={class:"form-group"},l={class:"list-group sticky-top pt-3",style:{"margin-top":"-1rem"}};function d(t,e,n,d,h,f){var p=this,b=Object(c["x"])("Navbar"),v=Object(c["x"])("Scheduled"),g=Object(c["x"])("CheckoutItem"),O=Object(c["x"])("CheckoutTotal"),m=Object(c["x"])("CheckoutOptions"),j=Object(c["x"])("Footer");return Object(c["q"])(),Object(c["d"])("div",r,[Object(c["h"])(b),Object(c["h"])("div",i,[Object(c["h"])("div",a,[Object(c["h"])("div",o,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(h.scheduled.filter((function(t){return t.date==p.date})),(function(t){return Object(c["q"])(),Object(c["d"])(v,{key:t,poster:t.watchable.poster,title:t.watchable.title,classification:t.watchable.classification,start:t.start,end:t.end,location:t.location,id:t._id,date:t.date,onTicketSelected:f.addCheckout},null,8,["poster","title","classification","start","end","location","id","date","onTicketSelected"])})),128))])]),Object(c["h"])("div",s,[Object(c["h"])("div",u,[Object(c["F"])(Object(c["h"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return h.date=t}),class:"form-control",type:"date",onChange:e[2]||(e[2]=function(){return t.changedDate.apply(t,arguments)})},null,544),[[c["C"],h.date]])]),Object(c["h"])("div",l,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(h.checkouts,(function(t,e){return Object(c["q"])(),Object(c["d"])(g,{id:t.id,key:t,"movie-id":t.movieId,title:t.title,type:t.type,cost:t.cost,amount:t.amount,date:t.date,class:{"bg-light":e==h.currentIndex},"is-editing":e==h.currentIndex,onClick:function(n){return f.setActive(t,e)},onAdd:f.add,onSubtract:f.subtract,onRemove:f.remove},null,8,["id","movie-id","title","type","cost","amount","date","class","is-editing","onClick","onAdd","onSubtract","onRemove"])})),128)),h.checkouts.length>0?(Object(c["q"])(),Object(c["d"])(O,{key:0,cost:h.total,count:h.count,onClick:e[3]||(e[3]=function(t){return f.setActive(null,-1)})},null,8,["cost","count"])):Object(c["e"])("",!0),h.checkouts.length>0?(Object(c["q"])(),Object(c["d"])(m,{key:1,onCancel:f.cancel},null,8,["onCancel"])):Object(c["e"])("",!0)])])]),Object(c["h"])(j)])}n("7db0"),n("4160"),n("b680"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("1276"),n("159b"),n("96cf");var h=n("1da1"),f={class:"list-group-item py-2"},p={class:"row"},b={class:"col-auto pl-1 py-0"},v={class:"col p-0 d-flex flex-column justify-content-around"},g={class:"d-flex justify-content-between align-items-center"},O={class:"h5 m-0"},m={class:"m-0"},j={class:"badge badge-light"},x={class:"col-auto pl-3 pr-1"},k={class:"list-group list-group-horizontal h-100"};function y(t,e,n,r,i,a){var o=Object(c["x"])("Badge"),s=Object(c["x"])("Ticket");return Object(c["q"])(),Object(c["d"])("div",f,[Object(c["h"])("div",p,[Object(c["h"])("div",b,[Object(c["h"])("div",null,[Object(c["h"])("img",{class:"img-fluid img-thumbnail",width:"70",src:n.poster,alt:""},null,8,["src"])])]),Object(c["h"])("div",v,[Object(c["h"])("div",g,[Object(c["h"])("span",O,Object(c["z"])(n.title),1)]),Object(c["h"])("span",m,[Object(c["h"])(o,{content:n.classification},null,8,["content"]),Object(c["h"])(o),Object(c["h"])("span",j,"Zaal "+Object(c["z"])(n.location),1)]),Object(c["h"])("small",null,Object(c["z"])(n.start)+" - "+Object(c["z"])(n.end),1)]),Object(c["h"])("div",x,[Object(c["h"])("div",k,[Object(c["h"])(s,{name:"Standaard",cost:"7,50",onClicked:a.ticketSelected},null,8,["onClicked"]),Object(c["h"])(s,{name:"Kind",cost:"5,50",onClicked:a.ticketSelected},null,8,["onClicked"]),Object(c["h"])(s,{name:"Standaard Luxe",cost:"10,00",onClicked:a.ticketSelected},null,8,["onClicked"]),Object(c["h"])(s,{name:"Kind Luxe",cost:"8,00",onClicked:a.ticketSelected},null,8,["onClicked"])])])])])}n("b0c0");var S={class:"mb-1"},I={class:"text-muted"};function w(t,e,n,r,i,a){return Object(c["q"])(),Object(c["d"])("button",{class:"ticket list-group-item list-group-item-action text-center",onClick:e[1]||(e[1]=function(){return a.clicked.apply(a,arguments)})},[Object(c["h"])("p",S,Object(c["z"])(n.name),1),Object(c["h"])("small",I,"€ "+Object(c["z"])(n.cost),1)])}var E={name:"Ticket",props:{name:String,cost:String},methods:{clicked:function(){this.$emit("clicked",{type:this.name,cost:this.cost})}}};E.render=w;var C=E,R=n("682f"),A={name:"Scheduled",components:{Ticket:C,Badge:R["a"]},props:{id:String,poster:String,title:String,location:String,classification:String,start:String,end:String,date:String},methods:{ticketSelected:function(t){this.$emit("ticket-selected",{id:this.id,title:this.title,type:t.type,cost:t.cost})}}};A.render=y;var T=A,$={class:"list-group-item list-group-item-action py-1"},P={class:"row"},_={class:"col-auto align-self-center border-right h-100"},z={class:"badge badge-primary badge-pill"},N={class:"col my-1 d-flex flex-column"},q={key:0,class:"col-auto d-flex align-items-center p-0"},F=Object(c["h"])("i",{class:"fas fa-ban"},null,-1),U={class:"btn-group-vertical",role:"group"},L=Object(c["h"])("i",{class:"fas fa-caret-up"},null,-1),B=Object(c["h"])("i",{class:"fas fa-caret-down"},null,-1),D={class:"col-auto align-self-center"};function K(t,e,n,r,i,a){return Object(c["q"])(),Object(c["d"])("div",$,[Object(c["h"])("div",P,[Object(c["h"])("div",_,[Object(c["h"])("span",z,Object(c["z"])(n.amount),1)]),Object(c["h"])("div",N,[Object(c["h"])("small",null,Object(c["z"])(n.title),1),Object(c["h"])("span",null,Object(c["z"])(n.type),1),Object(c["h"])("small",null,Object(c["z"])(n.date),1)]),n.isEditing?(Object(c["q"])(),Object(c["d"])("div",q,[Object(c["h"])("span",{class:"p-2",onClick:e[1]||(e[1]=Object(c["G"])((function(){return a.remove.apply(a,arguments)}),["stop"]))},[F]),Object(c["h"])("div",U,[Object(c["h"])("span",{class:"h-100 py-0 px-2",onClick:e[2]||(e[2]=Object(c["G"])((function(){return a.add.apply(a,arguments)}),["stop"]))},[L]),Object(c["h"])("span",{class:"h-100 py-0 px-2",onClick:e[3]||(e[3]=Object(c["G"])((function(){return a.subtract.apply(a,arguments)}),["stop"]))},[B])])])):Object(c["e"])("",!0),Object(c["h"])("div",D,[Object(c["h"])("span",null,"€ "+Object(c["z"])(n.cost),1)])])])}n("a9e3");var M={name:"CheckoutItem",props:{movieId:String,title:String,type:String,amount:Number,cost:String,date:String,isEditing:Boolean},methods:{add:function(){this.$emit("add",this.id)},subtract:function(){this.$emit("subtract",this.id)},remove:function(){this.$emit("remove",this.id)}}};M.render=K;var G=M,J={class:"list-group-item disabled border-top-1"},X={class:"row font-weight-bold"},Y={class:"col"},V={class:"col-auto"};function W(t,e,n,r,i,a){return Object(c["q"])(),Object(c["d"])("div",J,[Object(c["h"])("div",X,[Object(c["h"])("div",Y,[Object(c["h"])("span",null,Object(c["z"])(n.count)+" tickets",1)]),Object(c["h"])("div",V,[Object(c["h"])("span",null,"€ "+Object(c["z"])(n.cost),1)])])])}var Z={name:"CheckoutTotal",props:{cost:String,count:Number}};Z.render=W;var H=Z,Q={class:"list-group-item"},tt={class:"row"},et={class:"col"},nt=Object(c["h"])("i",{class:"fas fa-ban"},null,-1),ct={class:"col"},rt=Object(c["h"])("i",{class:"fas fa-check-circle"},null,-1);function it(t,e,n,r,i,a){return Object(c["q"])(),Object(c["d"])("div",Q,[Object(c["h"])("div",tt,[Object(c["h"])("div",et,[Object(c["h"])("button",{role:"button",class:"btn btn-secondary w-100 py-3",onClick:e[1]||(e[1]=function(){return a.cancel.apply(a,arguments)})},[nt])]),Object(c["h"])("div",ct,[Object(c["h"])("button",{role:"button",class:"btn btn-primary w-100 py-3",onClick:e[2]||(e[2]=function(){return a.next.apply(a,arguments)})},[rt])])])])}var at={name:"CheckoutOptions",methods:{cancel:function(){this.$emit("cancel")},next:function(){this.$emit("next")}}};at.render=it;var ot=at,st=n("4c03"),ut=n("1808"),lt=n("e8d9"),dt=n("22f0"),ht={name:"TicketSelection",components:{Scheduled:T,CheckoutItem:G,CheckoutTotal:H,CheckoutOptions:ot,Footer:st["a"],Navbar:ut["a"]},data:function(){return{scheduled:[],checkouts:[],total:0,count:0,currentIndex:-1,currentItem:{},date:(new Date).toISOString().substring(0,10)}},created:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,lt["a"].get();case 3:return n=e.sent.data,e.next=6,dt["a"].get();case 6:c=e.sent.data,c.forEach((function(t){t.watchable=n.find((function(e){return e._id==t.watchableId}))})),t.scheduled=c.sort((function(t,e){var n=parseInt(t.start.split(":")[0]),c=parseInt(t.start.split(":")[1]),r=parseInt(e.start.split(":")[0]),i=parseInt(e.start.split(":")[1]);return n<r||n==r&&c<i?-1:n>r||n==r&&c>i?1:0})),console.log(t.scheduled),console.log(t.date),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()},methods:{addCheckout:function(t){var e=this.checkouts.filter((function(e){return e.id==t.id&&e.type==t.type&&e.title==t.title}));0==e.length?this.checkouts.push({id:t.id,title:t.title,movieId:t.movieId,type:t.type,cost:t.cost,costOne:t.cost,amount:1,date:t.date}):e[0].amount++,this.updateCheckoutList()},cancel:function(){this.checkouts=[]},add:function(){this.currentItem.amount++,this.updateCheckoutList()},subtract:function(){this.currentItem.amount>1&&this.currentItem.amount--,this.updateCheckoutList()},remove:function(){var t=this;this.checkouts=this.checkouts.filter((function(e){return e!=t.currentItem})),this.currentItem={},this.currentIndex=-1,this.updateCheckoutList()},updateCheckoutList:function(){var t=0;this.checkouts.forEach((function(e){e.cost=(parseInt(e.amount.toString().replace(",","."))*parseInt(e.costOne.toString().replace(",","."))).toFixed(2).replace(".",","),t+=parseFloat(e.cost.toString().replace(",","."))})),this.total=t.toFixed(2).replace(".",",");var e=0;this.checkouts.forEach((function(t){return e+=parseInt(t.amount)})),this.count=e},setActive:function(t,e){this.currentIndex==e?(this.currentIndex=-1,this.currentItem={}):(this.currentIndex=e,this.currentItem=t)}}};ht.render=d;e["default"]=ht},d784:function(t,e,n){"use strict";n("ac1f");var c=n("6eeb"),r=n("d039"),i=n("b622"),a=n("9263"),o=n("9112"),s=i("species"),u=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),h=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var p=i(t),b=!r((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),v=b&&!r((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!b||!v||"replace"===t&&(!u||!l||h)||"split"===t&&!f){var g=/./[p],O=n(p,""[t],(function(t,e,n,c,r){return e.exec===a?b&&!r?{done:!0,value:g.call(e,n,c)}:{done:!0,value:t.call(n,e,c)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),m=O[0],j=O[1];c(String.prototype,t,m),c(RegExp.prototype,p,2==e?function(t,e){return j.call(t,this,e)}:function(t){return j.call(t,this)})}d&&o(RegExp.prototype[p],"sham",!0)}}}]);
//# sourceMappingURL=chunk-7c761897.013ce462.js.map