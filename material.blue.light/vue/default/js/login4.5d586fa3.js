(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login4"],{"33dd":function(e,t,o){},db37:function(e,t,o){"use strict";o("33dd")},dc00:function(e,t,o){"use strict";o.r(t);var n=o("7a23"),r={class:"login-link"},c=Object(n["createTextVNode"])(" Return to "),a=Object(n["createTextVNode"])("Sign In"),i={class:"dx-button-text"},l={key:1};function d(e,t,o,d,s,u){var b=Object(n["resolveComponent"])("dx-required-rule"),m=Object(n["resolveComponent"])("dx-email-rule"),p=Object(n["resolveComponent"])("dx-label"),O=Object(n["resolveComponent"])("dx-item"),j=Object(n["resolveComponent"])("dx-button-options"),x=Object(n["resolveComponent"])("dx-button-item"),f=Object(n["resolveComponent"])("router-link"),v=Object(n["resolveComponent"])("dx-load-indicator"),w=Object(n["resolveComponent"])("dx-form");return Object(n["openBlock"])(),Object(n["createElementBlock"])("form",{class:"reset-password-form",onSubmit:t[0]||(t[0]=Object(n["withModifiers"])((function(){return d.onSubmit&&d.onSubmit.apply(d,arguments)}),["prevent"]))},[Object(n["createVNode"])(w,{"form-data":d.formData,disabled:d.loading},{resetTemplate:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("span",i,[d.loading?(Object(n["openBlock"])(),Object(n["createBlock"])(v,{key:0,width:"24px",height:"24px",visible:!0})):Object(n["createCommentVNode"])("",!0),d.loading?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",l,"Reset my password"))])])]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(O,{"data-field":"email","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Email",mode:"email"}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b,{message:"Email is required"}),Object(n["createVNode"])(m,{message:"Email is invalid"}),Object(n["createVNode"])(p,{visible:!1})]})),_:1}),Object(n["createVNode"])(x,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(j,{"element-attr":{class:"submit-button"},width:"100%",type:"default",template:"resetTemplate","use-submit-behavior":!0})]})),_:1}),Object(n["createVNode"])(O,null,{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",r,[c,Object(n["createVNode"])(f,{to:"/login-form"},{default:Object(n["withCtx"])((function(){return[a]})),_:1})])]})),_:1})]})),_:1},8,["form-data","disabled"])],32)}var s=o("1da1"),u=(o("96cf"),o("66dc")),b=o.n(u),m=o("4f34"),p=o.n(m),O=o("cbd3"),j=o("6c02"),x=o("1ab6"),f="We've sent a link to reset your password. Check your inbox.",v={components:{DxForm:b.a,DxItem:u["DxItem"],DxLabel:u["DxLabel"],DxButtonItem:u["DxButtonItem"],DxButtonOptions:u["DxButtonOptions"],DxRequiredRule:u["DxRequiredRule"],DxEmailRule:u["DxEmailRule"],DxLoadIndicator:p.a},setup:function(){var e=Object(j["d"])(),t=Object(n["ref"])(!1),o=Object(n["reactive"])({email:""});function r(){return c.apply(this,arguments)}function c(){return c=Object(s["a"])(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=o.email,t.value=!0,n.next=4,x["a"].resetPassword(r);case 4:c=n.sent,t.value=!1,c.isOk?(e.push("/login-form"),Object(O["a"])(f,"success",2500)):Object(O["a"])(c.message,"error",2e3);case 7:case"end":return n.stop()}}),n)}))),c.apply(this,arguments)}return{loading:t,formData:o,onSubmit:r}}},w=(o("db37"),o("6b0d")),h=o.n(w);const C=h()(v,[["render",d]]);t["default"]=C}}]);