import{$ as de,A as b,B as v,C as _,D as Z,E as h,F as S,K as $,L as ee,M as x,P as te,Q as ne,V as ie,W as oe,X as ae,Y as re,Z as le,_ as se,a as J,aa as me,b as P,ba as pe,c as K,ca as ce,d as I,da as ue,e as W,ea as fe,f,g as C,ga as Ce,h as Q,i as r,ia as ge,j as X,ja as ye,k as c,l as d,la as be,m as t,n as e,na as U,o as A,oa as ve,pa as N,qa as _e,r as z,s as M,t as u,u as y,v as o,w as g,x as F,z as Y}from"./chunk-AX6OQGLD.js";var L=class i{constructor(l){this.http=l}apiUrl="https://easy-finances-app-63cef07822fc.herokuapp.com/api/loan-analysis";analyzeLoan(l){let n=ve(),a=l.abonosCapital==="si"?l.valorAbono:null,m={userId:n,principal:l.monto,rateTypeId:l.tipoTasa==="TEA"?1:2,rate:l.tasa,term:l.plazo,termType:l.tipoPlazo==="Meses"?"months":"years",capitalRepayment:l.abonosCapital==="si",capitalRepaymentAmount:a,capitalRepaymentFrequency:l.frecuenciaAbono||null,startCapitalRepaymentInstallment:l.cuotaInicio||null};return this.http.post(this.apiUrl,m)}static \u0275fac=function(n){return new(n||i)(K(ne))};static \u0275prov=J({token:i,factory:i.\u0275fac,providedIn:"root"})};function he(i,l){i&1&&(t(0,"div",41),o(1," El monto es obligatorio y debe ser mayor a $500.000. "),e())}function Se(i,l){i&1&&(t(0,"div",41),o(1," Selecciona un tipo de tasa. "),e())}function xe(i,l){i&1&&(t(0,"div",41),o(1,' La tasa es obligatoria y sin el signo "%". '),e())}function Ee(i,l){i&1&&(t(0,"div",41),o(1," El plazo es obligatorio. "),e())}function Me(i,l){i&1&&(t(0,"div",41),o(1," Selecciona el tipo de plazo. "),e())}function Te(i,l){i&1&&(t(0,"div",41),o(1," Selecciona si deseas realizar abonos a capital. "),e())}function we(i,l){i&1&&(t(0,"div",41),o(1," El valor del abono es obligatorio y debe ser mayor a $1.000. "),e())}function Re(i,l){i&1&&(t(0,"div",41),o(1," Selecciona una frecuencia de abonos. "),e())}function ze(i,l){if(i&1){let n=z();t(0,"div",14)(1,"label",45),o(2,"Frecuencia de abonos a capital:"),e(),t(3,"select",46,8),_("ngModelChange",function(m){f(n);let p=u(2);return v(p.creditInfo.frecuenciaAbono,m)||(p.creditInfo.frecuenciaAbono=m),C(m)}),t(5,"option",47),o(6,"Selecciona la frecuencia de pagos"),e(),t(7,"option",48),o(8,"Mensual"),e(),t(9,"option",49),o(10,"Semestral"),e(),t(11,"option",50),o(12,"Anual"),e(),t(13,"option",51),o(14,"Pago \xFAnico"),e()(),c(15,Re,2,0,"div",17),e()}if(i&2){let n=y(4),a=u(2);r(3),b("ngModel",a.creditInfo.frecuenciaAbono),r(12),d("ngIf",n.invalid&&(n.dirty||n.touched))}}function Fe(i,l){i&1&&(t(0,"div",41),o(1," La cuota de inicio es obligatoria. "),e())}function Pe(i,l){if(i&1){let n=z();t(0,"div",14)(1,"label",52),o(2,"\xBFA partir de cu\xE1l cuota desea comenzar a aplicar los abonos a capital?"),e(),t(3,"input",53,9),_("ngModelChange",function(m){f(n);let p=u(2);return v(p.creditInfo.cuotaInicio,m)||(p.creditInfo.cuotaInicio=m),C(m)}),e(),c(5,Fe,2,0,"div",17),e()}if(i&2){let n=y(4),a=u(2);r(3),b("ngModel",a.creditInfo.cuotaInicio),r(2),d("ngIf",n.invalid&&(n.dirty||n.touched))}}function We(i,l){if(i&1){let n=z();t(0,"div")(1,"div",14)(2,"label",42),o(3,"Valor del abono:"),e(),t(4,"input",43,7),_("ngModelChange",function(m){f(n);let p=u();return v(p.creditInfo.valorAbono,m)||(p.creditInfo.valorAbono=m),C(m)}),e(),c(6,we,2,0,"div",17),e(),c(7,ze,16,2,"div",44)(8,Pe,6,2,"div",44),e()}if(i&2){let n=y(5),a=u();r(4),b("ngModel",a.creditInfo.valorAbono),r(2),d("ngIf",n.invalid&&(n.dirty||n.touched)),r(),d("ngIf",a.creditInfo.valorAbono),r(),d("ngIf",a.creditInfo.frecuenciaAbono)}}var T=class i{onSubmitCreditInfo=new Q;creditInfo={monto:null,tipoTasa:"TEA",tasa:null,plazo:null,tipoPlazo:"Meses",abonosCapital:"no",valorAbono:null,frecuenciaAbono:"",cuotaInicio:null};submitCreditInfo(){this.validarFormulario()?this.onSubmitCreditInfo.emit(this.creditInfo):console.error("Formulario no v\xE1lido")}validarFormulario(){let n=this.creditInfo.monto!==null&&Number(this.creditInfo.monto)>5e5&&this.creditInfo.tasa!==null&&this.creditInfo.plazo!==null;return this.creditInfo.abonosCapital==="si"?n&&this.creditInfo.valorAbono!==null&&Number(this.creditInfo.valorAbono)>1e3&&this.creditInfo.frecuenciaAbono!==""&&this.creditInfo.cuotaInicio!==null:n}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=I({type:i,selectors:[["app-info-credito-actual"]],outputs:{onSubmitCreditInfo:"onSubmitCreditInfo"},decls:65,vars:15,consts:[["creditForm","ngForm"],["monto","ngModel"],["tipoTasa","ngModel"],["tasa","ngModel"],["plazo","ngModel"],["tipoPlazo","ngModel"],["abonosCapital","ngModel"],["valorAbono","ngModel"],["frecuenciaAbono","ngModel"],["cuotaInicio","ngModel"],[1,"d-flex","justify-content-center"],[1,"w-auto","p-3"],[1,"container","mt-3"],["novalidate","","autocomplete","off",3,"ngSubmit"],[1,"mb-3"],["for","monto",1,"form-label"],["type","text","id","monto","currencyMask","","name","monto","required","","placeholder","Ejemplo: 10.000.000","autocomplete","off",1,"form-control",3,"ngModelChange","ngModel"],["class","text-danger",4,"ngIf"],["for","tipoTasa",1,"form-label"],["id","tipoTasa","name","tipoTasa","required","",1,"form-select",3,"ngModelChange","ngModel"],["value","TEA"],["value","TNM"],["for","tasa",1,"form-label"],["type","number","id","tasa","name","tasa","required","","placeholder","Ejemplo: 12.5%","autocomplete","off",1,"form-control",3,"ngModelChange","ngModel"],[1,"row"],[1,"col-md-6","mb-3"],["for","plazo",1,"form-label"],["type","number","id","plazo","name","plazo","required","","placeholder","Ejemplo: 72",1,"form-control",3,"ngModelChange","ngModel"],["for","tipoPlazo",1,"form-label"],["id","tipoPlazo","name","tipoPlazo","required","",1,"form-select",3,"ngModelChange","ngModel"],["value","Meses"],["value","A\xF1os"],[1,"mb-3","text-center"],[1,"form-check","form-check-inline"],["type","radio","name","abonosCapital","id","siAbonos","value","si","required","",1,"form-check-input",3,"ngModelChange","ngModel"],["for","siAbonos",1,"form-check-label"],["type","radio","name","abonosCapital","id","noAbonos","value","no","required","",1,"form-check-input",3,"ngModelChange","ngModel"],["for","noAbonos",1,"form-check-label"],[4,"ngIf"],[1,"text-center"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-danger"],["for","valorAbono",1,"form-label"],["type","text","id","valorAbono","currencyMask","","name","valorAbono","required","","placeholder","Ejemplo: 100.000","autocomplete","off",1,"form-control",3,"ngModelChange","ngModel"],["class","mb-3",4,"ngIf"],["for","frecuenciaAbono",1,"form-label"],["id","frecuenciaAbono","name","frecuenciaAbono","required","",1,"form-select",3,"ngModelChange","ngModel"],["value","","disabled","","selected",""],["value","monthly"],["value","biannual"],["value","annual"],["value","one-time"],["for","cuotaInicio",1,"form-label"],["type","number","id","cuotaInicio","name","cuotaInicio","required","","placeholder","Ejemplo: 1",1,"form-control",3,"ngModelChange","ngModel"]],template:function(n,a){if(n&1){let m=z();t(0,"div",10)(1,"div",11)(2,"div",12)(3,"h2"),o(4,"Informaci\xF3n del Cr\xE9dito Actual"),e(),t(5,"form",13,0),M("ngSubmit",function(){return f(m),C(a.submitCreditInfo())}),t(7,"div",14)(8,"label",15),o(9,"Monto:"),e(),t(10,"input",16,1),_("ngModelChange",function(s){return f(m),v(a.creditInfo.monto,s)||(a.creditInfo.monto=s),C(s)}),e(),c(12,he,2,0,"div",17),e(),t(13,"div",14)(14,"label",18),o(15,"Tipo de Tasa"),e(),t(16,"select",19,2),_("ngModelChange",function(s){return f(m),v(a.creditInfo.tipoTasa,s)||(a.creditInfo.tipoTasa=s),C(s)}),t(18,"option",20),o(19,"Tasa Efectiva Anual"),e(),t(20,"option",21),o(21,"Tasa Nominal Mensual"),e()(),c(22,Se,2,0,"div",17),e(),t(23,"div",14)(24,"label",22),o(25,"% Tasa:"),e(),t(26,"input",23,3),_("ngModelChange",function(s){return f(m),v(a.creditInfo.tasa,s)||(a.creditInfo.tasa=s),C(s)}),e(),c(28,xe,2,0,"div",17),e(),t(29,"div",24)(30,"div",25)(31,"label",26),o(32,"Plazo:"),e(),t(33,"input",27,4),_("ngModelChange",function(s){return f(m),v(a.creditInfo.plazo,s)||(a.creditInfo.plazo=s),C(s)}),e(),c(35,Ee,2,0,"div",17),e(),t(36,"div",25)(37,"label",28),o(38,"Tipo de Plazo"),e(),t(39,"select",29,5),_("ngModelChange",function(s){return f(m),v(a.creditInfo.tipoPlazo,s)||(a.creditInfo.tipoPlazo=s),C(s)}),t(41,"option",30),o(42,"Meses"),e(),t(43,"option",31),o(44,"A\xF1os"),e()(),c(45,Me,2,0,"div",17),e()(),A(46,"hr"),t(47,"div",32)(48,"label"),o(49,"\xBFDesea realizar abonos a capital?"),e(),t(50,"div")(51,"div",33)(52,"input",34,6),_("ngModelChange",function(s){return f(m),v(a.creditInfo.abonosCapital,s)||(a.creditInfo.abonosCapital=s),C(s)}),e(),t(54,"label",35),o(55,"S\xED"),e()(),t(56,"div",33)(57,"input",36),_("ngModelChange",function(s){return f(m),v(a.creditInfo.abonosCapital,s)||(a.creditInfo.abonosCapital=s),C(s)}),e(),t(58,"label",37),o(59,"No"),e()()(),c(60,Te,2,0,"div",17),e(),c(61,We,9,4,"div",38),t(62,"div",39)(63,"button",40),o(64,"Confirmar"),e()()()()()()}if(n&2){let m=y(6),p=y(11),s=y(17),q=y(27),O=y(34),G=y(40),H=y(53);r(10),b("ngModel",a.creditInfo.monto),r(2),d("ngIf",p.invalid&&(p.dirty||p.touched)),r(4),b("ngModel",a.creditInfo.tipoTasa),r(6),d("ngIf",s.invalid&&(s.dirty||s.touched)),r(4),b("ngModel",a.creditInfo.tasa),r(2),d("ngIf",q.invalid&&(q.dirty||q.touched)),r(5),b("ngModel",a.creditInfo.plazo),r(2),d("ngIf",O.invalid&&(O.dirty||O.touched)),r(4),b("ngModel",a.creditInfo.tipoPlazo),r(6),d("ngIf",G.invalid&&(G.dirty||G.touched)),r(7),b("ngModel",a.creditInfo.abonosCapital),r(5),b("ngModel",a.creditInfo.abonosCapital),r(3),d("ngIf",H.invalid&&(H.dirty||H.touched)),r(),d("ngIf",a.creditInfo.abonosCapital==="si"),r(2),d("disabled",m.invalid)}},dependencies:[x,ge,se,ce,ue,ie,de,pe,me,oe,ae,fe,le,re],encapsulation:2})};function Ve(i,l){if(i&1&&(t(0,"tr")(1,"td"),o(2),e(),t(3,"td"),o(4),h(5,"customCurrency"),e(),t(6,"td"),o(7),h(8,"customCurrency"),e(),t(9,"td"),o(10),h(11,"customCurrency"),e(),t(12,"td"),o(13),h(14,"customCurrency"),e(),t(15,"td"),o(16),h(17,"customCurrency"),e()()),i&2){let n=l.$implicit;r(2),g(n.installmentNumber),r(2),g(S(5,6,n.principalOwed)),r(3),g(S(8,8,n.principalPaid)),r(3),g(S(11,10,n.interestPaid)),r(3),g(S(14,12,n.totalPayment)),r(3),g(S(17,14,n.remainingBalance))}}var B=class i{data=[];title="";constructor(){}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=I({type:i,selectors:[["app-shared-table"]],inputs:{data:"data",title:"title"},decls:20,vars:2,consts:[[1,"table-responsive"],[1,"table","table-bordered","table-hover"],[1,"table-dark"],[4,"ngFor","ngForOf"]],template:function(n,a){n&1&&(t(0,"div",0)(1,"h3"),o(2),e(),t(3,"table",1)(4,"thead",2)(5,"tr")(6,"th"),o(7,"Cuota"),e(),t(8,"th"),o(9,"Capital Pendiente"),e(),t(10,"th"),o(11,"Capital Pagado"),e(),t(12,"th"),o(13,"Intereses Pagados"),e(),t(14,"th"),o(15,"Pago Total"),e(),t(16,"th"),o(17,"Balance Restante"),e()()(),t(18,"tbody"),c(19,Ve,18,16,"tr",3),e()()()),n&2&&(r(2),g(a.title),r(17),d("ngForOf",a.data))},dependencies:[ee,N]})};function Be(i,l){if(i&1&&A(0,"app-shared-table",3),i&2){let n=u();d("data",n.loanAnalysisResponse.withCapitalRepayment)}}var w=class i{loanAnalysisResponse;constructor(){}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=I({type:i,selectors:[["app-tabla-amortizacion"]],inputs:{loanAnalysisResponse:"loanAnalysisResponse"},decls:3,vars:2,consts:[[1,"container","mt-3"],["title","Amortizaci\xF3n sin Abonos a Capital",3,"data"],["title","Amortizaci\xF3n con Abonos a Capital",3,"data",4,"ngIf"],["title","Amortizaci\xF3n con Abonos a Capital",3,"data"]],template:function(n,a){n&1&&(t(0,"div",0),A(1,"app-shared-table",1),c(2,Be,1,1,"app-shared-table",2),e()),n&2&&(r(),d("data",a.loanAnalysisResponse.withoutCapitalRepayment),r(),d("ngIf",a.loanAnalysisResponse.withCapitalRepayment))},dependencies:[x,B]})};var je=(i,l)=>({"col-md-6":i,"col-md-8 mx-auto":l});function qe(i,l){if(i&1&&(t(0,"div",14)(1,"div",5)(2,"div",6),o(3,"Con Abonos a Capital"),e(),t(4,"div",7)(5,"p",8),o(6,"Intereses totales realizando abonos a capital: "),t(7,"strong"),o(8),h(9,"customCurrency"),e()(),t(10,"p",8),o(11,"Esto te estar\xEDa ahorrando: "),t(12,"strong"),o(13),h(14,"customCurrency"),e()(),t(15,"p",8),o(16,"Pagar\xEDas el cr\xE9dito en: "),t(17,"strong"),o(18),e()(),t(19,"p",8),o(20,"Disminuyendo "),t(21,"strong"),o(22),e()()()()()),i&2){let n=u();r(8),g(S(9,4,n.analysis.totalInterestWithRepayment)),r(5),g(S(14,6,n.analysis.interestSaved)),r(5),F("",n.analysis.monthsWithRepayment," Meses"),r(4),F("",n.analysis.monthsSaved," cuotas")}}function Oe(i,l){if(i&1&&(t(0,"div",15),o(1),t(2,"a",16),o(3,"Ver m\xE1s tasas de intereses de otros bancos"),e()()),i&2){let n=u();r(),Y(" Considera contactar a ",n.suggestion.bankName," para refinanciar tu pr\xE9stamo a una tasa m\xE1s baja de ",n.suggestion.suggestedBankRate,"%, comparada con tu tasa actual de ",n.suggestion.currentRate,"%. ")}}function Ge(i,l){if(i&1&&A(0,"app-tabla-amortizacion",17),i&2){let n=u();d("loanAnalysisResponse",n.loanAnalysisResponse)}}var R=class i{loanAnalysisResponse;analysis;suggestion=null;showAmortizationTables=!1;constructor(){}toggleAmortizationTables(){this.showAmortizationTables=!this.showAmortizationTables}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=I({type:i,selectors:[["app-analisis-credito"]],inputs:{loanAnalysisResponse:"loanAnalysisResponse",analysis:"analysis",suggestion:"suggestion"},decls:26,vars:12,consts:[[1,"container","mt-3"],[1,"row"],[1,"col-12"],[1,"text-center","mb-4"],[1,"d-flex","align-items-stretch",3,"ngClass"],[1,"card","h-100","w-100"],[1,"card-header"],[1,"card-body"],[1,"card-text"],["class","col-md-6 d-flex align-items-stretch",4,"ngIf"],[1,"card-footer","text-center"],["class","alert alert-info mt-2",4,"ngIf"],["type","button",1,"btn","btn-primary","mb-6",3,"click"],[3,"loanAnalysisResponse",4,"ngIf"],[1,"col-md-6","d-flex","align-items-stretch"],[1,"alert","alert-info","mt-2"],["routerLink","/info-tasas/bank-interest-rates",1,"btn","btn-link"],[3,"loanAnalysisResponse"]],template:function(n,a){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),o(4,"An\xE1lisis Detallado del Cr\xE9dito"),e()()(),t(5,"div",1)(6,"div",4)(7,"div",5)(8,"div",6),o(9,"Sin Abonos a Capital"),e(),t(10,"div",7)(11,"p",8),o(12,"Intereses totales sin abonos a capital: "),t(13,"strong"),o(14),h(15,"customCurrency"),e()(),t(16,"p",8),o(17,"Pagar\xEDas el cr\xE9dito en: "),t(18,"strong"),o(19),e()()()()(),c(20,qe,23,8,"div",9),e(),t(21,"div",10),c(22,Oe,4,3,"div",11),t(23,"button",12),M("click",function(){return a.toggleAmortizationTables()}),o(24),e()(),c(25,Ge,1,1,"app-tabla-amortizacion",13),e()),n&2&&(r(6),d("ngClass",Z(9,je,a.loanAnalysisResponse.withCapitalRepayment.length>0,a.loanAnalysisResponse.withCapitalRepayment.length===0)),r(8),g(S(15,7,a.analysis.totalInterestWithoutRepayment)),r(5),F("",a.analysis.monthsWithoutRepayment," Meses"),r(),d("ngIf",a.loanAnalysisResponse.withCapitalRepayment.length>0),r(2),d("ngIf",a.suggestion),r(2),F(" ",a.showAmortizationTables?"Ocultar Tablas de Amortizaci\xF3n":"Ver Tablas de Amortizaci\xF3n"," "),r(),d("ngIf",a.showAmortizationTables))},dependencies:[$,x,be,w,N]})};function Ue(i,l){if(i&1&&A(0,"app-analisis-credito",3),i&2){let n=u();d("loanAnalysisResponse",n.loanAnalysisResponse)("analysis",n.loanAnalysisResponse.analysis)("suggestion",n.loanAnalysisResponse.suggestion)}}var k=class i{constructor(l){this.loanAnalysisService=l}loanAnalysisResponse;handleCreditSubmission(l){this.loanAnalysisService.analyzeLoan(l).subscribe({next:n=>{this.loanAnalysisResponse=n},error:n=>console.error("Error al obtener los datos de an\xE1lisis",n)})}static \u0275fac=function(n){return new(n||i)(X(L))};static \u0275cmp=I({type:i,selectors:[["app-gestion-credito-main"]],decls:6,vars:1,consts:[[1,"container","mt-3"],[3,"onSubmitCreditInfo"],[3,"loanAnalysisResponse","analysis","suggestion",4,"ngIf"],[3,"loanAnalysisResponse","analysis","suggestion"]],template:function(n,a){n&1&&(t(0,"div",0)(1,"h5"),o(2,"Gesti\xF3n de Cr\xE9dito"),e(),A(3,"hr"),t(4,"app-info-credito-actual",1),M("onSubmitCreditInfo",function(p){return a.handleCreditSubmission(p)}),e(),c(5,Ue,1,3,"app-analisis-credito",2),e()),n&2&&(r(5),d("ngIf",a.loanAnalysisResponse))},dependencies:[x,T,R],encapsulation:2})};var Je=[{path:"",component:k,children:[{path:"",redirectTo:"info",pathMatch:"full"},{path:"info",component:T},{path:"analisis-credito",component:R},{path:"amortizacion",component:w}]},{path:"**",redirectTo:"credit-management"}],j=class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=W({type:i});static \u0275inj=P({imports:[U.forChild(Je),U]})};var Ie=class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=W({type:i});static \u0275inj=P({imports:[te,ye,Ce,j,_e]})};export{Ie as a};