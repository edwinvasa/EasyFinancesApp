import{$ as ae,A as o,B as _,C as T,E as $,F as y,G as h,H as x,I as ee,J as M,K as I,P as te,Q as ne,R as A,V as ie,W as oe,aa as re,ba as le,ca as se,da as de,e as Y,ea as ce,f as R,fa as pe,g as J,ga as me,h as v,ha as ue,i as F,ia as fe,j as f,ja as ge,k as g,ka as Ce,l as K,ma as _e,n as r,o as Q,oa as be,p as m,pa as ye,q as p,r as e,ra as he,s as t,t as C,ta as U,u as X,ua as xe,v as Z,va as N,w as S,wa as ve,x as E,y as u,z as b}from"./chunk-4JTA2BE5.js";var k=class i{constructor(l){this.http=l}apiUrl="https://easy-finances-app-63cef07822fc.herokuapp.com/api/loan-analysis";analyzeLoan(l){let n=xe(),a=l.abonosCapital==="si"?l.valorAbono:null,s={userId:n,principal:l.monto,rateTypeId:l.tipoTasa==="TEA"?1:2,rate:l.tasa,term:l.plazo,termType:l.tipoPlazo==="Meses"?"months":"years",capitalRepayment:l.abonosCapital==="si",capitalRepaymentAmount:a,capitalRepaymentFrequency:l.frecuenciaAbono||null,startCapitalRepaymentInstallment:l.cuotaInicio||null};return this.http.post(this.apiUrl,s)}static \u0275fac=function(n){return new(n||i)(J(oe))};static \u0275prov=Y({token:i,factory:i.\u0275fac,providedIn:"root"})};function Ae(i,l){i&1&&(e(0,"div",43),o(1," El monto es obligatorio y debe ser mayor a $500.000. "),t())}function Se(i,l){i&1&&(e(0,"div",43),o(1," Selecciona un tipo de tasa. "),t())}function Pe(i,l){i&1&&(e(0,"div",43),o(1,' La tasa es obligatoria y sin el signo "%". '),t())}function Ee(i,l){i&1&&(e(0,"div",43),o(1," El plazo es obligatorio. "),t())}function we(i,l){i&1&&(e(0,"div",43),o(1," Selecciona el tipo de plazo. "),t())}function Oe(i,l){i&1&&(e(0,"div",43),o(1," Selecciona si deseas realizar abonos a capital. "),t())}function ze(i,l){i&1&&(e(0,"div",43),o(1," El valor del abono es obligatorio y debe ser mayor a $1.000. "),t())}function Te(i,l){i&1&&(e(0,"div",43),o(1," Selecciona una frecuencia de abonos. "),t())}function Re(i,l){if(i&1){let n=S();e(0,"div",15)(1,"label",47),o(2,"Frecuencia de abonos a capital:"),t(),e(3,"select",48,8),x("ngModelChange",function(s){f(n);let c=u(2);return h(c.creditInfo.frecuenciaAbono,s)||(c.creditInfo.frecuenciaAbono=s),g(s)}),e(5,"option",49),o(6,"Selecciona la frecuencia de pagos"),t(),e(7,"option",50),o(8,"Mensual"),t(),e(9,"option",51),o(10,"Semestral"),t(),e(11,"option",52),o(12,"Anual"),t(),e(13,"option",53),o(14,"Pago \xFAnico"),t()(),m(15,Te,2,0,"div",18),t()}if(i&2){let n=b(4),a=u(2);r(3),y("ngModel",a.creditInfo.frecuenciaAbono),r(12),p("ngIf",n.invalid&&(n.dirty||n.touched))}}function Fe(i,l){i&1&&(e(0,"div",43),o(1," La cuota de inicio es obligatoria. "),t())}function Ne(i,l){if(i&1){let n=S();e(0,"div",15)(1,"label",54),o(2,"\xBFA partir de cu\xE1l cuota desea comenzar a aplicar los abonos a capital?"),t(),e(3,"input",55,9),x("ngModelChange",function(s){f(n);let c=u(2);return h(c.creditInfo.cuotaInicio,s)||(c.creditInfo.cuotaInicio=s),g(s)}),t(),m(5,Fe,2,0,"div",18),t()}if(i&2){let n=b(4),a=u(2);r(3),y("ngModel",a.creditInfo.cuotaInicio),r(2),p("ngIf",n.invalid&&(n.dirty||n.touched))}}function ke(i,l){if(i&1){let n=S();e(0,"div")(1,"div",15)(2,"label",44),o(3,"Valor del abono:"),t(),e(4,"input",45,7),x("ngModelChange",function(s){f(n);let c=u();return h(c.creditInfo.valorAbono,s)||(c.creditInfo.valorAbono=s),g(s)}),t(),m(6,ze,2,0,"div",18),t(),m(7,Re,16,2,"div",46)(8,Ne,6,2,"div",46),t()}if(i&2){let n=b(5),a=u();r(4),y("ngModel",a.creditInfo.valorAbono),r(2),p("ngIf",n.invalid&&(n.dirty||n.touched)),r(),p("ngIf",a.creditInfo.valorAbono),r(),p("ngIf",a.creditInfo.frecuenciaAbono)}}var w=class i{onSubmitCreditInfo=new K;creditInfo={monto:null,tipoTasa:"TEA",tasa:null,plazo:null,tipoPlazo:"Meses",abonosCapital:"no",valorAbono:null,frecuenciaAbono:"",cuotaInicio:null};submitCreditInfo(){this.validarFormulario()?this.onSubmitCreditInfo.emit(this.creditInfo):console.error("Formulario no v\xE1lido")}validarFormulario(){let n=this.creditInfo.monto!==null&&Number(this.creditInfo.monto)>5e5&&this.creditInfo.tasa!==null&&this.creditInfo.plazo!==null;return this.creditInfo.abonosCapital==="si"?n&&this.creditInfo.valorAbono!==null&&Number(this.creditInfo.valorAbono)>1e3&&this.creditInfo.frecuenciaAbono!==""&&this.creditInfo.cuotaInicio!==null:n}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=v({type:i,selectors:[["app-info-credito-actual"]],outputs:{onSubmitCreditInfo:"onSubmitCreditInfo"},decls:69,vars:15,consts:[["creditForm","ngForm"],["monto","ngModel"],["tipoTasa","ngModel"],["tasa","ngModel"],["plazo","ngModel"],["tipoPlazo","ngModel"],["abonosCapital","ngModel"],["valorAbono","ngModel"],["frecuenciaAbono","ngModel"],["cuotaInicio","ngModel"],[1,"d-flex","justify-content-center"],[1,"w-auto","p-3"],[1,"container","mt-3"],[1,"text-muted"],["novalidate","","autocomplete","off",3,"ngSubmit"],[1,"mb-3"],["for","monto",1,"form-label"],["type","text","id","monto","currencyMask","","name","monto","required","","placeholder","Ejemplo: 10.000.000","autocomplete","off",1,"form-control",3,"ngModelChange","ngModel"],["class","text-danger",4,"ngIf"],["for","tipoTasa",1,"form-label"],["id","tipoTasa","name","tipoTasa","required","",1,"form-select",3,"ngModelChange","ngModel"],["value","TEA"],["value","TNM"],["for","tasa",1,"form-label"],["type","number","id","tasa","name","tasa","required","","placeholder","Ejemplo: 12.5%","autocomplete","off",1,"form-control",3,"ngModelChange","ngModel"],[1,"row"],[1,"col-md-6","mb-3"],["for","plazo",1,"form-label"],["type","number","id","plazo","name","plazo","required","","placeholder","Ejemplo: 72",1,"form-control",3,"ngModelChange","ngModel"],["for","tipoPlazo",1,"form-label"],["id","tipoPlazo","name","tipoPlazo","required","",1,"form-select",3,"ngModelChange","ngModel"],["value","Meses"],["value","A\xF1os"],[1,"mb-3","text-center"],["for","siAbonos"],[1,"form-check","form-check-inline"],["type","radio","name","abonosCapital","id","siAbonos","value","si","required","",1,"form-check-input",3,"ngModelChange","ngModel"],["for","siAbonos",1,"form-check-label"],["type","radio","name","abonosCapital","id","noAbonos","value","no","required","",1,"form-check-input",3,"ngModelChange","ngModel"],["for","noAbonos",1,"form-check-label"],[4,"ngIf"],[1,"text-center"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-danger"],["for","valorAbono",1,"form-label"],["type","text","id","valorAbono","currencyMask","","name","valorAbono","required","","placeholder","Ejemplo: 100.000","autocomplete","off",1,"form-control",3,"ngModelChange","ngModel"],["class","mb-3",4,"ngIf"],["for","frecuenciaAbono",1,"form-label"],["id","frecuenciaAbono","name","frecuenciaAbono","required","",1,"form-select",3,"ngModelChange","ngModel"],["value","","disabled","","selected",""],["value","monthly"],["value","biannual"],["value","annual"],["value","one-time"],["for","cuotaInicio",1,"form-label"],["type","number","id","cuotaInicio","name","cuotaInicio","required","","placeholder","Ejemplo: 1",1,"form-control",3,"ngModelChange","ngModel"]],template:function(n,a){if(n&1){let s=S();e(0,"div",10)(1,"div",11)(2,"div",12)(3,"h2"),o(4,"Informaci\xF3n del Cr\xE9dito Actual"),t(),C(5,"br"),e(6,"p",13),o(7," Introduce los detalles de tu cr\xE9dito, elige la opci\xF3n de abonos a capital y descubre c\xF3mo puedes optimizar tus pagos. "),t(),C(8,"br"),e(9,"form",14,0),E("ngSubmit",function(){return f(s),g(a.submitCreditInfo())}),e(11,"div",15)(12,"label",16),o(13,"Monto:"),t(),e(14,"input",17,1),x("ngModelChange",function(d){return f(s),h(a.creditInfo.monto,d)||(a.creditInfo.monto=d),g(d)}),t(),m(16,Ae,2,0,"div",18),t(),e(17,"div",15)(18,"label",19),o(19,"Tipo de Tasa"),t(),e(20,"select",20,2),x("ngModelChange",function(d){return f(s),h(a.creditInfo.tipoTasa,d)||(a.creditInfo.tipoTasa=d),g(d)}),e(22,"option",21),o(23,"Tasa Efectiva Anual"),t(),e(24,"option",22),o(25,"Tasa Nominal Mensual"),t()(),m(26,Se,2,0,"div",18),t(),e(27,"div",15)(28,"label",23),o(29,"% Tasa:"),t(),e(30,"input",24,3),x("ngModelChange",function(d){return f(s),h(a.creditInfo.tasa,d)||(a.creditInfo.tasa=d),g(d)}),t(),m(32,Pe,2,0,"div",18),t(),e(33,"div",25)(34,"div",26)(35,"label",27),o(36,"Plazo:"),t(),e(37,"input",28,4),x("ngModelChange",function(d){return f(s),h(a.creditInfo.plazo,d)||(a.creditInfo.plazo=d),g(d)}),t(),m(39,Ee,2,0,"div",18),t(),e(40,"div",26)(41,"label",29),o(42,"Tipo de Plazo"),t(),e(43,"select",30,5),x("ngModelChange",function(d){return f(s),h(a.creditInfo.tipoPlazo,d)||(a.creditInfo.tipoPlazo=d),g(d)}),e(45,"option",31),o(46,"Meses"),t(),e(47,"option",32),o(48,"A\xF1os"),t()(),m(49,we,2,0,"div",18),t()(),C(50,"hr"),e(51,"div",33)(52,"label",34),o(53,"\xBFDesea realizar abonos a capital?"),t(),e(54,"div")(55,"div",35)(56,"input",36,6),x("ngModelChange",function(d){return f(s),h(a.creditInfo.abonosCapital,d)||(a.creditInfo.abonosCapital=d),g(d)}),t(),e(58,"label",37),o(59,"S\xED"),t()(),e(60,"div",35)(61,"input",38),x("ngModelChange",function(d){return f(s),h(a.creditInfo.abonosCapital,d)||(a.creditInfo.abonosCapital=d),g(d)}),t(),e(62,"label",39),o(63,"No"),t()()(),m(64,Oe,2,0,"div",18),t(),m(65,ke,9,4,"div",40),e(66,"div",41)(67,"button",42),o(68,"Confirmar"),t()()()()()()}if(n&2){let s=b(10),c=b(15),d=b(21),j=b(31),q=b(38),G=b(44),H=b(57);r(14),y("ngModel",a.creditInfo.monto),r(2),p("ngIf",c.invalid&&(c.dirty||c.touched)),r(4),y("ngModel",a.creditInfo.tipoTasa),r(6),p("ngIf",d.invalid&&(d.dirty||d.touched)),r(4),y("ngModel",a.creditInfo.tasa),r(2),p("ngIf",j.invalid&&(j.dirty||j.touched)),r(5),y("ngModel",a.creditInfo.plazo),r(2),p("ngIf",q.invalid&&(q.dirty||q.touched)),r(4),y("ngModel",a.creditInfo.tipoPlazo),r(6),p("ngIf",G.invalid&&(G.dirty||G.touched)),r(7),y("ngModel",a.creditInfo.abonosCapital),r(5),y("ngModel",a.creditInfo.abonosCapital),r(3),p("ngIf",H.invalid&&(H.dirty||H.touched)),r(),p("ngIf",a.creditInfo.abonosCapital==="si"),r(2),p("disabled",s.invalid)}},dependencies:[A,be,ce,fe,ge,ae,pe,ue,me,re,le,Ce,de,se],encapsulation:2})};function Le(i,l){if(i&1&&(e(0,"tr")(1,"td"),o(2),t(),e(3,"td"),o(4),M(5,"customCurrency"),t(),e(6,"td"),o(7),M(8,"customCurrency"),t(),e(9,"td"),o(10),M(11,"customCurrency"),t(),e(12,"td"),o(13),M(14,"customCurrency"),t(),e(15,"td"),o(16),M(17,"customCurrency"),t()()),i&2){let n=l.$implicit;r(2),_(n.installmentNumber),r(2),_(I(5,6,n.principalOwed)),r(3),_(I(8,8,n.principalPaid)),r(3),_(I(11,10,n.interestPaid)),r(3),_(I(14,12,n.totalPayment)),r(3),_(I(17,14,n.remainingBalance))}}var L=class i{data=[];title="";constructor(){}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=v({type:i,selectors:[["app-shared-table"]],inputs:{data:"data",title:"title"},decls:20,vars:2,consts:[[1,"table-responsive"],[1,"table-title"],[1,"table","table-bordered","table-hover"],[1,"table-dark"],[4,"ngFor","ngForOf"]],template:function(n,a){n&1&&(e(0,"div",0)(1,"h3",1),o(2),t(),e(3,"table",2)(4,"thead",3)(5,"tr")(6,"th"),o(7,"Cuota"),t(),e(8,"th"),o(9,"Capital Pendiente"),t(),e(10,"th"),o(11,"Capital Pagado"),t(),e(12,"th"),o(13,"Intereses Pagados"),t(),e(14,"th"),o(15,"Pago Total"),t(),e(16,"th"),o(17,"Balance Restante"),t()()(),e(18,"tbody"),m(19,Le,18,16,"tr",4),t()()()),n&2&&(r(2),_(a.title),r(17),p("ngForOf",a.data))},dependencies:[ne,N],styles:[".table-title[_ngcontent-%COMP%]{font-size:1.5rem;color:#1e3a8a;margin-bottom:15px;text-align:center;font-weight:700}.table[_ngcontent-%COMP%]{width:100%;margin-bottom:1rem;color:#212529}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#1e3a8a;color:#fff}.table-bordered[_ngcontent-%COMP%]{border:1px solid #dee2e6}.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#00000013}@media (max-width: 768px){.table-title[_ngcontent-%COMP%]{font-size:1.2rem}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.5rem}}@media (max-width: 576px){.table-title[_ngcontent-%COMP%]{font-size:1rem}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.4rem}}"]})};function Be(i,l){if(i&1&&C(0,"app-shared-table",3),i&2){let n=u();p("data",n.loanAnalysisResponse.withCapitalRepayment)}}var O=class i{loanAnalysisResponse;constructor(){}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=v({type:i,selectors:[["app-tabla-amortizacion"]],inputs:{loanAnalysisResponse:"loanAnalysisResponse"},decls:3,vars:2,consts:[[1,"container","mt-3"],["title","Amortizaci\xF3n sin Abonos a Capital",3,"data"],["title","Amortizaci\xF3n con Abonos a Capital",3,"data",4,"ngIf"],["title","Amortizaci\xF3n con Abonos a Capital",3,"data"]],template:function(n,a){n&1&&(e(0,"div",0),C(1,"app-shared-table",1),m(2,Be,1,1,"app-shared-table",2),t()),n&2&&(r(),p("data",a.loanAnalysisResponse.withoutCapitalRepayment),r(),p("ngIf",a.loanAnalysisResponse.withCapitalRepayment))},dependencies:[A,L],styles:[".container[_ngcontent-%COMP%]{margin-top:2rem;padding:0 15px}@media (max-width: 768px){.container[_ngcontent-%COMP%]{padding:15px}}"]})};var qe=(i,l)=>({"col-md-6":i,"col-md-8 mx-auto":l});function Ge(i,l){i&1&&(e(0,"div",16),C(1,"i",17),e(2,"h3",18),o(3,"Optimiza tu Cr\xE9dito con Abonos a Capital"),t(),e(4,"p",19),o(5," Realizar abonos a capital te permite reducir el tiempo y los intereses que pagas por tu cr\xE9dito. Con cada abono, pagar\xE1s menos intereses y podr\xE1s terminar de pagar tu cr\xE9dito mucho antes. "),C(6,"br"),o(7," Usa nuestra herramienta para comparar entre hacer o no abonos a capital, \xA1y descubre cu\xE1nto puedes ahorrar! "),t()())}function He(i,l){if(i&1&&(e(0,"div",20)(1,"div",7)(2,"div",8),o(3,"Con Abonos a Capital"),t(),e(4,"div",9)(5,"p",10),o(6," Intereses totales realizando abonos a capital: "),e(7,"strong"),o(8),M(9,"customCurrency"),t()(),e(10,"p",10),o(11," Esto te estar\xEDas ahorrando: "),e(12,"strong"),o(13),M(14,"customCurrency"),t()(),e(15,"p",10),o(16," Pagar\xEDas el cr\xE9dito en: "),e(17,"strong"),o(18),t()(),e(19,"p",10),o(20," Disminuyendo "),e(21,"strong"),o(22),t()()()()()),i&2){let n,a,s,c,d=u(2);r(8),_(I(9,4,(n=d.analysis==null?null:d.analysis.totalInterestWithRepayment)!==null&&n!==void 0?n:0)),r(5),_(I(14,6,(a=d.analysis==null?null:d.analysis.interestSaved)!==null&&a!==void 0?a:0)),r(5),T("",(s=d.analysis==null?null:d.analysis.monthsWithRepayment)!==null&&s!==void 0?s:0," Meses"),r(4),T("",(c=d.analysis==null?null:d.analysis.monthsSaved)!==null&&c!==void 0?c:0," cuotas")}}function Ue(i,l){if(i&1&&(e(0,"div",21),o(1),e(2,"a",22),o(3,"Ver m\xE1s tasas de intereses de otros bancos"),t()()),i&2){let n=u(2);r(),$(" Considera contactar a ",n.suggestion.bankName," para refinanciar tu pr\xE9stamo a una tasa m\xE1s baja de ",n.suggestion.suggestedBankRate,"% E.A., comparada con tu tasa actual de ",n.suggestion.currentRate,"% E.A. ")}}function Ye(i,l){if(i&1&&C(0,"app-tabla-amortizacion",23),i&2){let n=u().ngIf;p("loanAnalysisResponse",n)}}function Je(i,l){if(i&1){let n=S();X(0),m(1,Ge,8,0,"div",2),e(2,"section",3)(3,"h3",4),o(4,"An\xE1lisis Detallado del Cr\xE9dito"),t(),e(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8),o(9,"Sin Abonos a Capital"),t(),e(10,"div",9)(11,"p",10),o(12," Intereses totales sin abonos a capital: "),e(13,"strong"),o(14),M(15,"customCurrency"),t()(),e(16,"p",10),o(17," Pagar\xEDas el cr\xE9dito en: "),e(18,"strong"),o(19),t()()()()(),m(20,He,23,8,"div",11),t(),e(21,"div",12),m(22,Ue,4,3,"div",13),e(23,"button",14),E("click",function(){f(n);let s=u();return g(s.toggleAmortizationTables())}),o(24),t()()(),m(25,Ye,1,1,"app-tabla-amortizacion",15),Z()}if(i&2){let n,a,s=l.ngIf,c=u();r(),p("ngIf",s.withCapitalRepayment&&s.withCapitalRepayment.length>0),r(5),p("ngClass",ee(10,qe,s.withCapitalRepayment&&s.withCapitalRepayment.length>0,!(s.withCapitalRepayment&&s.withCapitalRepayment.length>0))),r(8),_(I(15,8,(n=c.analysis==null?null:c.analysis.totalInterestWithoutRepayment)!==null&&n!==void 0?n:0)),r(5),T("",(a=c.analysis==null?null:c.analysis.monthsWithoutRepayment)!==null&&a!==void 0?a:0," Meses"),r(),p("ngIf",s.withCapitalRepayment&&s.withCapitalRepayment.length>0),r(2),p("ngIf",c.suggestion),r(2),T(" ",c.showAmortizationTables?"Ocultar Tablas de Amortizaci\xF3n":"Ver Tablas de Amortizaci\xF3n"," "),r(),p("ngIf",c.showAmortizationTables&&c.loanAnalysisResponse)}}var z=class i{loanAnalysisResponse;analysis;suggestion=null;showAmortizationTables=!1;constructor(){}toggleAmortizationTables(){this.showAmortizationTables=!this.showAmortizationTables}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=v({type:i,selectors:[["app-analisis-credito"]],inputs:{loanAnalysisResponse:"loanAnalysisResponse",analysis:"analysis",suggestion:"suggestion"},decls:2,vars:1,consts:[[1,"container","mt-3"],[4,"ngIf"],["class","additional-intro-section bg-light text-center p-4 rounded shadow-sm mb-4",4,"ngIf"],[1,"analysis-section","bg-light","p-4","rounded","shadow-sm","mt-4"],[1,"text-center","text-primary","mb-4"],[1,"row"],[1,"d-flex","align-items-stretch",3,"ngClass"],[1,"card","h-100","w-100"],[1,"card-header"],[1,"card-body"],[1,"card-text"],["class","col-md-6 d-flex align-items-stretch",4,"ngIf"],[1,"card-footer","text-center"],["class","alert alert-info mt-2",4,"ngIf"],["type","button",1,"btn","btn-primary","mb-6",3,"click"],[3,"loanAnalysisResponse",4,"ngIf"],[1,"additional-intro-section","bg-light","text-center","p-4","rounded","shadow-sm","mb-4"],[1,"bi","bi-bar-chart-line-fill",2,"font-size","2rem","color","#FF7043"],[1,"text-primary","mt-2"],[1,"lead"],[1,"col-md-6","d-flex","align-items-stretch"],[1,"alert","alert-info","mt-2"],["routerLink","/info-tasas/bank-interest-rates",1,"btn","btn-link"],[3,"loanAnalysisResponse"]],template:function(n,a){n&1&&(e(0,"div",0),m(1,Je,26,13,"ng-container",1),t()),n&2&&(r(),p("ngIf",a.loanAnalysisResponse))},dependencies:[te,A,he,O,N],styles:[".container[_ngcontent-%COMP%]{margin-top:2rem;padding:0 15px}.intro-section[_ngcontent-%COMP%]{background-color:#f0f4fa;border-left:5px solid #1e3a8a;color:#555;font-size:1.1rem;line-height:1.6;padding:20px;border-radius:8px}.intro-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;color:#1e3a8a}.intro-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;color:#6c757d}@media (max-width: 576px){.intro-section[_ngcontent-%COMP%]{font-size:1rem;padding:20px}.intro-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem}}.additional-intro-section[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:20px;border-radius:10px;box-shadow:0 4px 8px #0000001a;margin-bottom:20px}.additional-intro-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;color:#1e3a8a;margin-top:10px}.additional-intro-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:15px;font-size:1.1rem;color:#37474f}.additional-intro-section[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%]{font-size:2rem;color:#ff7043}@media (max-width: 576px){.additional-intro-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem}.additional-intro-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}.analysis-section[_ngcontent-%COMP%]{background-color:#f8f9fa;border-radius:10px;padding:20px;box-shadow:0 4px 8px #0000001a;margin-top:20px}.analysis-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e3a8a;font-size:1.8rem;font-weight:700;margin-bottom:1.5rem;text-align:center}.card[_ngcontent-%COMP%]{border-radius:10px;box-shadow:0 4px 8px #0000000d;margin-bottom:20px;transition:transform .3s ease,box-shadow .3s ease}.card-header[_ngcontent-%COMP%]{background-color:#1e3a8a;color:#fff;font-weight:600;text-align:center;border-top-left-radius:10px;border-top-right-radius:10px}.card-body[_ngcontent-%COMP%]{padding:20px}.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1rem;color:#37474f}.card-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:700}.card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 8px 16px #0000001a}.btn-primary[_ngcontent-%COMP%]{background-color:#ff7043;border:none;padding:10px 20px;font-size:16px;transition:background-color .3s ease,transform .3s ease}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#e64a19;transform:translateY(-3px)}.alert[_ngcontent-%COMP%]{font-size:1.1rem}.alert-info[_ngcontent-%COMP%]{background-color:#d1ecf1;color:#0c5460}.alert-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#0c5460;font-weight:700;text-decoration:underline}.alert-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}.table-responsive[_ngcontent-%COMP%]{margin-top:30px}table[_ngcontent-%COMP%]{width:100%;margin-bottom:1rem;color:#212529}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#1e3a8a;color:#fff}.table-bordered[_ngcontent-%COMP%]{border:1px solid #dee2e6}.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#00000013}@media (max-width: 768px){.intro-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem}.intro-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}.additional-intro-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem}.additional-intro-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}.analysis-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem}.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}.btn-primary[_ngcontent-%COMP%]{font-size:14px;padding:8px 16px}}@media (max-width: 576px){.analysis-section[_ngcontent-%COMP%]{padding:15px}}"]})};function Qe(i,l){if(i&1&&C(0,"app-analisis-credito",6),i&2){let n=u();p("loanAnalysisResponse",n.loanAnalysisResponse)("analysis",n.loanAnalysisResponse.analysis)("suggestion",n.loanAnalysisResponse.suggestion)}}var D=class i{constructor(l){this.loanAnalysisService=l}loanAnalysisResponse;handleCreditSubmission(l){this.loanAnalysisService.analyzeLoan(l).subscribe({next:n=>{this.loanAnalysisResponse=n},error:n=>console.error("Error al obtener los datos de an\xE1lisis",n)})}static \u0275fac=function(n){return new(n||i)(Q(k))};static \u0275cmp=v({type:i,selectors:[["app-gestion-credito-main"]],decls:11,vars:1,consts:[[1,"container","mt-3"],[1,"intro-section","bg-light","text-center","p-4","rounded","shadow-sm","mb-4"],[1,"text-primary","mb-3"],[1,"lead","text-muted"],[3,"onSubmitCreditInfo"],[3,"loanAnalysisResponse","analysis","suggestion",4,"ngIf"],[3,"loanAnalysisResponse","analysis","suggestion"]],template:function(n,a){n&1&&(e(0,"div",0)(1,"h5"),o(2,"Gesti\xF3n de Cr\xE9dito"),t(),C(3,"hr"),e(4,"div",1)(5,"h2",2),o(6,"Mejora tu Cr\xE9dito con Abonos a Capital"),t(),e(7,"p",3),o(8," Realizar abonos a capital es una excelente manera de ahorrar en intereses y reducir el tiempo de pago de tu cr\xE9dito. A continuaci\xF3n, te mostramos c\xF3mo afectar\xE1n positivamente tu situaci\xF3n financiera. "),t()(),e(9,"app-info-credito-actual",4),E("onSubmitCreditInfo",function(c){return a.handleCreditSubmission(c)}),t(),m(10,Qe,1,3,"app-analisis-credito",5),t()),n&2&&(r(10),p("ngIf",a.loanAnalysisResponse))},dependencies:[A,w,z],encapsulation:2})};var Xe=[{path:"",component:D,children:[{path:"",redirectTo:"info",pathMatch:"full"},{path:"info",component:w},{path:"analisis-credito",component:z},{path:"amortizacion",component:O}]},{path:"**",redirectTo:"credit-management"}],B=class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=F({type:i});static \u0275inj=R({imports:[U.forChild(Xe),U]})};var Me=class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=F({type:i});static \u0275inj=R({imports:[ie,ye,_e,B,ve]})};export{Me as a};
