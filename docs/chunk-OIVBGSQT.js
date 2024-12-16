import{a as J,b as h,c as Ce,d as De,e as _e,f as Be,g as Me,h as Ne,i as Te,j as oe,k as we,l as Le,m as Ae,n as Fe}from"./chunk-VMVFMYOE.js";import{a as Se}from"./chunk-Z7GYIJXN.js";import{$ as ye,D as s,E as l,Ia as k,J as x,Ja as U,Ka as j,L as p,La as W,Ma as G,Na as q,Oa as z,P as i,Q as n,Qa as te,R as Z,Ra as ie,Sa as ne,U as S,Va as H,W as v,X as y,Xa as Ie,Y as P,Z as o,_ as c,_a as Ee,a as fe,aa as $,ab as N,ca as C,cb as w,da as D,db as L,ea as _,fb as xe,ga as B,gb as A,ha as ee,hb as Oe,ia as I,j as he,ja as E,k as X,o as b,p as Y,sa as M,t as g,ta as R,u as f,ya as ve}from"./chunk-3PHIBC6H.js";var Ue=r=>["/budgets/update",r],je=r=>["/budgets/clone",r],We=r=>["/budgets/expenses",r],Ge=r=>["/budgets/incomes",r],qe=r=>["/budgets/daily-expenses",r];function ze(r,t){r&1&&(i(0,"div",5),o(1," No hay presupuestos disponibles. "),n())}function He(r,t){if(r&1){let e=S();i(0,"tr")(1,"td"),o(2),n(),i(3,"td"),o(4),n(),i(5,"td"),o(6),n(),i(7,"td"),o(8),I(9,"customCurrency"),n(),i(10,"td"),o(11),I(12,"customCurrency"),n(),i(13,"td"),o(14),I(15,"customCurrency"),n(),i(16,"td"),o(17),I(18,"customCurrency"),n(),i(19,"td"),o(20),I(21,"customCurrency"),n(),i(22,"td"),o(23),I(24,"customCurrency"),n(),i(25,"td")(26,"button",8),o(27," Editar "),n(),i(28,"button",9),v("click",function(){let d=g(e).$implicit,u=y(2);return f(u.confirmDelete(d.budgetId))}),o(29," Eliminar "),n(),i(30,"button",10),o(31," Clonar "),n(),i(32,"button",11),o(33," Ver Gastos "),n(),i(34,"button",11),o(35," Ver Ingresos "),n(),i(36,"button",11),o(37," Ver Gastos Diarios "),n()()()}if(r&2){let e=t.$implicit;s(2),c(e.description),s(2),c(e.month),s(2),c(e.year),s(2),c(E(9,14,e.totalIncome)),s(3),c(E(12,16,e.totalExpenses)),s(3),c(E(15,18,e.executed)),s(3),c(E(18,20,e.nonBudgetedExpenses)),s(3),c(E(21,22,e.pendingPayment)),s(3),c(E(24,24,e.shouldHave)),s(3),p("routerLink",B(26,Ue,e.budgetId)),s(4),p("routerLink",B(28,je,e.budgetId)),s(2),p("routerLink",B(30,We,e.budgetId)),s(2),p("routerLink",B(32,Ge,e.budgetId)),s(2),p("routerLink",B(34,qe,e.budgetId))}}function Je(r,t){if(r&1&&(i(0,"table",6)(1,"thead")(2,"tr")(3,"th"),o(4,"Descripci\xF3n"),n(),i(5,"th"),o(6,"Mes"),n(),i(7,"th"),o(8,"A\xF1o"),n(),i(9,"th"),o(10,"Ingreso"),n(),i(11,"th"),o(12,"Gastos"),n(),i(13,"th"),o(14,"Realizado"),n(),i(15,"th"),o(16,"No presupuestado"),n(),i(17,"th"),o(18,"Pendiente"),n(),i(19,"th"),o(20,"Deber\xEDa tener"),n(),i(21,"th"),o(22,"Acciones"),n()()(),i(23,"tbody"),x(24,He,38,36,"tr",7),n()()),r&2){let e=y();s(24),p("ngForOf",e.budgets)}}var re=class r{constructor(t,e){this.budgetsService=t;this.authService=e}budgets=[];userId="";ngOnInit(){this.userId=this.authService.getUserIdFromToken(),this.userId?this.fetchBudgets():console.error("No se pudo obtener el usuario del token.","Error")}fetchBudgets(){this.userId&&this.budgetsService.getBudgetsByUser(this.userId).subscribe({next:t=>this.budgets=t,error:t=>console.error("Error al obtener presupuestos",t)})}confirmDelete(t){confirm("\xBFEst\xE1s seguro de que deseas eliminar este presupuesto?")&&this.deleteBudget(t)}deleteBudget(t){this.userId&&this.budgetsService.deleteBudget(this.userId,t).subscribe({next:()=>{alert("Presupuesto eliminado con \xE9xito"),this.fetchBudgets()},error:e=>{console.error("Error al eliminar el presupuesto",e),alert("Ocurri\xF3 un error al eliminar el presupuesto")}})}static \u0275fac=function(e){return new(e||r)(l(h),l(J))};static \u0275cmp=b({type:r,selectors:[["app-budgets-list"]],decls:8,vars:2,consts:[[1,"container","mt-4"],["class","alert alert-info",4,"ngIf"],[1,"d-flex","justify-content-end","mb-3"],["routerLink","/budgets/create",1,"btn","btn-success"],["class","table table-bordered mt-3",4,"ngIf"],[1,"alert","alert-info"],[1,"table","table-bordered","mt-3"],[4,"ngFor","ngForOf"],[1,"btn","btn-warning","btn-sm",3,"routerLink"],[1,"btn","btn-danger","btn-sm",3,"click"],[1,"btn","btn-secondary","btn-sm",3,"routerLink"],[1,"btn","btn-info","btn-sm",3,"routerLink"]],template:function(e,a){e&1&&(i(0,"div",0)(1,"h2"),o(2,"Gesti\xF3n de Presupuestos"),n(),x(3,ze,2,0,"div",1),i(4,"div",2)(5,"button",3),o(6,"+ Crear Presupuesto"),n()(),x(7,Je,25,1,"table",4),n()),e&2&&(s(3),p("ngIf",a.budgets.length===0),s(4),p("ngIf",a.budgets.length>0))},dependencies:[M,R,L,A],styles:[".container[_ngcontent-%COMP%]{max-width:98%;margin:0 auto}table[_ngcontent-%COMP%]{width:100%;text-align:left}"]})};var Ke=r=>["/budgets/expenses/add",r],Qe=(r,t)=>["/budgets/expenses/update",r,t];function Xe(r,t){if(r&1){let e=S();i(0,"tr")(1,"td"),o(2),n(),i(3,"td"),o(4),n(),i(5,"td"),o(6),n(),i(7,"td"),o(8),I(9,"customCurrency"),n(),i(10,"td"),o(11),I(12,"customCurrency"),n(),i(13,"td"),o(14),I(15,"customCurrency"),n(),i(16,"td")(17,"button",5),o(18," Editar "),n(),i(19,"button",6),v("click",function(){let d=g(e).$implicit,u=y();return f(u.confirmDelete(d.expenseBudgetDetailId))}),o(20," Eliminar "),n()()()}if(r&2){let e=t.$implicit,a=y();s(2),c(e.customName),s(2),c(e.expenseTypeName),s(2),c(e.expenseTypeCategory),s(2),c(E(9,7,e.budgetedAmount)),s(3),c(E(12,9,e.amountPaid)),s(3),c(E(15,11,e.pendingPayment)),s(3),p("routerLink",ee(13,Qe,a.budgetId,e.expenseBudgetDetailId))}}var ae=class r{constructor(t,e){this.route=t;this.budgetsService=e}expenses=[];budgetId=null;ngOnInit(){this.budgetId=this.route.snapshot.paramMap.get("budgetId"),this.budgetId&&this.fetchExpenses(this.budgetId)}fetchExpenses(t){this.budgetsService.getExpensesByBudget(t).subscribe({next:e=>this.expenses=e,error:e=>console.error("Error al obtener gastos",e)})}confirmDelete(t){confirm("\xBFEst\xE1s seguro de que deseas eliminar este gasto?")&&this.budgetId&&this.deleteExpense(this.budgetId,t)}deleteExpense(t,e){this.budgetsService.deleteExpense(t,e).subscribe({next:()=>{alert("Gasto eliminado con \xE9xito"),this.fetchExpenses(t)},error:a=>{console.error("Error al eliminar el gasto",a),alert("Ocurri\xF3 un error al eliminar el gasto")}})}static \u0275fac=function(e){return new(e||r)(l(N),l(h))};static \u0275cmp=b({type:r,selectors:[["app-expenses-list"]],decls:25,vars:4,consts:[[1,"container","mt-4"],[1,"d-flex","justify-content-end","mb-3"],[1,"btn","btn-success",3,"routerLink"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],[1,"btn","btn-warning","btn-sm",3,"routerLink"],[1,"btn","btn-danger","btn-sm",3,"click"]],template:function(e,a){e&1&&(i(0,"div",0)(1,"h2"),o(2,"Gastos del Presupuesto"),n(),i(3,"div",1)(4,"button",2),o(5," + Agregar Gasto "),n()(),i(6,"table",3)(7,"thead")(8,"tr")(9,"th"),o(10,"Nombre"),n(),i(11,"th"),o(12,"Tipo"),n(),i(13,"th"),o(14,"Categor\xEDa"),n(),i(15,"th"),o(16,"Presupuestado"),n(),i(17,"th"),o(18,"Pagado"),n(),i(19,"th"),o(20,"Pendiente"),n(),i(21,"th"),o(22,"Acciones"),n()()(),i(23,"tbody"),x(24,Xe,21,16,"tr",4),n()()()),e&2&&(s(4),p("routerLink",B(2,Ke,a.budgetId)),s(20),p("ngForOf",a.expenses))},dependencies:[M,L,A]})};function Ye(r,t){if(r&1&&(i(0,"option",12),o(1),n()),r&2){let e=t.$implicit;p("value",e.id),s(),$(" ",e.name," (",e.category,") ")}}var se=class r{constructor(t,e,a,d){this.route=t;this.budgetsService=e;this.expenseTypeService=a;this.router=d}budgetId=null;expenseId=null;expenseData={customName:"",expenseTypeId:0,budgetedAmount:0};expenseTypes=[];ngOnInit(){this.budgetId=this.route.snapshot.paramMap.get("budgetId"),this.expenseId=Number(this.route.snapshot.paramMap.get("expenseId")),this.budgetId&&this.expenseId&&this.fetchExpenseData(this.budgetId,this.expenseId),this.fetchExpenseTypes()}fetchExpenseData(t,e){this.budgetsService.getExpensesByBudget(t).subscribe({next:a=>{let d=a.find(u=>u.expenseBudgetDetailId===e);d&&(this.expenseData={customName:d.customName,expenseTypeId:d.expenseTypeId,budgetedAmount:d.budgetedAmount})},error:a=>console.error("Error al obtener gasto",a)})}fetchExpenseTypes(){this.expenseTypeService.getExpenseTypes().subscribe({next:t=>this.expenseTypes=t,error:t=>console.error("Error al obtener tipos de gastos",t)})}updateExpense(){if(!this.budgetId||!this.expenseId)return;let t={budgetId:this.budgetId,expenseBudgetDetailId:this.expenseId,budgetedAmount:this.expenseData.budgetedAmount,customName:this.expenseData.customName,expenseTypeId:this.expenseData.expenseTypeId};this.budgetsService.updateExpense(t).subscribe({next:()=>{alert("Gasto actualizado con \xE9xito"),this.router.navigate([`/budgets/expenses/${this.budgetId}`])},error:e=>{console.error("Error al actualizar el gasto",e),alert("Ocurri\xF3 un error al actualizar el gasto")}})}static \u0275fac=function(e){return new(e||r)(l(N),l(h),l(Se),l(w))};static \u0275cmp=b({type:r,selectors:[["app-update-expense"]],decls:20,vars:5,consts:[["expenseForm","ngForm"],[1,"container","mt-4"],[3,"ngSubmit"],[1,"mb-3"],["for","customName",1,"form-label"],["type","text","id","customName","name","customName","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","expenseTypeId",1,"form-label"],["id","expenseTypeId","name","expenseTypeId","required","",1,"form-control",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["for","budgetedAmount",1,"form-label"],["type","number","id","budgetedAmount","name","budgetedAmount","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary",3,"disabled"],[3,"value"]],template:function(e,a){if(e&1){let d=S();i(0,"div",1)(1,"h2"),o(2,"Actualizar Gasto"),n(),i(3,"form",2,0),v("ngSubmit",function(){return g(d),f(a.updateExpense())}),i(5,"div",3)(6,"label",4),o(7,"Nombre del Gasto"),n(),i(8,"input",5),_("ngModelChange",function(m){return g(d),D(a.expenseData.customName,m)||(a.expenseData.customName=m),f(m)}),n()(),i(9,"div",3)(10,"label",6),o(11,"Tipo de Gasto"),n(),i(12,"select",7),_("ngModelChange",function(m){return g(d),D(a.expenseData.expenseTypeId,m)||(a.expenseData.expenseTypeId=m),f(m)}),x(13,Ye,2,3,"option",8),n()(),i(14,"div",3)(15,"label",9),o(16,"Monto Presupuestado"),n(),i(17,"input",10),_("ngModelChange",function(m){return g(d),D(a.expenseData.budgetedAmount,m)||(a.expenseData.budgetedAmount=m),f(m)}),n()(),i(18,"button",11),o(19," Actualizar Gasto "),n()()()}if(e&2){let d=P(4);s(8),C("ngModel",a.expenseData.customName),s(4),C("ngModel",a.expenseData.expenseTypeId),s(),p("ngForOf",a.expenseTypes),s(4),C("ngModel",a.expenseData.budgetedAmount),s(),p("disabled",!d.valid)}},dependencies:[M,q,ie,ne,k,z,te,U,j,H,G,W]})};var Ze=r=>["/budgets/incomes/add",r],$e=(r,t)=>["/budgets/incomes/update",r,t];function et(r,t){if(r&1){let e=S();i(0,"tr")(1,"td"),o(2),n(),i(3,"td"),o(4),I(5,"customCurrency"),n(),i(6,"td")(7,"button",5),o(8," Editar "),n(),i(9,"button",6),v("click",function(){let d=g(e).$implicit,u=y();return f(u.confirmDelete(d.incomeBudgetDetailId))}),o(10," Eliminar "),n()()()}if(r&2){let e=t.$implicit,a=y();s(2),c(e.name),s(2),c(E(5,3,e.amount)),s(3),p("routerLink",ee(5,$e,a.budgetId,e.incomeBudgetDetailId))}}var de=class r{constructor(t,e){this.route=t;this.budgetsService=e}incomes=[];budgetId=null;ngOnInit(){this.budgetId=this.route.snapshot.paramMap.get("budgetId"),this.budgetId&&this.fetchIncomes(this.budgetId)}fetchIncomes(t){this.budgetsService.getIncomesByBudget(t).subscribe({next:e=>this.incomes=e,error:e=>console.error("Error al obtener ingresos",e)})}confirmDelete(t){confirm("\xBFEst\xE1s seguro de que deseas eliminar este ingreso?")&&this.budgetId&&this.deleteIncome(this.budgetId,t)}deleteIncome(t,e){this.budgetsService.deleteIncome(t,e).subscribe({next:()=>{alert("Ingreso eliminado con \xE9xito"),this.fetchIncomes(t)},error:a=>{console.error("Error al eliminar el ingreso",a),alert("Ocurri\xF3 un error al eliminar el ingreso")}})}static \u0275fac=function(e){return new(e||r)(l(N),l(h))};static \u0275cmp=b({type:r,selectors:[["app-incomes-list"]],decls:17,vars:4,consts:[[1,"container","mt-4"],[1,"d-flex","justify-content-end","mb-3"],[1,"btn","btn-success",3,"routerLink"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],[1,"btn","btn-warning","btn-sm",3,"routerLink"],[1,"btn","btn-danger","btn-sm",3,"click"]],template:function(e,a){e&1&&(i(0,"div",0)(1,"h2"),o(2,"Ingresos del Presupuesto"),n(),i(3,"div",1)(4,"button",2),o(5," + Agregar Ingreso "),n()(),i(6,"table",3)(7,"thead")(8,"tr")(9,"th"),o(10,"Nombre"),n(),i(11,"th"),o(12,"Monto"),n(),i(13,"th"),o(14,"Acciones"),n()()(),i(15,"tbody"),x(16,et,11,8,"tr",4),n()()()),e&2&&(s(4),p("routerLink",B(2,Ze,a.budgetId)),s(12),p("ngForOf",a.incomes))},dependencies:[M,L,A]})};var pe=class r{constructor(t,e,a){this.route=t;this.budgetsService=e;this.router=a}budgetId=null;incomeId=null;incomeData={name:"",amount:0};ngOnInit(){this.budgetId=this.route.snapshot.paramMap.get("budgetId"),this.incomeId=Number(this.route.snapshot.paramMap.get("incomeId")),this.budgetId&&this.incomeId&&this.fetchIncomeData(this.budgetId,this.incomeId)}fetchIncomeData(t,e){this.budgetsService.getIncomesByBudget(t).subscribe({next:a=>{let d=a.find(u=>u.incomeBudgetDetailId===e);d&&(this.incomeData={name:d.name,amount:d.amount})},error:a=>console.error("Error al obtener ingreso",a)})}updateIncome(){if(!this.budgetId||!this.incomeId)return;let t={name:this.incomeData.name,amount:this.incomeData.amount};this.budgetsService.updateIncome(this.budgetId,this.incomeId,t).subscribe({next:()=>{alert("Ingreso actualizado con \xE9xito"),this.router.navigate([`/budgets/incomes/${this.budgetId}`])},error:e=>{console.error("Error al actualizar ingreso",e),alert("Ocurri\xF3 un error al actualizar el ingreso")}})}static \u0275fac=function(e){return new(e||r)(l(N),l(h),l(w))};static \u0275cmp=b({type:r,selectors:[["app-update-income"]],decls:15,vars:3,consts:[["incomeForm","ngForm"],[1,"container","mt-4"],[3,"ngSubmit"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","id","name","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","amount",1,"form-label"],["type","number","id","amount","name","amount","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(e,a){if(e&1){let d=S();i(0,"div",1)(1,"h2"),o(2,"Actualizar Ingreso"),n(),i(3,"form",2,0),v("ngSubmit",function(){return g(d),f(a.updateIncome())}),i(5,"div",3)(6,"label",4),o(7,"Nombre del Ingreso"),n(),i(8,"input",5),_("ngModelChange",function(m){return g(d),D(a.incomeData.name,m)||(a.incomeData.name=m),f(m)}),n()(),i(9,"div",3)(10,"label",6),o(11,"Monto"),n(),i(12,"input",7),_("ngModelChange",function(m){return g(d),D(a.incomeData.amount,m)||(a.incomeData.amount=m),f(m)}),n()(),i(13,"button",8),o(14," Actualizar Ingreso "),n()()()}if(e&2){let d=P(4);s(8),C("ngModel",a.incomeData.name),s(4),C("ngModel",a.incomeData.amount),s(),p("disabled",!d.valid)}},dependencies:[q,k,z,U,j,H,G,W]})};var Q=class r{expenseData;setExpenseData(t){this.expenseData=t}getExpenseData(){return this.expenseData}clearExpenseData(){this.expenseData=null}static \u0275fac=function(e){return new(e||r)};static \u0275prov=he({token:r,factory:r.\u0275fac,providedIn:"root"})};var tt=r=>["/budgets/daily-expenses/add",r];function it(r,t){if(r&1){let e=S();i(0,"tr")(1,"td"),o(2),n(),i(3,"td"),o(4),n(),i(5,"td"),o(6),n(),i(7,"td"),o(8),n(),i(9,"td"),o(10),I(11,"customCurrency"),n(),i(12,"td"),o(13),n(),i(14,"td"),o(15),n(),i(16,"td")(17,"button",5),v("click",function(){let d=g(e).$implicit,u=y();return f(u.editExpense(d))}),o(18," Editar "),n(),i(19,"button",6),v("click",function(){let d=g(e).$implicit,u=y();return f(u.deleteExpense(d))}),o(20," Eliminar "),n()()()}if(r&2){let e=t.$implicit;s(2),c(e.paymentDate),s(2),c(e.customName),s(2),c(e.expenseTypeName),s(2),c(e.expenseTypeCategory),s(2),c(E(11,7,e.amount)),s(3),c(e.paymentMethodName),s(2),c(e.detail)}}var me=class r{constructor(t,e,a,d){this.route=t;this.budgetsService=e;this.dailyExpenseStateService=a;this.router=d}dailyExpenses=[];budgetId=null;ngOnInit(){this.budgetId=this.route.snapshot.paramMap.get("budgetId"),this.budgetId&&this.fetchDailyExpenses(this.budgetId)}fetchDailyExpenses(t){this.budgetsService.getDailyExpensesByBudget(t).subscribe({next:e=>{console.log("Gastos diarios obtenidos:",e),this.dailyExpenses=e},error:e=>console.error("Error al obtener gastos diarios",e)})}editExpense(t){this.dailyExpenseStateService.setExpenseData(t),this.router.navigate(["/budgets/daily-expenses/update",t.budgetId,t.expenseBudgetDetailId,t.dailyExpenseRecordId])}deleteExpense(t){confirm("\xBFEst\xE1s seguro de que deseas eliminar este gasto diario?")&&this.budgetsService.deleteDailyExpense(t.budgetId,t.expenseBudgetDetailId,t.dailyExpenseRecordId).subscribe({next:()=>{alert("Gasto diario eliminado con \xE9xito."),this.fetchDailyExpenses(t.budgetId)},error:e=>{console.error("Error al eliminar el gasto diario",e),alert("Ocurri\xF3 un error al eliminar el gasto diario.")}})}static \u0275fac=function(e){return new(e||r)(l(N),l(h),l(Q),l(w))};static \u0275cmp=b({type:r,selectors:[["app-daily-expenses-list"]],decls:27,vars:4,consts:[[1,"container","mt-4"],[1,"d-flex","justify-content-end","mb-3"],[1,"btn","btn-success",3,"routerLink"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],[1,"btn","btn-warning","btn-sm",3,"click"],[1,"btn","btn-danger","btn-sm",3,"click"]],template:function(e,a){e&1&&(i(0,"div",0)(1,"h2"),o(2,"Gastos Diarios"),n(),i(3,"div",1)(4,"button",2),o(5," + Agregar Gasto Diario "),n()(),i(6,"table",3)(7,"thead")(8,"tr")(9,"th"),o(10,"Fecha de Pago"),n(),i(11,"th"),o(12,"Nombre"),n(),i(13,"th"),o(14,"Tipo"),n(),i(15,"th"),o(16,"Categoria"),n(),i(17,"th"),o(18,"Valor"),n(),i(19,"th"),o(20,"M\xE9todo de Pago"),n(),i(21,"th"),o(22,"Detalle"),n(),i(23,"th"),o(24,"Acciones"),n()()(),i(25,"tbody"),x(26,it,21,9,"tr",4),n()()()),e&2&&(s(4),p("routerLink",B(2,tt,a.budgetId)),s(22),p("ngForOf",a.dailyExpenses))},dependencies:[M,L,A]})};function nt(r,t){if(r&1&&(i(0,"option",16),o(1),n()),r&2){let e=t.$implicit;p("value",e.expenseBudgetDetailId),s(),$(" ",e.customName," (",e.expenseTypeName,") ")}}function ot(r,t){if(r&1&&(i(0,"option",16),o(1),n()),r&2){let e=t.$implicit;p("value",e.paymentMethodId),s(),ye(" ",e.name," ")}}var le=class r{constructor(t,e,a,d,u){this.route=t;this.paymentMethodService=e;this.budgetsService=a;this.dailyExpenseStateService=d;this.router=u}budgetId=null;expenseBudgetDetailId=null;dailyExpenseRecordId=null;dailyExpenseData={expenseBudgetDetailId:0,paymentDate:"",amount:0,paymentMethodId:0,detail:""};paymentMethods=[];expenseDetails=[];ngOnInit(){this.budgetId=this.route.snapshot.paramMap.get("budgetId"),this.expenseBudgetDetailId=Number(this.route.snapshot.paramMap.get("expenseBudgetDetailId")),this.dailyExpenseRecordId=Number(this.route.snapshot.paramMap.get("dailyExpenseRecordId"));let t=this.dailyExpenseStateService.getExpenseData();t?(this.dailyExpenseData=fe({},t),console.log("Datos del gasto diario asignados:",this.dailyExpenseData)):console.error("No se recibi\xF3 el estado con los datos del gasto diario."),this.dailyExpenseStateService.clearExpenseData(),this.fetchPaymentMethods(),this.budgetId&&this.fetchExpenseDetails(this.budgetId)}fetchPaymentMethods(){this.paymentMethodService.getPaymentMethods().subscribe({next:t=>this.paymentMethods=t,error:t=>console.error("Error al obtener m\xE9todos de pago",t)})}fetchExpenseDetails(t){this.budgetsService.getExpensesByBudget(t).subscribe({next:e=>this.expenseDetails=e,error:e=>console.error("Error al obtener detalles del presupuesto",e)})}updateDailyExpense(){if(!this.budgetId||!this.expenseBudgetDetailId||!this.dailyExpenseRecordId)return;let t=fe({},this.dailyExpenseData);this.budgetsService.updateDailyExpense(this.budgetId,this.expenseBudgetDetailId,this.dailyExpenseRecordId,t).subscribe({next:()=>{alert("Gasto diario actualizado con \xE9xito"),this.router.navigate([`/budgets/daily-expenses/${this.budgetId}`])},error:e=>{console.error("Error al actualizar el gasto diario",e),alert("Ocurri\xF3 un error al actualizar el gasto diario")}})}static \u0275fac=function(e){return new(e||r)(l(N),l(Ce),l(h),l(Q),l(w))};static \u0275cmp=b({type:r,selectors:[["app-update-daily-expense"]],decls:29,vars:8,consts:[["dailyExpenseForm","ngForm"],[1,"container","mt-4"],[3,"ngSubmit"],[1,"mb-3"],["for","expenseBudgetDetailId",1,"form-label"],["id","expenseBudgetDetailId","name","expenseBudgetDetailId","required","",1,"form-control",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["for","paymentDate",1,"form-label"],["type","date","id","paymentDate","name","paymentDate","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","amount",1,"form-label"],["type","number","id","amount","name","amount","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","paymentMethodId",1,"form-label"],["id","paymentMethodId","name","paymentMethodId","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","detail",1,"form-label"],["id","detail","name","detail","rows","3","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary",3,"disabled"],[3,"value"]],template:function(e,a){if(e&1){let d=S();i(0,"div",1)(1,"h2"),o(2,"Actualizar Gasto Diario"),n(),i(3,"form",2,0),v("ngSubmit",function(){return g(d),f(a.updateDailyExpense())}),i(5,"div",3)(6,"label",4),o(7,"Tipo de Gasto Relacionado"),n(),i(8,"select",5),_("ngModelChange",function(m){return g(d),D(a.dailyExpenseData.expenseBudgetDetailId,m)||(a.dailyExpenseData.expenseBudgetDetailId=m),f(m)}),x(9,nt,2,3,"option",6),n()(),i(10,"div",3)(11,"label",7),o(12,"Fecha de Pago"),n(),i(13,"input",8),_("ngModelChange",function(m){return g(d),D(a.dailyExpenseData.paymentDate,m)||(a.dailyExpenseData.paymentDate=m),f(m)}),n()(),i(14,"div",3)(15,"label",9),o(16,"Monto"),n(),i(17,"input",10),_("ngModelChange",function(m){return g(d),D(a.dailyExpenseData.amount,m)||(a.dailyExpenseData.amount=m),f(m)}),n()(),i(18,"div",3)(19,"label",11),o(20,"M\xE9todo de Pago"),n(),i(21,"select",12),_("ngModelChange",function(m){return g(d),D(a.dailyExpenseData.paymentMethodId,m)||(a.dailyExpenseData.paymentMethodId=m),f(m)}),x(22,ot,2,2,"option",6),n()(),i(23,"div",3)(24,"label",13),o(25,"Detalle"),n(),i(26,"textarea",14),_("ngModelChange",function(m){return g(d),D(a.dailyExpenseData.detail,m)||(a.dailyExpenseData.detail=m),f(m)}),n()(),i(27,"button",15),o(28," Actualizar Gasto Diario "),n()()()}if(e&2){let d=P(4);s(8),C("ngModel",a.dailyExpenseData.expenseBudgetDetailId),s(),p("ngForOf",a.expenseDetails),s(4),C("ngModel",a.dailyExpenseData.paymentDate),s(4),C("ngModel",a.dailyExpenseData.amount),s(4),C("ngModel",a.dailyExpenseData.paymentMethodId),s(),p("ngForOf",a.paymentMethods),s(4),C("ngModel",a.dailyExpenseData.detail),s(),p("disabled",!d.valid)}},dependencies:[M,q,ie,ne,k,z,te,U,j,H,G,W]})};function at(r,t){r&1&&(i(0,"div",2)(1,"p"),o(2,"Cargando datos..."),n()())}function st(r,t){if(r&1&&(i(0,"div",3),Z(1,"canvas",4),n()),r&2){let e=y();s(),p("data",e.chartData)("labels",e.chartData.labels)("options",e.chartOptions)("type",e.chartType)}}function dt(r,t){r&1&&(i(0,"div",2)(1,"p"),o(2,"No hay datos disponibles para mostrar."),n()())}var ce=class r{constructor(t,e){this.budgetsService=t;this.authService=e}chartOptions={responsive:!0,maintainAspectRatio:!1};chartType="line";chartData={labels:[],datasets:[]};isLoading=!0;userId="";ngOnInit(){this.userId=this.authService.getUserIdFromToken(),this.userId?this.fetchBudgetData():console.error("No se pudo obtener el usuario del token.","Error")}fetchBudgetData(){this.userId&&this.budgetsService.getBudgetsByUser(this.userId).subscribe(t=>{t.length>0?(this.chartData.labels=t.map(e=>`${e.month}/${e.year}`),this.chartData.datasets=[{data:t.map(e=>e.totalIncome),label:"Ingresos",borderColor:"rgba(75, 192, 192, 1)",backgroundColor:"rgba(75, 192, 192, 0.2)",fill:!0},{data:t.map(e=>e.totalExpenses),label:"Gastos",borderColor:"rgba(255, 99, 132, 1)",backgroundColor:"rgba(255, 99, 132, 0.2)",fill:!0}]):console.error("No se recibieron datos del servidor."),this.isLoading=!1},t=>{console.error("Error al obtener los datos del servidor:",t),this.isLoading=!1})}static \u0275fac=function(e){return new(e||r)(l(h),l(J))};static \u0275cmp=b({type:r,selectors:[["app-income-expense-trends"]],decls:3,vars:3,consts:[["class","text-center",4,"ngIf"],["class","chart-container","style","display: block; height: 400px;",4,"ngIf"],[1,"text-center"],[1,"chart-container",2,"display","block","height","400px"],["baseChart","",3,"data","labels","options","type"]],template:function(e,a){e&1&&x(0,at,3,0,"div",0)(1,st,2,4,"div",1)(2,dt,3,0,"div",0),e&2&&(p("ngIf",a.isLoading),s(),p("ngIf",!a.isLoading&&a.chartData.datasets.length>0),s(),p("ngIf",!a.isLoading&&a.chartData.datasets.length===0))},dependencies:[R,oe]})};function pt(r,t){r&1&&(i(0,"div",2)(1,"p"),o(2,"Cargando datos..."),n()())}function mt(r,t){if(r&1&&(i(0,"div",3),Z(1,"canvas",4),n()),r&2){let e=y();s(),p("data",e.chartData)("labels",e.chartData.labels)("options",e.chartOptions)("type",e.chartType)}}function lt(r,t){r&1&&(i(0,"div",2)(1,"p"),o(2,"No hay datos disponibles para mostrar."),n()())}var ue=class r{constructor(t,e){this.budgetsService=t;this.authService=e}chartOptions={responsive:!0,maintainAspectRatio:!1};chartType="bar";chartData={labels:[],datasets:[]};userId="";isLoading=!0;ngOnInit(){this.userId=this.authService.getUserIdFromToken(),this.userId?this.processData():console.error("No se pudo obtener el usuario del token.","Error")}processData(){this.userId&&this.budgetsService.getBudgetsByUser(this.userId).subscribe(t=>{t.length>0?(this.chartData.labels=t.map(e=>`${e.month}/${e.year}`),this.chartData.datasets=[{data:t.map(e=>e.nonBudgetedExpenses),label:"Gastos No Presupuestados",backgroundColor:"rgba(255, 159, 64, 0.6)"}]):console.error("No se recibieron datos del servidor."),this.isLoading=!1},t=>{console.error("Error al obtener los datos del servidor:",t),this.isLoading=!1})}static \u0275fac=function(e){return new(e||r)(l(h),l(J))};static \u0275cmp=b({type:r,selectors:[["app-non-budgeted-expenses"]],decls:3,vars:3,consts:[["class","text-center",4,"ngIf"],["class","chart-container","style","display: block; height: 400px;",4,"ngIf"],[1,"text-center"],[1,"chart-container",2,"display","block","height","400px"],["baseChart","",3,"data","labels","options","type"]],template:function(e,a){e&1&&x(0,pt,3,0,"div",0)(1,mt,2,4,"div",1)(2,lt,3,0,"div",0),e&2&&(p("ngIf",a.isLoading),s(),p("ngIf",!a.isLoading&&a.chartData.datasets.length>0),s(),p("ngIf",!a.isLoading&&a.chartData.datasets.length===0))},dependencies:[R,oe]})};var ct=[{path:"",component:re},{path:"create",component:De},{path:"clone/:budgetId",component:_e},{path:"update/:budgetId",component:Be},{path:"expenses/:budgetId",component:ae},{path:"expenses/add/:budgetId",component:Me},{path:"expenses/update/:budgetId/:expenseId",component:se},{path:"incomes/:budgetId",component:de},{path:"incomes/add/:budgetId",component:Ne},{path:"incomes/update/:budgetId/:incomeId",component:pe},{path:"daily-expenses/:budgetId",component:me},{path:"daily-expenses/add/:budgetId",component:Te},{path:"daily-expenses/update/:budgetId/:expenseBudgetDetailId/:dailyExpenseRecordId",component:le},{path:"charts/plan-vs-executed",component:Le},{path:"charts/expense-distribution",component:Ae},{path:"charts/income-expense-trends",component:ce},{path:"charts/non-budgeted-expenses",component:ue},{path:"charts/payment-status",component:Fe}],ge=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=Y({type:r});static \u0275inj=X({imports:[xe.forChild(ct),xe]})};var ke=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=Y({type:r});static \u0275inj=X({imports:[ve,ge,Ee,Ie,Oe,we]})};export{ke as BudgetsModule};
