import{E as g,G as w,I as S,J as I,L as O,a as E,b as F,c as d,d as c,e as m,h as V,i as v,j as b,k as D,l as h,n as M,o as l,p as r,q as o,r as a,t as f,w as u,y as p}from"./chunk-ZXVRMLNZ.js";var x=(()=>{let e=class e{constructor(){this.nvState=!1,this.onChangeNavBarState=new d}onClickNavBarExpandable(){this.onChangeNavBarState.emit(!this.nvState)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["sidebar"]],inputs:{nvState:"nvState"},outputs:{onChangeNavBarState:"onChangeNavBarState"},standalone:!0,features:[p],decls:17,vars:2,consts:[[1,"sidebar"],[1,"logo"],[1,"expand-navbar-btn",3,"click"],[1,"fa-solid","fa-bars"],[1,"actions"],[1,"action"],[1,"user-profile"],[1,"fa-solid","fa-utensils","fa-xl"],[1,"fa-solid","fa-user-tie","fa-xl"],[1,"fa-solid","fa-right-from-bracket","fa-xl"]],template:function(i,s){i&1&&(r(0,"div",0)(1,"div",1)(2,"button",2),f("click",function(){return s.onClickNavBarExpandable()}),a(3,"i",3),o()(),r(4,"div",4)(5,"button",5)(6,"div",6),a(7,"i",7),r(8,"span"),u(9,"Las Brisas"),o()()(),r(10,"button",5)(11,"div",6),a(12,"i",8),r(13,"span"),u(14,"walteribanez555"),o()()(),r(15,"button",5),a(16,"i",9),o()()()),i&2&&(h(2),l("isExpandState",s.nvState))},dependencies:[g],styles:[".sidebar[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;border:1px solid gainsboro;position:sticky;z-index:10}.actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;flex-wrap:wrap;gap:5px}.action[_ngcontent-%COMP%]{padding:10px;cursor:pointer;border:none;background-color:var(--body-bg);color:var(--text-color);border:1px solid gainsboro;border-radius:8px}.action[_ngcontent-%COMP%]:hover{background-color:var(--hover)}.user-profile[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;border-radius:8px}.user-profile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:10px;font-weight:700;font-size:18px}.logo[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:10px;font-size:20px;font-weight:700}"]});let t=e;return t})();var R={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},De=F(E({},R),{"[class.ng-submitted]":"isSubmitted"});var N=new b("CallSetDisabledState",{providedIn:"root",factory:()=>A}),A="always";var U=new b("");var P=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=m({type:e}),e.\u0275inj=v({});let t=e;return t})();var k=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:N,useValue:n.callSetDisabledState??A}]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=m({type:e}),e.\u0275inj=v({imports:[P]});let t=e;return t})(),T=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:U,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:N,useValue:n.callSetDisabledState??A}]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=m({type:e}),e.\u0275inj=v({imports:[P]});let t=e;return t})();var B=(()=>{let e=class e{constructor(){this.nvState=!1,this.themeStatus=!1,this.onChangeNavBarState=new d,this.onChangeBtnThemeMode=new d}onClickNavBarExpandable(){this.onChangeNavBarState.emit(!this.nvState)}onClickNavBarThemeMode(){this.onChangeBtnThemeMode.emit()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["navbar"]],inputs:{nvState:"nvState",themeStatus:"themeStatus"},outputs:{onChangeNavBarState:"onChangeNavBarState",onChangeBtnThemeMode:"onChangeBtnThemeMode"},standalone:!0,features:[p],decls:16,vars:2,consts:[[1,"navbar"],[1,"top"],["src","assets/images/MONSTER-01.png","height","170px","width","100%","alt",""],[1,"list"],["routerLink","./orders/agregar","routerLinkActive","active",1,"route"],[1,"fa-solid","fa-cash-register"],["routerLink","./orders/ordenes","routerLinkActive","active",1,"route"],[1,"fa-solid","fa-money-bill-wave"],["routerLink","./cashier/cajeros","routerLinkActive","active",1,"route"],[1,"fa-solid","fa-id-badge"]],template:function(i,s){i&1&&(r(0,"div",0)(1,"div",1),a(2,"img",2),o(),r(3,"div",3)(4,"a",4),a(5,"i",5),r(6,"span"),u(7,"Nueva Orden"),o()(),r(8,"a",6),a(9,"i",7),r(10,"span"),u(11,"Lista de Ordenes"),o()(),r(12,"a",8),a(13,"i",9),r(14,"span"),u(15,"Cajas"),o()()()()),i&2&&l("expanded",s.nvState)},dependencies:[g,O,S,I,k,T],styles:['.navbar[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;background-color:var(--body-bg)}.top[_ngcontent-%COMP%]{height:120px;display:flex;align-items:flex-end;padding:0;background-color:#fff}.list[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;gap:20px}.route[_ngcontent-%COMP%]{display:flex;flex-direction:row;color:var(--text-color);align-items:flex-start;justify-content:flex-start;outline:none;text-decoration:none;border-radius:8px;cursor:pointer;padding:10px 20px}.route[_ngcontent-%COMP%]:hover{background-color:var(--hover)}.route[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{padding-left:30px;transition:.3s all ease-in-out}.route[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:20px;height:20px}.route[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:20px;transition:.3s all ease-in-out}.toggle-mode[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;align-items:center;justify-content:center}.route.active[_ngcontent-%COMP%]{color:#fff;background-color:var(--main-color)}.button-switch[_ngcontent-%COMP%]{position:relative;width:50px;height:24px}.toggle-input[_ngcontent-%COMP%]{display:none}.toggle-label[_ngcontent-%COMP%]{display:block;width:100%;height:100%;background-color:#ccc;border-radius:12px;cursor:pointer;position:absolute;top:0;left:0;transition:background-color .3s}.toggle-input[_ngcontent-%COMP%]:checked + .toggle-label[_ngcontent-%COMP%]{background-color:var(--main-color)}.toggle-label[_ngcontent-%COMP%]:after{content:"";display:block;width:18px;height:18px;border-radius:50%;background-color:#fff;position:absolute;top:3px;left:3px;transition:transform .3s}.toggle-input[_ngcontent-%COMP%]:checked + .toggle-label[_ngcontent-%COMP%]:after{transform:translate(26px)}a[_ngcontent-%COMP%]{font-weight:700}']});let t=e;return t})();var j=(()=>{let e=class e{getToken(){return localStorage.getItem("ThemeMode")}deleteToken(){localStorage.removeItem("ThemeMode")}setToken(n){this.deleteToken(),localStorage.setItem("ThemeMode",n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var G=(()=>{let e=class e{constructor(){this.stateNavBar=!1,this.isDarkTheme=!1,this.toggleService=D(j)}ngOnInit(){let n=this.toggleService.getToken();this.isDarkTheme=n=="1",this.onChangeTheme(this.isDarkTheme)}onChangeStateNavBar(n){this.stateNavBar=n}toggleTheme(){clearTimeout(this.debounceTimeout),this.debounceTimeout=setTimeout(()=>{this.isDarkTheme=!this.isDarkTheme,this.onChangeTheme(this.isDarkTheme)},200)}onChangeTheme(n){n?(document.body.classList.add("dark"),this.toggleService.setToken("1")):(document.body.classList.remove("dark"),this.toggleService.setToken("2"))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["ng-component"]],standalone:!0,features:[p],decls:6,vars:5,consts:[[1,"dashboard"],[3,"nvState","onChangeNavBarState"],[1,"data"],[3,"nvState","themeStatus","onChangeNavBarState","onChangeBtnThemeMode"],[1,"content"]],template:function(i,s){i&1&&(r(0,"div",0)(1,"sidebar",1),f("onChangeNavBarState",function(C){return s.onChangeStateNavBar(C)}),o(),r(2,"div",2)(3,"navbar",3),f("onChangeNavBarState",function(C){return s.onChangeStateNavBar(C)})("onChangeBtnThemeMode",function(){return s.toggleTheme()}),o(),r(4,"div",4),a(5,"router-outlet"),o()()()),i&2&&(h(),M("nvState",s.stateNavBar),h(2),M("nvState",s.stateNavBar)("themeStatus",s.isDarkTheme),h(),l("isFullWidth",!s.stateNavBar))},dependencies:[g,x,B,w]});let t=e;return t})();var $e=[{path:"",component:G,children:[{path:"orders",loadChildren:()=>import("./chunk-G2YXCTTO.js").then(t=>t.routes)},{path:"cashier",loadChildren:()=>import("./chunk-YAQ57AR3.js").then(t=>t.routes)}]}];export{$e as routes};