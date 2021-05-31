(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (self["webpackChunkngx_ui_tour"] = self["webpackChunkngx_ui_tour"] || []).push([["src_app_ng-bootstrap_ng-bootstrap_module_ts"], {
    /***/
    3990:
    /*!*****************************************************************************************!*\
      !*** ./dist/ngx-ui-tour-ng-bootstrap/__ivy_ngcc__/fesm2015/ngx-ui-tour-ng-bootstrap.js ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TourAnchorNgBootstrapDirective": function TourAnchorNgBootstrapDirective() {
          return (
            /* binding */
            _TourAnchorNgBootstrapDirective
          );
        },

        /* harmony export */
        "TourNgBootstrapModule": function TourNgBootstrapModule() {
          return (
            /* binding */
            _TourNgBootstrapModule
          );
        },

        /* harmony export */
        "TourService": function TourService() {
          return (
            /* binding */
            NgbTourService
          );
        },

        /* harmony export */
        "TourStepTemplateComponent": function TourStepTemplateComponent() {
          return (
            /* binding */
            _TourStepTemplateComponent
          );
        },

        /* harmony export */
        "ɵa": function ɵa() {
          return (
            /* binding */
            NgbTourService
          );
        },

        /* harmony export */
        "ɵb": function ɵb() {
          return (
            /* binding */
            TourAnchorNgBootstrapPopoverDirective
          );
        },

        /* harmony export */
        "ɵc": function ɵc() {
          return (
            /* binding */
            TourStepTemplateService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-ui-tour-core */
      5092);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      2664);

      var _c0 = ["tourStep"];

      function TourStepTemplateComponent_ng_template_0_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TourStepTemplateComponent_ng_template_0_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.tourService.prev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().step;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xAB ", step_r2 == null ? null : step_r2.prevBtnTitle, " ");
        }
      }

      function TourStepTemplateComponent_ng_template_0_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TourStepTemplateComponent_ng_template_0_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.tourService.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().step;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", step_r2 == null ? null : step_r2.nextBtnTitle, " \xBB ");
        }
      }

      function TourStepTemplateComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TourStepTemplateComponent_ng_template_0_button_2_Template, 2, 1, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TourStepTemplateComponent_ng_template_0_button_3_Template, 2, 1, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TourStepTemplateComponent_ng_template_0_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.tourService.end();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r2 = ctx.step;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", step_r2 == null ? null : step_r2.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tourService.hasPrev(step_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tourService.hasNext(step_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", step_r2 == null ? null : step_r2.endBtnTitle, " ");
        }
      }

      var NgbTourService = /*#__PURE__*/function (_ngx_ui_tour_core__WE) {
        _inherits(NgbTourService, _ngx_ui_tour_core__WE);

        var _super = _createSuper(NgbTourService);

        function NgbTourService() {
          _classCallCheck(this, NgbTourService);

          return _super.apply(this, arguments);
        }

        return NgbTourService;
      }(ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourService);

      NgbTourService.ɵfac = /*@__PURE__*/function () {
        var ɵNgbTourService_BaseFactory;
        return function NgbTourService_Factory(t) {
          return (ɵNgbTourService_BaseFactory || (ɵNgbTourService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbTourService)))(t || NgbTourService);
        };
      }();

      NgbTourService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function NgbTourService_Factory() {
          return new NgbTourService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
        },
        token: NgbTourService,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbTourService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var TourStepTemplateService = function TourStepTemplateService() {
        _classCallCheck(this, TourStepTemplateService);
      };

      TourStepTemplateService.ɵfac = function TourStepTemplateService_Factory(t) {
        return new (t || TourStepTemplateService)();
      };

      TourStepTemplateService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TourStepTemplateService,
        factory: TourStepTemplateService.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TourStepTemplateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
        }], null, null);
      })();

      var TourAnchorNgBootstrapPopoverDirective = /*#__PURE__*/function (_ng_bootstrap_ng_boot) {
        _inherits(TourAnchorNgBootstrapPopoverDirective, _ng_bootstrap_ng_boot);

        var _super2 = _createSuper(TourAnchorNgBootstrapPopoverDirective);

        function TourAnchorNgBootstrapPopoverDirective() {
          _classCallCheck(this, TourAnchorNgBootstrapPopoverDirective);

          return _super2.apply(this, arguments);
        }

        return TourAnchorNgBootstrapPopoverDirective;
      }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbPopover);

      TourAnchorNgBootstrapPopoverDirective.ɵfac = /*@__PURE__*/function () {
        var ɵTourAnchorNgBootstrapPopoverDirective_BaseFactory;
        return function TourAnchorNgBootstrapPopoverDirective_Factory(t) {
          return (ɵTourAnchorNgBootstrapPopoverDirective_BaseFactory || (ɵTourAnchorNgBootstrapPopoverDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TourAnchorNgBootstrapPopoverDirective)))(t || TourAnchorNgBootstrapPopoverDirective);
        };
      }();

      TourAnchorNgBootstrapPopoverDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TourAnchorNgBootstrapPopoverDirective,
        selectors: [["", "tourAnchor", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TourAnchorNgBootstrapPopoverDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[tourAnchor]'
          }]
        }], null, null);
      })();

      var _TourAnchorNgBootstrapDirective = /*#__PURE__*/function () {
        function _TourAnchorNgBootstrapDirective(tourService, tourStepTemplate, element, popoverDirective, tourBackdrop) {
          _classCallCheck(this, _TourAnchorNgBootstrapDirective);

          this.tourService = tourService;
          this.tourStepTemplate = tourStepTemplate;
          this.element = element;
          this.popoverDirective = popoverDirective;
          this.tourBackdrop = tourBackdrop;
          this.popoverDirective.autoClose = false;
          this.popoverDirective.triggers = '';

          this.popoverDirective.toggle = function () {};
        }

        _createClass(_TourAnchorNgBootstrapDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.tourService.register(this.tourAnchor, this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.tourService.unregister(this.tourAnchor);
          } // noinspection JSUnusedGlobalSymbols

        }, {
          key: "showTourStep",
          value: function showTourStep(step) {
            var htmlElement = this.element.nativeElement;
            this.isActive = true;
            this.popoverDirective.ngbPopover = this.tourStepTemplate.template;
            this.popoverDirective.popoverTitle = step.title;
            this.popoverDirective.container = 'body';
            this.popoverDirective.placement = (step.placement || 'top').replace('before', 'left').replace('after', 'right').replace('below', 'bottom').replace('above', 'top');
            step.prevBtnTitle = step.prevBtnTitle || 'Prev';
            step.nextBtnTitle = step.nextBtnTitle || 'Next';
            step.endBtnTitle = step.endBtnTitle || 'End';
            this.popoverDirective.open({
              step: step
            });

            if (!step.preventScrolling) {
              ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.ScrollingUtil.ensureVisible(htmlElement);
            }

            if (step.enableBackdrop) {
              this.tourBackdrop.show(this.element);
            } else {
              this.tourBackdrop.close();
            }
          }
        }, {
          key: "hideTourStep",
          value: function hideTourStep() {
            this.isActive = false;

            if (this.tourService.getStatus() === ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourState.OFF) {
              this.tourBackdrop.close();
            }

            this.popoverDirective.close();
          }
        }]);

        return _TourAnchorNgBootstrapDirective;
      }();

      _TourAnchorNgBootstrapDirective.ɵfac = function TourAnchorNgBootstrapDirective_Factory(t) {
        return new (t || _TourAnchorNgBootstrapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbTourService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TourStepTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TourAnchorNgBootstrapPopoverDirective, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourBackdropService));
      };

      _TourAnchorNgBootstrapDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _TourAnchorNgBootstrapDirective,
        selectors: [["", "tourAnchor", ""]],
        hostVars: 2,
        hostBindings: function TourAnchorNgBootstrapDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("touranchor--is-active", ctx.isActive);
          }
        },
        inputs: {
          tourAnchor: "tourAnchor"
        }
      });

      _TourAnchorNgBootstrapDirective.ctorParameters = function () {
        return [{
          type: NgbTourService
        }, {
          type: TourStepTemplateService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: TourAnchorNgBootstrapPopoverDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
          }]
        }, {
          type: ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourBackdropService
        }];
      };

      _TourAnchorNgBootstrapDirective.propDecorators = {
        tourAnchor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        isActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.touranchor--is-active']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_TourAnchorNgBootstrapDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[tourAnchor]'
          }]
        }], function () {
          return [{
            type: NgbTourService
          }, {
            type: TourStepTemplateService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: TourAnchorNgBootstrapPopoverDirective,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }]
          }, {
            type: ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourBackdropService
          }];
        }, {
          isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.touranchor--is-active']
          }],
          tourAnchor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _TourStepTemplateComponent = /*#__PURE__*/function (_ngx_ui_tour_core__WE2) {
        _inherits(_TourStepTemplateComponent, _ngx_ui_tour_core__WE2);

        var _super3 = _createSuper(_TourStepTemplateComponent);

        function _TourStepTemplateComponent(tourStepTemplateService, tourService) {
          var _this;

          _classCallCheck(this, _TourStepTemplateComponent);

          _this = _super3.call(this, tourService);
          _this.tourStepTemplateService = tourStepTemplateService;
          _this.tourService = tourService;
          return _this;
        }

        _createClass(_TourStepTemplateComponent, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.tourStepTemplateService.template = this.stepTemplate || this.stepTemplateContent || this.defaultTourStepTemplate;
          }
        }]);

        return _TourStepTemplateComponent;
      }(ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourHotkeyListenerComponent);

      _TourStepTemplateComponent.ɵfac = function TourStepTemplateComponent_Factory(t) {
        return new (t || _TourStepTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TourStepTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgbTourService));
      };

      _TourStepTemplateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _TourStepTemplateComponent,
        selectors: [["tour-step-template"]],
        contentQueries: function TourStepTemplateComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepTemplateContent = _t.first);
          }
        },
        viewQuery: function TourStepTemplateComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.defaultTourStepTemplate = _t.first);
          }
        },
        inputs: {
          stepTemplate: "stepTemplate"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 2,
        vars: 0,
        consts: [["tourStep", ""], [1, "tour-step-content", 3, "innerHTML"], [1, "tour-step-navigation"], ["class", "btn btn-sm btn-default", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-default", 3, "click"]],
        template: function TourStepTemplateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TourStepTemplateComponent_ng_template_0_Template, 6, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
        encapsulation: 2
      });

      _TourStepTemplateComponent.ctorParameters = function () {
        return [{
          type: TourStepTemplateService
        }, {
          type: NgbTourService
        }];
      };

      _TourStepTemplateComponent.propDecorators = {
        defaultTourStepTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['tourStep', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
            "static": true
          }]
        }],
        stepTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        stepTemplateContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_TourStepTemplateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            selector: 'tour-step-template',
            template: "\n    <ng-template #tourStep let-step=\"step\">\n      <p class=\"tour-step-content\" [innerHTML]=\"step?.content\"></p>\n      <div class=\"tour-step-navigation\">\n        <button\n          *ngIf=\"tourService.hasPrev(step)\"\n          class=\"btn btn-sm btn-default\"\n          (click)=\"tourService.prev()\"\n        >\n          \xAB {{ step?.prevBtnTitle }}\n        </button>\n        <button\n          *ngIf=\"tourService.hasNext(step)\"\n          class=\"btn btn-sm btn-default\"\n          (click)=\"tourService.next()\"\n        >\n          {{ step?.nextBtnTitle }} \xBB\n        </button>\n        <button class=\"btn btn-sm btn-default\" (click)=\"tourService.end()\">\n          {{ step?.endBtnTitle }}\n        </button>\n      </div>\n    </ng-template>\n  "
          }]
        }], function () {
          return [{
            type: TourStepTemplateService
          }, {
            type: NgbTourService
          }];
        }, {
          defaultTourStepTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['tourStep', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
              "static": true
            }]
          }],
          stepTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          stepTemplateContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef]
          }]
        });
      })();

      var _TourNgBootstrapModule = /*#__PURE__*/function () {
        function _TourNgBootstrapModule() {
          _classCallCheck(this, _TourNgBootstrapModule);
        }

        _createClass(_TourNgBootstrapModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: _TourNgBootstrapModule,
              providers: [TourStepTemplateService, ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourService, NgbTourService, ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourBackdropService]
            };
          }
        }]);

        return _TourNgBootstrapModule;
      }();

      _TourNgBootstrapModule.ɵfac = function TourNgBootstrapModule_Factory(t) {
        return new (t || _TourNgBootstrapModule)();
      };

      _TourNgBootstrapModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _TourNgBootstrapModule
      });
      _TourNgBootstrapModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbPopoverModule, ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_TourNgBootstrapModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [_TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, _TourStepTemplateComponent],
            exports: [_TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, _TourStepTemplateComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbPopoverModule, ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourModule]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_TourNgBootstrapModule, {
          declarations: function declarations() {
            return [_TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, _TourStepTemplateComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbPopoverModule, ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_1__.TourModule];
          },
          exports: function exports() {
            return [_TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, _TourStepTemplateComponent];
          }
        });
      })();
      /*
       * Public API Surface of ngx-ui-tour-ng-bootstrap
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    8302:
    /*!************************************************!*\
      !*** ./src/app/ng-bootstrap/docs.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DocsComponent": function DocsComponent() {
          return (
            /* binding */
            _DocsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      5792);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var ngx_ui_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-ui-tour-ng-bootstrap */
      3990);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function DocsComponent_tr_305_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "isAsync");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "boolean");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "false");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Mark your step as async if anchor element is added to DOM with a delay (ie after data is loaded). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocsComponent_td_307_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading data...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocsComponent_td_308_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Fake data: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.fakeData), " ");
        }
      }

      var _DocsComponent = /*#__PURE__*/function () {
        function _DocsComponent(tourService) {
          _classCallCheck(this, _DocsComponent);

          this.tourService = tourService;
          this.isLoading = true;
          this.showIsAsyncConfig = true;
        }

        _createClass(_DocsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.subscribeToShowStep();
          }
        }, {
          key: "subscribeToShowStep",
          value: function subscribeToShowStep() {
            var _this2 = this;

            this.startWaitingSubscription = this.tourService.startWaiting$.subscribe(function () {
              return _this2.loadData();
            });
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this3 = this;

            this.showIsAsyncConfig = false;
            (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([1, 2, 3]).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.delay)(1000)).subscribe(function (result) {
              _this3.isLoading = false;
              _this3.fakeData = result;
              _this3.showIsAsyncConfig = true;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.startWaitingSubscription.unsubscribe();
          }
        }]);

        return _DocsComponent;
      }();

      _DocsComponent.ɵfac = function DocsComponent_Factory(t) {
        return new (t || _DocsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.TourService));
      };

      _DocsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DocsComponent,
        selectors: [["docs"]],
        decls: 467,
        vars: 40,
        consts: [["tourAnchor", "angular-ui-tour", "href", "http://benmarch.github.io/angular-ui-tour"], ["href", "https://ng-bootstrap.github.io"], ["tourAnchor", "installation"], ["tourAnchor", "usage"], ["tourAnchor", "tourService.start"], ["href", "https://github.com/hakimio/ngx-ui-tour/tree/master/src/app/ng-bootstrap"], [1, "table"], ["tourAnchor", "config.anchorId"], ["tourAnchor", "config.enableBackdrop"], ["tourAnchor", "config.route"], ["tourAnchor", "config.nextStep"], ["tourAnchor", "config.placement.default"], ["href", "https://ng-bootstrap.github.io/#/components/popover/api#NgbPopover"], ["tourAnchor", "config.buttons.custom"], ["tourAnchor", "config.isAsync", 4, "ngIf"], ["colspan", "4", 4, "ngIf"], ["colspan", "4", "tourAnchor", "config.fakeData", 4, "ngIf"], ["tourAnchor", "hotkeys"], ["tourAnchor", "events"], ["tourAnchor", "template"], ["tourAnchor", "config.isAsync"], ["colspan", "4"], ["colspan", "4", "tourAnchor", "config.fakeData"]],
        template: function DocsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This is a product tour library built with Angular (2+). It's inspired by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "angular-ui-tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "TourNgBootstrapModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " is an implementation of the tour ui that uses ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "NgBootstrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " popovers to display tour steps.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Installation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "npm install ngx-ui-tour-core ngx-ui-tour-ng-bootstrap @ng-bootstrap/ng-bootstrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Import ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "TourNgBootstrapModule.forRoot()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " into your app module");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Make sure ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "RouterModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " is imported in your app module");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Include bootstrap css somehow - i.e. in your ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "index.html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " add this line: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css\" integrity=\"sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M\" crossorigin=\"anonymous\">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "<tour-step-template></tour-step-template>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " to your root app component");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Define anchor points for the tour steps by adding the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "tourAnchor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " directive throughout your app. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "<div tourAnchor=\"some.anchor.id\">...</div>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Define your tour steps using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "tourService.initialize(steps)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Start the tour with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "code", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "tourService.start()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Check out the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "demo source code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " for an example.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "FAQ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "How to center tour step?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "You can create an invisible anchor point for the tour step you want to center.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Add a simple div to your html template which will be used as the tour anchor ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\n<div class=\"centered-tour-element\" tourAnchor=\"start-tour\"></div>\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Add CSS for the div ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Use previously defined tour anchor ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "How to disable main content scrolling when UI tour is active?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "You can toggle CSS class which disables main content element scrolling when tour starts/ends.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Create custom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "TourService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Add the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "no-scroll");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " CSS class to your global stylesheet (");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "styles.(s)css");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, ") ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Use your custom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "TourService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " to start the UI tour: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "TourService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "TourService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " controls the tour. Some key functions include:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "dl");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "start()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Starts the tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "startAt(stepId: number | string)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Start the tour at the step with stepId or at the specified index");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "end()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Ends the tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "pause()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Pauses the tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "resume()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Resumes the tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "next()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Goes to the next step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "prev()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Goes to the previous step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Step Configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Each step can have the following properties.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "stepId");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "\"\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "A unique identifier for the step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "anchorId");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "The anchor to which the step will be attached");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "\"\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "The title of the tour step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "\"\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "The content text of the tour step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "enableBackdrop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "boolean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Controls whether to enable active element highlighting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "route");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "string | UrlSegment[]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "undefined");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "nextStep");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "number | string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "undefined");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "The step index or stepId of the next step. If undefined, the next step in the steps array is used.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "prevStep");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "number | string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "undefined");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "The step index or stepId of the previous step. If undefined, the previous step in the steps array is used.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "placement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Placement of a popover accepts: \"top\", \"top-left\", \"top-right\", \"bottom\", \"bottom-left\", \"bottom-right\", \"left\", \"left-top\", \"left-bottom\", \"right\", \"right-top\", \"right-bottom\" and array of above values.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "'top'");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " Where the tour step should placed with respect to the anchor. Supports all ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "placement options of ng bootstrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "preventScrolling");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "boolean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to true will disable the scroll behavior. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "prevBtnTitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " Sets a custom prev button title for a given step. Default is \"Prev\" ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "nextBtnTitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, " Sets a custom next button title for a given step. Default is \"Next\" ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "endBtnTitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, " Sets a custom end button title for a given step. Default is \"End\" ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "waitFor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Promise | Observable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "undefined");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, " [Deprecated: use \"isAsync\" instead] Waits for the given Promise or Observable before showing the step contents. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](305, DocsComponent_tr_305_Template, 10, 0, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](307, DocsComponent_td_307_Template, 3, 0, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](308, DocsComponent_td_308_Template, 3, 3, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Defaults");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "You can set default values in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "TourService.initialize");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, " function.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Any value explicitly defined in a step will override the default value.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "h2", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Hotkeys");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, " Hotkeys are provided using Angular's ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "@HostListener");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, " decorator. Hotkeys are enabled when the tour starts and disabled when the tour ends.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "left arrow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, " - previous step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "right arrow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, " - next step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "esc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, " - end tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, " You can disable hotkeys by calling ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "tourService.disableHotkeys()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, " or re-enable with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "tourService.enableHotkeys()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "h2", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Event Observables");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "TourService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, " emits events that can be subscribed to like this:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Payload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Emitted When");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "stepShow$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "A step is shown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "stepHide$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "A step is hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "initialize$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "IStepOption[]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "The tour is configured with a set of steps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "start$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "The tour begins");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "end$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "any");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "The tour ends");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "pause$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "The tour is paused");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "resume$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "The tour resumes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "anchorRegister$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "An anchor is registered with the tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "anchorUnregister$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "An anchor is unregistered from the tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "startWaiting$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "Starts waiting for async step (\"isAsync\" or \"waitFor\" configs set)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "stopWaiting$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "Async anchor is registered or \"waitFor\" config Promise/Observable completes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "h2", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "Custom template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, " You can also customize the tour step template by providing an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "<ng-template let-step=\"step\" >");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, " inside the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, "<tour-step-template>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, " The default template is equivalent to this:\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "Styling Active Tour Anchor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, " The currently active tour anchor element has a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "touranchor--is-active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, " class applied to it, so you can apply your own custom styles to that class to highlight the element being referenced.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("this.tourService.initialize([", "{", "\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, ", "{", "\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n.centered-tour-element ", "{", "\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  /* The anchor should be translated to the left by half of your step width and half height  */\n  /* For example, if your tour step has dimensions of 280 \xD7 156 px, you have to translate by (-140px, -78px) */\n  transform: translate(-140px, -78px);\n", "}", "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\nthis.tourService.initialize([", "{", "\n  anchorId: 'start-tour',\n  title: 'Welcome',\n  content: 'Welcome to the Ngx-UI-Tour tour!'\n", "}", "]);\nthis.tourService.start();\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolateV"](["\n@Injectable()\nexport class MyTourService ", "{", "\n\n  constructor(\n    private readonly tourService: TourService\n  ) ", "{", "", "}", "\n\n  private readonly MAIN_SECTION_CSS_SELECTOR = 'section.main-content';\n  private readonly NO_SCROLL_CSS_CLASS = 'no-scroll';\n\n  start(steps: IStepOption[]) ", "{", "\n    this.tourService.initialize(steps, ", "{", "\n      route: 'my-route',\n      enableBackdrop: true\n    ", "}", ");\n    this.tourService.end$.subscribe(() => this.setIsScrollable(true));\n    this.setIsScrollable(false);\n    this.tourService.start();\n  ", "}", "\n\n  private setIsScrollable(isScrollable: boolean) ", "{", "\n    const body = document.body,\n      mainSection = document.querySelector(this.MAIN_SECTION_CSS_SELECTOR),\n      addOrRemove = isScrollable ? 'remove' : 'add';\n\n    mainSection.classList[addOrRemove](this.NO_SCROLL_CSS_CLASS);\n    // You can also optionally disable iOS Safari bounce effect\n    body[addOrRemove + 'EventListener']('touchmove', this.preventTouchMove, ", "{", " passive: false });\n  ", "}", "\n\n  private preventTouchMove(e) ", "{", "\n    e.preventDefault();\n  ", "}", "\n\n", "}", "\n    "]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n.no-scroll ", "{", "\n  overflow: hidden;\n", "}", "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolateV"](["\nimport ", "{", "MyTourService", "}", " from '@app-utils/my-tour.service';\n\n@Component(", "{", "\n  selector: 'my-app',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n", "}", ")\nexport class AppComponent ", "{", "\n\n  constructor(\n    private readonly myTourService: MyTourService\n  ) ", "{", "\n    this.myTourService.start([", "{", "\n      anchorId: 'start-tour',\n      title: 'Welcome',\n      content: 'Welcome to the Ngx-UI-Tour tour!'\n    ", "}", "]);\n  ", "}", "\n\n", "}", "\n    "]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](183);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIsAsyncConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading && !ctx.showIsAsyncConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("this.tourService.initialize(steps, ", "{", "\n  route: '',\n  placement: 'left',\n  preventScrolling: true,\n});\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("this.tourService.initialize$.subscribe((steps: IStepOption[]) => ", "{", "\n  console.log('tour configured with these steps:', steps);\n});\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("<tour-step-template>\n  <ng-template let-step=\"step\">\n    <p class=\"tour-step-content\">", "{{", "step?.content}}</p>\n    <div class=\"tour-step-navigation\">\n      <button *ngIf=\"tourService.hasPrev(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.prev()\">\xAB ", "{{", "step?.prevBtnTitle}}</button>\n      <button *ngIf=\"tourService.hasNext(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.next()\">", "{{", "step?.nextBtnTitle}} \xBB</button>\n      <button class=\"btn btn-sm btn-default\" (click)=\"tourService.end()\">", "{{", "step?.endBtnTitle}}</button>\n    </div>\n  </ng-template>\n</tour-step-template>\n");
          }
        },
        directives: [ngx_ui_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.TourAnchorNgBootstrapDirective, ngx_ui_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.JsonPipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    5285:
    /*!********************************************************!*\
      !*** ./src/app/ng-bootstrap/ng-bootstrap.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgBootstrapComponent": function NgBootstrapComponent() {
          return (
            /* binding */
            _NgBootstrapComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var ngx_ui_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-ui-tour-ng-bootstrap */
      3990);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var _NgBootstrapComponent = function _NgBootstrapComponent(tourService) {
        _classCallCheck(this, _NgBootstrapComponent);

        this.tourService = tourService;
        this.tourService.initialize([{
          anchorId: 'start.tour',
          content: 'Welcome to the Ngx-UI-Tour tour!',
          placement: 'bottom',
          title: 'Welcome'
        }, {
          anchorId: 'angular-ui-tour',
          content: 'Thanks to angular-ui-tour for the inspiration for the library',
          title: 'angular-ui-tour'
        }, {
          anchorId: 'installation',
          content: 'First, install the library...',
          title: 'Installation'
        }, {
          anchorId: 'usage',
          content: '...then use it.',
          title: 'Usage'
        }, {
          anchorId: 'tourService.start',
          content: 'Don\'t forget to actually start the tour.',
          title: 'Start the tour'
        }, {
          anchorId: 'config.anchorId',
          content: 'Every step needs an anchor.',
          title: 'Anchor'
        }, {
          anchorId: 'config.enableBackdrop',
          content: 'You can enable backdrop to highlight active element.',
          title: 'Backdrop',
          enableBackdrop: true
        }, {
          anchorId: 'config.route',
          content: 'Tours can span multiple routes.',
          title: 'Route'
        }, {
          anchorId: 'another.route',
          content: 'Like this!',
          route: 'ng-bootstrap/other',
          title: 'Another Route'
        }, {
          anchorId: 'config.route',
          content: 'And then back again.',
          title: 'Route Return'
        }, {
          anchorId: 'config.placement.default',
          content: 'Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.',
          title: 'Placement'
        }, {
          anchorId: 'config.buttons.custom',
          content: 'You can set custom step button names',
          title: 'Button Titles',
          prevBtnTitle: 'My Prev',
          nextBtnTitle: 'My Next',
          endBtnTitle: 'My End'
        }, {
          anchorId: 'config.isAsync',
          content: 'Mark your step as async if anchor element is added to DOM with a delay',
          title: 'Wait for async event'
        }, {
          anchorId: 'config.fakeData',
          content: 'Your fake data finished loading',
          title: 'Loading finished',
          isAsync: true
        }, {
          anchorId: 'hotkeys',
          content: 'Try using the hotkeys to navigate through the tour.',
          title: 'Hotkeys'
        }, {
          anchorId: 'events',
          content: 'You can subscribe to events',
          title: 'Events'
        }], {
          route: 'ng-bootstrap'
        });
        this.tourService.start();
      };

      _NgBootstrapComponent.ɵfac = function NgBootstrapComponent_Factory(t) {
        return new (t || _NgBootstrapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.TourService));
      };

      _NgBootstrapComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NgBootstrapComponent,
        selectors: [["ng-bootstrap-route"]],
        decls: 6,
        vars: 0,
        consts: [["href", "https://github.com/hakimio/ngx-ui-tour", 1, "btn", "btn-default"], ["tourAnchor", "start.tour", 1, "btn", "btn-primary", 2, "cursor", "pointer", 3, "click"]],
        template: function NgBootstrapComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View on GitHub");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgBootstrapComponent_Template_a_click_2_listener() {
              return ctx.tourService.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start Demo Tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tour-step-template");
          }
        },
        directives: [ngx_ui_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.TourAnchorNgBootstrapDirective, ngx_ui_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ɵb"], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, ngx_ui_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.TourStepTemplateComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    384:
    /*!*****************************************************!*\
      !*** ./src/app/ng-bootstrap/ng-bootstrap.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgBootstrapModule": function NgBootstrapModule() {
          return (
            /* binding */
            _NgBootstrapModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var ngx_ui_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-ui-tour-ng-bootstrap */
      3990);
      /* harmony import */


      var _docs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./docs.component */
      8302);
      /* harmony import */


      var _ng_bootstrap_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ng-bootstrap.component */
      5285);
      /* harmony import */


      var _other_route_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./other-route.component */
      3127);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _NgBootstrapModule = function _NgBootstrapModule() {
        _classCallCheck(this, _NgBootstrapModule);
      };

      _NgBootstrapModule.ɵfac = function NgBootstrapModule_Factory(t) {
        return new (t || _NgBootstrapModule)();
      };

      _NgBootstrapModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _NgBootstrapModule
      });
      _NgBootstrapModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
          component: _ng_bootstrap_component__WEBPACK_IMPORTED_MODULE_1__.NgBootstrapComponent,
          path: '',
          children: [{
            component: _docs_component__WEBPACK_IMPORTED_MODULE_0__.DocsComponent,
            path: ''
          }, {
            component: _other_route_component__WEBPACK_IMPORTED_MODULE_2__.OtherRouteComponent,
            path: 'other'
          }]
        }]), ngx_ui_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.TourNgBootstrapModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_NgBootstrapModule, {
          declarations: [_ng_bootstrap_component__WEBPACK_IMPORTED_MODULE_1__.NgBootstrapComponent, _docs_component__WEBPACK_IMPORTED_MODULE_0__.DocsComponent, _other_route_component__WEBPACK_IMPORTED_MODULE_2__.OtherRouteComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, ngx_ui_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.TourNgBootstrapModule]
        });
      })();
      /***/

    },

    /***/
    3127:
    /*!*******************************************************!*\
      !*** ./src/app/ng-bootstrap/other-route.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtherRouteComponent": function OtherRouteComponent() {
          return (
            /* binding */
            _OtherRouteComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var ngx_ui_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-ui-tour-ng-bootstrap */
      3990);

      var _OtherRouteComponent = function _OtherRouteComponent() {
        _classCallCheck(this, _OtherRouteComponent);
      };

      _OtherRouteComponent.ɵfac = function OtherRouteComponent_Factory(t) {
        return new (t || _OtherRouteComponent)();
      };

      _OtherRouteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _OtherRouteComponent,
        selectors: [["other-route"]],
        decls: 5,
        vars: 0,
        consts: [["tourAnchor", "another.route"]],
        template: function OtherRouteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "another");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " route");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [ngx_ui_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.TourAnchorNgBootstrapDirective, ngx_ui_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ɵb"]],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_ng-bootstrap_ng-bootstrap_module_ts-es5.js.map