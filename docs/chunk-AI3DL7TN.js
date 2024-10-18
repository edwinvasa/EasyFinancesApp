import{A as g,B as y,C as f,E as _,F as v,H as Q,L as k,M as X,P as Z,Q as N,U as $,V,W as P,X as ee,Y as te,Z as R,_ as ne,a as A,b as I,ba as ie,c as T,ca as oe,d as S,da as re,e as w,ea as se,f as p,g as d,ga as ae,h as G,i as m,ia as W,j as B,ja as me,k as x,l as u,m as i,n as e,na as L,o as F,oa as le,p as H,pa as ce,q as J,qa as pe,r as b,s as h,t as E,u as z,v as r,w as U,x as C,y as K}from"./chunk-AX6OQGLD.js";var O=class o{constructor(s){this.http=s}apiUrl="https://easy-finances-app-63cef07822fc.herokuapp.com/api/economic-analysis";analyzeEconomicCapacity(s){return this.http.post(this.apiUrl,s)}static \u0275fac=function(t){return new(t||o)(T(N))};static \u0275prov=A({token:o,factory:o.\u0275fac,providedIn:"root"})};var Y=class o{constructor(s){this.http=s}apiUrl="https://easy-finances-app-63cef07822fc.herokuapp.com/api/expense-types";getExpenseTypes(){return this.http.get(this.apiUrl)}static \u0275fac=function(t){return new(t||o)(T(N))};static \u0275prov=A({token:o,factory:o.\u0275fac,providedIn:"root"})};function Ce(o,s){if(o&1&&(i(0,"option",8),r(1),e()),o&2){let t=s.$implicit;u("value",t.id),m(),K("",t.name," - ",t.category,"")}}var j=class o{constructor(s){this.expenseTypeService=s}onExpenseAdded=new G;expenseTypes=[];selectedExpenseTypeId=null;amount=null;ngOnInit(){this.loadExpenseTypes()}loadExpenseTypes(){this.expenseTypeService.getExpenseTypes().subscribe({next:s=>{this.expenseTypes=s,console.log("Tipos de gastos cargados:",this.expenseTypes)},error:s=>{console.error("Error al cargar tipos de gastos:",s)}})}addExpense(){if(console.log("ID seleccionado:",this.selectedExpenseTypeId),console.log("Monto ingresado:",this.amount),this.selectedExpenseTypeId===null){console.error("Debe seleccionar un tipo de gasto");return}if(this.amount===null||this.amount<=0){console.error("Debe ingresar un monto v\xE1lido");return}let s=Number(this.selectedExpenseTypeId),t=this.expenseTypes.find(n=>n.id===s);console.log("Tipo de gasto seleccionado:",t),t?(this.onExpenseAdded.emit({expenseTypeId:t.id,expenseTypeNameAndCategory:`${t.name} - ${t.category}`,amount:this.amount}),this.resetForm()):console.error("Error al encontrar el tipo de gasto seleccionado")}resetForm(){this.selectedExpenseTypeId=null,this.amount=null}static \u0275fac=function(t){return new(t||o)(B(Y))};static \u0275cmp=S({type:o,selectors:[["app-add-expenses"]],outputs:{onExpenseAdded:"onExpenseAdded"},decls:12,vars:3,consts:[[1,"mb-3"],["for","expenseType",1,"form-label"],["id","expenseType","name","expenseType",1,"form-select",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["for","amount",1,"form-label"],["type","text","id","amount","currencyMask","","placeholder","Ingrese el monto del gasto","autocomplete","off",1,"form-control",3,"ngModelChange","ngModel"],[1,"text-center"],["type","button",1,"btn","btn-primary",3,"click"],[3,"value"]],template:function(t,n){t&1&&(i(0,"div",0)(1,"label",1),r(2,"Tipo de Gasto"),e(),i(3,"select",2),f("ngModelChange",function(l){return y(n.selectedExpenseTypeId,l)||(n.selectedExpenseTypeId=l),l}),x(4,Ce,2,3,"option",3),e()(),i(5,"div",0)(6,"label",4),r(7,"Monto del Gasto"),e(),i(8,"input",5),f("ngModelChange",function(l){return y(n.amount,l)||(n.amount=l),l}),e()(),i(9,"div",6)(10,"button",7),h("click",function(){return n.addExpense()}),r(11,"Agregar Gasto"),e()()),t&2&&(m(3),g("ngModel",n.selectedExpenseTypeId),m(),u("ngForOf",n.expenseTypes),m(4),g("ngModel",n.amount))},dependencies:[k,oe,re,V,ie,P,R,W],styles:[".container[_ngcontent-%COMP%]{max-width:80%;margin:0 auto;padding:20px}.mb-3[_ngcontent-%COMP%]{margin-bottom:20px}button[_ngcontent-%COMP%]{width:100%;font-size:1.1rem;padding:10px;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#ff7043}"]})};function ve(o,s){o&1&&(i(0,"div",30),r(1," Ingresos mensuales son obligatorios. "),e())}function be(o,s){if(o&1){let t=b();i(0,"input",31),f("ngModelChange",function(a){p(t);let l=E();return y(l.christmasBonusAmount,a)||(l.christmasBonusAmount=a),d(a)}),e()}if(o&2){let t=E();g("ngModel",t.christmasBonusAmount)}}function Me(o,s){if(o&1){let t=b();i(0,"input",32),f("ngModelChange",function(a){p(t);let l=E();return y(l.midYearBonusAmount,a)||(l.midYearBonusAmount=a),d(a)}),e()}if(o&2){let t=E();g("ngModel",t.midYearBonusAmount)}}function Ae(o,s){if(o&1){let t=b();i(0,"tr")(1,"td"),r(2),e(),i(3,"td"),r(4),_(5,"customCurrency"),e(),i(6,"td")(7,"button",33),h("click",function(){let a=p(t).index,l=E();return d(l.removeExpense(a))}),r(8,"Eliminar"),e()()()}if(o&2){let t=s.$implicit;m(2),U(t.expenseTypeNameAndCategory),m(2),C("",v(5,2,t.amount)," ")}}function Ie(o,s){if(o&1&&(H(0),i(1,"p")(2,"strong"),r(3,"Monto Sugerido para Pago:"),e(),r(4),_(5,"customCurrency"),e(),i(6,"p",37),r(7," Aunque el monto sugerido puede parecer bajo, realizar peque\xF1os abonos a capital, incluso de $20.000 pesos, impactar\xE1 significativamente en la reducci\xF3n del tiempo y de los intereses de tu cr\xE9dito. "),e(),J()),o&2){let t=E(2);m(4),C(" ",v(5,1,t.analysisResult.suggestedPaymentAmount),"")}}function Te(o,s){o&1&&(i(0,"div",38)(1,"strong"),r(2,"Atenci\xF3n:"),e(),r(3," Tus gastos actuales superan tus ingresos, lo que hace dif\xEDcil generar un monto sugerido para pago. Considera reducir gastos para mejorar tu capacidad de pago. "),e())}function Se(o,s){if(o&1&&(i(0,"div",34)(1,"h4",27),r(2,"Resultado del An\xE1lisis"),e(),i(3,"div",35)(4,"p")(5,"strong"),r(6,"Ingresos Mensuales:"),e(),r(7),_(8,"customCurrency"),e(),i(9,"p")(10,"strong"),r(11,"Ingresos Adicionales:"),e(),r(12),_(13,"customCurrency"),e(),i(14,"p")(15,"strong"),r(16,"Gastos Totales:"),e(),r(17),_(18,"customCurrency"),e(),x(19,Ie,8,3,"ng-container",36)(20,Te,4,0,"ng-template",null,1,Q),e()()),o&2){let t=z(21),n=E();m(7),C(" ",v(8,5,n.analysisResult.monthlyIncome),""),m(5),C(" ",v(13,7,n.analysisResult.additionalIncome),""),m(5),C(" ",v(18,9,n.analysisResult.totalExpenses),""),m(2),u("ngIf",n.analysisResult.suggestedPaymentAmount>=0)("ngIfElse",t)}}var D=class o{constructor(s){this.economicAnalysisService=s}monthlyIncome=0;additionalIncome=0;receivesChristmasBonus=!1;receivesMidYearBonus=!1;christmasBonusAmount=0;midYearBonusAmount=0;expenses=[];analysisResult;addExpense(s){this.expenses.push(s)}removeExpense(s){this.expenses.splice(s,1)}analyzeEconomicCapacity(){if(this.expenses.length===0)return;let s=this.expenses.map(n=>({expenseTypeId:n.expenseTypeId,amount:n.amount})),t={userId:le(),monthlyIncome:this.monthlyIncome,additionalIncome:this.additionalIncome,expenses:s,receivesChristmasBonus:this.receivesChristmasBonus,receivesMidYearBonus:this.receivesMidYearBonus,christmasBonusAmount:this.receivesChristmasBonus?this.christmasBonusAmount:0,midYearBonusAmount:this.receivesMidYearBonus?this.midYearBonusAmount:0};this.economicAnalysisService.analyzeEconomicCapacity(t).subscribe({next:n=>{this.analysisResult=n},error:n=>{console.error("Error al analizar la capacidad econ\xF3mica:",n)}})}static \u0275fac=function(t){return new(t||o)(B(O))};static \u0275cmp=S({type:o,selectors:[["app-economic-analysis-form"]],decls:62,vars:9,consts:[["monthlyIncomeModel","ngModel"],["negativeAmountMessage",""],[1,"container","mt-3"],[1,"intro-section","bg-light","text-center","p-4","rounded","shadow-sm","mb-4"],[1,"text-primary","mb-3"],[1,"lead","text-muted"],["autocomplete","off",3,"ngSubmit"],[1,"d-flex","justify-content-center"],[1,"w-auto","p-3"],[1,"row","mb-3"],[1,"col"],["for","monthlyIncome",1,"form-label"],["type","text","id","monthlyIncome","name","monthlyIncome","currencyMask","","placeholder","Ej: 5.000.000","required","","autocomplete","off",1,"form-control",3,"ngModelChange","ngModel"],["class","text-danger",4,"ngIf"],["for","additionalIncome",1,"form-label"],["type","text","id","additionalIncome","name","additionalIncome","currencyMask","","placeholder","Ej: 500.000",1,"form-control",3,"ngModelChange","ngModel"],[1,"form-label"],[1,"form-check"],["type","checkbox","name","receivesChristmasBonus","id","christmasBonus","autocomplete","off",1,"form-check-input",3,"ngModelChange","ngModel"],["for","christmasBonus",1,"form-check-label"],["type","text","name","christmasBonusAmount","class","form-control mt-2","currencyMask","","placeholder","Cantidad Prima de Navidad",3,"ngModel","ngModelChange",4,"ngIf"],["type","checkbox","name","receivesMidYearBonus","id","midYearBonus","autocomplete","off",1,"form-check-input",3,"ngModelChange","ngModel"],["for","midYearBonus",1,"form-check-label"],["type","text","name","midYearBonusAmount","class","form-control mt-2","currencyMask","","placeholder","Cantidad Prima de Junio",3,"ngModel","ngModelChange",4,"ngIf"],[3,"onExpenseAdded"],[1,"table","table-bordered","mt-3"],[4,"ngFor","ngForOf"],[1,"text-center"],["type","submit",1,"btn","btn-primary"],["class","analysis-result mt-5",4,"ngIf"],[1,"text-danger"],["type","text","name","christmasBonusAmount","currencyMask","","placeholder","Cantidad Prima de Navidad",1,"form-control","mt-2",3,"ngModelChange","ngModel"],["type","text","name","midYearBonusAmount","currencyMask","","placeholder","Cantidad Prima de Junio",1,"form-control","mt-2",3,"ngModelChange","ngModel"],["type","button",1,"btn","btn-danger",3,"click"],[1,"analysis-result","mt-5"],[1,"bg-light","p-4","rounded","shadow-sm","mb-4"],[4,"ngIf","ngIfElse"],[1,"text-success"],[1,"alert","alert-warning","mt-3"]],template:function(t,n){if(t&1){let a=b();i(0,"div",2)(1,"h5"),r(2,"An\xE1lisis de Capacidad de Pago"),e(),F(3,"hr"),i(4,"div",3)(5,"h2",4),r(6,"Analiza tu Capacidad de Pago"),e(),i(7,"p",5),r(8," Conocer tu capacidad de pago es clave para gestionar tus finanzas. Introduce tus ingresos, gastos y descubre cu\xE1nto puedes destinar para el pago de tu cr\xE9dito. "),e()(),i(9,"form",6),h("ngSubmit",function(){return p(a),d(n.analyzeEconomicCapacity())}),i(10,"div",7)(11,"div",8)(12,"h6"),r(13,"Ingresos"),e(),F(14,"hr"),i(15,"div",9)(16,"div",10)(17,"label",11),r(18,"Ingresos Mensuales"),e(),i(19,"input",12,0),f("ngModelChange",function(c){return p(a),y(n.monthlyIncome,c)||(n.monthlyIncome=c),d(c)}),e(),x(21,ve,2,0,"div",13),e(),i(22,"div",10)(23,"label",14),r(24,"Otros Ingresos"),e(),i(25,"input",15),f("ngModelChange",function(c){return p(a),y(n.additionalIncome,c)||(n.additionalIncome=c),d(c)}),e()()(),i(26,"div",9)(27,"div",10)(28,"label",16),r(29,"Prima de Navidad"),e(),i(30,"div",17)(31,"input",18),f("ngModelChange",function(c){return p(a),y(n.receivesChristmasBonus,c)||(n.receivesChristmasBonus=c),d(c)}),e(),i(32,"label",19),r(33,"Recibo Prima de Navidad"),e()(),x(34,be,1,1,"input",20),e(),i(35,"div",10)(36,"label",16),r(37,"Prima de Junio"),e(),i(38,"div",17)(39,"input",21),f("ngModelChange",function(c){return p(a),y(n.receivesMidYearBonus,c)||(n.receivesMidYearBonus=c),d(c)}),e(),i(40,"label",22),r(41,"Recibo Prima de Junio"),e()(),x(42,Me,1,1,"input",23),e()(),i(43,"h6"),r(44,"Gastos"),e(),F(45,"hr"),i(46,"app-add-expenses",24),h("onExpenseAdded",function(c){return p(a),d(n.addExpense(c))}),e(),i(47,"table",25)(48,"thead")(49,"tr")(50,"th"),r(51,"Tipo de Gasto"),e(),i(52,"th"),r(53,"Monto"),e(),i(54,"th"),r(55,"Acci\xF3n"),e()()(),i(56,"tbody"),x(57,Ae,9,4,"tr",26),e()(),i(58,"div",27)(59,"button",28),r(60,"Analizar Capacidad de Pago"),e()()()()(),x(61,Se,22,11,"div",29),e()}if(t&2){let a=z(20);m(19),g("ngModel",n.monthlyIncome),m(2),u("ngIf",a.invalid&&(a.dirty||a.touched)),m(4),g("ngModel",n.additionalIncome),m(6),g("ngModel",n.receivesChristmasBonus),m(3),u("ngIf",n.receivesChristmasBonus),m(5),g("ngModel",n.receivesMidYearBonus),m(3),u("ngIf",n.receivesMidYearBonus),m(15),u("ngForOf",n.expenses),m(4),u("ngIf",n.analysisResult)}},dependencies:[k,X,ne,V,$,P,ee,se,R,te,W,j,ce],encapsulation:2})};var we=[{path:"",component:D},{path:"**",redirectTo:"economic-analysis"}],q=class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=w({type:o});static \u0275inj=I({imports:[L.forChild(we),L]})};var de=class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=w({type:o});static \u0275inj=I({imports:[Z,q,ae,me,pe]})};export{de as a};