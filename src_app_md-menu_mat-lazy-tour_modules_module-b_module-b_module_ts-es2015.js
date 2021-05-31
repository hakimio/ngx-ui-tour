(self["webpackChunkngx_ui_tour"] = self["webpackChunkngx_ui_tour"] || []).push([["src_app_md-menu_mat-lazy-tour_modules_module-b_module-b_module_ts"],{

/***/ 2026:
/*!***********************************************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b-routing.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleBRoutingModule": function() { return /* binding */ ModuleBRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _module_b_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-b.component */ 2126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    {
        path: '',
        redirectTo: 'module-b-component',
        pathMatch: 'full'
    },
    {
        path: 'module-b-component',
        component: _module_b_component__WEBPACK_IMPORTED_MODULE_0__.ModuleBComponent
    }
];
class ModuleBRoutingModule {
}
ModuleBRoutingModule.ɵfac = function ModuleBRoutingModule_Factory(t) { return new (t || ModuleBRoutingModule)(); };
ModuleBRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ModuleBRoutingModule });
ModuleBRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModuleBRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2126:
/*!******************************************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleBComponent": function() { return /* binding */ ModuleBComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ui-tour-md-menu */ 5408);


class ModuleBComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModuleBComponent.ɵfac = function ModuleBComponent_Factory(t) { return new (t || ModuleBComponent)(); };
ModuleBComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModuleBComponent, selectors: [["app-module-b"]], decls: 3, vars: 0, consts: [["tourAnchor", "module-b"]], template: function ModuleBComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " module-b works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_1__.TourAnchorMatMenuDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bGUtYi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 20:
/*!***************************************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleBModule": function() { return /* binding */ ModuleBModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _module_b_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-b-routing.module */ 2026);
/* harmony import */ var _module_b_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-b.component */ 2126);
/* harmony import */ var ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-tour-md-menu */ 5408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





class ModuleBModule {
}
ModuleBModule.ɵfac = function ModuleBModule_Factory(t) { return new (t || ModuleBModule)(); };
ModuleBModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ModuleBModule });
ModuleBModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _module_b_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModuleBRoutingModule,
            ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_4__.TourMatMenuModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ModuleBModule, { declarations: [_module_b_component__WEBPACK_IMPORTED_MODULE_1__.ModuleBComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _module_b_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModuleBRoutingModule,
        ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_4__.TourMatMenuModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_md-menu_mat-lazy-tour_modules_module-b_module-b_module_ts-es2015.js.map