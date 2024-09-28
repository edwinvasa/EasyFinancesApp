import{A as y,B as g,C as f,E as _,F as v,H as Q,L as N,M as X,P as Z,Q as k,U as $,V,W as R,X as ee,Y as ne,Z as P,_ as te,a as b,b as I,ba as ie,c as T,ca as oe,d as S,da as se,e as w,ea as re,f as c,g as d,ga as ae,h as G,i as m,ia as W,j as B,ja as me,k as x,l as u,m as o,n as e,na as z,o as F,oa as le,p as H,pa as pe,q as J,qa as ce,r as M,s as h,t as E,u as L,v as r,w as U,x as C,y as K}from"./chunk-3AXMTNQG.js";var Y=class i{constructor(s){this.http=s}apiUrl="https://easy-finances-app-63cef07822fc.herokuapp.com/api/economic-analysis";analyzeEconomicCapacity(s){return this.http.post(this.apiUrl,s)}static \u0275fac=function(n){return new(n||i)(T(k))};static \u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"})};var O=class i{constructor(s){this.http=s}apiUrl="https://easy-finances-app-63cef07822fc.herokuapp.com/api/expense-types";getExpenseTypes(){return this.http.get(this.apiUrl)}static \u0275fac=function(n){return new(n||i)(T(k))};static \u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"})};function Ce(i,s){if(i&1&&(o(0,"option",8),r(1),e()),i&2){let n=s.$implicit;u("value",n.id),m(),K("",n.name," - ",n.category,"")}}var j=class i{constructor(s){this.expenseTypeService=s}onExpenseAdded=new G;expenseTypes=[];selectedExpenseTypeId=null;amount=null;ngOnInit(){this.loadExpenseTypes()}loadExpenseTypes(){this.expenseTypeService.getExpenseTypes().subscribe({next:s=>{this.expenseTypes=s,console.log("Tipos de gastos cargados:",this.expenseTypes)},error:s=>{console.error("Error al cargar tipos de gastos:",s)}})}addExpense(){if(console.log("ID seleccionado:",this.selectedExpenseTypeId),console.log("Monto ingresado:",this.amount),this.selectedExpenseTypeId===null){console.error("Debe seleccionar un tipo de gasto");return}if(this.amount===null||this.amount<=0){console.error("Debe ingresar un monto v\xE1lido");return}let s=Number(this.selectedExpenseTypeId),n=this.expenseTypes.find(t=>t.id===s);console.log("Tipo de gasto seleccionado:",n),n?(this.onExpenseAdded.emit({expenseTypeId:n.id,expenseTypeNameAndCategory:`${n.name} - ${n.category}`,amount:this.amount}),this.resetForm()):console.error("Error al encontrar el tipo de gasto seleccionado")}resetForm(){this.selectedExpenseTypeId=null,this.amount=null}static \u0275fac=function(n){return new(n||i)(B(O))};static \u0275cmp=S({type:i,selectors:[["app-add-expenses"]],outputs:{onExpenseAdded:"onExpenseAdded"},decls:12,vars:3,consts:[[1,"mb-3"],["for","expenseType",1,"form-label"],["id","expenseType","name","expenseType",1,"form-select",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["for","amount",1,"form-label"],["type","text","id","amount","currencyMask","","placeholder","Ingrese el monto del gasto","autocomplete","off",1,"form-control",3,"ngModelChange","ngModel"],[1,"text-center"],["type","button",1,"btn","btn-primary",3,"click"],[3,"value"]],template:function(n,t){n&1&&(o(0,"div",0)(1,"label",1),r(2,"Tipo de Gasto"),e(),o(3,"select",2),f("ngModelChange",function(l){return g(t.selectedExpenseTypeId,l)||(t.selectedExpenseTypeId=l),l}),x(4,Ce,2,3,"option",3),e()(),o(5,"div",0)(6,"label",4),r(7,"Monto del Gasto"),e(),o(8,"input",5),f("ngModelChange",function(l){return g(t.amount,l)||(t.amount=l),l}),e()(),o(9,"div",6)(10,"button",7),h("click",function(){return t.addExpense()}),r(11,"Agregar"),e()()),n&2&&(m(3),y("ngModel",t.selectedExpenseTypeId),m(),u("ngForOf",t.expenseTypes),m(4),y("ngModel",t.amount))},dependencies:[N,oe,se,V,ie,R,P,W]})};function ve(i,s){i&1&&(o(0,"div",27),r(1," Ingresos mensuales son obligatorios. "),e())}function Me(i,s){if(i&1){let n=M();o(0,"input",28),f("ngModelChange",function(a){c(n);let l=E();return g(l.christmasBonusAmount,a)||(l.christmasBonusAmount=a),d(a)}),e()}if(i&2){let n=E();y("ngModel",n.christmasBonusAmount)}}function Ae(i,s){if(i&1){let n=M();o(0,"input",29),f("ngModelChange",function(a){c(n);let l=E();return g(l.midYearBonusAmount,a)||(l.midYearBonusAmount=a),d(a)}),e()}if(i&2){let n=E();y("ngModel",n.midYearBonusAmount)}}function be(i,s){if(i&1){let n=M();o(0,"tr")(1,"td"),r(2),e(),o(3,"td"),r(4),_(5,"customCurrency"),e(),o(6,"td")(7,"button",30),h("click",function(){let a=c(n).index,l=E();return d(l.removeExpense(a))}),r(8,"Eliminar"),e()()()}if(i&2){let n=s.$implicit;m(2),U(n.expenseTypeNameAndCategory),m(2),C("",v(5,2,n.amount)," ")}}function Ie(i,s){if(i&1&&(H(0),o(1,"p")(2,"strong"),r(3,"Monto Sugerido para Pago:"),e(),r(4),_(5,"customCurrency"),e(),J()),i&2){let n=E(2);m(4),C(" ",v(5,1,n.analysisResult.suggestedPaymentAmount),"")}}function Te(i,s){i&1&&(o(0,"div",33)(1,"strong"),r(2,"Atenci\xF3n:"),e(),r(3," No es posible generar un monto sugerido para pago, ya que tus gastos actuales superan significativamente tus ingresos. "),e())}function Se(i,s){if(i&1&&(o(0,"div",31)(1,"h4"),r(2,"Resultado del An\xE1lisis"),e(),o(3,"p")(4,"strong"),r(5,"Ingresos Mensuales:"),e(),r(6),_(7,"customCurrency"),e(),o(8,"p")(9,"strong"),r(10,"Ingresos Adicionales:"),e(),r(11),_(12,"customCurrency"),e(),o(13,"p")(14,"strong"),r(15,"Gastos Totales:"),e(),r(16),_(17,"customCurrency"),e(),x(18,Ie,6,3,"ng-container",32)(19,Te,4,0,"ng-template",null,1,Q),e()),i&2){let n=L(20),t=E();m(6),C(" ",v(7,5,t.analysisResult.monthlyIncome),""),m(5),C(" ",v(12,7,t.analysisResult.additionalIncome),""),m(5),C(" ",v(17,9,t.analysisResult.totalExpenses),""),m(2),u("ngIf",t.analysisResult.suggestedPaymentAmount>=0)("ngIfElse",n)}}var D=class i{constructor(s){this.economicAnalysisService=s}monthlyIncome=0;additionalIncome=0;receivesChristmasBonus=!1;receivesMidYearBonus=!1;christmasBonusAmount=0;midYearBonusAmount=0;expenses=[];analysisResult;addExpense(s){this.expenses.push(s)}removeExpense(s){this.expenses.splice(s,1)}analyzeEconomicCapacity(){if(this.expenses.length===0)return;let s=this.expenses.map(t=>({expenseTypeId:t.expenseTypeId,amount:t.amount})),n={userId:le(),monthlyIncome:this.monthlyIncome,additionalIncome:this.additionalIncome,expenses:s,receivesChristmasBonus:this.receivesChristmasBonus,receivesMidYearBonus:this.receivesMidYearBonus,christmasBonusAmount:this.receivesChristmasBonus?this.christmasBonusAmount:0,midYearBonusAmount:this.receivesMidYearBonus?this.midYearBonusAmount:0};this.economicAnalysisService.analyzeEconomicCapacity(n).subscribe({next:t=>{this.analysisResult=t},error:t=>{console.error("Error al analizar la capacidad econ\xF3mica:",t)}})}static \u0275fac=function(n){return new(n||i)(B(Y))};static \u0275cmp=S({type:i,selectors:[["app-economic-analysis-form"]],decls:57,vars:9,consts:[["monthlyIncomeModel","ngModel"],["negativeAmountMessage",""],[1,"container","mt-3"],["autocomplete","off",3,"ngSubmit"],[1,"d-flex","justify-content-center"],[1,"w-auto","p-3"],[1,"row","mb-3"],[1,"col"],["for","monthlyIncome",1,"form-label"],["type","text","id","monthlyIncome","name","monthlyIncome","currencyMask","","placeholder","Ej: 5.000.000","required","","autocomplete","off",1,"form-control",3,"ngModelChange","ngModel"],["class","text-danger",4,"ngIf"],["for","additionalIncome",1,"form-label"],["type","text","id","additionalIncome","name","additionalIncome","currencyMask","","placeholder","Ej: 500.000",1,"form-control",3,"ngModelChange","ngModel"],[1,"form-label"],[1,"form-check"],["type","checkbox","name","receivesChristmasBonus","id","christmasBonus","autocomplete","off",1,"form-check-input",3,"ngModelChange","ngModel"],["for","christmasBonus",1,"form-check-label"],["type","text","name","christmasBonusAmount","class","form-control mt-2","currencyMask","","placeholder","Cantidad Prima de Navidad",3,"ngModel","ngModelChange",4,"ngIf"],["type","checkbox","name","receivesMidYearBonus","id","midYearBonus","autocomplete","off",1,"form-check-input",3,"ngModelChange","ngModel"],["for","midYearBonus",1,"form-check-label"],["type","text","name","midYearBonusAmount","class","form-control mt-2","currencyMask","","placeholder","Cantidad Prima de Junio",3,"ngModel","ngModelChange",4,"ngIf"],[3,"onExpenseAdded"],[1,"table","table-bordered","mt-3"],[4,"ngFor","ngForOf"],[1,"text-center"],["type","submit",1,"btn","btn-primary"],["class","mt-4",4,"ngIf"],[1,"text-danger"],["type","text","name","christmasBonusAmount","currencyMask","","placeholder","Cantidad Prima de Navidad",1,"form-control","mt-2",3,"ngModelChange","ngModel"],["type","text","name","midYearBonusAmount","currencyMask","","placeholder","Cantidad Prima de Junio",1,"form-control","mt-2",3,"ngModelChange","ngModel"],["type","button",1,"btn","btn-danger",3,"click"],[1,"mt-4"],[4,"ngIf","ngIfElse"],[1,"alert","alert-warning","mt-3"]],template:function(n,t){if(n&1){let a=M();o(0,"div",2)(1,"h5"),r(2,"An\xE1lisis de Capacidad de Pago"),e(),F(3,"hr"),o(4,"form",3),h("ngSubmit",function(){return c(a),d(t.analyzeEconomicCapacity())}),o(5,"div",4)(6,"div",5)(7,"h6"),r(8,"Ingresos"),e(),F(9,"hr"),o(10,"div",6)(11,"div",7)(12,"label",8),r(13,"Ingresos Mensuales"),e(),o(14,"input",9,0),f("ngModelChange",function(p){return c(a),g(t.monthlyIncome,p)||(t.monthlyIncome=p),d(p)}),e(),x(16,ve,2,0,"div",10),e(),o(17,"div",7)(18,"label",11),r(19,"Otros Ingresos"),e(),o(20,"input",12),f("ngModelChange",function(p){return c(a),g(t.additionalIncome,p)||(t.additionalIncome=p),d(p)}),e()()(),o(21,"div",6)(22,"div",7)(23,"label",13),r(24,"Prima de Navidad"),e(),o(25,"div",14)(26,"input",15),f("ngModelChange",function(p){return c(a),g(t.receivesChristmasBonus,p)||(t.receivesChristmasBonus=p),d(p)}),e(),o(27,"label",16),r(28,"Recibo Prima de Navidad"),e()(),x(29,Me,1,1,"input",17),e(),o(30,"div",7)(31,"label",13),r(32,"Prima de Junio"),e(),o(33,"div",14)(34,"input",18),f("ngModelChange",function(p){return c(a),g(t.receivesMidYearBonus,p)||(t.receivesMidYearBonus=p),d(p)}),e(),o(35,"label",19),r(36,"Recibo Prima de Junio"),e()(),x(37,Ae,1,1,"input",20),e()(),o(38,"h6"),r(39,"Gastos"),e(),F(40,"hr"),o(41,"app-add-expenses",21),h("onExpenseAdded",function(p){return c(a),d(t.addExpense(p))}),e(),o(42,"table",22)(43,"thead")(44,"tr")(45,"th"),r(46,"Tipo de Gasto"),e(),o(47,"th"),r(48,"Monto"),e(),o(49,"th"),r(50,"Acci\xF3n"),e()()(),o(51,"tbody"),x(52,be,9,4,"tr",23),e()(),o(53,"div",24)(54,"button",25),r(55,"Analizar Capacidad de Pago"),e()()()()(),x(56,Se,21,11,"div",26),e()}if(n&2){let a=L(15);m(14),y("ngModel",t.monthlyIncome),m(2),u("ngIf",a.invalid&&(a.dirty||a.touched)),m(4),y("ngModel",t.additionalIncome),m(6),y("ngModel",t.receivesChristmasBonus),m(3),u("ngIf",t.receivesChristmasBonus),m(5),y("ngModel",t.receivesMidYearBonus),m(3),u("ngIf",t.receivesMidYearBonus),m(15),u("ngForOf",t.expenses),m(4),u("ngIf",t.analysisResult)}},dependencies:[N,X,te,V,$,R,ee,re,P,ne,W,j,pe],encapsulation:2})};var we=[{path:"",component:D},{path:"**",redirectTo:"economic-analysis"}],q=class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=w({type:i});static \u0275inj=I({imports:[z.forChild(we),z]})};var de=class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=w({type:i});static \u0275inj=I({imports:[Z,q,ae,me,ce]})};export{de as a};
