(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fceff25"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==o.call(t)?a(t):i(n(t))}},3530:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),i={class:"admin"},o=Object(n["h"])("h1",null,"Admin",-1);function c(t,e,r,c,a,s){var f=Object(n["x"])("AddWatchable");return Object(n["q"])(),Object(n["d"])("div",i,[o,Object(n["h"])(f)])}r("a4d3"),r("e01a");var a={class:"add-watchable"},s={class:"preview"},f=Object(n["g"])(" title: String, description: String, poster: String, length: Number, classification: String, variations: Array, "),l={class:"row"},u={class:"form-group col-4"},d=Object(n["h"])("label",{for:"title"},"Titel",-1),b={class:"form-group col-2"},p=Object(n["h"])("label",{for:"length"},"Lengte",-1),h={class:"input-group"},v=Object(n["h"])("div",{class:"input-group-append"},[Object(n["h"])("div",{class:"input-group-text"},"minuten")],-1),g={class:"form-group col-6"},O=Object(n["h"])("label",{for:"poster"},"Poster afbeelding URL",-1),m={class:"row"},y={class:"form-group col-8"},j=Object(n["h"])("label",{for:"description"},"Beschrijving",-1),w={class:"col-4"},S={class:"form-group"},N=Object(n["h"])("label",{for:"classification"},"Klassificatie",-1);function x(t,e,r,i,o,c){var x=Object(n["x"])("Watchable");return Object(n["q"])(),Object(n["d"])("div",a,[Object(n["h"])("div",s,[f,Object(n["h"])(x,{title:o.title,description:o.description,poster:o.poster,length:o.length},null,8,["title","description","poster","length"])]),Object(n["h"])("form",null,[Object(n["h"])("div",l,[Object(n["h"])("div",u,[d,Object(n["D"])(Object(n["h"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.title=t}),type:"text",class:"form-control",id:"title",placeholder:"Titel"},null,512),[[n["B"],o.title]])]),Object(n["h"])("div",b,[p,Object(n["h"])("div",h,[Object(n["D"])(Object(n["h"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return o.length=t}),type:"number",class:"form-control",id:"length"},null,512),[[n["B"],o.length]]),v])]),Object(n["h"])("div",g,[O,Object(n["D"])(Object(n["h"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return o.poster=t}),type:"text",class:"form-control",id:"poster"},null,512),[[n["B"],o.poster]])])]),Object(n["h"])("div",m,[Object(n["h"])("div",y,[j,Object(n["D"])(Object(n["h"])("textarea",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return o.description=t}),type:"text",class:"form-control",id:"description",rows:"5"},null,512),[[n["B"],o.description]])]),Object(n["h"])("div",w,[Object(n["h"])("div",S,[N,Object(n["D"])(Object(n["h"])("input",{"onUpdate:modelValue":e[5]||(e[5]=function(t){return o.classification=t}),type:"text",class:"form-control",id:"classification"},null,512),[[n["B"],o.classification]])])])])])])}var A={class:"card flex-row flex-wrap"},I={class:"card-header border-0"},E={class:"card-block px-2"},T={class:"card-title"},P={class:"card-text"},F=Object(n["h"])("a",{href:"#",class:"btn btn-primary"},"BUTTON",-1),U=Object(n["h"])("div",{class:"w-100"},null,-1),V=Object(n["h"])("div",{class:"card-footer w-100 text-muted"},"FOOTER",-1);function k(t,e,r,i,o,c){return Object(n["q"])(),Object(n["d"])("div",A,[Object(n["h"])("div",I,[Object(n["h"])("img",{src:t.img,alt:""},null,8,["src"])]),Object(n["h"])("div",E,[Object(n["h"])("h4",T,Object(n["z"])(r.title),1),Object(n["h"])("p",P,Object(n["z"])(r.description),1),F]),U,V])}r("a9e3");var _={name:"Watchable",props:{title:String,description:String,poster:String,length:Number,classification:String,variations:Array}};_.render=k;var B=_,W={name:"AddWatchable",components:{Watchable:B},data:function(){return{title:"",length:0,poster:"",description:"",classification:""}}};W.render=x;var D=W,R={name:"Admin",components:{AddWatchable:D},data:function(){}};R.render=c;e["default"]=R},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),i=r("5899"),o="["+i+"]",c=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),s=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),c=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},7156:function(t,e,r){var n=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var o,c;return i&&"function"==typeof(o=e.constructor)&&o!==r&&n(c=o.prototype)&&c!==r.prototype&&i(t,c),t}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||c(e,t,{value:o.f(t)})}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),c=r("c430"),a=r("83ab"),s=r("4930"),f=r("fdbf"),l=r("d039"),u=r("5135"),d=r("e8b5"),b=r("861d"),p=r("825a"),h=r("7b0b"),v=r("fc6a"),g=r("c04e"),O=r("5c6c"),m=r("7c73"),y=r("df75"),j=r("241c"),w=r("057f"),S=r("7418"),N=r("06cf"),x=r("9bf2"),A=r("d1e7"),I=r("9112"),E=r("6eeb"),T=r("5692"),P=r("f772"),F=r("d012"),U=r("90e3"),V=r("b622"),k=r("e538"),_=r("746f"),B=r("d44e"),W=r("69f3"),D=r("b727").forEach,R=P("hidden"),C="Symbol",L="prototype",J=V("toPrimitive"),M=W.set,q=W.getterFor(C),G=Object[L],$=i.Symbol,z=o("JSON","stringify"),X=N.f,Y=x.f,K=w.f,Q=A.f,H=T("symbols"),Z=T("op-symbols"),tt=T("string-to-symbol-registry"),et=T("symbol-to-string-registry"),rt=T("wks"),nt=i.QObject,it=!nt||!nt[L]||!nt[L].findChild,ot=a&&l((function(){return 7!=m(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=X(G,e);n&&delete G[e],Y(t,e,r),n&&t!==G&&Y(G,e,n)}:Y,ct=function(t,e){var r=H[t]=m($[L]);return M(r,{type:C,tag:t,description:e}),a||(r.description=e),r},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof $},st=function(t,e,r){t===G&&st(Z,e,r),p(t);var n=g(e,!0);return p(r),u(H,n)?(r.enumerable?(u(t,R)&&t[R][n]&&(t[R][n]=!1),r=m(r,{enumerable:O(0,!1)})):(u(t,R)||Y(t,R,O(1,{})),t[R][n]=!0),ot(t,n,r)):Y(t,n,r)},ft=function(t,e){p(t);var r=v(e),n=y(r).concat(pt(r));return D(n,(function(e){a&&!ut.call(r,e)||st(t,e,r[e])})),t},lt=function(t,e){return void 0===e?m(t):ft(m(t),e)},ut=function(t){var e=g(t,!0),r=Q.call(this,e);return!(this===G&&u(H,e)&&!u(Z,e))&&(!(r||!u(this,e)||!u(H,e)||u(this,R)&&this[R][e])||r)},dt=function(t,e){var r=v(t),n=g(e,!0);if(r!==G||!u(H,n)||u(Z,n)){var i=X(r,n);return!i||!u(H,n)||u(r,R)&&r[R][n]||(i.enumerable=!0),i}},bt=function(t){var e=K(v(t)),r=[];return D(e,(function(t){u(H,t)||u(F,t)||r.push(t)})),r},pt=function(t){var e=t===G,r=K(e?Z:v(t)),n=[];return D(r,(function(t){!u(H,t)||e&&!u(G,t)||n.push(H[t])})),n};if(s||($=function(){if(this instanceof $)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=U(t),r=function(t){this===G&&r.call(Z,t),u(this,R)&&u(this[R],e)&&(this[R][e]=!1),ot(this,e,O(1,t))};return a&&it&&ot(G,e,{configurable:!0,set:r}),ct(e,t)},E($[L],"toString",(function(){return q(this).tag})),E($,"withoutSetter",(function(t){return ct(U(t),t)})),A.f=ut,x.f=st,N.f=dt,j.f=w.f=bt,S.f=pt,k.f=function(t){return ct(V(t),t)},a&&(Y($[L],"description",{configurable:!0,get:function(){return q(this).description}}),c||E(G,"propertyIsEnumerable",ut,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:$}),D(y(rt),(function(t){_(t)})),n({target:C,stat:!0,forced:!s},{for:function(t){var e=String(t);if(u(tt,e))return tt[e];var r=$(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(u(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!a},{create:lt,defineProperty:st,defineProperties:ft,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:l((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(h(t))}}),z){var ht=!s||l((function(){var t=$();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(b(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),i[1]=e,z.apply(null,i)}})}$[L][J]||I($[L],J,$[L].valueOf),B($,C),F[R]=!0},a9e3:function(t,e,r){"use strict";var n=r("83ab"),i=r("da84"),o=r("94ca"),c=r("6eeb"),a=r("5135"),s=r("c6b6"),f=r("7156"),l=r("c04e"),u=r("d039"),d=r("7c73"),b=r("241c").f,p=r("06cf").f,h=r("9bf2").f,v=r("58a8").trim,g="Number",O=i[g],m=O.prototype,y=s(d(m))==g,j=function(t){var e,r,n,i,o,c,a,s,f=l(t,!1);if("string"==typeof f&&f.length>2)if(f=v(f),e=f.charCodeAt(0),43===e||45===e){if(r=f.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+f}for(o=f.slice(2),c=o.length,a=0;a<c;a++)if(s=o.charCodeAt(a),s<48||s>i)return NaN;return parseInt(o,n)}return+f};if(o(g,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var w,S=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof S&&(y?u((function(){m.valueOf.call(r)})):s(r)!=g)?f(new O(j(e)),r,S):j(e)},N=n?b(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;N.length>x;x++)a(O,w=N[x])&&!a(S,w)&&h(S,w,p(O,w));S.prototype=m,m.constructor=S,c(i,g,S)}},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),c=r("50c4"),a=r("65f0"),s=[].push,f=function(t){var e=1==t,r=2==t,f=3==t,l=4==t,u=6==t,d=5==t||u;return function(b,p,h,v){for(var g,O,m=o(b),y=i(m),j=n(p,h,3),w=c(y.length),S=0,N=v||a,x=e?N(b,w):r?N(b,0):void 0;w>S;S++)if((d||S in y)&&(g=y[S],O=j(g,S,m),t))if(e)x[S]=O;else if(O)switch(t){case 3:return!0;case 5:return g;case 6:return S;case 2:s.call(x,g)}else if(l)return!1;return u?-1:f||l?l:x}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),c=r("5135"),a=r("861d"),s=r("9bf2").f,f=r("e893"),l=o.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var u={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(u[e]=!0),e};f(d,l);var b=d.prototype=l.prototype;b.constructor=d;var p=b.toString,h="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;s(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(c(u,t))return"";var r=h?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-0fceff25.d9990403.js.map