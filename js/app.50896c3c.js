(function(t){function e(e){for(var n,r,o=e[0],s=e[1],l=e[2],b=0,j=[];b<o.length;b++)r=o[b],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&j.push(c[r][0]),c[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(j.length)j.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==c[s]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},c={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/test-table/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0276":function(t,e,a){},"0501":function(t,e,a){},"0781":function(t,e,a){"use strict";a("0276")},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("7a23"),c=a("5502");function i(t){const e=Math.floor(Math.random()*Math.floor(t.length));return t[e]}function r(){const t=new Date,e=Math.floor(10*Math.random());return t.setDate(t.getDate()+e),t.toLocaleDateString()}function o(){return Array.from({length:100},()=>({date:r(),name:i(["Хлеб","Молоко","Мясо","Масло","Сыр","Огурцы","Кока-кола","Дыня","Зелень"]),count:Math.floor(100*Math.random()),distance:Math.floor(100*Math.random())}))}const s=Object(c["a"])({state(){return{data:[],filteredData:[]}},actions:{getData(){const t=o();this.commit("setData",t),this.commit("setFilteredData",t)}},mutations:{setData(t,e){t.data=e},setFilteredData(t,e){t.filteredData=e},resetFilteredData(t){t.filteredData=t.data}}});function l(t,e,a,c,i,r){const o=Object(n["L"])("Filters"),s=Object(n["L"])("Table");return Object(n["D"])(),Object(n["i"])(n["b"],null,[Object(n["m"])(o),Object(n["m"])(s)],64)}const u=t=>(Object(n["G"])("data-v-6dcca9c2"),t=t(),Object(n["E"])(),t),b={class:"table table-striped"},j=["onClick"],d={class:"navigation"},O={class:"pagination"},f=["onClick"],p={class:"input-group mb-3 count-on-page"},h=u(()=>Object(n["j"])("label",{class:"input-group-text",for:"value"},"На странице",-1)),m=["value"];function g(t,e,a,c,i,r){return Object(n["D"])(),Object(n["i"])(n["b"],null,[Object(n["j"])("table",b,[Object(n["j"])("thead",null,[Object(n["j"])("tr",null,[(Object(n["D"])(!0),Object(n["i"])(n["b"],null,Object(n["J"])(i.columns,t=>(Object(n["D"])(),Object(n["i"])("th",{key:t},[Object(n["j"])("div",{onClick:e=>r.sortFunc(t.name)},[Object(n["l"])(Object(n["N"])(t.translation)+" ",1),Object(n["j"])("img",{class:Object(n["w"])(["icon__caret",{"icon__caret--active":i.sortColumn===t.name,"icon__caret--reverse":i.reverse}]),src:"icons/caret.svg"},null,2)],8,j)]))),128))])]),Object(n["j"])("tbody",null,[(Object(n["D"])(!0),Object(n["i"])(n["b"],null,Object(n["J"])(r.filteredData,t=>(Object(n["D"])(),Object(n["i"])("tr",{key:t},[(Object(n["D"])(!0),Object(n["i"])(n["b"],null,Object(n["J"])(i.columns,e=>(Object(n["D"])(),Object(n["i"])("td",{key:e},[Object(n["j"])("div",null,Object(n["N"])(t[e.name]),1)]))),128))]))),128))])]),Object(n["j"])("div",d,[Object(n["j"])("nav",null,[Object(n["j"])("ul",O,[Object(n["j"])("li",{class:Object(n["w"])(["page-item",{disabled:this.page<2}])},[Object(n["j"])("a",{class:"page-link",onClick:e[0]||(e[0]=t=>r.changePage(-1))},"«")],2),(Object(n["D"])(!0),Object(n["i"])(n["b"],null,Object(n["J"])(r.pagesCount,t=>(Object(n["D"])(),Object(n["i"])("li",{key:t,class:Object(n["w"])(["page-item",{active:this.page===t}])},[Object(n["j"])("a",{class:"page-link",onClick:e=>this.page=t},Object(n["N"])(t),9,f)],2))),128)),Object(n["j"])("li",{class:Object(n["w"])(["page-item",{disabled:this.page>=r.pagesCount}])},[Object(n["j"])("a",{class:"page-link",onClick:e[1]||(e[1]=t=>r.changePage(1))},"»")],2)])]),Object(n["j"])("div",p,[h,Object(n["Y"])(Object(n["j"])("select",{class:"form-select",id:"value","onUpdate:modelValue":e[2]||(e[2]=t=>i.countOnPage=t)},[(Object(n["D"])(),Object(n["i"])(n["b"],null,Object(n["J"])(5,t=>Object(n["j"])("option",{key:t,value:10*t},Object(n["N"])(10*t),9,m)),64))],512),[[n["U"],i.countOnPage]])])])],64)}const v=[{name:"date",translation:"Дата"},{name:"name",translation:"Название"},{name:"count",translation:"Колличество"},{name:"distance",translation:"Расстояние"}];var D={data(){return{columns:v,sortColumn:"",reverse:!1,page:1,countOnPage:10}},name:"Table",props:{},computed:{filteredData(){return this.$store.state.filteredData.slice((this.page-1)*this.countOnPage,this.page*this.countOnPage)},pagesCount(){return Math.ceil(this.$store.state.filteredData.length/this.countOnPage)}},methods:{sortFunc(t){if("date"!==t){if(this.sortColumn===t)return this.$store.commit("setFilteredData",this.$store.state.filteredData.reverse()),void(this.reverse=!this.reverse);this.$store.commit("setFilteredData",this.$store.state.filteredData.sort((e,a)=>e[t]<a[t]?1:-1)),this.sortColumn=t,this.reverse=!1,this.page=1}},changePage(t){this.page=this.page+t}}},y=(a("88f9"),a("6b0d")),k=a.n(y);const F=k()(D,[["render",g],["__scopeId","data-v-6dcca9c2"]]);var w=F;const C=t=>(Object(n["G"])("data-v-4c63e5d4"),t=t(),Object(n["E"])(),t),P={class:"filters"},$={class:"input-group"},_=C(()=>Object(n["j"])("label",{class:"input-group-text",for:"column"},"Колонка",-1)),M=["value"],x={class:"input-group"},J=C(()=>Object(n["j"])("label",{class:"input-group-text",for:"condition"},"Условие",-1)),S=C(()=>Object(n["j"])("option",null,"равно",-1)),U={key:0},L={key:1},N={key:2},T={class:"input-group"},V=C(()=>Object(n["j"])("label",{class:"input-group-text",for:"value"},"Значение",-1)),I=["disabled"];function Y(t,e,a,c,i,r){return Object(n["D"])(),Object(n["i"])("div",P,[Object(n["j"])("div",$,[_,Object(n["Y"])(Object(n["j"])("select",{class:"form-select",id:"column","onUpdate:modelValue":e[0]||(e[0]=t=>i.filter.column=t)},[(Object(n["D"])(!0),Object(n["i"])(n["b"],null,Object(n["J"])(i.columns,t=>(Object(n["D"])(),Object(n["i"])("option",{key:t.name,value:t.name},Object(n["N"])(t.translation),9,M))),128))],512),[[n["U"],i.filter.column]])]),Object(n["j"])("div",x,[J,Object(n["Y"])(Object(n["j"])("select",{class:"form-select",id:"condition","onUpdate:modelValue":e[1]||(e[1]=t=>i.filter.condition=t)},[S,"date"!==i.filter.column?(Object(n["D"])(),Object(n["i"])("option",U,"содержит")):Object(n["h"])("",!0),"name"!==i.filter.column?(Object(n["D"])(),Object(n["i"])("option",L,"больше")):Object(n["h"])("",!0),"name"!==i.filter.column?(Object(n["D"])(),Object(n["i"])("option",N,"меньше")):Object(n["h"])("",!0)],512),[[n["U"],i.filter.condition]])]),Object(n["j"])("div",T,[V,"date"===i.filter.column?(Object(n["D"])(),Object(n["i"])("input",{key:0,class:"form-control",type:"date",id:"value",onChange:e[2]||(e[2]=(...t)=>r.changeFilterDate&&r.changeFilterDate(...t))},null,32)):Object(n["Y"])((Object(n["D"])(),Object(n["i"])("input",{key:1,class:"form-control",id:"value","onUpdate:modelValue":e[3]||(e[3]=t=>i.filter.value=t)},null,512)),[[n["V"],i.filter.value]])]),Object(n["j"])("button",{class:"btn btn-outline-success",disabled:r.setFiltersButtonIsDisabled,onClick:e[4]||(e[4]=(...t)=>r.filterFunc&&r.filterFunc(...t))},"Фильтровать",8,I),Object(n["j"])("button",{class:"btn btn-outline-danger",onClick:e[5]||(e[5]=t=>r.resetFilters())},"Сбросить")])}var A={data(){return{filter:{},columns:v}},name:"Filters",props:{},computed:{setFiltersButtonIsDisabled(){return!this.filter.column||!this.filter.condition||!this.filter.value}},methods:{changeFilterDate(t){this.filter.value=t.target.value.split("-").reverse().join("/")},filterFunc(){const t=this.filter.column,e=this.filter.value;switch(this.filter.condition){case"равно":this.$store.commit("setFilteredData",this.$store.state.data.filter(a=>a[t]==e));break;case"содержит":this.$store.commit("setFilteredData",this.$store.state.data.filter(a=>a[t].toString().toLowerCase().includes(e.toLowerCase())));break;case"больше":this.$store.commit("setFilteredData",this.$store.state.data.filter(a=>a[t]>e));break;case"меньше":this.$store.commit("setFilteredData",this.$store.state.data.filter(a=>a[t]<e));break}},resetFilters(){this.$store.commit("resetFilteredData"),this.filter={}}}};a("5ed0");const B=k()(A,[["render",Y],["__scopeId","data-v-4c63e5d4"]]);var E=B,G={name:"App",components:{Table:w,Filters:E},created(){this.$store.dispatch("getData")}};a("0781");const q=k()(G,[["render",l]]);var z=q,H=a("b80d");a("f9e3"),a("1a26");Object(n["f"])(z).use(H["a"]).use(s).mount("#app")},"5ed0":function(t,e,a){"use strict";a("b34d")},"88f9":function(t,e,a){"use strict";a("0501")},b34d:function(t,e,a){}});
//# sourceMappingURL=app.50896c3c.js.map