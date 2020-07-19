(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],f=0,m=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"030d":function(t,e,n){"use strict";var a=n("de2e"),i=n.n(a);i.a},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"0405":function(t,e,n){},"15f2":function(t,e,n){"use strict";var a=n("b3f9"),i=n.n(a);i.a},"53a2":function(t,e,n){"use strict";var a=n("0405"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container d-flex justify-content-around vertical-center"},[n("div",{staticClass:"row"},[n("h2",{staticClass:"title-app animated bounce delay-0.5s"},[t._v("Weather App")]),n("hr"),n("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in"}},[n(t.currentComponent,{tag:"component",attrs:{weatherInfo:t.weatherInfo},on:{"icon-loading":function(e){t.currentComponent="loading"},"icon-loaded":function(e){t.currentComponent="weather-display"},backToForm:function(e){t.currentComponent="weather-form"}}})],1)],1)])},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"animated bounce delay-0.5s",on:{submit:function(t){t.preventDefault()}}},[n("div",{staticClass:"form-group"},[n("span",[n("label",{attrs:{for:"city"}},[t._v("Enter City")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"form-control",attrs:{type:"text",id:"city"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),n("br"),n("label",{attrs:{for:"units"}},[t._v("Choose units:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.units,expression:"units"}],staticClass:"form-control",attrs:{id:"units"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.units=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"imperial"}},[t._v("Fahrenheit")]),n("option",{attrs:{value:"metric"}},[t._v("Celsius")]),n("option",{attrs:{value:"kelvin"}},[t._v("Kelvin")])])]),n("br"),n("button",{staticClass:"btn btn-primary",on:{click:t.submitCity}},[t._v(" Submit ")])])])},s=[],c=(n("a4d3"),n("e01a"),n("99af"),n("b0c0"),{API_KEY:"c41278b63a33e456e869d11ff99c94c1"}),l={data:function(){return{API_KEY:c.API_KEY,city:"",units:"imperial",weatherInfo:{cityName:"",weatherCondition:"",weatherDescription:"",temperature:0,tempFeelsLike:0,humidity:0,tempMin:0,tempMax:0,unitSymbol:"",icon:""}}},methods:{submitCity:function(){var t=this;this.$emit("icon-loading"),"imperial"===this.units?this.weatherInfo.unitSymbol="F":"metric"===this.units?this.weatherInfo.unitSymbol="C":"kelvin"===this.units&&(this.weatherInfo.unitSymbol="K"),this.$http.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(this.city,"&appid=").concat(this.API_KEY,"&units=").concat(this.units)).then((function(e){console.log(e.data),t.weatherInfo.cityName=e.data.name,t.weatherInfo.weatherCondition=e.data.weather[0].main,t.weatherInfo.weatherDescription=e.data.weather[0].description,t.weatherInfo.temperature=e.data.main.temp,t.weatherInfo.tempFeelsLike=e.data.main.feels_like,t.weatherInfo.humidity=e.data.main.humidity,t.weatherInfo.tempMin=e.data.main.temp_min,t.weatherInfo.tempMax=e.data.main.temp_max,t.weatherInfo.iconUrl="http://openweathermap.org/img/wn/".concat(e.data.weather[0].icon,"@2x.png")})).catch((function(t){console.log(t),t&&(console.log("we got in here"),L.$emit("error-occurred",t))})),console.log("WeatherInfo: ",this.weatherInfo),L.$emit("weatherInfo",this.weatherInfo),L.$emit("citySelected",this.weatherInfo)}}},u=l,f=n("2877"),m=Object(f["a"])(u,o,s,!1,null,null,null),d=m.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weather-card animated fadeIn"},[n("div",{staticClass:"card",staticStyle:{width:"20em"}},[n("img",{staticClass:"card-img-top",attrs:{src:t.weatherInfo.iconUrl,alt:"weather_icon"}}),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(" "+t._s(t.weatherInfo.cityName)+" ")]),n("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(" "+t._s(t.weatherInfo.weatherDescription)+" ")]),n("ul",{staticClass:"list-group list-group-flush"},[n("li",{staticClass:"list-group-item"},[t._v(" "+t._s(t.weatherInfo.temperature)+" "+t._s(t.weatherInfo.unitSymbol)+" ° ")]),n("li",{staticClass:"list-group-item"},[t._v(" Feels like: "+t._s(t.weatherInfo.tempFeelsLike)+" "+t._s(t.weatherInfo.unitSymbol)+" ° ")]),n("li",{staticClass:"list-group-item"},[t._v(" Humidity: "+t._s(t.weatherInfo.humidity)+" % ")]),n("li",{staticClass:"list-group-item"},[t._v(" Min Temp: "+t._s(t.weatherInfo.tempMin)+" "+t._s(t.weatherInfo.unitSymbol)+" ° ")]),n("li",{staticClass:"list-group-item"},[t._v(" Max Temp: "+t._s(t.weatherInfo.tempMax)+" "+t._s(t.weatherInfo.unitSymbol)+" ° ")]),n("li",{staticClass:"list-group-item"},[t._v(" Condition: "+t._s(t.weatherInfo.weatherCondition)+" ")])])]),n("button",{staticClass:"btn btn-primary",on:{click:t.backToForm}},[t._v(" Search Again ")])])])},h=[],v={props:{weatherInfo:Object},methods:{backToForm:function(){this.$emit("backToForm")}}},w=v,y=(n("15f2"),Object(f["a"])(w,p,h,!1,null,null,null)),b=y.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-wheel animated fadeIn"},[n("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])])}],C={methods:{loadTimer:function(){var t=this;setTimeout((function(){t.$emit("icon-loaded")}),1500)}},created:function(){this.loadTimer()}},I=C,x=(n("53a2"),Object(f["a"])(I,_,g,!1,null,null,null)),k=x.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error-disp animated jackInTheBox"},[n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" An error occured, did you type in a valid city? ")]),n("button",{staticClass:"btn btn-primary",on:{click:t.backToForm}},[t._v("Search Again")])])},O=[],$={methods:{backToForm:function(){this.$emit("backToForm")}}},j=$,T=(n("030d"),Object(f["a"])(j,S,O,!1,null,null,null)),F=T.exports,E={components:{WeatherForm:d,WeatherDisplay:b,Loading:k,ErrorDisplay:F},data:function(){return{citySelected:!1,weatherInfo:null,iconLoaded:!1,currentComponent:"weather-form"}},methods:{test:function(t){console.log(t)}},created:function(){var t=this;L.$on("citySelected",(function(e){t.citySelected=!0,t.weatherInfo=e})),L.$on("error-occurred",(function(){t.currentComponent="error-display"}))}},M=E,P=(n("034f"),Object(f["a"])(M,i,r,!1,null,null,null)),A=P.exports,D=n("bc3a"),K=n.n(D);n.d(e,"EventBus",(function(){return L})),a["a"].config.productionTip=!1;var L=new a["a"];a["a"].prototype.$http=K.a,new a["a"]({render:function(t){return t(A)}}).$mount("#app")},"85ec":function(t,e,n){},b3f9:function(t,e,n){},de2e:function(t,e,n){}});
//# sourceMappingURL=app.1f920a5f.js.map