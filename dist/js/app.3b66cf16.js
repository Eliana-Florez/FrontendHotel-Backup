(function(e){function t(t){for(var s,o,n=t[0],l=t[1],c=t[2],u=0,m=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},i={app:0},r=[];function o(e){return n.p+"js/"+({about:"about"}[e]||e)+"."+{about:"df30193c"}[e]+".js"}function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(e){var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,s){a=i[e]=[t,s]}));t.push(a[2]=s);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.src=o(e);var c=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=i[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",c.name="ChunkLoadError",c.type=s,c.request=r,a[1](c)}i[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("div",{attrs:{id:"app"}},[s("v-row",{staticClass:" mx-auto my-auto  d-flex px-6"},[s("v-col",[s("v-img",{attrs:{contain:"",src:a("cf05"),"max-width":"250"}})],1),s("v-col",{staticClass:"px-6"}),s("v-col",{staticClass:"mx-1 my-auto "},[s("v-btn",{attrs:{color:"green darken-3 white--text",elevation:"5",block:"",large:""},on:{click:function(t){return e.inicio()}}},[e._v(" El Hotel ")])],1),s("v-col",{staticClass:"mx-1 my-auto "},[s("v-btn",{attrs:{color:"green darken-3 white--text",elevation:"5",block:"",large:""},on:{click:function(t){return e.habitaciones()}}},[e._v(" Habitaciones ")])],1),s("v-col",{staticClass:"mx-1 my-auto "},[s("v-btn",{attrs:{color:"green darken-3 white--text",elevation:"5",block:"",large:""},on:{click:function(t){return e.tarifas()}}},[e._v(" Tarifas ")])],1),s("v-col",{staticClass:"mx-1 my-auto "},[s("v-btn",{attrs:{color:"green darken-3 white--text",elevation:"5",block:"",large:""},on:{click:function(t){return e.reservar()}}},[e._v(" Reservar ")])],1),s("v-col",{staticClass:"mx-auto my-auto "},[s("v-btn",{attrs:{color:"green darken-3 white--text",elevation:"5",block:"",large:""},on:{click:function(t){return e.contactenos()}}},[e._v(" Contactenos ")])],1)],1),s("router-view")],1),s("v-footer",{attrs:{dark:"",padless:""}},[s("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[s("v-card-title",{staticClass:"teal"},[s("strong",{staticClass:"subheading"},[e._v("Encuentranos tambien en nuestras redes sociales")]),s("v-spacer"),s("v-col",{staticClass:"mx-1 my-auto "},[s("v-btn",{attrs:{color:"green darken-3 white--text",elevation:"5",block:"",large:""},on:{click:function(t){return e.admin()}}},[e._v(" Administrador ")])],1)],1),s("v-card-text",{staticClass:"py-2 white--text text-center"},[e._v(" "+e._s((new Date).getFullYear())+" — "),s("strong",[e._v("Grupo 19 E-1")])])],1)],1)],1)},r=[],o={data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-instagram"]}},methods:{inicio:function(){console.log("ir al inicio funcionando"),this.$router.push("/")},habitaciones:function(){console.log("ir al habitaciones funcionando"),this.$router.push("/habitacionesview")},tarifas:function(){console.log("ir al tarifas funcionando"),this.$router.push("/tarifasview")},reservar:function(){console.log("ir al tarifas funcionando"),this.$router.push("/reservasview")},contactenos:function(){console.log("ir al tarifas funcionando"),this.$router.push("/contactoview")},admin:function(){console.log("ir al admin funcionando"),this.$router.push("/adminview")}}},n=o,l=(a("5c0b"),a("2877")),c=a("6544"),u=a.n(c),d=a("7496"),m=a("8336"),v=a("b0af"),p=a("99d9"),f=a("62ad"),h=a("553a"),b=a("adda"),x=a("0fd9"),C=a("2fa4"),g=Object(l["a"])(n,i,r,!1,null,null,null),y=g.exports;u()(g,{VApp:d["a"],VBtn:m["a"],VCard:v["a"],VCardText:p["a"],VCardTitle:p["b"],VCol:f["a"],VFooter:h["a"],VImg:b["a"],VRow:x["a"],VSpacer:C["a"]});var _=a("2f62");s["a"].use(_["a"]);var w=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}}),k=a("f309");s["a"].use(k["a"]);var V=new k["a"]({icons:{iconfont:"fa"}}),j=(a("d5e8"),a("15f5"),a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("index")},U=[],$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-sheet",{staticClass:"mx-16 my-12",attrs:{color:"white",rounded:"",height:"auto",elevation:"6"}},[s("v-row",{staticClass:"red darken-4 mx-auto my-auto rounded-t-lg d-flex px-10 py-6"},[s("h2",{staticClass:"white--text"},[e._v("Hotel Aroma Cafetera")])]),s("v-row",{staticClass:" mx-auto my-10  d-flex "},[s("v-col",{staticClass:"mr-4 ml-15 my-auto",attrs:{cols:"6",md:"4"}},[s("v-img",{attrs:{src:a("ea3c"),"aspect-ratio":"1.5"}})],1),s("v-col",{staticClass:"mr-15 ml-4 my-auto text-justify"},[s("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo debitis maiores ipsum exercitationem quos nesciunt maxime officia voluptatibus temporibus eius id praesentium nulla, error, officiis, aut amet deserunt incidunt doloribus? ")]),s("p",[e._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores reiciendis enim temporibus, dignissimos aliquam harum quo, corrupti, animi dolore hic id? Placeat corrupti assumenda est quam eius quaerat repudiandae tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nisi culpa, est velit praesentium amet porro modi maxime laborum quos suscipit? Nemo adipisci molestiae dignissimos quia? Voluptates iste inventore dolore! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae eius perspiciatis fugiat nisi totam aperiam adipisci ipsam dolore! Velit, vitae recusandae aut libero obcaecati deleniti laudantium dignissimos illum quaerat suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum iure maiores esse voluptates ducimus aliquam, inventore facere eius dolore rem tempore nihil? Voluptatem iusto ratione at numquam voluptate corrupti magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi architecto soluta totam! Natus quis provident impedit, cumque ratione necessitatibus fuga obcaecati adipisci placeat error doloribus, doloremque accusantium sit aliquid. ")])])],1),s("v-row",{staticClass:" mx-auto my-10  d-flex "},[s("v-col",[s("h1",[e._v("Mision")])]),s("v-col",{staticClass:"mr-15 ml-4 my-auto text-justify"},[s("p",[e._v(" Brindar un servicio hotelero de excelencia, ofreciendo a nuestros huéspedes hospitalidad, mediante un trato individualizado por un personal altamente motivado, buscando superar las expectativas de nuestros visitantes. ")])])],1),s("v-row",{staticClass:" mx-auto my-10  d-flex "},[s("v-col",[s("h1",[e._v("Vision")])]),s("v-col",{staticClass:"mr-15 ml-4 my-auto text-justify"},[s("p",[e._v(" Somos una casa hotel ubicada en circasia Quindío en donde buscamos que nuestros huéspedes vivan una experiencia única conociendo la cultura arquitectura y demás costumbres de la región contando con cómodas instalaciones para su descanso ")])])],1)],1)],1)},q=[],I={components:{}},O=I,E=a("8dd9"),H=Object(l["a"])(O,$,q,!1,null,null,null),R=H.exports;u()(H,{VApp:d["a"],VCol:f["a"],VImg:b["a"],VRow:x["a"],VSheet:E["a"]});var P={components:{index:R}},L=P,T=Object(l["a"])(L,S,U,!1,null,null,null),D=T.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("habitaciones-componente")},F=[],N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-sheet",{staticClass:" mx-16 my-12",attrs:{color:"white",elevation:"6",rounded:"",height:"auto"}},[a("v-row",{staticClass:" red darken-4 mx-auto my-auto rounded-t-lg d-flex px-10 py-6 "},[a("h2",{staticClass:"white--text"},[e._v("Nuestras Habitaciones")])]),a("v-row",{staticClass:" mx-auto my-10  d-flex ",attrs:{justify:"center"}},[a("v-col",{staticClass:" blue-grey lighten-2 mr-4 ml-15"}),a("v-col",{staticClass:"mr-15 ml-4 my-auto text-justify"},[a("span",[e._v("Lorem ipsum dolor sit amet consectetur adipiscing elit primis massa ridiculus tristique, nisi eu ultrices ullamcorper ligula porta mauris aliquam ut velit. Tempor imperdiet euismod cum tempus ac etiam pharetra, metus aenean habitasse tortor porttitor viverra mollis magnis, himenaeos in inceptos fermentum ultrices mauris. Phasellus in semper aliquam volutpat montes ultricies platea tincidunt tortor inceptos mattis vulputate.")])])],1),a("v-row",{staticClass:" mx-auto my-10  d-flex ",attrs:{justify:"center"}},[a("v-col",{staticClass:"mr-4 ml-15 my-auto text-justify"},[a("span",[e._v("Lorem ipsum dolor sit amet consectetur adipiscing elit primis massa ridiculus tristique, nisi eu ultrices ullamcorper ligula porta mauris aliquam ut velit. Tempor imperdiet euismod cum tempus ac etiam pharetra, metus aenean habitasse tortor porttitor viverra mollis magnis, himenaeos in inceptos fermentum ultrices mauris. Phasellus in semper aliquam volutpat montes ultricies platea tincidunt tortor inceptos mattis vulputate.")])]),a("v-col",{staticClass:" blue-grey lighten-2 mr-15 ml-4"})],1),a("v-row",{staticClass:"mx-auto my-10  d-flex ",attrs:{justify:"center"}},[a("v-col",{staticClass:" blue-grey lighten-2 mr-4 ml-15"}),a("v-col",{staticClass:"mr-15 ml-4 my-auto text-justify"},[a("span",[e._v("Lorem ipsum dolor sit amet consectetur adipiscing elit primis massa ridiculus tristique, nisi eu ultrices ullamcorper ligula porta mauris aliquam ut velit. Tempor imperdiet euismod cum tempus ac etiam pharetra, metus aenean habitasse tortor porttitor viverra mollis magnis, himenaeos in inceptos fermentum ultrices mauris. Phasellus in semper aliquam volutpat montes ultricies platea tincidunt tortor inceptos mattis vulputate.")])])],1)],1)],1)},M=[],B={},K=B,J=Object(l["a"])(K,N,M,!1,null,null,null),X=J.exports;u()(J,{VApp:d["a"],VCol:f["a"],VRow:x["a"],VSheet:E["a"]});var z={components:{HabitacionesComponente:X}},G=z,Q=Object(l["a"])(G,A,F,!1,null,null,null),Y=Q.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tarifas-component")},Z=[],ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-sheet",{staticClass:" mx-16 my-12",attrs:{color:"white",elevation:"6",rounded:"",height:"auto"}},[a("v-row",{staticClass:" red darken-4 mx-auto my-auto rounded-t-lg d-flex px-10 py-6 "},[a("h2",{staticClass:"white--text"},[e._v("Nuestras Habitaciones")])]),a("v-row",{staticClass:" mx-auto my-10  d-flex",attrs:{justify:"center"}},[a("v-col",{staticClass:"mr-5 ml-15 my-auto text-justify"},[a("span",[e._v("Lorem ipsum dolor sit amet consectetur adipiscing elit primis massa ridiculus tristique.")])]),a("v-col",{staticClass:" blue-grey lighten-2 mx-5"}),a("v-col",{staticClass:"mr-15 ml-5 my-auto text-justify"},[a("span",[e._v("Lorem ipsum dolor sit amet consectetur adipiscing elit primis massa ridiculus tristique.")])])],1),a("v-row",{staticClass:" mx-auto my-10  d-flex",attrs:{justify:"center"}},[a("v-col",{staticClass:"mr-5 ml-15 my-auto text-justify"},[a("span",[e._v("Lorem ipsum dolor sit amet consectetur adipiscing elit primis massa ridiculus tristique.")])]),a("v-col",{staticClass:" blue-grey lighten-2 mx-5"}),a("v-col",{staticClass:"mr-15 ml-5 my-auto text-justify"},[a("span",[e._v("Lorem ipsum dolor sit amet consectetur adipiscing elit primis massa ridiculus tristique.")])])],1),a("v-row",{staticClass:"mx-auto my-10  d-flex",attrs:{justify:"center"}},[a("v-col",{staticClass:"mr-5 ml-15 my-auto text-justify"},[a("span",[e._v("Lorem ipsum dolor sit amet consectetur adipiscing elit primis massa ridiculus tristique.")])]),a("v-col",{staticClass:" blue-grey lighten-2 mx-5"}),a("v-col",{staticClass:"mr-15 ml-5 my-auto text-justify"},[a("span",[e._v("Lorem ipsum dolor sit amet consectetur adipiscing elit primis massa ridiculus tristique.")])])],1),a("v-row",{staticClass:"mx-auto my-10  d-flex",attrs:{justify:"center"}},[a("v-col",{staticClass:"mr-5 ml-15 my-auto text-justify"},[a("span",[e._v("Lorem ipsum dolor sit amet consectetur adipiscing elit primis massa ridiculus tristique.")])]),a("v-col",{staticClass:" blue-grey lighten-2 mx-5"}),a("v-col",{staticClass:"mr-15 ml-5 my-auto text-justify"},[a("span",[e._v("Lorem ipsum dolor sit amet consectetur adipiscing elit primis massa ridiculus tristique.")])])],1)],1)],1)},te=[],ae={},se=ae,ie=Object(l["a"])(se,ee,te,!1,null,null,null),re=ie.exports;u()(ie,{VApp:d["a"],VCol:f["a"],VRow:x["a"],VSheet:E["a"]});var oe={components:{tarifasComponent:re}},ne=oe,le=Object(l["a"])(ne,W,Z,!1,null,null,null),ce=le.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("reservas-component")},de=[],me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-sheet",{staticClass:" mx-16 my-12",attrs:{color:"white",elevation:"6",rounded:"",height:"auto"}},[a("v-row",{staticClass:" red darken-4 mx-auto my-auto rounded-t-lg d-flex px-10 py-6 "},[a("h2",{staticClass:"white--text"},[e._v("Reserve con nosotros")])]),a("v-row",{staticClass:"mx-15 my-6  d-flex px-10  py-6",attrs:{justify:"center"}},[a("v-row",{staticClass:" mx-auto my-3  d-flex  pt-6 "},[a("h2",[e._v("Datos personales")]),a("v-divider",{staticClass:" mx-auto my-5  ",attrs:{inset:""}})],1),a("form",[a("v-container",{attrs:{bg:"","fill-height":""}},[a("v-row",{staticClass:" d-flex"},[a("v-col",{staticClass:"mr-12"},[a("v-text-field",{attrs:{label:"Nombres",required:"",solo:""},model:{value:e.reserva.nombresClient,callback:function(t){e.$set(e.reserva,"nombresClient",t)},expression:"reserva.nombresClient"}})],1),a("v-col",[a("v-text-field",{attrs:{label:"Apellidos",required:"",solo:""},model:{value:e.reserva.apellidosClient,callback:function(t){e.$set(e.reserva,"apellidosClient",t)},expression:"reserva.apellidosClient"}})],1)],1),a("v-row",{staticClass:" d-flex"},[a("v-col",{staticClass:"mr-12"},[a("v-text-field",{attrs:{label:"Documento de identidad",required:"",solo:""},model:{value:e.reserva.cedulaClient,callback:function(t){e.$set(e.reserva,"cedulaClient",t)},expression:"reserva.cedulaClient"}})],1),a("v-col",[a("v-text-field",{attrs:{label:"Ciudad de Origen",required:"",solo:""},model:{value:e.reserva.ciudadOrigenClient,callback:function(t){e.$set(e.reserva,"ciudadOrigenClient",t)},expression:"reserva.ciudadOrigenClient"}})],1)],1),a("v-row",{staticClass:" d-flex"},[a("v-col",{staticClass:"mr-12"},[a("v-text-field",{attrs:{label:"Teléfono",required:"",solo:""},model:{value:e.reserva.telefonoClient,callback:function(t){e.$set(e.reserva,"telefonoClient",t)},expression:"reserva.telefonoClient"}})],1),a("v-col",[a("v-text-field",{attrs:{label:"E-mail",required:"",solo:""},model:{value:e.reserva.emailClient,callback:function(t){e.$set(e.reserva,"emailClient",t)},expression:"reserva.emailClient"}})],1)],1),a("v-row",{staticClass:" mx-auto my-4  d-flex  pt-6 "},[a("h2",[e._v("Información sobre la reserva")]),a("v-divider",{staticClass:" mx-auto my-5  ",attrs:{inset:""}})],1),a("v-row",{staticClass:" d-flex"},[a("v-col",{staticClass:"mr-12"},[a("v-text-field",{attrs:{label:"Número de personas",required:"",solo:""},model:{value:e.reserva.numPersonas,callback:function(t){e.$set(e.reserva,"numPersonas",t)},expression:"reserva.numPersonas"}})],1),a("v-col",[a("v-autocomplete",{attrs:{items:e.items,"small-chips":"",label:"Habitaciones",multiple:"",solo:""},model:{value:e.reserva.infoHabitacion,callback:function(t){e.$set(e.reserva,"infoHabitacion",t)},expression:"reserva.infoHabitacion"}})],1)],1),a("v-row",{staticClass:" d-flex"},[a("v-col",{staticClass:"mr-6"},[a("v-menu",{ref:"dateIngres",attrs:{"close-on-content-click":!1,"return-value":e.fechaIngreso,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){e.fechaIngreso=t},"update:return-value":function(t){e.fechaIngreso=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,i=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:"Fecha de ingreso",readonly:"",solo:""},model:{value:e.fechaIngreso,callback:function(t){e.fechaIngreso=t},expression:"fechaIngreso"}},"v-text-field",i,!1),s))]}}]),model:{value:e.reserva.dateIngres,callback:function(t){e.$set(e.reserva,"dateIngres",t)},expression:"reserva.dateIngres"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.fechaIngreso,callback:function(t){e.fechaIngreso=t},expression:"fechaIngreso"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.dateIngres=!1}}},[e._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dateIngres.save(e.fechaIngreso)}}},[e._v(" OK ")])],1)],1)],1),a("v-col",{staticClass:"ml-6"},[a("v-menu",{ref:"dateSalida",attrs:{"close-on-content-click":!1,"return-value":e.fechaSalida,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){e.fechaSalida=t},"update:return-value":function(t){e.fechaSalida=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,i=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:"Fecha de salida",readonly:"",solo:""},model:{value:e.fechaSalida,callback:function(t){e.fechaSalida=t},expression:"fechaSalida"}},"v-text-field",i,!1),s))]}}]),model:{value:e.reserva.dateSalida,callback:function(t){e.$set(e.reserva,"dateSalida",t)},expression:"reserva.dateSalida"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.fechaSalida,callback:function(t){e.fechaSalida=t},expression:"fechaSalida"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.dateSalida=!1}}},[e._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dateSalida.save(e.fechaSalida)}}},[e._v(" OK ")])],1)],1)],1)],1),a("v-row",{staticClass:"mt-15",attrs:{justify:"center"}},[a("v-btn",{staticClass:"mr-10 red darken-4 px-10 ",on:{click:e.clear}},[a("span",{staticClass:"white--text"},[e._v("Limpiar")])]),a("v-btn",{staticClass:"mr-10  red darken-4 px-10 mb-4",attrs:{type:"submit"},on:{click:e.submit}},[a("span",{staticClass:"white--text"},[e._v("Enviar")])])],1)],1)],1)],1)],1)],1)},ve=[],pe=a("bc3a"),fe=a.n(pe),he={data:function(){return{reserva:{nombresClient:"",apellidosClient:"",cedulaClient:"",ciudadOrigenClient:"",telefonoClient:"",emailClient:"",numPersonas:"",infoHabitacion:null,fechaIngreso:(new Date).toISOString().substr(0,10),fechaSalida:(new Date).toISOString().substr(0,10)},items:["Habitación Individual Deluxe","Habitación Doble estándar","Habitación Doble con vista a las montañas","Habitación Triple estándar","Habitación Cuadruple con vista al jardín"]}},methods:{submit:function(){var e=this,t="https://backendhotel-backup.herokuapp.com/api/reserva/add";fe.a.post(t,this.reserva).then((function(){e.$router.push("/"),e.reserva={nombresClient:"",apellidosClient:"",cedulaClient:"",ciudadOrigenClient:"",telefonoClient:"",emailClient:"",numPersonas:"",infoHabitacion:null,fechaIngreso:"",fechaSalida:""}})).catch((function(e){console.log(e)}))},clear:function(){this.nombresClient="",this.apellidosClient="",this.cedulaClient="",this.ciudadOrigenClient="",this.telefonoClient="",this.emailClient="",this.numPersonas="",this.infoHabitacion="",this.fechaIngreso="",this.fechaSalida="",this.$refs.observer.reset()}}},be=he,xe=a("c6a6"),Ce=a("a523"),ge=a("2e4b"),ye=a("ce7e"),_e=a("e449"),we=a("8654"),ke=Object(l["a"])(be,me,ve,!1,null,null,null),Ve=ke.exports;u()(ke,{VApp:d["a"],VAutocomplete:xe["a"],VBtn:m["a"],VCol:f["a"],VContainer:Ce["a"],VDatePicker:ge["a"],VDivider:ye["a"],VMenu:_e["a"],VRow:x["a"],VSheet:E["a"],VSpacer:C["a"],VTextField:we["a"]});var je={components:{ReservasComponent:Ve}},Se=je,Ue=Object(l["a"])(Se,ue,de,!1,null,null,null),$e=Ue.exports,qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("contactos-componente")},Ie=[],Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-sheet",{staticClass:" mx-16 my-12",attrs:{color:"white",elevation:"6",rounded:"",height:"auto"}},[a("v-row",{staticClass:" red darken-4 mx-auto my-auto rounded-t-lg d-flex px-10 py-6 "},[a("h2",{staticClass:"white--text"},[e._v("Contáctanos")])]),a("v-row",{staticClass:" mx-auto my-auto  d-flex  pt-6 ",attrs:{justify:"center"}},[a("i",{staticClass:"fa fa-comment",attrs:{"aria-hidden":"true"}}),a("span",[e._v("  +57 320 678 4534")])]),a("v-row",{staticClass:" mx-auto my-auto  d-flex  pb-4 ",attrs:{justify:"center"}},[a("i",{staticClass:"fa fa-phone fa-rotate-90",attrs:{"aria-hidden":"true"}}),a("span",[e._v("    +57 606 XX 4534")])]),a("v-row",{staticClass:"mx-auto my-auto  d-flex px-10  py-6",attrs:{justify:"center"}},[a("form",[a("v-container",{attrs:{bg:"","fill-height":""}},[a("v-row",{staticClass:" d-flex"},[a("v-text-field",{attrs:{counter:30,label:"Nombres y Apellidos",required:""},model:{value:e.contacto.nombreUser,callback:function(t){e.$set(e.contacto,"nombreUser",t)},expression:"contacto.nombreUser"}})],1),a("v-row",[a("v-text-field",{attrs:{label:"E-mail",required:""},model:{value:e.contacto.emailUser,callback:function(t){e.$set(e.contacto,"emailUser",t)},expression:"contacto.emailUser"}})],1),a("v-row",[a("v-text-field",{attrs:{counter:10,label:"Teléfono",required:""},model:{value:e.contacto.telefonoUser,callback:function(t){e.$set(e.contacto,"telefonoUser",t)},expression:"contacto.telefonoUser"}})],1),a("v-row",[a("v-textarea",{attrs:{label:"Dinos algo que podamos solucionarte",required:""},model:{value:e.contacto.mensajeUser,callback:function(t){e.$set(e.contacto,"mensajeUser",t)},expression:"contacto.mensajeUser"}})],1),a("v-row",{staticClass:"mt-10",attrs:{justify:"center"}},[a("v-btn",{staticClass:"mr-10 red darken-4 px-10 ",on:{click:e.clear}},[a("span",{staticClass:"white--text"},[e._v("Limpiar")])]),a("v-btn",{staticClass:"mr-10  red darken-4 px-10 mb-4",attrs:{type:"submit"},on:{click:e.submit}},[a("span",{staticClass:"white--text"},[e._v("Enviar")])])],1)],1)],1)])],1)],1)},Ee=[],He={data:function(){return{contacto:{nombreUser:"",emailUser:"",telefonoUser:"",mensajeUser:""}}},methods:{submit:function(){var e=this,t="https://backendhotel-backup.herokuapp.com/api/contacto/add";fe.a.post(t,this.contacto).then((function(){e.$router.push("/"),e.contacto={nombreUser:"",emailUser:"",telefonoUser:"",mensajeUser:""}})).catch((function(e){console.log(e)}))},clear:function(){this.nombreUser="",this.emailUser="",this.telefonoUser="",this.mensajeUser="",this.$refs.observer.reset()}}},Re=He,Pe=a("a844"),Le=Object(l["a"])(Re,Oe,Ee,!1,null,null,null),Te=Le.exports;u()(Le,{VApp:d["a"],VBtn:m["a"],VContainer:Ce["a"],VRow:x["a"],VSheet:E["a"],VTextField:we["a"],VTextarea:Pe["a"]});var De={components:{ContactosComponente:Te}},Ae=De,Fe=Object(l["a"])(Ae,qe,Ie,!1,null,null,null),Ne=Fe.exports,Me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("admin-componente")},Be=[],Ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("h1",{staticClass:"text-center"},[e._v("Listado de Reservas")]),a("v-row",{staticClass:" mx-8 my-8  d-flex  pb-4 ",attrs:{justify:"center"}},[a("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",{staticClass:"green lighten-3"},[a("th",{staticClass:"text-left font-weight-black"},[e._v(" Nombres ")]),a("th",{staticClass:"text-left font-weight-black"},[e._v(" Apellidos ")]),a("th",{staticClass:"text-left font-weight-black"},[e._v(" Cédula")]),a("th",{staticClass:"text-left font-weight-black"},[e._v(" Ciudad de origen ")]),a("th",{staticClass:"text-left font-weight-black"},[e._v(" Teléfono ")]),a("th",{staticClass:"text-left font-weight-black"},[e._v(" Email ")]),a("th",{staticClass:"text-left font-weight-black"},[e._v(" Num personas ")]),a("th",{staticClass:"text-left font-weight-black"},[e._v(" Habitación/es ")]),a("th",{staticClass:"text-left font-weight-black"},[e._v(" Fecha de ingreso ")]),a("th",{staticClass:"text-left font-weight-black"},[e._v(" Fecha de salida ")])])]),a("tbody",e._l(e.Reservas,(function(t){return a("tr",{key:t._id},[a("td",{staticClass:"text-left"},[e._v(e._s(t.nombresClient))]),a("td",{staticClass:"text-left"},[e._v(e._s(t.apellidosClient))]),a("td",{staticClass:"text-left"},[e._v(e._s(t.cedulaClient))]),a("td",{staticClass:"text-left"},[e._v(e._s(t.ciudadOrigenClient))]),a("td",{staticClass:"text-left"},[e._v(e._s(t.telefonoClient))]),a("td",{staticClass:"text-left"},[e._v(e._s(t.emailClient))]),a("td",{staticClass:"text-left"},[e._v(e._s(t.numPersonas))]),a("td",{staticClass:"text-left"},[e._v(e._s(t.infoHabitacion))]),a("td",{staticClass:"text-left"},[e._v(e._s(t.fechaIngreso))]),a("td",{staticClass:"text-left"},[e._v(e._s(t.fechaSalida))]),a("td",[a("router-link",{staticClass:"btn btn-success",attrs:{to:{path:"/editreservaview/"+t._id}}},[e._v("Editar ")]),a("v-btn",{staticClass:"red darken-4  mb-4",attrs:{"x-small":""},on:{click:function(a){return a.preventDefault(),e.deleteReserva(t._id)}}},[a("span",{staticClass:"white--text"},[e._v("Delete")])])],1)])})),0)]},proxy:!0}])})],1)],1)},Je=[],Xe=(a("c740"),a("a434"),{data:function(){return{Reservas:[]}},created:function(){var e=this,t="https://backendhotel-backup.herokuapp.com/api/reserva/";fe.a.get(t).then((function(t){e.Reservas=t.data})).catch((function(e){console.log(e)}))},methods:{deleteReserva:function(e){var t=this,a="https://backendhotel-backup.herokuapp.com/api/reserva/delete/".concat(e),s=this.Reservas.findIndex((function(t){return t._id===e}));window.confirm("¿Realmente desea eliminar la reserva?")&&fe.a.delete(a).then((function(){t.Reservas.splice(s,1)})).catch((function(e){console.log(e)}))}}}),ze=Xe,Ge=(a("a327"),a("1f4f")),Qe=Object(l["a"])(ze,Ke,Je,!1,null,null,null),Ye=Qe.exports;u()(Qe,{VApp:d["a"],VBtn:m["a"],VRow:x["a"],VSimpleTable:Ge["a"]});var We={components:{AdminComponente:Ye}},Ze=We,et=Object(l["a"])(Ze,Me,Be,!1,null,null,null),tt=et.exports,at=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("edit-reserva-componente")},st=[],it=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("h1",{staticClass:"text-center mt-2"},[e._v("Editar Reserva")]),a("v-row",{staticClass:"mx-15 my-6  d-flex px-10  py-6",attrs:{justify:"center"}},[a("v-row",{staticClass:" mx-auto my-3  d-flex  pt-6 "},[a("h2",[e._v("Datos personales")]),a("v-divider",{staticClass:" mx-auto my-5  ",attrs:{inset:""}})],1),a("form",[a("v-container",{attrs:{bg:"","fill-height":""}},[a("v-row",{staticClass:" d-flex"},[a("v-col",{staticClass:"mr-12"},[a("v-text-field",{attrs:{label:"Nombres",required:"",solo:""},model:{value:e.reservaUpdate.nombresClient,callback:function(t){e.$set(e.reservaUpdate,"nombresClient",t)},expression:"reservaUpdate.nombresClient"}})],1),a("v-col",[a("v-text-field",{attrs:{label:"Apellidos",required:"",solo:""},model:{value:e.reservaUpdate.apellidosClient,callback:function(t){e.$set(e.reservaUpdate,"apellidosClient",t)},expression:"reservaUpdate.apellidosClient"}})],1)],1),a("v-row",{staticClass:" d-flex"},[a("v-col",{staticClass:"mr-12"},[a("v-text-field",{attrs:{label:"Documento de identidad",required:"",solo:""},model:{value:e.reservaUpdate.cedulaClient,callback:function(t){e.$set(e.reservaUpdate,"cedulaClient",t)},expression:"reservaUpdate.cedulaClient"}})],1),a("v-col",[a("v-text-field",{attrs:{label:"Ciudad de Origen",required:"",solo:""},model:{value:e.reservaUpdate.ciudadOrigenClient,callback:function(t){e.$set(e.reservaUpdate,"ciudadOrigenClient",t)},expression:"reservaUpdate.ciudadOrigenClient"}})],1)],1),a("v-row",{staticClass:" d-flex"},[a("v-col",{staticClass:"mr-12"},[a("v-text-field",{attrs:{label:"Teléfono",required:"",solo:""},model:{value:e.reservaUpdate.telefonoClient,callback:function(t){e.$set(e.reservaUpdate,"telefonoClient",t)},expression:"reservaUpdate.telefonoClient"}})],1),a("v-col",[a("v-text-field",{attrs:{label:"E-mail",required:"",solo:""},model:{value:e.reservaUpdate.emailClient,callback:function(t){e.$set(e.reservaUpdate,"emailClient",t)},expression:"reservaUpdate.emailClient"}})],1)],1),a("v-row",{staticClass:" mx-auto my-4  d-flex  pt-6 "},[a("h2",[e._v("Información sobre la reserva")]),a("v-divider",{staticClass:" mx-auto my-5  ",attrs:{inset:""}})],1),a("v-row",{staticClass:" d-flex"},[a("v-col",{staticClass:"mr-12"},[a("v-text-field",{attrs:{label:"Número de personas",required:"",solo:""},model:{value:e.reservaUpdate.numPersonas,callback:function(t){e.$set(e.reservaUpdate,"numPersonas",t)},expression:"reservaUpdate.numPersonas"}})],1),a("v-col",[a("v-autocomplete",{attrs:{items:e.items,"small-chips":"",label:"Habitaciones",required:"",multiple:"",solo:""},model:{value:e.reservaUpdate.infoHabitacion,callback:function(t){e.$set(e.reservaUpdate,"infoHabitacion",t)},expression:"reservaUpdate.infoHabitacion"}})],1)],1),a("v-row",{staticClass:" d-flex"},[a("v-col",{staticClass:"mr-6"},[a("v-menu",{ref:"dateIngres",attrs:{"close-on-content-click":!1,"return-value":e.fechaIngreso,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){e.fechaIngreso=t},"update:return-value":function(t){e.fechaIngreso=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,i=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:"Fecha de ingreso",readonly:"",solo:""},model:{value:e.fechaIngreso,callback:function(t){e.fechaIngreso=t},expression:"fechaIngreso"}},"v-text-field",i,!1),s))]}}]),model:{value:e.reservaUpdate.dateIngres,callback:function(t){e.$set(e.reservaUpdate,"dateIngres",t)},expression:"reservaUpdate.dateIngres"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.fechaIngreso,callback:function(t){e.fechaIngreso=t},expression:"fechaIngreso"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.dateIngres=!1}}},[e._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dateIngres.save(e.fechaIngreso)}}},[e._v(" OK ")])],1)],1)],1),a("v-col",{staticClass:"ml-6"},[a("v-menu",{ref:"dateSalida",attrs:{"close-on-content-click":!1,"return-value":e.fechaSalida,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){e.fechaSalida=t},"update:return-value":function(t){e.fechaSalida=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,i=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:"Fecha de salida",readonly:"",solo:""},model:{value:e.fechaSalida,callback:function(t){e.fechaSalida=t},expression:"fechaSalida"}},"v-text-field",i,!1),s))]}}]),model:{value:e.reservaUpdate.dateSalida,callback:function(t){e.$set(e.reservaUpdate,"dateSalida",t)},expression:"reservaUpdate.dateSalida"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.fechaSalida,callback:function(t){e.fechaSalida=t},expression:"fechaSalida"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.dateSalida=!1}}},[e._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dateSalida.save(e.fechaSalida)}}},[e._v(" OK ")])],1)],1)],1)],1),a("v-row",{staticClass:"mt-15",attrs:{justify:"center"}},[a("v-btn",{staticClass:"mr-10 red darken-4 px-10 ",on:{click:e.clear}},[a("span",{staticClass:"white--text"},[e._v("Limpiar")])]),a("v-btn",{staticClass:"mr-10  red darken-4 px-10 mb-4",attrs:{type:"submit"},on:{click:e.updateReserva}},[a("span",{staticClass:"white--text"},[e._v("Editar")])])],1)],1)],1)],1)],1)},rt=[],ot={data:function(){return{reservaUpdate:{},items:["Habitación Individual Deluxe","Habitación Doble estándar","Habitación Doble con vista a las montañas","Habitación Triple estándar","Habitación Cuadruple con vista al jardín"]}},created:function(){var e=this,t="https://backendhotel-backup.herokuapp.com/api/reserva/getID/".concat(this.$route.params.id);fe.a.get(t).then((function(t){e.reservaUpdate=t.data}))},methods:{updateReserva:function(){var e=this,t="https://backendhotel-backup.herokuapp.com/api/reserva/update/".concat(this.$route.params.id);window.confirm("¿Realmente desea modificar la reserva?")&&fe.a.put(t,this.reservaUpdate).then((function(t){console.log(t),e.$router.push("/adminview")})).catch((function(e){console.log(e)}))}}},nt=ot,lt=Object(l["a"])(nt,it,rt,!1,null,null,null),ct=lt.exports;u()(lt,{VApp:d["a"],VAutocomplete:xe["a"],VBtn:m["a"],VCol:f["a"],VContainer:Ce["a"],VDatePicker:ge["a"],VDivider:ye["a"],VMenu:_e["a"],VRow:x["a"],VSpacer:C["a"],VTextField:we["a"]});var ut={components:{EditReservaComponente:ct}},dt=ut,mt=Object(l["a"])(dt,at,st,!1,null,null,null),vt=mt.exports;s["a"].use(j["a"]);var pt=[{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/",name:"home",component:D},{path:"/habitacionesview",name:"HabitacionesView",component:Y},{path:"/tarifasview",name:"TarifasView",component:ce},{path:"/reservasview",name:"ReservasView",component:$e},{path:"/contactoview",name:"ContactoView",component:Ne},{path:"/adminview",name:"AdminView",component:tt},{path:"/editreservaview/:id",name:"EditReservaView",component:vt}],ft=new j["a"]({mode:"history",base:"/",routes:pt}),ht=ft;s["a"].config.productionTip=!1,new s["a"]({store:w,vuetify:V,router:ht,render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){},"9ccf":function(e,t,a){},a327:function(e,t,a){"use strict";a("9ccf")},cf05:function(e,t,a){e.exports=a.p+"img/logo.bd683d22.png"},ea3c:function(e,t,a){e.exports=a.p+"img/fachada.f85f30ba.jpg"}});
//# sourceMappingURL=app.3b66cf16.js.map