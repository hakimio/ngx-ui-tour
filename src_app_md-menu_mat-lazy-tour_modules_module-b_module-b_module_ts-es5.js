(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkngx_ui_tour"] = self["webpackChunkngx_ui_tour"] || []).push([["src_app_md-menu_mat-lazy-tour_modules_module-b_module-b_module_ts"], {
    /***/
    2026:
    /*!***********************************************************************************!*\
      !*** ./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b-routing.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModuleBRoutingModule": function ModuleBRoutingModule() {
          return (
            /* binding */
            _ModuleBRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _module_b_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./module-b.component */
      2126);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        redirectTo: 'module-b-component',
        pathMatch: 'full'
      }, {
        path: 'module-b-component',
        component: _module_b_component__WEBPACK_IMPORTED_MODULE_0__.ModuleBComponent
      }];

      var _ModuleBRoutingModule = function _ModuleBRoutingModule() {
        _classCallCheck(this, _ModuleBRoutingModule);
      };

      _ModuleBRoutingModule.ɵfac = function ModuleBRoutingModule_Factory(t) {
        return new (t || _ModuleBRoutingModule)();
      };

      _ModuleBRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ModuleBRoutingModule
      });
      _ModuleBRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ModuleBRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    2126:
    /*!******************************************************************************!*\
      !*** ./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModuleBComponent": function ModuleBComponent() {
          return (
            /* binding */
            _ModuleBComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-ui-tour-md-menu */
      5408);

      var _ModuleBComponent = /*#__PURE__*/function () {
        function _ModuleBComponent() {
          _classCallCheck(this, _ModuleBComponent);
        }

        _createClass(_ModuleBComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ModuleBComponent;
      }();

      _ModuleBComponent.ɵfac = function ModuleBComponent_Factory(t) {
        return new (t || _ModuleBComponent)();
      };

      _ModuleBComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ModuleBComponent,
        selectors: [["app-module-b"]],
        decls: 3,
        vars: 0,
        consts: [["tourAnchor", "module-b"]],
        template: function ModuleBComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " module-b works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_1__.TourAnchorMatMenuDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bGUtYi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    20:
    /*!***************************************************************************!*\
      !*** ./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModuleBModule": function ModuleBModule() {
          return (
            /* binding */
            _ModuleBModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _module_b_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./module-b-routing.module */
      2026);
      /* harmony import */


      var _module_b_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./module-b.component */
      2126);
      /* harmony import */


      var ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-ui-tour-md-menu */
      5408);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ModuleBModule = function _ModuleBModule() {
        _classCallCheck(this, _ModuleBModule);
      };

      _ModuleBModule.ɵfac = function ModuleBModule_Factory(t) {
        return new (t || _ModuleBModule)();
      };

      _ModuleBModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _ModuleBModule
      });
      _ModuleBModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _module_b_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModuleBRoutingModule, ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_4__.TourMatMenuModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_ModuleBModule, {
          declarations: [_module_b_component__WEBPACK_IMPORTED_MODULE_1__.ModuleBComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _module_b_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModuleBRoutingModule, ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_4__.TourMatMenuModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_md-menu_mat-lazy-tour_modules_module-b_module-b_module_ts-es5.js.map