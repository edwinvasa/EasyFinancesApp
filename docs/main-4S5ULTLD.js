import{a as be}from"./chunk-4BRHRAUU.js";import{a as ve}from"./chunk-FLQM6KKT.js";import{A as x,B as E,C as _,E as I,G as R,I as K,J as X,L as Z,M as F,N as Q,O as ee,Q as te,R as ie,S as ne,T as oe,V as w,W as B,X as ae,Y as re,Z as D,_ as se,a as G,b as k,c as Y,d as l,e as y,ea as T,f as $,fa as ce,g as H,ga as me,ha as le,i as s,j as g,k as d,ka as pe,l as c,la as ue,m as n,ma as de,n as i,na as W,o as u,oa as fe,r as q,s as N,t as M,u as S,v as a,w as J,x as b}from"./chunk-3AXMTNQG.js";function Ce(t){let o=t,e=Math.floor(Math.abs(t)),r=t.toString().replace(/^[^.]*\.?/,"").length,m=parseInt(t.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return o===1?1:m===0&&e!==0&&e%1e6===0&&r===0||!(m>=0&&m<=5)?4:5}var ge=["es-CO",[["a.\xA0m.","p.\xA0m."],void 0,void 0],void 0,[["D","L","M","M","J","V","S"],["dom","lun","mar","mi\xE9","jue","vie","s\xE1b"],["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"],["DO","LU","MA","MI","JU","VI","SA"]],[["d","l","m","m","j","v","s"],["dom","lun","mar","mi\xE9","jue","vie","s\xE1b"],["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"],["DO","LU","MA","MI","JU","VI","SA"]],[["E","F","M","A","M","J","J","A","S","O","N","D"],["ene","feb","mar","abr","may","jun","jul","ago","sept","oct","nov","dic"],["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]],[["E","F","M","A","M","J","J","A","S","O","N","D"],["ene.","feb.","mar.","abr.","may.","jun.","jul.","ago.","sept.","oct.","nov.","dic."],["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]],[["a. C.","d. C."],void 0,["antes de Cristo","despu\xE9s de Cristo"]],0,[6,0],["d/MM/yy","d/MM/y","d 'de' MMMM 'de' y","EEEE, d 'de' MMMM 'de' y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",void 0,void 0,void 0],[",",".",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","\xA4\xA0#,##0.00","#E0"],"COP","$","peso colombiano",{AUD:[void 0,"$"],BRL:[void 0,"R$"],BYN:[void 0,"\u0440."],CAD:[void 0,"$"],CNY:[void 0,"\xA5"],COP:["$"],ESP:["\u20A7"],EUR:[void 0,"\u20AC"],FKP:[void 0,"FK\xA3"],GBP:[void 0,"\xA3"],HKD:[void 0,"$"],ILS:[void 0,"\u20AA"],INR:[void 0,"\u20B9"],JPY:[void 0,"\xA5"],KRW:[void 0,"\u20A9"],MXN:[void 0,"$"],NZD:[void 0,"$"],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],SSP:[void 0,"SD\xA3"],SYP:[void 0,"S\xA3"],TWD:[void 0,"NT$"],USD:["US$","$"],VEF:[void 0,"BsF"],VND:[void 0,"\u20AB"],XAF:[],XCD:[void 0,"$"],XOF:[]},"ltr",Ce];var f=class t{constructor(o){this.http=o}apiUrl="https://easy-finances-app-63cef07822fc.herokuapp.com/api/bank-interest-rates";subscribeUrl="https://easy-finances-app-63cef07822fc.herokuapp.com/api/notifications/subscribe";unsubscribeUrl="https://easy-finances-app-63cef07822fc.herokuapp.com/api/notifications/unsubscribe";getBankRates(){return this.http.get(this.apiUrl)}subscribeToNotifications(o,e){let r={userId:o,email:e};return this.http.post(this.subscribeUrl,r)}unsubscribeFromNotifications(o){let e={email:o};return this.http.delete(this.unsubscribeUrl,{body:e})}static \u0275fac=function(e){return new(e||t)(Y(te))};static \u0275prov=G({token:t,factory:t.\u0275fac,providedIn:"root"})};function Se(t,o){t&1&&(n(0,"div"),a(1," El correo electr\xF3nico es obligatorio. "),i())}function ke(t,o){t&1&&(n(0,"div"),a(1," Ingresa un correo electr\xF3nico v\xE1lido. "),i())}function ye(t,o){if(t&1&&(n(0,"div",11),d(1,Se,2,0,"div",12)(2,ke,2,0,"div",12),i()),t&2){M();let e=S(9);s(),c("ngIf",e.errors==null?null:e.errors.required),s(),c("ngIf",e.errors==null?null:e.errors.email)}}function Ne(t,o){if(t&1&&(n(0,"div",13),a(1),i()),t&2){let e=M();s(),b(" ",e.subscriptionMessage," ")}}var h=class t{constructor(o){this.bankRatesService=o}email="";subscriptionMessage="";showMessage=!1;subscribe(o){let e=fe();this.bankRatesService.subscribeToNotifications(e,this.email).subscribe({next:()=>{this.subscriptionMessage="Te has suscrito correctamente a las notificaciones de tasas.",this.showMessage=!0,o.resetForm(),setTimeout(()=>this.showMessage=!1,3e3)},error:r=>{console.error("Error al suscribirse a las notificaciones:",r),this.subscriptionMessage="Hubo un problema con la suscripci\xF3n, intenta nuevamente.",this.showMessage=!0,setTimeout(()=>this.showMessage=!1,3e3)}})}static \u0275fac=function(e){return new(e||t)(g(f))};static \u0275cmp=l({type:t,selectors:[["app-subscribe-notifications"]],decls:14,vars:4,consts:[["subscribeForm","ngForm"],["emailModel","ngModel"],[1,"d-flex","justify-content-center"],[1,"w-auto","p-3"],[1,"container","mt-4"],["novalidate",""],[1,"input-group","mb-3"],["type","email","placeholder","Ingresa tu correo electr\xF3nico","name","email","required","","email","",1,"form-control",3,"ngModelChange","ngModel"],["type","button",1,"btn","btn-primary",3,"click","disabled"],["class","text-danger",4,"ngIf"],["class","alert alert-info mt-3","role","alert",4,"ngIf"],[1,"text-danger"],[4,"ngIf"],["role","alert",1,"alert","alert-info","mt-3"]],template:function(e,r){if(e&1){let m=q();n(0,"div",2)(1,"div",3)(2,"div",4)(3,"h5"),a(4,"\xBFTe gustar\xEDa recibir una notificaci\xF3n cuando las tasas bajen?"),i(),n(5,"form",5,0)(7,"div",6)(8,"input",7,1),_("ngModelChange",function(C){return $(m),E(r.email,C)||(r.email=C),H(C)}),i(),n(10,"button",8),N("click",function(){$(m);let C=S(6);return H(r.subscribe(C))}),a(11," Suscribirse "),i()(),d(12,ye,3,2,"div",9),i(),d(13,Ne,2,1,"div",10),i()()()}if(e&2){let m=S(6),p=S(9);s(8),x("ngModel",r.email),s(2),c("disabled",!m.valid),s(2),c("ngIf",p.invalid&&(p.dirty||p.touched)),s(),c("ngIf",r.showMessage)}},dependencies:[F,se,w,B,ae,T,ce,D,re]})};function Ee(t,o){if(t&1&&(n(0,"tr")(1,"td"),a(2),i(),n(3,"td"),a(4),I(5,"number"),i(),n(6,"td"),a(7),I(8,"number"),i(),n(9,"td",2),a(10),I(11,"date"),i()()),t&2){let e=o.$implicit;s(2),J(e.bankName),s(2),b("",R(5,4,e.interestRate,"1.2-2"),"%"),s(3),b("",R(8,7,e.maxInterestRate,"1.2-2"),"%"),s(3),J(R(11,10,e.effectiveDate,"medium"))}}var O=class t{constructor(o){this.bankRatesService=o}bankRates=[];ngOnInit(){this.bankRatesService.getBankRates().subscribe({next:o=>{this.bankRates=o.sort((e,r)=>e.interestRate-r.interestRate)},error:o=>console.error("Error fetching bank rates:",o)})}static \u0275fac=function(e){return new(e||t)(g(f))};static \u0275cmp=l({type:t,selectors:[["app-bank-interest-rates"]],decls:18,vars:1,consts:[[1,"container","mt-3"],[1,"table","table-striped"],[1,"d-none","d-md-table-cell"],[4,"ngFor","ngForOf"]],template:function(e,r){e&1&&(n(0,"div",0)(1,"h5"),a(2,"Tasas de Inter\xE9s Bancarias"),i(),u(3,"hr")(4,"app-subscribe-notifications"),n(5,"table",1)(6,"thead")(7,"tr")(8,"th"),a(9,"Banco"),i(),n(10,"th"),a(11,"Tasa de Inter\xE9s"),i(),n(12,"th"),a(13,"Tasa M\xE1xima"),i(),n(14,"th",2),a(15,"Fecha Efectiva"),i()()(),n(16,"tbody"),d(17,Ee,12,13,"tr",3),i()()()),e&2&&(s(17),c("ngForOf",r.bankRates))},dependencies:[Z,h,ee,Q]})};function _e(t,o){if(t&1&&(n(0,"div",7),a(1),i()),t&2){let e=M();s(),b(" ",e.unsubscribeMessage," ")}}var j=class t{constructor(o){this.bankRatesService=o}email="";unsubscribeMessage="";showMessage=!1;unsubscribe(){this.bankRatesService.unsubscribeFromNotifications(this.email).subscribe({next:()=>{this.unsubscribeMessage="Has cancelado tu suscripci\xF3n a las notificaciones.",this.showMessage=!0,this.email="",setTimeout(()=>this.showMessage=!1,3e3)},error:o=>{console.error("Error al cancelar la suscripci\xF3n:",o),this.unsubscribeMessage="Hubo un problema al cancelar la suscripci\xF3n, intenta nuevamente.",this.showMessage=!0,setTimeout(()=>this.showMessage=!1,3e3)}})}static \u0275fac=function(e){return new(e||t)(g(f))};static \u0275cmp=l({type:t,selectors:[["app-unsubscribe-notifications"]],decls:10,vars:3,consts:[[1,"d-flex","justify-content-center"],[1,"w-auto","p-3"],[1,"container","mt-4"],[1,"input-group","mb-3"],["type","email","placeholder","Ingresa tu correo electr\xF3nico","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","button",1,"btn","btn-danger",3,"click","disabled"],["class","alert alert-info","role","alert",4,"ngIf"],["role","alert",1,"alert","alert-info"]],template:function(e,r){e&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),a(4,"\xBFYa no deseas recibir notificaciones?"),i(),n(5,"div",3)(6,"input",4),_("ngModelChange",function(p){return E(r.email,p)||(r.email=p),p}),i(),n(7,"button",5),N("click",function(){return r.unsubscribe()}),a(8,"cancelar suscripci\xF3n"),i()(),d(9,_e,2,1,"div",6),i()()()),e&2&&(s(6),x("ngModel",r.email),s(),c("disabled",!r.email),s(2),c("ngIf",r.showMessage))},dependencies:[F,w,B,T,D]})};var Ie=[{path:"",redirectTo:"/credit-management",pathMatch:"full"},{path:"credit-management",loadChildren:()=>import("./chunk-KIDBTJRB.js").then(t=>t.GestionCreditoModule)},{path:"economic-analysis",loadChildren:()=>import("./chunk-4B3GG4LY.js").then(t=>t.EconomicAnalysisModule)},{path:"info-tasas/bank-interest-rates",component:O},{path:"info-tasas/subscribe",component:h},{path:"info-tasas/unsubscribe",component:j},{path:"**",redirectTo:"credit-management"}],L=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=y({type:t});static \u0275inj=k({imports:[W.forRoot(Ie),W]})};var P=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-sidebar"]],decls:21,vars:0,consts:[[1,"p-3"],["href","/",1,"d-flex","align-items-center","mb-3","mb-md-0","me-md-auto","link-dark","text-decoration-none"],[1,"fs-5"],[1,"nav","nav-pills","flex-column","mb-auto"],[1,"nav-item"],["routerLink","/credit-management","routerLinkActive","active","aria-current","page",1,"nav-link","link-dark"],["routerLink","/economic-analysis","routerLinkActive","active",1,"nav-link","link-dark"],["routerLink","/info-tasas/bank-interest-rates","routerLinkActive","active",1,"nav-link","link-dark"],["routerLink","/info-tasas/subscribe","routerLinkActive","active",1,"nav-link","link-dark"],["routerLink","/info-tasas/unsubscribe","routerLinkActive","active",1,"nav-link","link-dark"]],template:function(e,r){e&1&&(n(0,"div",0)(1,"a",1)(2,"span",2),a(3,"Inicio"),i()(),u(4,"hr"),n(5,"ul",3)(6,"li",4)(7,"a",5),a(8," Gesti\xF3n de Cr\xE9dito "),i()(),n(9,"li",4)(10,"a",6),a(11," An\xE1lisis Econ\xF3mico "),i()(),n(12,"li",4)(13,"a",7),a(14," Tasas de Bancos "),i()(),n(15,"li",4)(16,"a",8),a(17," Suscribirse a Notificaciones "),i()(),n(18,"li",4)(19,"a",9),a(20," Darse de Baja de Notificaciones "),i()()()())},dependencies:[ue,de],styles:[".nav-pills[_ngcontent-%COMP%]{padding-left:0;margin-bottom:0}.nav-link[_ngcontent-%COMP%]{white-space:nowrap}@media (max-width: 767px){.nav-pills[_ngcontent-%COMP%]{flex-direction:column}}@media (min-width: 768px){.nav-pills[_ngcontent-%COMP%]{flex-direction:column}.nav-item[_ngcontent-%COMP%]{margin-bottom:10px}}"]})};var U=class t{title="EasyFinances";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-root"]],decls:20,vars:0,consts:[[1,"navbar","bg-body-tertiary","fixed-top"],[1,"container-fluid",2,"flex-grow","0","min-height","auto"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","offcanvas","data-bs-target","#offcanvasNavbar","aria-controls","offcanvasNavbar","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["tabindex","-1","id","offcanvasNavbar","aria-labelledby","offcanvasNavbarLabel",1,"offcanvas","offcanvas-end"],[1,"offcanvas-header"],["id","offcanvasNavbarLabel",1,"offcanvas-title"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close",1,"btn-close"],[1,"offcanvas-body"],[1,"container-fluid","main-content","pt-5"],[1,"row"],[1,"col"],[1,"footer","bg-light","text-center","text-lg-start"],[1,"text-center","p-3"]],template:function(e,r){e&1&&(n(0,"header",0)(1,"div",1)(2,"a",2),a(3,"EasyFinances"),i(),n(4,"button",3),u(5,"span",4),i(),n(6,"div",5)(7,"div",6)(8,"h5",7),a(9,"Navegaci\xF3n"),i(),u(10,"button",8),i(),n(11,"div",9),u(12,"app-sidebar"),i()()()(),n(13,"div",10)(14,"div",11)(15,"div",12),u(16,"router-outlet"),i()()(),n(17,"footer",13)(18,"div",14),a(19," \xA9 2024 EasyFinances - Todos los derechos reservados "),i()())},dependencies:[pe,P]})};var we={align:"right",allowNegative:!1,decimal:",",precision:0,prefix:"$ ",suffix:"",thousands:"."};X(ge);var V=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=y({type:t,bootstrap:[U]});static \u0275inj=k({providers:[ie(),{provide:K,useValue:"es-CO"},{provide:le,useValue:we}],imports:[oe,L,me,be,ve]})};ne().bootstrapModule(V,{ngZoneEventCoalescing:!0}).catch(t=>console.error(t));
