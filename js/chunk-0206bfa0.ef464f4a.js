(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0206bfa0"],{ab14:function(t,e,s){"use strict";e["a"]={data:()=>({mainId:Math.floor(1e7*Math.random()),selected:0,elements:[],stateStr:"",rendered:!1}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>({id:this.mainId+e+1,html:t.elm.outerHTML,titulo:t.data&&t.data.attrs&&t.data.attrs.titulo,icono:t.data&&t.data.attrs&&t.data.attrs.icono})),this.selected=this.selected>0?this.selected:this.elements[0].id,void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},e0a3:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"acordion"},[t._l(t.elements,(function(e){return s("div",{key:e.id,staticClass:"p-3 pb-0",class:[t.cardClass,"mb-3"]},[s("div",{staticClass:"acordion__header mb-3",on:{click:function(s){t.selected=t.selected!=e.id?e.id:0}}},[s("div",{staticClass:"d-flex align-items-center"},["a"===t.tipo?s("div",{staticClass:"acordion__accion"},[s("div",{staticClass:"acordion__accion__btn--a h5 mb-0 me-3"},[t.selected===e.id?s("i",{staticClass:"fas fa-minus"}):s("i",{staticClass:"fas fa-plus"})])]):t._e(),s("div",{staticClass:"acordion__titulo"},[s("div",{staticClass:"h5 mb-0"},[t._v(t._s(e.titulo))])])]),"b"===t.tipo?s("div",{staticClass:"acordion__accion"},[s("div",{staticClass:"acordion__accion__btn--b h5 mb-0"},[t.selected===e.id?s("i",{staticClass:"fas fa-angle-up"}):s("i",{staticClass:"fas fa-angle-down"})])]):t._e()]),s("div",{staticClass:"acordion__contenido",style:{height:t.rendered&&t.selected===e.id?t.getActiveHeight(e.id):0}},[s("div",{ref:e.id,refInFor:!0,staticClass:"acordion__contenido__item pb-3",domProps:{innerHTML:t._s(e.html)}})])])})),s("div",{staticClass:"hidden-slot"},[t._t("default")],2)],2)},i=[],d=s("ab14"),n={name:"AcordionA",mixins:[d["a"]],props:{claseTarjeta:{type:String,default:""},tipo:{type:String,default:"a"}},computed:{cardClass:function(){return this.claseTarjeta.length?this.claseTarjeta:"tarjeta tarjeta--blanca mb-3"},menuState:function(){return this.$store.getters.isMenuOpen}}},o=n,r=s("2877"),c=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-0206bfa0.ef464f4a.js.map