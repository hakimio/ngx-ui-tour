(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkngx_ui_tour"] = self["webpackChunkngx_ui_tour"] || []).push([["src_app_md-menu_mat-lazy-tour_modules_module-a_module-a_module_ts"], {
    /***/
    9326:
    /*!***********************************************************************************!*\
      !*** ./src/app/md-menu/mat-lazy-tour/modules/module-a/module-a-routing.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModuleARoutingModule": function ModuleARoutingModule() {
          return (
            /* binding */
            _ModuleARoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _module_a_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./module-a.component */
      5389);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        redirectTo: 'module-a-component',
        pathMatch: 'full'
      }, {
        path: 'module-a-component',
        component: _module_a_component__WEBPACK_IMPORTED_MODULE_0__.ModuleAComponent
      }];

      var _ModuleARoutingModule = function _ModuleARoutingModule() {
        _classCallCheck(this, _ModuleARoutingModule);
      };

      _ModuleARoutingModule.ɵfac = function ModuleARoutingModule_Factory(t) {
        return new (t || _ModuleARoutingModule)();
      };

      _ModuleARoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ModuleARoutingModule
      });
      _ModuleARoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ModuleARoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5389:
    /*!******************************************************************************!*\
      !*** ./src/app/md-menu/mat-lazy-tour/modules/module-a/module-a.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModuleAComponent": function ModuleAComponent() {
          return (
            /* binding */
            _ModuleAComponent
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

      var _ModuleAComponent = /*#__PURE__*/function () {
        function _ModuleAComponent() {
          _classCallCheck(this, _ModuleAComponent);
        }

        _createClass(_ModuleAComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ModuleAComponent;
      }();

      _ModuleAComponent.ɵfac = function ModuleAComponent_Factory(t) {
        return new (t || _ModuleAComponent)();
      };

      _ModuleAComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ModuleAComponent,
        selectors: [["app-module-a"]],
        decls: 3,
        vars: 0,
        consts: [["tourAnchor", "module-a"]],
        template: function ModuleAComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " module-a works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_1__.TourAnchorMatMenuDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bGUtYS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    305:
    /*!***************************************************************************!*\
      !*** ./src/app/md-menu/mat-lazy-tour/modules/module-a/module-a.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModuleAModule": function ModuleAModule() {
          return (
            /* binding */
            _ModuleAModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _module_a_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./module-a-routing.module */
      9326);
      /* harmony import */


      var _module_a_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./module-a.component */
      5389);
      /* harmony import */


      var ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-ui-tour-md-menu */
      5408);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ModuleAModule = function _ModuleAModule() {
        _classCallCheck(this, _ModuleAModule);
      };

      _ModuleAModule.ɵfac = function ModuleAModule_Factory(t) {
        return new (t || _ModuleAModule)();
      };

      _ModuleAModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _ModuleAModule
      });
      _ModuleAModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _module_a_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModuleARoutingModule, ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_4__.TourMatMenuModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_ModuleAModule, {
          declarations: [_module_a_component__WEBPACK_IMPORTED_MODULE_1__.ModuleAComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _module_a_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModuleARoutingModule, ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_4__.TourMatMenuModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_md-menu_mat-lazy-tour_modules_module-a_module-a_module_ts-es5.js.map