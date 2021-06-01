(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkngx_ui_tour"] = self["webpackChunkngx_ui_tour"] || []).push([["src_app_ngx-bootstrap_ngx-bootstrap_module_ts"], {
    /***/
    8935:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/component-loader/fesm2015/ngx-bootstrap-component-loader.js ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BsComponentRef": function BsComponentRef() {
          return (
            /* binding */
            _BsComponentRef
          );
        },

        /* harmony export */
        "ComponentLoader": function ComponentLoader() {
          return (
            /* binding */
            _ComponentLoader
          );
        },

        /* harmony export */
        "ComponentLoaderFactory": function ComponentLoaderFactory() {
          return (
            /* binding */
            _ComponentLoaderFactory
          );
        },

        /* harmony export */
        "ContentRef": function ContentRef() {
          return (
            /* binding */
            _ContentRef
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-bootstrap/utils */
      1103);
      /* harmony import */


      var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/positioning */
      9803);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T
       */


      var _BsComponentRef = function _BsComponentRef() {
        _classCallCheck(this, _BsComponentRef);
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @copyright Valor Software
       * @copyright Angular ng-bootstrap team
       */


      var _ContentRef =
      /**
       * @param {?} nodes
       * @param {?=} viewRef
       * @param {?=} componentRef
       */
      function _ContentRef(
      /* tslint:disable-next-line: no-any */
      nodes, viewRef,
      /* tslint:disable-next-line: no-any */
      componentRef) {
        _classCallCheck(this, _ContentRef);

        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T
       */


      var _ComponentLoader = /*#__PURE__*/function () {
        /**
         * Do not use this directly, it should be instanced via
         * `ComponentLoadFactory.attach`
         * \@internal
         * @param {?} _viewContainerRef
         * @param {?} _renderer
         * @param {?} _elementRef
         * @param {?} _injector
         * @param {?} _componentFactoryResolver
         * @param {?} _ngZone
         * @param {?} _applicationRef
         * @param {?} _posService
         */
        // tslint:disable-next-line
        function _ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
          _classCallCheck(this, _ComponentLoader);

          this._viewContainerRef = _viewContainerRef;
          this._renderer = _renderer;
          this._elementRef = _elementRef;
          this._injector = _injector;
          this._componentFactoryResolver = _componentFactoryResolver;
          this._ngZone = _ngZone;
          this._applicationRef = _applicationRef;
          this._posService = _posService;
          this.onBeforeShow = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /* tslint:disable-next-line: no-any*/

          this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /* tslint:disable-next-line: no-any*/

          this.onBeforeHide = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this._providers = [];
          this._isHiding = false;
          /**
           * A selector used if container element was not found
           */

          this.containerDefaultSelector = 'body';
          this._listenOpts = {};
          this._globalListener = Function.prototype;
        }
        /**
         * @return {?}
         */


        _createClass(_ComponentLoader, [{
          key: "isShown",
          get: function get() {
            if (this._isHiding) {
              return false;
            }

            return !!this._componentRef;
          }
          /**
           * @param {?} compType
           * @return {?}
           */

        }, {
          key: "attach",
          value: function attach(compType) {
            this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(compType);
            return this;
          } // todo: add behaviour: to target element, `body`, custom element

          /**
           * @param {?=} container
           * @return {?}
           */

        }, {
          key: "to",
          value: function to(container) {
            this.container = container || this.container;
            return this;
          }
          /**
           * @param {?=} opts
           * @return {?}
           */

        }, {
          key: "position",
          value: function position(opts) {
            this.attachment = opts.attachment || this.attachment;
            /* tslint:disable-next-line: no-unnecessary-type-assertion */

            this._elementRef =
            /** @type {?} */
            opts.target || this._elementRef;
            return this;
          }
          /**
           * @param {?} provider
           * @return {?}
           */

        }, {
          key: "provide",
          value: function provide(provider) {
            this._providers.push(provider);

            return this;
          } // todo: appendChild to element or document.querySelector(this.container)

          /**
           * @param {?=} opts
           * @return {?}
           */

        }, {
          key: "show",
          value: function show() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this._subscribePositioning();

            this._innerComponent = null;

            if (!this._componentRef) {
              this.onBeforeShow.emit();
              this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
              /** @type {?} */

              var injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector.create({
                providers: this._providers,
                parent: this._injector
              });

              this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);

              this._applicationRef.attachView(this._componentRef.hostView); // this._componentRef = this._viewContainerRef
              //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);


              this.instance = this._componentRef.instance;
              Object.assign(this._componentRef.instance, opts);

              if (this.container instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef) {
                this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
              }

              if (typeof this.container === 'string' && typeof document !== 'undefined') {
                /** @type {?} */
                var selectedElement = document.querySelector(this.container) || document.querySelector(this.containerDefaultSelector);
                selectedElement.appendChild(this._componentRef.location.nativeElement);
              }

              if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
              } // we need to manually invoke change detection since events registered
              // via
              // Renderer::listen() are not picked up by change detection with the
              // OnPush strategy


              if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;

                this._contentRef.componentRef.changeDetectorRef.markForCheck();

                this._contentRef.componentRef.changeDetectorRef.detectChanges();
              }

              this._componentRef.changeDetectorRef.markForCheck();

              this._componentRef.changeDetectorRef.detectChanges();

              this.onShown.emit(opts.id ? {
                id: opts.id
              } : this._componentRef.instance);
            }

            this._registerOutsideClick();

            return this._componentRef;
          }
          /**
           * @param {?=} id
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide(id) {
            if (!this._componentRef) {
              return this;
            }

            this._posService.deletePositionElement(this._componentRef.location);

            this.onBeforeHide.emit(this._componentRef.instance);
            /** @type {?} */

            var componentEl = this._componentRef.location.nativeElement;
            componentEl.parentNode.removeChild(componentEl);

            if (this._contentRef.componentRef) {
              this._contentRef.componentRef.destroy();
            }

            if (this._viewContainerRef && this._contentRef.viewRef) {
              this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
            }

            if (this._contentRef.viewRef) {
              this._contentRef.viewRef.destroy();
            }

            this._contentRef = null;
            this._componentRef = null;

            this._removeGlobalListener();

            this.onHidden.emit(id ? {
              id: id
            } : null);
            return this;
          }
          /**
           * @return {?}
           */

        }, {
          key: "toggle",
          value: function toggle() {
            if (this.isShown) {
              this.hide();
              return;
            }

            this.show();
          }
          /**
           * @return {?}
           */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this.isShown) {
              this.hide();
            }

            this._unsubscribePositioning();

            if (this._unregisterListenersFn) {
              this._unregisterListenersFn();
            }
          }
          /**
           * @param {?} listenOpts
           * @return {?}
           */

        }, {
          key: "listen",
          value: function listen(listenOpts) {
            var _this = this;

            this.triggers = listenOpts.triggers || this.triggers;
            this._listenOpts.outsideClick = listenOpts.outsideClick;
            this._listenOpts.outsideEsc = listenOpts.outsideEsc;
            listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
            /** @type {?} */

            var hide = this._listenOpts.hide =
            /**
            * @return {?}
            */
            function () {
              return listenOpts.hide ? listenOpts.hide() : void _this.hide();
            };
            /** @type {?} */


            var show = this._listenOpts.show =
            /**
            * @param {?} registerHide
            * @return {?}
            */
            function (registerHide) {
              listenOpts.show ? listenOpts.show(registerHide) : _this.show(registerHide);
              registerHide();
            };
            /** @type {?} */


            var toggle =
            /**
            * @param {?} registerHide
            * @return {?}
            */
            function toggle(registerHide) {
              _this.isShown ? hide() : show(registerHide);
            };

            this._unregisterListenersFn = (0, ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.listenToTriggersV2)(this._renderer, {
              target: listenOpts.target,
              triggers: listenOpts.triggers,
              show: show,
              hide: hide,
              toggle: toggle
            });
            return this;
          }
          /**
           * @return {?}
           */

        }, {
          key: "_removeGlobalListener",
          value: function _removeGlobalListener() {
            if (this._globalListener) {
              this._globalListener();

              this._globalListener = null;
            }
          }
          /**
           * @param {?} vRef
           * @param {?} template
           * @return {?}
           */

        }, {
          key: "attachInline",
          value: function attachInline(vRef,
          /* tslint:disable-next-line: no-any*/
          template) {
            this._inlineViewRef = vRef.createEmbeddedView(template);
            return this;
          }
          /**
           * @return {?}
           */

        }, {
          key: "_registerOutsideClick",
          value: function _registerOutsideClick() {
            var _this2 = this;

            if (!this._componentRef || !this._componentRef.location) {
              return;
            } // why: should run after first event bubble


            if (this._listenOpts.outsideClick) {
              /** @type {?} */
              var target = this._componentRef.location.nativeElement;
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this2._globalListener = (0, ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.registerOutsideClick)(_this2._renderer, {
                  targets: [target, _this2._elementRef.nativeElement],
                  outsideClick: _this2._listenOpts.outsideClick,
                  hide:
                  /**
                  * @return {?}
                  */
                  function hide() {
                    return _this2._listenOpts.hide();
                  }
                });
              });
            }

            if (this._listenOpts.outsideEsc) {
              /** @type {?} */
              var _target = this._componentRef.location.nativeElement;
              this._globalListener = (0, ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__.registerEscClick)(this._renderer, {
                targets: [_target, this._elementRef.nativeElement],
                outsideEsc: this._listenOpts.outsideEsc,
                hide:
                /**
                * @return {?}
                */
                function hide() {
                  return _this2._listenOpts.hide();
                }
              });
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "getInnerComponent",
          value: function getInnerComponent() {
            return this._innerComponent;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_subscribePositioning",
          value: function _subscribePositioning() {
            var _this3 = this;

            if (this._zoneSubscription || !this.attachment) {
              return;
            }

            this.onShown.subscribe(
            /**
            * @return {?}
            */
            function () {
              _this3._posService.position({
                element: _this3._componentRef.location,
                target: _this3._elementRef,
                attachment: _this3.attachment,
                appendToBody: _this3.container === 'body'
              });
            });
            this._zoneSubscription = this._ngZone.onStable.subscribe(
            /**
            * @return {?}
            */
            function () {
              if (!_this3._componentRef) {
                return;
              }

              _this3._posService.calcPosition();
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "_unsubscribePositioning",
          value: function _unsubscribePositioning() {
            if (!this._zoneSubscription) {
              return;
            }

            this._zoneSubscription.unsubscribe();

            this._zoneSubscription = null;
          }
          /**
           * @private
           * @param {?} content
           * @param {?=} context
           * @param {?=} initialState
           * @return {?}
           */

        }, {
          key: "_getContentRef",
          value: function _getContentRef(
          /* tslint:disable-next-line: no-any*/
          content,
          /* tslint:disable-next-line: no-any*/
          context,
          /* tslint:disable-next-line: no-any*/
          initialState) {
            if (!content) {
              return new _ContentRef([]);
            }

            if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef) {
              if (this._viewContainerRef) {
                /** @type {?} */
                var _viewRef = this._viewContainerRef.createEmbeddedView(content, context);

                _viewRef.markForCheck();

                return new _ContentRef([_viewRef.rootNodes], _viewRef);
              }
              /** @type {?} */


              var viewRef = content.createEmbeddedView({});

              this._applicationRef.attachView(viewRef);

              return new _ContentRef([viewRef.rootNodes], viewRef);
            }

            if (typeof content === 'function') {
              /** @type {?} */
              var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
              /** @type {?} */


              var modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector.create({
                providers: this._providers,
                parent: this._injector
              });
              /** @type {?} */


              var componentRef = contentCmptFactory.create(modalContentInjector);
              Object.assign(componentRef.instance, initialState);

              this._applicationRef.attachView(componentRef.hostView);

              return new _ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
            }

            return new _ContentRef([[this._renderer.createText("".concat(content))]]);
          }
        }]);

        return _ComponentLoader;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _ComponentLoaderFactory = /*#__PURE__*/function () {
        /**
         * @param {?} _componentFactoryResolver
         * @param {?} _ngZone
         * @param {?} _injector
         * @param {?} _posService
         * @param {?} _applicationRef
         */
        function _ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
          _classCallCheck(this, _ComponentLoaderFactory);

          this._componentFactoryResolver = _componentFactoryResolver;
          this._ngZone = _ngZone;
          this._injector = _injector;
          this._posService = _posService;
          this._applicationRef = _applicationRef;
        }
        /**
         *
         * @template T
         * @param {?} _elementRef
         * @param {?} _viewContainerRef
         * @param {?} _renderer
         * @return {?}
         */


        _createClass(_ComponentLoaderFactory, [{
          key: "createLoader",
          value: function createLoader(_elementRef, _viewContainerRef, _renderer) {
            return new _ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
          }
        }]);

        return _ComponentLoaderFactory;
      }();

      _ComponentLoaderFactory.ɵfac = function ComponentLoaderFactory_Factory(t) {
        return new (t || _ComponentLoaderFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_1__.PositioningService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ApplicationRef));
      };

      _ComponentLoaderFactory.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _ComponentLoaderFactory,
        factory: _ComponentLoaderFactory.ɵfac
      });
      /** @nocollapse */

      _ComponentLoaderFactory.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
        }, {
          type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_1__.PositioningService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ApplicationRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_ComponentLoaderFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
          }, {
            type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_1__.PositioningService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ApplicationRef
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-component-loader.js.map

      /***/

    },

    /***/
    8366:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PopoverConfig": function PopoverConfig() {
          return (
            /* binding */
            _PopoverConfig
          );
        },

        /* harmony export */
        "PopoverContainerComponent": function PopoverContainerComponent() {
          return (
            /* binding */
            _PopoverContainerComponent
          );
        },

        /* harmony export */
        "PopoverDirective": function PopoverDirective() {
          return (
            /* binding */
            _PopoverDirective
          );
        },

        /* harmony export */
        "PopoverModule": function PopoverModule() {
          return (
            /* binding */
            _PopoverModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-bootstrap/component-loader */
      8935);
      /* harmony import */


      var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/utils */
      1103);
      /* harmony import */


      var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/positioning */
      9803);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      6797);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Configuration service for the Popover directive.
       * You can inject this service, typically in your root component, and customize
       * the values of its properties in order to provide default values for all the
       * popovers used in the application.
       */


      function PopoverContainerComponent_h3_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.title);
        }
      }

      var _c0 = ["*"];

      var _PopoverConfig = function _PopoverConfig() {
        _classCallCheck(this, _PopoverConfig);

        /**
         * sets disable adaptive position
         */
        this.adaptivePosition = true;
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */

        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */

        this.triggers = 'click';
        this.outsideClick = false;
        /**
         * delay before showing the tooltip
         */

        this.delay = 0;
      };

      _PopoverConfig.ɵfac = function PopoverConfig_Factory(t) {
        return new (t || _PopoverConfig)();
      };
      /** @nocollapse */


      _PopoverConfig.ɵprov = (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
        factory: function PopoverConfig_Factory() {
          return new _PopoverConfig();
        },
        token: _PopoverConfig,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_PopoverConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _PopoverContainerComponent = /*#__PURE__*/function () {
        /**
         * @param {?} config
         */
        function _PopoverContainerComponent(config) {
          _classCallCheck(this, _PopoverContainerComponent);

          Object.assign(this, config);
        }
        /**
         * @return {?}
         */


        _createClass(_PopoverContainerComponent, [{
          key: "isBs3",
          get: function get() {
            return (0, ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.isBs3)();
          }
        }]);

        return _PopoverContainerComponent;
      }();

      _PopoverContainerComponent.ɵfac = function PopoverContainerComponent_Factory(t) {
        return new (t || _PopoverContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_PopoverConfig));
      };

      _PopoverContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _PopoverContainerComponent,
        selectors: [["popover-container"]],
        hostAttrs: ["role", "tooltip", 2, "display", "block"],
        hostVars: 7,
        hostBindings: function PopoverContainerComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx.popoverId);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("popover in popover-" + ctx.placement + " " + "bs-popover-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", !ctx.isBs3)("bs3", ctx.isBs3);
          }
        },
        inputs: {
          placement: "placement",
          title: "title"
        },
        ngContentSelectors: _c0,
        decls: 4,
        vars: 1,
        consts: [[1, "popover-arrow", "arrow"], ["class", "popover-title popover-header", 4, "ngIf"], [1, "popover-content", "popover-body"], [1, "popover-title", "popover-header"]],
        template: function PopoverContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PopoverContainerComponent_h3_1_Template, 2, 1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.title);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
        styles: [".bs3.popover-top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .popover.bottom[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -4px;\n    }\n    .bs3.bs-popover-left[_nghost-%COMP%] {\n      margin-right: .5rem;\n    }\n    .bs3.bs-popover-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-popover-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{\n      margin: .3rem 0;\n    }"],
        changeDetection: 0
      });
      /** @nocollapse */

      _PopoverContainerComponent.ctorParameters = function () {
        return [{
          type: _PopoverConfig
        }];
      };

      _PopoverContainerComponent.propDecorators = {
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_PopoverContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
          args: [{
            selector: 'popover-container',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
            // tslint:disable-next-line
            host: {
              '[attr.id]': 'popoverId',
              '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
              '[class.show]': '!isBs3',
              '[class.bs3]': 'isBs3',
              role: 'tooltip',
              style: 'display:block;'
            },
            template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",
            styles: ["\n    :host.bs3.popover-top {\n      margin-bottom: 10px;\n    }\n    :host.bs3.popover.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.popover.top {\n      margin-bottom: 10px;\n    }\n    :host.popover.bottom>.arrow {\n      margin-left: -4px;\n    }\n    :host.bs3.bs-popover-left {\n      margin-right: .5rem;\n    }\n    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{\n      margin: .3rem 0;\n    }\n    "]
          }]
        }], function () {
          return [{
            type: _PopoverConfig
          }];
        }, {
          placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var id = 0;
      /**
       * A lightweight, extensible directive for fancy popover creation.
       */

      var _PopoverDirective = /*#__PURE__*/function () {
        /**
         * @param {?} _config
         * @param {?} _elementRef
         * @param {?} _renderer
         * @param {?} _viewContainerRef
         * @param {?} cis
         * @param {?} _positionService
         */
        function _PopoverDirective(_config, _elementRef, _renderer, _viewContainerRef, cis, _positionService) {
          _classCallCheck(this, _PopoverDirective);

          this._elementRef = _elementRef;
          this._renderer = _renderer;
          this._positionService = _positionService;
          /**
           * unique id popover - use for aria-describedby
           */

          this.popoverId = id++;
          /**
           * Close popover on outside click
           */

          this.outsideClick = false;
          /**
           * Css class for popover container
           */

          this.containerClass = '';
          this._isInited = false;
          this._popover = cis.createLoader(_elementRef, _viewContainerRef, _renderer).provide({
            provide: _PopoverConfig,
            useValue: _config
          });
          Object.assign(this, _config);
          this.onShown = this._popover.onShown;
          this.onHidden = this._popover.onHidden; // fix: no focus on button on Mac OS #1795

          if (typeof window !== 'undefined') {
            _elementRef.nativeElement.addEventListener('click',
            /**
            * @return {?}
            */
            function () {
              try {
                _elementRef.nativeElement.focus();
              } catch (err) {
                return;
              }
            });
          }
        }
        /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */


        _createClass(_PopoverDirective, [{
          key: "isOpen",
          get: function get() {
            return this._popover.isShown;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (value) {
              this.show();
            } else {
              this.hide();
            }
          }
          /**
           * Set attribute aria-describedBy for element directive and
           * set id for the popover
           * @return {?}
           */

        }, {
          key: "setAriaDescribedBy",
          value: function setAriaDescribedBy() {
            this._ariaDescribedby = this.isOpen ? "ngx-popover-".concat(this.popoverId) : null;

            if (this._ariaDescribedby) {
              this._popover.instance.popoverId = this._ariaDescribedby;

              this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
            } else {
              this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            }
          }
          /**
           * Opens an element’s popover. This is considered a “manual” triggering of
           * the popover.
           * @return {?}
           */

        }, {
          key: "show",
          value: function show() {
            var _this4 = this;

            if (this._popover.isShown || !this.popover || this._delayTimeoutId) {
              return;
            }

            this._positionService.setOptions({
              modifiers: {
                flip: {
                  enabled: this.adaptivePosition
                },
                preventOverflow: {
                  enabled: this.adaptivePosition
                }
              }
            });
            /** @type {?} */


            var showPopover =
            /**
            * @return {?}
            */
            function showPopover() {
              if (_this4._delayTimeoutId) {
                _this4._delayTimeoutId = undefined;
              }

              _this4._popover.attach(_PopoverContainerComponent).to(_this4.container).position({
                attachment: _this4.placement
              }).show({
                content: _this4.popover,
                context: _this4.popoverContext,
                placement: _this4.placement,
                title: _this4.popoverTitle,
                containerClass: _this4.containerClass
              });

              if (!_this4.adaptivePosition) {
                _this4._positionService.calcPosition();

                _this4._positionService.deletePositionElement(_this4._popover._componentRef.location);
              }

              _this4.isOpen = true;

              _this4.setAriaDescribedBy();
            };
            /** @type {?} */


            var cancelDelayedTooltipShowing =
            /**
            * @return {?}
            */
            function cancelDelayedTooltipShowing() {
              if (_this4._popoverCancelShowFn) {
                _this4._popoverCancelShowFn();
              }
            };

            if (this.delay) {
              /** @type {?} */
              var _timer = (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(this.delay).subscribe(
              /**
              * @return {?}
              */
              function () {
                showPopover();
                cancelDelayedTooltipShowing();
              });

              if (this.triggers) {
                (0, ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__.parseTriggers)(this.triggers).forEach(
                /**
                * @param {?} trigger
                * @return {?}
                */
                function (trigger) {
                  _this4._popoverCancelShowFn = _this4._renderer.listen(_this4._elementRef.nativeElement, trigger.close,
                  /**
                  * @return {?}
                  */
                  function () {
                    _timer.unsubscribe();

                    cancelDelayedTooltipShowing();
                  });
                });
              }
            } else {
              showPopover();
            }
          }
          /**
           * Closes an element’s popover. This is considered a “manual” triggering of
           * the popover.
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide() {
            if (this._delayTimeoutId) {
              clearTimeout(this._delayTimeoutId);
              this._delayTimeoutId = undefined;
            }

            if (this.isOpen) {
              this._popover.hide();

              this.setAriaDescribedBy();
              this.isOpen = false;
            }
          }
          /**
           * Toggles an element’s popover. This is considered a “manual” triggering of
           * the popover.
           * @return {?}
           */

        }, {
          key: "toggle",
          value: function toggle() {
            if (this.isOpen) {
              return this.hide();
            }

            this.show();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            // fix: seems there are an issue with `routerLinkActive`
            // which result in duplicated call ngOnInit without call to ngOnDestroy
            // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
            if (this._isInited) {
              return;
            }

            this._isInited = true;

            this._popover.listen({
              triggers: this.triggers,
              outsideClick: this.outsideClick,
              show:
              /**
              * @return {?}
              */
              function show() {
                return _this5.show();
              },
              hide:
              /**
              * @return {?}
              */
              function hide() {
                return _this5.hide();
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._popover.dispose();
          }
        }]);

        return _PopoverDirective;
      }();

      _PopoverDirective.ɵfac = function PopoverDirective_Factory(t) {
        return new (t || _PopoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_PopoverConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_0__.ComponentLoaderFactory), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__.PositioningService));
      };

      _PopoverDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: _PopoverDirective,
        selectors: [["", "popover", ""]],
        inputs: {
          outsideClick: "outsideClick",
          containerClass: "containerClass",
          isOpen: "isOpen",
          adaptivePosition: "adaptivePosition",
          popover: "popover",
          popoverContext: "popoverContext",
          popoverTitle: "popoverTitle",
          placement: "placement",
          triggers: "triggers",
          container: "container",
          delay: "delay"
        },
        outputs: {
          onShown: "onShown",
          onHidden: "onHidden"
        },
        exportAs: ["bs-popover"]
      });
      /** @nocollapse */

      _PopoverDirective.ctorParameters = function () {
        return [{
          type: _PopoverConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef
        }, {
          type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_0__.ComponentLoaderFactory
        }, {
          type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__.PositioningService
        }];
      };

      _PopoverDirective.propDecorators = {
        adaptivePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        popover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        popoverContext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        popoverTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        outsideClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        triggers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        containerClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        delay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        onShown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
        }],
        onHidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_PopoverDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
          args: [{
            selector: '[popover]',
            exportAs: 'bs-popover'
          }]
        }], function () {
          return [{
            type: _PopoverConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef
          }, {
            type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_0__.ComponentLoaderFactory
          }, {
            type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__.PositioningService
          }];
        }, {
          outsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
          }],
          containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
          }],
          onShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
          }],
          onHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
          }],
          isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
          }],
          adaptivePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
          }],
          popover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
          }],
          popoverContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
          }],
          popoverTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
          }],
          placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
          }],
          triggers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
          }],
          container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
          }],
          delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _PopoverModule = /*#__PURE__*/function () {
        function _PopoverModule() {
          _classCallCheck(this, _PopoverModule);
        }

        _createClass(_PopoverModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: _PopoverModule,
              providers: [ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_0__.ComponentLoaderFactory, ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__.PositioningService]
            };
          }
        }]);

        return _PopoverModule;
      }();

      _PopoverModule.ɵfac = function PopoverModule_Factory(t) {
        return new (t || _PopoverModule)();
      };

      _PopoverModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _PopoverModule
      });
      _PopoverModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_PopoverModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
            declarations: [_PopoverDirective, _PopoverContainerComponent],
            exports: [_PopoverDirective],
            entryComponents: [_PopoverContainerComponent]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_PopoverModule, {
          declarations: function declarations() {
            return [_PopoverDirective, _PopoverContainerComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule];
          },
          exports: function exports() {
            return [_PopoverDirective];
          }
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-popover.js.map

      /***/

    },

    /***/
    9803:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Positioning": function Positioning() {
          return (
            /* binding */
            _Positioning
          );
        },

        /* harmony export */
        "PositioningService": function PositioningService() {
          return (
            /* binding */
            _PositioningService
          );
        },

        /* harmony export */
        "positionElements": function positionElements() {
          return (
            /* binding */
            _positionElements
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      9765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      6682);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      2759);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      4857);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Get CSS computed property of the given element
       * @param {?} element
       * @param {?=} property
       * @return {?}
       */


      function getStyleComputedProperty(element, property) {
        if (element.nodeType !== 1) {
          return [];
        } // NOTE: 1 DOM access here

        /** @type {?} */


        var window = element.ownerDocument.defaultView;
        /** @type {?} */

        var css = window.getComputedStyle(element, null);
        return property ? css[
        /** @type {?} */
        property] : css;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Returns the parentNode or the host of the element
       * @param {?} element
       * @return {?}
       */


      function getParentNode(element) {
        if (element.nodeName === 'HTML') {
          return element;
        }

        return element.parentNode || element.host;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} element
       * @return {?}
       */


      function getScrollParent(element) {
        // Return body, `getScroll` will take care to get the correct `scrollTop` from it
        if (!element) {
          return document.body;
        }

        switch (element.nodeName) {
          case 'HTML':
          case 'BODY':
            return element.ownerDocument.body;

          case '#document':
            return element.body;

          default:
        } // Firefox want us to check `-x` and `-y` variations as well


        var _getStyleComputedProp = getStyleComputedProperty(element),
            overflow = _getStyleComputedProp.overflow,
            overflowX = _getStyleComputedProp.overflowX,
            overflowY = _getStyleComputedProp.overflowY;

        if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
          return element;
        }

        return getScrollParent(getParentNode(element));
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */

      var isIE11 = isBrowser && !!(
      /** @type {?} */
      window.MSInputMethodContext &&
      /** @type {?} */
      document.documentMode);
      /** @type {?} */

      var isIE10 = isBrowser && !!(
      /** @type {?} */
      window.MSInputMethodContext && /MSIE 10/.test(
      /** @type {?} */
      navigator.userAgent));
      /**
       * @param {?=} version
       * @return {?}
       */

      function isIE(version) {
        if (version === 11) {
          return isIE11;
        }

        if (version === 10) {
          return isIE10;
        }

        return isIE11 || isIE10;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} element
       * @return {?}
       */


      function getOffsetParent(element) {
        if (!element) {
          return document.documentElement;
        }
        /** @type {?} */


        var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

        /** @type {?} */

        var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

        /** @type {?} */

        var sibling;

        while (offsetParent === noOffsetParent && element.nextElementSibling && sibling !== element.nextElementSibling) {
          sibling = element.nextElementSibling;
          offsetParent = sibling.offsetParent;
        }
        /** @type {?} */


        var nodeName = offsetParent && offsetParent.nodeName;

        if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
          return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
        } // .offsetParent will return the closest TH, TD or TABLE in case


        if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
          return getOffsetParent(offsetParent);
        }

        return offsetParent;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} element
       * @return {?}
       */


      function isOffsetContainer(element) {
        var nodeName = element.nodeName;

        if (nodeName === 'BODY') {
          return false;
        }

        return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Finds the root node (document, shadowDOM root) of the given element
       * @param {?} node
       * @return {?}
       */


      function getRoot(node) {
        if (node.parentNode !== null) {
          return getRoot(node.parentNode);
        }

        return node;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} element1
       * @param {?} element2
       * @return {?}
       */


      function findCommonOffsetParent(element1, element2) {
        // This check is needed to avoid errors in case one of the elements isn't defined for any reason
        if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
          return document.documentElement;
        } // Here we make sure to give as "start" the element that comes first in the DOM

        /* tslint:disable-next-line: no-bitwise */

        /** @type {?} */


        var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
        /** @type {?} */

        var start = order ? element1 : element2;
        /** @type {?} */

        var end = order ? element2 : element1; // Get common ancestor container

        /** @type {?} */

        var range = document.createRange();
        range.setStart(start, 0);
        range.setEnd(end, 0);
        var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

        if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
          if (isOffsetContainer(commonAncestorContainer)) {
            return commonAncestorContainer;
          }

          return getOffsetParent(commonAncestorContainer);
        } // one of the nodes is inside shadowDOM, find which one

        /** @type {?} */


        var element1root = getRoot(element1);

        if (element1root.host) {
          return findCommonOffsetParent(element1root.host, element2);
        } else {
          return findCommonOffsetParent(element1, getRoot(element2).host);
        }
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Helper to detect borders of a given element
       */

      /**
       * @param {?} styles
       * @param {?} axis
       * @return {?}
       */


      function getBordersSize(styles, axis) {
        /** @type {?} */
        var sideA = axis === 'x' ? 'Left' : 'Top';
        /** @type {?} */

        var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
        return parseFloat(styles[
        /** @type {?} */
        "border".concat(sideA, "Width")]) + parseFloat(styles[
        /** @type {?} */
        "border".concat(sideB, "Width")]);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} axis
       * @param {?} body
       * @param {?} html
       * @param {?} computedStyle
       * @return {?}
       */


      function getSize(axis, body, html, computedStyle) {
        return Math.max(
        /** @type {?} */
        body["offset".concat(axis)],
        /** @type {?} */
        body["scroll".concat(axis)],
        /** @type {?} */
        html["client".concat(axis)],
        /** @type {?} */
        html["offset".concat(axis)],
        /** @type {?} */
        html["scroll".concat(axis)], isIE(10) ? parseInt(
        /** @type {?} */
        html["offset".concat(axis)], 10) + parseInt(computedStyle[
        /** @type {?} */
        "margin".concat(axis === 'Height' ? 'Top' : 'Left')], 10) + parseInt(computedStyle[
        /** @type {?} */
        "margin".concat(axis === 'Height' ? 'Bottom' : 'Right')], 10) : 0);
      }
      /**
       * @param {?} document
       * @return {?}
       */


      function getWindowSizes(document) {
        /** @type {?} */
        var body = document.body;
        /** @type {?} */

        var html = document.documentElement;
        /** @type {?} */

        var computedStyle = isIE(10) && getComputedStyle(html);
        return {
          height: getSize('Height', body, html, computedStyle),
          width: getSize('Width', body, html, computedStyle)
        };
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Gets the scroll value of the given element in the given side (top and left)
       * @param {?} element
       * @param {?=} side
       * @return {?}
       */


      function getScroll(element) {
        var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

        /** @type {?} */
        var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
        /** @type {?} */

        var nodeName = element.nodeName;

        if (nodeName === 'BODY' || nodeName === 'HTML') {
          /** @type {?} */
          var html = element.ownerDocument.documentElement;
          /** @type {?} */

          var scrollingElement = element.ownerDocument.scrollingElement || html;
          return scrollingElement[upperSide];
        }

        return element[upperSide];
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} offsets
       * @return {?}
       */


      function getClientRect(offsets) {
        return Object.assign(Object.assign({}, offsets), {
          right: offsets.left + offsets.width,
          bottom: offsets.top + offsets.height
        });
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} element
       * @return {?}
       */


      function getBoundingClientRect(element) {
        /** @type {?} */
        var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
        // considered in DOM in some circumstances...
        // This isn't reproducible in IE10 compatibility mode of IE11

        try {
          if (isIE(10)) {
            rect = element.getBoundingClientRect();
            /** @type {?} */

            var scrollTop = getScroll(element, 'top');
            /** @type {?} */

            var scrollLeft = getScroll(element, 'left');
            rect.top += scrollTop;
            rect.left += scrollLeft;
            rect.bottom += scrollTop;
            rect.right += scrollLeft;
          } else {
            rect = element.getBoundingClientRect();
          }
        } catch (e) {
          return undefined;
        }
        /** @type {?} */


        var result = {
          left: rect.left,
          top: rect.top,
          width: rect.right - rect.left,
          height: rect.bottom - rect.top
        }; // subtract scrollbar size from sizes

        /** @type {?} */

        var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
        /** @type {?} */

        var width = sizes.width || element.clientWidth || result.right - result.left;
        /** @type {?} */

        var height = sizes.height || element.clientHeight || result.bottom - result.top;
        /** @type {?} */

        var horizScrollbar = element.offsetWidth - width;
        /** @type {?} */

        var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
        // we make this check conditional for performance reasons

        if (horizScrollbar || vertScrollbar) {
          /** @type {?} */
          var styles = getStyleComputedProperty(element);
          horizScrollbar -= getBordersSize(styles, 'x');
          vertScrollbar -= getBordersSize(styles, 'y');
          result.width -= horizScrollbar;
          result.height -= vertScrollbar;
        }

        return getClientRect(result);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} rect
       * @param {?} element
       * @param {?=} subtract
       * @return {?}
       */


      function includeScroll(rect, element) {
        var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        /** @type {?} */
        var scrollTop = getScroll(element, 'top');
        /** @type {?} */

        var scrollLeft = getScroll(element, 'left');
        /** @type {?} */

        var modifier = subtract ? -1 : 1;
        rect.top += scrollTop * modifier;
        rect.bottom += scrollTop * modifier;
        rect.left += scrollLeft * modifier;
        rect.right += scrollLeft * modifier;
        return rect;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} children
       * @param {?} parent
       * @param {?=} fixedPosition
       * @return {?}
       */


      function getOffsetRectRelativeToArbitraryNode(children, parent) {
        var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        /** @type {?} */
        var isIE10 = isIE(10);
        /** @type {?} */

        var isHTML = parent.nodeName === 'HTML';
        /** @type {?} */

        var childrenRect = getBoundingClientRect(children);
        /** @type {?} */

        var parentRect = getBoundingClientRect(parent);
        /** @type {?} */

        var scrollParent = getScrollParent(children);
        /** @type {?} */

        var styles = getStyleComputedProperty(parent);
        /** @type {?} */

        var borderTopWidth = parseFloat(styles.borderTopWidth);
        /** @type {?} */

        var borderLeftWidth = parseFloat(styles.borderLeftWidth); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

        if (fixedPosition && isHTML) {
          parentRect.top = Math.max(parentRect.top, 0);
          parentRect.left = Math.max(parentRect.left, 0);
        }
        /** @type {?} */


        var offsets = getClientRect({
          top: childrenRect.top - parentRect.top - borderTopWidth,
          left: childrenRect.left - parentRect.left - borderLeftWidth,
          width: childrenRect.width,
          height: childrenRect.height
        });
        offsets.marginTop = 0;
        offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
        // we do this only on HTML because it's the only element that behaves
        // differently when margins are applied to it. The margins are included in
        // the box of the documentElement, in the other cases not.

        if (!isIE10 && isHTML) {
          /** @type {?} */
          var marginTop = parseFloat(styles.marginTop);
          /** @type {?} */

          var marginLeft = parseFloat(styles.marginLeft);
          offsets.top -= borderTopWidth - marginTop;
          offsets.bottom -= borderTopWidth - marginTop;
          offsets.left -= borderLeftWidth - marginLeft;
          offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

          offsets.marginTop = marginTop;
          offsets.marginLeft = marginLeft;
        }

        if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
          offsets = includeScroll(offsets, parent);
        }

        return offsets;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} element
       * @param {?=} excludeScroll
       * @return {?}
       */


      function getViewportOffsetRectRelativeToArtbitraryNode(element) {
        var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        /** @type {?} */
        var html = element.ownerDocument.documentElement;
        /** @type {?} */

        var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
        /** @type {?} */

        var width = Math.max(html.clientWidth, window.innerWidth || 0);
        /** @type {?} */

        var height = Math.max(html.clientHeight, window.innerHeight || 0);
        /** @type {?} */

        var scrollTop = !excludeScroll ? getScroll(html) : 0;
        /** @type {?} */

        var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
        /** @type {?} */

        var offset = {
          top: scrollTop - Number(relativeOffset.top) + Number(relativeOffset.marginTop),
          left: scrollLeft - Number(relativeOffset.left) + Number(relativeOffset.marginLeft),
          width: width,
          height: height
        };
        return getClientRect(offset);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} element
       * @return {?}
       */


      function isFixed(element) {
        /** @type {?} */
        var nodeName = element.nodeName;

        if (nodeName === 'BODY' || nodeName === 'HTML') {
          return false;
        }

        if (getStyleComputedProperty(element, 'position') === 'fixed') {
          return true;
        }

        return isFixed(getParentNode(element));
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} element
       * @return {?}
       */


      function getFixedPositionOffsetParent(element) {
        // This check is needed to avoid errors in case one of the elements isn't defined for any reason
        if (!element || !element.parentElement || isIE()) {
          return document.documentElement;
        }
        /** @type {?} */


        var el = element.parentElement;

        while (el && getStyleComputedProperty(el, 'transform') === 'none') {
          el = el.parentElement;
        }

        return el || document.documentElement;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} target
       * @param {?} host
       * @param {?=} padding
       * @param {?=} boundariesElement
       * @param {?=} fixedPosition
       * @return {?}
       */


      function getBoundaries(target, host) {
        var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var boundariesElement = arguments.length > 3 ? arguments[3] : undefined;
        var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        // NOTE: 1 DOM access here
        // NOTE: 1 DOM access here

        /** @type {?} */
        var boundaries = {
          top: 0,
          left: 0
        };
        /** @type {?} */

        var offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host); // Handle viewport case

        if (boundariesElement === 'viewport') {
          boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
        } else {
          // Handle other cases based on DOM element used as boundaries

          /** @type {?} */
          var boundariesNode;

          if (boundariesElement === 'scrollParent') {
            boundariesNode = getScrollParent(getParentNode(host));

            if (boundariesNode.nodeName === 'BODY') {
              boundariesNode = target.ownerDocument.documentElement;
            }
          } else if (boundariesElement === 'window') {
            boundariesNode = target.ownerDocument.documentElement;
          } else {
            boundariesNode = boundariesElement;
          }
          /** @type {?} */


          var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

          if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            var _getWindowSizes = getWindowSizes(target.ownerDocument),
                height = _getWindowSizes.height,
                width = _getWindowSizes.width;

            boundaries.top += offsets.top - offsets.marginTop;
            boundaries.bottom = Number(height) + Number(offsets.top);
            boundaries.left += offsets.left - offsets.marginLeft;
            boundaries.right = Number(width) + Number(offsets.left);
          } else {
            // for all the other DOM elements, this one is good
            boundaries = offsets;
          }
        } // Add paddings


        boundaries.left += padding;
        boundaries.top += padding;
        boundaries.right -= padding;
        boundaries.bottom -= padding;
        return boundaries;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} __0
       * @return {?}
       */


      function getArea(_ref) {
        var width = _ref.width,
            height = _ref.height;
        return width * height;
      }
      /**
       * @param {?} placement
       * @param {?} refRect
       * @param {?} target
       * @param {?} host
       * @param {?=} allowedPositions
       * @param {?=} boundariesElement
       * @param {?=} padding
       * @return {?}
       */


      function computeAutoPlacement(placement, refRect, target, host) {
        var allowedPositions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ['top', 'bottom', 'right', 'left'];
        var boundariesElement = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'viewport';
        var padding = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

        if (placement.indexOf('auto') === -1) {
          return placement;
        }
        /** @type {?} */


        var boundaries = getBoundaries(target, host, padding, boundariesElement);
        /** @type {?} */

        var rects = {
          top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
          },
          right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
          },
          bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
          },
          left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
          }
        };
        /** @type {?} */

        var sortedAreas = Object.keys(rects).map(
        /**
        * @param {?} key
        * @return {?}
        */
        function (key) {
          return Object.assign(Object.assign({
            key: key
          }, rects[key]), {
            area: getArea(rects[key])
          });
        }).sort(
        /**
        * @param {?} a
        * @param {?} b
        * @return {?}
        */
        function (a, b) {
          return b.area - a.area;
        });
        /** @type {?} */

        var filteredAreas = sortedAreas.filter(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref2) {
          var width = _ref2.width,
              height = _ref2.height;
          return width >= target.clientWidth && height >= target.clientHeight;
        });
        filteredAreas = filteredAreas.filter(
        /**
        * @param {?} position
        * @return {?}
        */
        function (position) {
          return allowedPositions.some(
          /**
          * @param {?} allowedPosition
          * @return {?}
          */
          function (allowedPosition) {
            return allowedPosition === position.key;
          });
        });
        /** @type {?} */

        var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
        /** @type {?} */

        var variation = placement.split(' ')[1]; // for tooltip on auto position

        target.className = target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-".concat(computedPlacement));
        return computedPlacement + (variation ? "-".concat(variation) : '');
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} data
       * @return {?}
       */


      function getOffsets(data) {
        return {
          width: data.offsets.target.width,
          height: data.offsets.target.height,
          left: Math.floor(data.offsets.target.left),
          top: Math.round(data.offsets.target.top),
          bottom: Math.round(data.offsets.target.bottom),
          right: Math.floor(data.offsets.target.right)
        };
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Get the opposite placement of the given one
       * @param {?} placement
       * @return {?}
       */


      function getOppositePlacement(placement) {
        /** @type {?} */
        var hash = {
          left: 'right',
          right: 'left',
          bottom: 'top',
          top: 'bottom'
        };
        return placement.replace(/left|right|bottom|top/g,
        /**
        * @param {?} matched
        * @return {?}
        */
        function (matched) {
          return (
            /** @type {?} */
            hash[matched]
          );
        });
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Get the opposite placement variation of the given one
       * @param {?} variation
       * @return {?}
       */


      function getOppositeVariation(variation) {
        if (variation === 'right') {
          return 'left';
        } else if (variation === 'left') {
          return 'right';
        }

        return variation;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Get the outer sizes of the given element (offset size + margins)
       * @param {?} element
       * @return {?}
       */


      function getOuterSizes(element) {
        /** @type {?} */
        var window = element.ownerDocument.defaultView;
        /** @type {?} */

        var styles = window.getComputedStyle(element);
        /** @type {?} */

        var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
        /** @type {?} */

        var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
        return {
          width: Number(element.offsetWidth) + y,
          height: Number(element.offsetHeight) + x
        };
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} target
       * @param {?} host
       * @param {?=} fixedPosition
       * @return {?}
       */


      function getReferenceOffsets(target, host) {
        var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        /** @type {?} */
        var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
        return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} target
       * @param {?} hostOffsets
       * @param {?} position
       * @return {?}
       */


      function getTargetOffsets(target, hostOffsets, position) {
        /** @type {?} */
        var placement = position.split(' ')[0]; // Get target node sizes

        /** @type {?} */

        var targetRect = getOuterSizes(target); // Add position, width and height to our offsets object

        /** @type {?} */

        var targetOffsets = {
          width: targetRect.width,
          height: targetRect.height
        }; // depending by the target placement we have to compute its offsets slightly differently

        /** @type {?} */

        var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
        /** @type {?} */

        var mainSide = isHoriz ? 'top' : 'left';
        /** @type {?} */

        var secondarySide = isHoriz ? 'left' : 'top';
        /** @type {?} */

        var measurement = isHoriz ? 'height' : 'width';
        /** @type {?} */

        var secondaryMeasurement = !isHoriz ? 'height' : 'width';

        /** @type {?} */
        targetOffsets[mainSide] = hostOffsets[mainSide] + hostOffsets[measurement] / 2 - targetRect[measurement] / 2;

        /** @type {?} */
        targetOffsets[secondarySide] = placement === secondarySide ? hostOffsets[secondarySide] - targetRect[secondaryMeasurement] :
        /** @type {?} */
        hostOffsets[getOppositePlacement(secondarySide)];
        return targetOffsets;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Helper used to know if the given modifier is enabled.
       * @param {?} options
       * @param {?} modifierName
       * @return {?}
       */


      function isModifierEnabled(options, modifierName) {
        return options && options.modifiers && options.modifiers[modifierName] && options.modifiers[modifierName].enabled;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Tells if a given input is a number
       * @param {?} n
       * @return {?}
       */


      function isNumeric(n) {
        return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} data
       * @param {?=} renderer
       * @return {?}
       */


      function updateContainerClass(data, renderer) {
        /** @type {?} */
        var target = data.instance.target;
        /** @type {?} */

        var containerClass = target.className;

        if (data.placementAuto) {
          containerClass = containerClass.replace(/bs-popover-auto/g, "bs-popover-".concat(data.placement));
          containerClass = containerClass.replace(/bs-tooltip-auto/g, "bs-tooltip-".concat(data.placement));
          containerClass = containerClass.replace(/\sauto/g, " ".concat(data.placement));

          if (containerClass.indexOf('popover') !== -1 && containerClass.indexOf('popover-auto') === -1) {
            containerClass += ' popover-auto';
          }

          if (containerClass.indexOf('tooltip') !== -1 && containerClass.indexOf('tooltip-auto') === -1) {
            containerClass += ' tooltip-auto';
          }
        }

        containerClass = containerClass.replace(/left|right|top|bottom/g, "".concat(data.placement.split(' ')[0]));

        if (renderer) {
          renderer.setAttribute(target, 'class', containerClass);
          return;
        }

        target.className = containerClass;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} element
       * @param {?} styles
       * @param {?=} renderer
       * @return {?}
       */


      function setStyles(element, styles, renderer) {
        Object.keys(styles).forEach(
        /**
        * @param {?} prop
        * @return {?}
        */
        function (prop) {
          /** @type {?} */
          var unit = ''; // add unit if the value is numeric and is one of the following

          if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
            unit = 'px';
          }

          if (renderer) {
            renderer.setStyle(element, prop, "".concat(String(styles[prop])).concat(unit));
            return;
          }

          element.style[prop] = String(styles[prop]) + unit;
        });
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} data
       * @return {?}
       */


      function arrow(data) {
        var _data$offsets$arrow;

        /** @type {?} */
        var targetOffsets = data.offsets.target; // if arrowElement is a string, suppose it's a CSS selector

        /** @type {?} */

        var arrowElement = data.instance.target.querySelector('.arrow'); // if arrowElement is not found, don't run the modifier

        if (!arrowElement) {
          return data;
        }
        /** @type {?} */


        var isVertical = ['left', 'right'].indexOf(data.placement.split(' ')[0]) !== -1;
        /** @type {?} */

        var len = isVertical ? 'height' : 'width';
        /** @type {?} */

        var sideCapitalized = isVertical ? 'Top' : 'Left';
        /** @type {?} */

        var side = sideCapitalized.toLowerCase();
        /** @type {?} */

        var altSide = isVertical ? 'left' : 'top';
        /** @type {?} */

        var opSide = isVertical ? 'bottom' : 'right';
        /** @type {?} */

        var arrowElementSize = getOuterSizes(arrowElement)[len];
        /** @type {?} */

        var placementVariation = data.placement.split(' ')[1]; // top/left side

        if (data.offsets.host[opSide] - arrowElementSize <
        /** @type {?} */
        targetOffsets[side]) {
          /** @type {?} */
          targetOffsets[side] -=
          /** @type {?} */
          targetOffsets[side] - (data.offsets.host[opSide] - arrowElementSize);
        } // bottom/right side


        if (Number(
        /** @type {?} */
        data.offsets.host[side]) + Number(arrowElementSize) >
        /** @type {?} */
        targetOffsets[opSide]) {
          /** @type {?} */
          targetOffsets[side] += Number(
          /** @type {?} */
          data.offsets.host[side]) + Number(arrowElementSize) - Number(
          /** @type {?} */
          targetOffsets[opSide]);
        }

        targetOffsets = getClientRect(targetOffsets); // Compute the sideValue using the updated target offsets
        // take target margin in account because we don't have this info available

        /** @type {?} */

        var css = getStyleComputedProperty(data.instance.target);
        /** @type {?} */

        var targetMarginSide = parseFloat(css["margin".concat(sideCapitalized)]);
        /** @type {?} */

        var targetBorderSide = parseFloat(css["border".concat(sideCapitalized, "Width")]); // compute center of the target

        /** @type {?} */

        var center;

        if (!placementVariation) {
          center = Number(
          /** @type {?} */
          data.offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
        } else {
          /** @type {?} */
          var targetBorderRadius = parseFloat(css.borderRadius);
          /** @type {?} */

          var targetSideArrowOffset = Number(targetMarginSide + targetBorderSide + targetBorderRadius);
          center = side === placementVariation ? Number(
          /** @type {?} */
          data.offsets.host[side]) + targetSideArrowOffset : Number(
          /** @type {?} */
          data.offsets.host[side]) + Number(data.offsets.host[len] - targetSideArrowOffset);
        }
        /** @type {?} */


        var sideValue = center -
        /** @type {?} */
        targetOffsets[side] - targetMarginSide - targetBorderSide; // prevent arrowElement from being placed not contiguously to its target

        sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
        data.offsets.arrow = (_data$offsets$arrow = {}, _defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), _defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
        data.instance.arrow = arrowElement;
        return data;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} data
       * @return {?}
       */


      function flip(data) {
        data.offsets.target = getClientRect(data.offsets.target);

        if (!isModifierEnabled(data.options, 'flip')) {
          data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
          return data;
        }
        /** @type {?} */


        var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
        'viewport', false // positionFixed
        );
        /** @type {?} */

        var placement = data.placement.split(' ')[0];
        /** @type {?} */

        var variation = data.placement.split(' ')[1] || '';
        /** @type {?} */

        var offsetsHost = data.offsets.host;
        /** @type {?} */

        var target = data.instance.target;
        /** @type {?} */

        var host = data.instance.host;
        /** @type {?} */

        var adaptivePosition = computeAutoPlacement('auto', offsetsHost, target, host, data.options.allowedPositions);
        /** @type {?} */

        var flipOrder = [placement, adaptivePosition];
        /* tslint:disable-next-line: cyclomatic-complexity */

        flipOrder.forEach(
        /**
        * @param {?} step
        * @param {?} index
        * @return {?}
        */
        function (step, index) {
          if (placement !== step || flipOrder.length === index + 1) {
            return data;
          }

          placement = data.placement.split(' ')[0]; // using floor because the host offsets may contain decimals we are not going to consider here

          /** @type {?} */

          var overlapsRef = placement === 'left' && Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left) || placement === 'right' && Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right) || placement === 'top' && Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top) || placement === 'bottom' && Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom);
          /** @type {?} */

          var overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
          /** @type {?} */

          var overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
          /** @type {?} */

          var overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
          /** @type {?} */

          var overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
          /** @type {?} */

          var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

          /** @type {?} */

          var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
          /** @type {?} */

          var flippedVariation = isVertical && variation === 'left' && overflowsLeft || isVertical && variation === 'right' && overflowsRight || !isVertical && variation === 'left' && overflowsTop || !isVertical && variation === 'right' && overflowsBottom;

          if (overlapsRef || overflowsBoundaries || flippedVariation) {
            if (overlapsRef || overflowsBoundaries) {
              placement = flipOrder[index + 1];
            }

            if (flippedVariation) {
              variation = getOppositeVariation(variation);
            }

            data.placement = placement + (variation ? " ".concat(variation) : '');
            data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
          }
        });
        return data;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} targetElement
       * @param {?} hostElement
       * @param {?} position
       * @param {?} options
       * @return {?}
       */


      function initData(targetElement, hostElement, position, options) {
        /** @type {?} */
        var hostElPosition = getReferenceOffsets(targetElement, hostElement);

        if (!position.match(/^(auto)*\s*(left|right|top|bottom)*$/) && !position.match(/^(left|right|top|bottom)*(?: (left|right|top|bottom))?\s*(start|end)*$/)) {
          /* tslint:disable-next-line: no-parameter-reassignment */
          position = 'auto';
        }
        /** @type {?} */


        var placementAuto = !!position.match(/auto/g); // support old placements 'auto left|right|top|bottom'

        /** @type {?} */

        var placement = position.match(/auto\s(left|right|top|bottom)/) ? position.split(' ')[1] || 'auto' : position; // Normalize placements that have identical main placement and variation ("right right" => "right").

        /** @type {?} */

        var matches = placement.match(/^(left|right|top|bottom)* ?(?!\1)(left|right|top|bottom)?/);

        if (matches) {
          placement = matches[1] + (matches[2] ? " ".concat(matches[2]) : '');
        } // "left right", "top bottom" etc. placements also considered incorrect.


        if (['left right', 'right left', 'top bottom', 'bottom top'].indexOf(placement) !== -1) {
          placement = 'auto';
        }
        /** @type {?} */


        var targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
        placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement, options ? options.allowedPositions : undefined);
        return {
          options: options,
          instance: {
            target: targetElement,
            host: hostElement,
            arrow: null
          },
          offsets: {
            target: targetOffset,
            host: hostElPosition,
            arrow: null
          },
          positionFixed: false,
          placement: placement,
          placementAuto: placementAuto
        };
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} data
       * @return {?}
       */


      function preventOverflow(data) {
        if (!isModifierEnabled(data.options, 'preventOverflow')) {
          return data;
        } // NOTE: DOM access here
        // resets the targetOffsets's position so that the document size can be calculated excluding
        // the size of the targetOffsets element itself

        /** @type {?} */


        var transformProp = 'transform';
        /** @type {?} */

        var targetStyles = data.instance.target.style; // assignment to help minification

        var top = targetStyles.top,
            left = targetStyles.left,
            transform = targetStyles[transformProp];
        targetStyles.top = '';
        targetStyles.left = '';
        targetStyles[transformProp] = '';
        /** @type {?} */

        var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
        'scrollParent', false // positionFixed
        ); // NOTE: DOM access here
        // restores the original style properties after the offsets have been computed

        targetStyles.top = top;
        targetStyles.left = left;
        targetStyles[transformProp] = transform;
        /** @type {?} */

        var order = ['left', 'right', 'top', 'bottom'];
        /** @type {?} */

        var check = {
          /**
           * @param {?} placement
           * @return {?}
           */
          primary: function primary(placement) {
            /** @type {?} */
            var value =
            /** @type {?} */
            data.offsets.target[placement];

            if (
            /** @type {?} */
            data.offsets.target[placement] < boundaries[placement] && !false // options.escapeWithReference
            ) {
                value = Math.max(
                /** @type {?} */
                data.offsets.target[placement], boundaries[placement]);
              }

            return _defineProperty({}, placement, value);
          },

          /**
           * @param {?} placement
           * @return {?}
           */
          secondary: function secondary(placement) {
            /** @type {?} */
            var mainSide = placement === 'right' ? 'left' : 'top';
            /** @type {?} */

            var value = data.offsets.target[mainSide];

            if (
            /** @type {?} */
            data.offsets.target[placement] > boundaries[placement] && !false // escapeWithReference
            ) {
                value = Math.min(data.offsets.target[mainSide], boundaries[placement] - (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
              }

            return _defineProperty({}, mainSide, value);
          }
        };
        /** @type {?} */

        var side;
        order.forEach(
        /**
        * @param {?} placement
        * @return {?}
        */
        function (placement) {
          side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
          data.offsets.target = Object.assign(Object.assign({}, data.offsets.target),
          /** @type {?} */
          check[side](placement));
        });
        return data;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} data
       * @return {?}
       */


      function shift(data) {
        /** @type {?} */
        var placement = data.placement;
        /** @type {?} */

        var basePlacement = placement.split(' ')[0];
        /** @type {?} */

        var shiftVariation = placement.split(' ')[1];

        if (shiftVariation) {
          var _data$offsets = data.offsets,
              host = _data$offsets.host,
              target = _data$offsets.target;
          /** @type {?} */

          var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
          /** @type {?} */

          var side = isVertical ? 'left' : 'top';
          /** @type {?} */

          var measurement = isVertical ? 'width' : 'height';
          /** @type {?} */

          var shiftOffsets = {
            start: _defineProperty({}, side, host[side]),
            end: _defineProperty({}, side, host[side] + host[measurement] - target[measurement])
          };
          data.offsets.target = Object.assign(Object.assign({}, target), _defineProperty({}, side, side === shiftVariation ?
          /** @type {?} */
          shiftOffsets.start[side] :
          /** @type {?} */
          shiftOffsets.end[side]));
        }

        return data;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _Positioning = /*#__PURE__*/function () {
        function _Positioning() {
          _classCallCheck(this, _Positioning);
        }

        _createClass(_Positioning, [{
          key: "position",
          value:
          /**
           * @param {?} hostElement
           * @param {?} targetElement
           * @param {?=} round
           * @return {?}
           */
          function position(hostElement, targetElement) {
            var round = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            return this.offset(hostElement, targetElement, false);
          }
          /**
           * @param {?} hostElement
           * @param {?} targetElement
           * @param {?=} round
           * @return {?}
           */

        }, {
          key: "offset",
          value: function offset(hostElement, targetElement) {
            var round = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            return getReferenceOffsets(targetElement, hostElement);
          }
          /**
           * @param {?} hostElement
           * @param {?} targetElement
           * @param {?} position
           * @param {?=} appendToBody
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "positionElements",
          value: function positionElements(hostElement, targetElement, position, appendToBody, options) {
            /** @type {?} */
            var chainOfModifiers = [flip, shift, preventOverflow, arrow];
            return chainOfModifiers.reduce(
            /**
            * @param {?} modifiedData
            * @param {?} modifier
            * @return {?}
            */
            function (modifiedData, modifier) {
              return modifier(modifiedData);
            }, initData(targetElement, hostElement, position, options));
          }
        }]);

        return _Positioning;
      }();
      /** @type {?} */


      var positionService = new _Positioning();
      /**
       * @param {?} hostElement
       * @param {?} targetElement
       * @param {?} placement
       * @param {?=} appendToBody
       * @param {?=} options
       * @param {?=} renderer
       * @return {?}
       */

      function _positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
        /** @type {?} */
        var data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
        /** @type {?} */

        var offsets = getOffsets(data);
        setStyles(targetElement, {
          'will-change': 'transform',
          top: '0px',
          left: '0px',
          transform: "translate3d(".concat(offsets.left, "px, ").concat(offsets.top, "px, 0px)")
        }, renderer);

        if (data.instance.arrow) {
          setStyles(data.instance.arrow, data.offsets.arrow, renderer);
        }

        updateContainerClass(data, renderer);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function PositioningOptions() {}

      if (false) {}

      var _PositioningService = /*#__PURE__*/function () {
        /**
         * @param {?} ngZone
         * @param {?} rendererFactory
         * @param {?} platformId
         */
        function _PositioningService(ngZone, rendererFactory, platformId) {
          var _this6 = this;

          _classCallCheck(this, _PositioningService);

          this.update$$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.positionElements = new Map();
          this.isDisabled = false;

          if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(platformId)) {
            ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this6.triggerEvent$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(window, 'scroll', {
                passive: true
              }), (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(window, 'resize', {
                passive: true
              }),
              /* tslint:disable-next-line: deprecation */
              (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(0, rxjs__WEBPACK_IMPORTED_MODULE_5__.animationFrameScheduler), _this6.update$$);

              _this6.triggerEvent$.subscribe(
              /**
              * @return {?}
              */
              function () {
                if (_this6.isDisabled) {
                  return;
                }

                _this6.positionElements
                /* tslint:disable-next-line: no-any */
                .forEach(
                /**
                * @param {?} positionElement
                * @return {?}
                */
                function (positionElement) {
                  _positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, _this6.options, rendererFactory.createRenderer(null, null));
                });
              });
            });
          }
        }
        /**
         * @param {?} options
         * @return {?}
         */


        _createClass(_PositioningService, [{
          key: "position",
          value: function position(options) {
            this.addPositionElement(options);
          }
          /**
           * @return {?}
           */

        }, {
          key: "event$",
          get: function get() {
            return this.triggerEvent$;
          }
          /**
           * @return {?}
           */

        }, {
          key: "disable",
          value: function disable() {
            this.isDisabled = true;
          }
          /**
           * @return {?}
           */

        }, {
          key: "enable",
          value: function enable() {
            this.isDisabled = false;
          }
          /**
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "addPositionElement",
          value: function addPositionElement(options) {
            this.positionElements.set(_getHtmlElement(options.element), options);
          }
          /**
           * @return {?}
           */

        }, {
          key: "calcPosition",
          value: function calcPosition() {
            this.update$$.next();
          }
          /**
           * @param {?} elRef
           * @return {?}
           */

        }, {
          key: "deletePositionElement",
          value: function deletePositionElement(elRef) {
            this.positionElements["delete"](_getHtmlElement(elRef));
          }
          /**
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "setOptions",
          value: function setOptions(options) {
            this.options = options;
          }
        }]);

        return _PositioningService;
      }();

      _PositioningService.ɵfac = function PositioningService_Factory(t) {
        return new (t || _PositioningService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.RendererFactory2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID));
      };

      _PositioningService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: _PositioningService,
        factory: _PositioningService.ɵfac
      });
      /** @nocollapse */

      _PositioningService.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.RendererFactory2
        }, {
          type: Number,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](_PositioningService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.RendererFactory2
          }, {
            type: Number,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID]
            }]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @param {?} element
       * @return {?}
       */


      function _getHtmlElement(element) {
        // it means that we got a selector
        if (typeof element === 'string') {
          return document.querySelector(element);
        }

        if (element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef) {
          return element.nativeElement;
        }

        return element;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-positioning.js.map

      /***/

    },

    /***/
    1103:
    /*!***************************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LinkedList": function LinkedList() {
          return (
            /* binding */
            _LinkedList
          );
        },

        /* harmony export */
        "OnChange": function OnChange() {
          return (
            /* binding */
            _OnChange
          );
        },

        /* harmony export */
        "Trigger": function Trigger() {
          return (
            /* binding */
            _Trigger
          );
        },

        /* harmony export */
        "Utils": function Utils() {
          return (
            /* binding */
            _Utils
          );
        },

        /* harmony export */
        "document": function document() {
          return (
            /* binding */
            document$1
          );
        },

        /* harmony export */
        "isBs3": function isBs3() {
          return (
            /* binding */
            _isBs
          );
        },

        /* harmony export */
        "listenToTriggers": function listenToTriggers() {
          return (
            /* binding */
            _listenToTriggers
          );
        },

        /* harmony export */
        "listenToTriggersV2": function listenToTriggersV2() {
          return (
            /* binding */
            _listenToTriggersV
          );
        },

        /* harmony export */
        "parseTriggers": function parseTriggers() {
          return (
            /* binding */
            _parseTriggers
          );
        },

        /* harmony export */
        "registerEscClick": function registerEscClick() {
          return (
            /* binding */
            _registerEscClick
          );
        },

        /* harmony export */
        "registerOutsideClick": function registerOutsideClick() {
          return (
            /* binding */
            _registerOutsideClick2
          );
        },

        /* harmony export */
        "setTheme": function setTheme() {
          return (
            /* binding */
            _setTheme
          );
        },

        /* harmony export */
        "warnOnce": function warnOnce() {
          return (
            /* binding */
            _warnOnce
          );
        },

        /* harmony export */
        "window": function window() {
          return (
            /* binding */
            win
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @copyright Valor Software
       * @copyright Angular ng-bootstrap team
       */


      var _Trigger = /*#__PURE__*/function () {
        /**
         * @param {?} open
         * @param {?=} close
         */
        function _Trigger(open, close) {
          _classCallCheck(this, _Trigger);

          this.open = open;
          this.close = close || open;
        }
        /**
         * @return {?}
         */


        _createClass(_Trigger, [{
          key: "isManual",
          value: function isManual() {
            return this.open === 'manual' || this.close === 'manual';
          }
        }]);

        return _Trigger;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function ListenOptions() {}

      if (false) {}
      /** @type {?} */


      var DEFAULT_ALIASES = {
        hover: ['mouseover', 'mouseout'],
        focus: ['focusin', 'focusout']
      };
      /* tslint:disable-next-line: no-any */

      /**
       * @param {?} triggers
       * @param {?=} aliases
       * @return {?}
       */

      function _parseTriggers(triggers) {
        var aliases = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ALIASES;

        /** @type {?} */
        var trimmedTriggers = (triggers || '').trim();

        if (trimmedTriggers.length === 0) {
          return [];
        }
        /** @type {?} */


        var parsedTriggers = trimmedTriggers.split(/\s+/).map(
        /**
        * @param {?} trigger
        * @return {?}
        */
        function (trigger) {
          return trigger.split(':');
        }).map(
        /**
        * @param {?} triggerPair
        * @return {?}
        */
        function (triggerPair) {
          /** @type {?} */
          var alias = aliases[triggerPair[0]] || triggerPair;
          return new _Trigger(alias[0], alias[1]);
        });
        /** @type {?} */

        var manualTriggers = parsedTriggers.filter(
        /**
        * @param {?} triggerPair
        * @return {?}
        */
        function (triggerPair) {
          return triggerPair.isManual();
        });

        if (manualTriggers.length > 1) {
          throw new Error('Triggers parse error: only one manual trigger is allowed');
        }

        if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
          throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
        }

        return parsedTriggers;
      }
      /**
       * @param {?} renderer
       * @param {?} target
       * @param {?} triggers
       * @param {?} showFn
       * @param {?} hideFn
       * @param {?} toggleFn
       * @return {?}
       */


      function _listenToTriggers(renderer,
      /* tslint:disable-next-line: no-any */
      target, triggers, showFn, hideFn, toggleFn) {
        /** @type {?} */
        var parsedTriggers = _parseTriggers(triggers);
        /* tslint:disable-next-line: no-any */

        /** @type {?} */


        var listeners = [];

        if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
          return Function.prototype;
        }

        parsedTriggers.forEach(
        /**
        * @param {?} trigger
        * @return {?}
        */
        function (trigger) {
          if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
          }

          listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
        });
        return (
          /**
          * @return {?}
          */
          function () {
            listeners.forEach(
            /**
            * @param {?} unsubscribeFn
            * @return {?}
            */
            function (unsubscribeFn) {
              return unsubscribeFn();
            });
          }
        );
      }
      /**
       * @param {?} renderer
       * @param {?} options
       * @return {?}
       */


      function _listenToTriggersV(renderer, options) {
        /** @type {?} */
        var parsedTriggers = _parseTriggers(options.triggers);
        /** @type {?} */


        var target = options.target; // do nothing

        if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
          return Function.prototype;
        } // all listeners

        /* tslint:disable-next-line: no-any */

        /** @type {?} */


        var listeners = []; // lazy listeners registration

        /** @type {?} */

        var _registerHide = [];
        /** @type {?} */

        var registerHide =
        /**
        * @return {?}
        */
        function registerHide() {
          // add hide listeners to unregister array
          _registerHide.forEach(
          /**
          * @param {?} fn
          * @return {?}
          */
          function (fn) {
            return listeners.push(fn());
          }); // register hide events only once


          _registerHide.length = 0;
        }; // register open\close\toggle listeners


        parsedTriggers.forEach(
        /**
        * @param {?} trigger
        * @return {?}
        */
        function (trigger) {
          /** @type {?} */
          var useToggle = trigger.open === trigger.close;
          /** @type {?} */

          var showFn = useToggle ? options.toggle : options.show;

          if (!useToggle) {
            _registerHide.push(
            /**
            * @return {?}
            */
            function () {
              return renderer.listen(target, trigger.close, options.hide);
            });
          }

          listeners.push(renderer.listen(target, trigger.open,
          /**
          * @return {?}
          */
          function () {
            return showFn(registerHide);
          }));
        });
        return (
          /**
          * @return {?}
          */
          function () {
            listeners.forEach(
            /**
            * @param {?} unsubscribeFn
            * @return {?}
            */
            function (unsubscribeFn) {
              return unsubscribeFn();
            });
          }
        );
      }
      /**
       * @param {?} renderer
       * @param {?} options
       * @return {?}
       */


      function _registerOutsideClick2(renderer, options) {
        if (!options.outsideClick) {
          return Function.prototype;
        }
        /* tslint:disable-next-line: no-any */


        return renderer.listen('document', 'click',
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (options.target && options.target.contains(event.target)) {
            return undefined;
          }

          if (options.targets && options.targets.some(
          /**
          * @param {?} target
          * @return {?}
          */
          function (target) {
            return target.contains(event.target);
          })) {
            return undefined;
          }

          options.hide();
        });
      }
      /**
       * @param {?} renderer
       * @param {?} options
       * @return {?}
       */


      function _registerEscClick(renderer, options) {
        if (!options.outsideEsc) {
          return Function.prototype;
        }

        return renderer.listen('document', 'keyup.esc',
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (options.target && options.target.contains(event.target)) {
            return undefined;
          }

          if (options.targets && options.targets.some(
          /**
          * @param {?} target
          * @return {?}
          */
          function (target) {
            return target.contains(event.target);
          })) {
            return undefined;
          }

          options.hide();
        });
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * JS version of browser APIs. This library can only run in the browser.
       * @type {?}
       */


      var win = typeof window !== 'undefined' && window ||
      /** @type {?} */
      {};
      /** @type {?} */

      var document$1 = win.document;
      /** @type {?} */

      var location = win.location;
      /** @type {?} */

      var gc = win.gc ?
      /**
      * @return {?}
      */
      function () {
        return win.gc();
      } :
      /**
      * @return {?}
      */
      function () {
        return null;
      };
      /** @type {?} */

      var performance = win.performance ? win.performance : null;
      /** @type {?} */

      var Event = win.Event;
      /** @type {?} */

      var MouseEvent = win.MouseEvent;
      /** @type {?} */

      var KeyboardEvent = win.KeyboardEvent;
      /** @type {?} */

      var EventTarget = win.EventTarget;
      /** @type {?} */

      var History = win.History;
      /** @type {?} */

      var Location = win.Location;
      /** @type {?} */

      var EventListener = win.EventListener;
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */

      var guessedVersion;
      /**
       * @return {?}
       */

      function _guessBsVersion() {
        if (typeof document === 'undefined') {
          return null;
        }
        /** @type {?} */


        var spanEl = document.createElement('span');
        spanEl.innerText = 'test bs version';
        document.body.appendChild(spanEl);
        spanEl.classList.add('d-none');
        /** @type {?} */

        var rect = spanEl.getBoundingClientRect();
        document.body.removeChild(spanEl);

        if (!rect) {
          return 'bs3';
        }

        return rect.top === 0 ? 'bs4' : 'bs3';
      }
      /**
       * @param {?} theme
       * @return {?}
       */


      function _setTheme(theme) {
        guessedVersion = theme;
      } // todo: in ngx-bootstrap, bs4 will became a default one

      /**
       * @return {?}
       */


      function _isBs() {
        if (typeof win === 'undefined') {
          return true;
        }

        if (typeof win.__theme === 'undefined') {
          if (guessedVersion) {
            return guessedVersion === 'bs3';
          }

          guessedVersion = _guessBsVersion();
          return guessedVersion === 'bs3';
        }

        return win.__theme !== 'bs4';
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T
       */


      var _LinkedList = /*#__PURE__*/function () {
        function _LinkedList() {
          _classCallCheck(this, _LinkedList);

          this.length = 0;
          this.asArray = []; // Array methods overriding END
        }
        /**
         * @param {?} position
         * @return {?}
         */


        _createClass(_LinkedList, [{
          key: "get",
          value: function get(position) {
            if (this.length === 0 || position < 0 || position >= this.length) {
              return void 0;
            }
            /** @type {?} */


            var current = this.head;

            for (var index = 0; index < position; index++) {
              current = current.next;
            }

            return current.value;
          }
          /**
           * @param {?} value
           * @param {?=} position
           * @return {?}
           */

        }, {
          key: "add",
          value: function add(value) {
            var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.length;

            if (position < 0 || position > this.length) {
              throw new Error('Position is out of the list');
            }
            /* tslint:disable-next-line: no-any*/

            /** @type {?} */


            var node = {
              value: value,
              next: undefined,
              previous: undefined
            };

            if (this.length === 0) {
              this.head = node;
              this.tail = node;
              this.current = node;
            } else {
              if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
              } else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
              } else {
                // node in middle

                /** @type {?} */
                var currentPreviousNode = this.getNode(position - 1);
                /** @type {?} */

                var currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
              }
            }

            this.length++;
            this.createInternalArrayRepresentation();
          }
          /**
           * @param {?=} position
           * @return {?}
           */

        }, {
          key: "remove",
          value: function remove() {
            var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (this.length === 0 || position < 0 || position >= this.length) {
              throw new Error('Position is out of the list');
            }

            if (position === 0) {
              // first node
              this.head = this.head.next;

              if (this.head) {
                // there is no second node
                this.head.previous = undefined;
              } else {
                // there is no second node
                this.tail = undefined;
              }
            } else if (position === this.length - 1) {
              // last node
              this.tail = this.tail.previous;
              this.tail.next = undefined;
            } else {
              // middle node

              /** @type {?} */
              var removedNode = this.getNode(position);
              removedNode.next.previous = removedNode.previous;
              removedNode.previous.next = removedNode.next;
            }

            this.length--;
            this.createInternalArrayRepresentation();
          }
          /**
           * @param {?} position
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "set",
          value: function set(position, value) {
            if (this.length === 0 || position < 0 || position >= this.length) {
              throw new Error('Position is out of the list');
            }
            /** @type {?} */


            var node = this.getNode(position);
            node.value = value;
            this.createInternalArrayRepresentation();
          }
          /**
           * @return {?}
           */

        }, {
          key: "toArray",
          value: function toArray() {
            return this.asArray;
          }
          /* tslint:disable-next-line: no-any*/

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "findAll",
          value: function findAll(fn) {
            /** @type {?} */
            var current = this.head;
            /* tslint:disable-next-line: no-any*/

            /** @type {?} */

            var result = [];

            for (var index = 0; index < this.length; index++) {
              if (fn(current.value, index)) {
                result.push({
                  index: index,
                  value: current.value
                });
              }

              current = current.next;
            }

            return result;
          } // Array methods overriding start

          /**
           * @param {...?} args
           * @return {?}
           */

        }, {
          key: "push",
          value: function push() {
            var _this7 = this;

            for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
              args[_key2] = arguments[_key2];
            }

            /* tslint:disable-next-line: no-any*/
            args.forEach(
            /**
            * @param {?} arg
            * @return {?}
            */
            function (arg) {
              _this7.add(arg);
            });
            return this.length;
          }
          /**
           * @return {?}
           */

        }, {
          key: "pop",
          value: function pop() {
            if (this.length === 0) {
              return undefined;
            }
            /** @type {?} */


            var last = this.tail;
            this.remove(this.length - 1);
            return last.value;
          }
          /**
           * @param {...?} args
           * @return {?}
           */

        }, {
          key: "unshift",
          value: function unshift() {
            var _this8 = this;

            for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
              args[_key3] = arguments[_key3];
            }

            args.reverse();
            /* tslint:disable-next-line: no-any*/

            args.forEach(
            /**
            * @param {?} arg
            * @return {?}
            */
            function (arg) {
              _this8.add(arg, 0);
            });
            return this.length;
          }
          /**
           * @return {?}
           */

        }, {
          key: "shift",
          value: function shift() {
            if (this.length === 0) {
              return undefined;
            }
            /** @type {?} */


            var lastItem = this.head.value;
            this.remove();
            return lastItem;
          }
          /* tslint:disable-next-line: no-any*/

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "forEach",
          value: function forEach(fn) {
            /** @type {?} */
            var current = this.head;

            for (var index = 0; index < this.length; index++) {
              fn(current.value, index);
              current = current.next;
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "indexOf",
          value: function indexOf(value) {
            /** @type {?} */
            var current = this.head;
            /** @type {?} */

            var position = 0;

            for (var index = 0; index < this.length; index++) {
              if (current.value === value) {
                position = index;
                break;
              }

              current = current.next;
            }

            return position;
          }
          /* tslint:disable-next-line: no-any*/

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "some",
          value: function some(fn) {
            /** @type {?} */
            var current = this.head;
            /** @type {?} */

            var result = false;

            while (current && !result) {
              if (fn(current.value)) {
                result = true;
                break;
              }

              current = current.next;
            }

            return result;
          }
          /* tslint:disable-next-line: no-any*/

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "every",
          value: function every(fn) {
            /** @type {?} */
            var current = this.head;
            /** @type {?} */

            var result = true;

            while (current && result) {
              if (!fn(current.value)) {
                result = false;
              }

              current = current.next;
            }

            return result;
          }
          /**
           * @return {?}
           */

        }, {
          key: "toString",
          value: function toString() {
            return '[Linked List]';
          }
          /* tslint:disable-next-line: no-any*/

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "find",
          value: function find(fn) {
            /** @type {?} */
            var current = this.head;
            /** @type {?} */

            var result;

            for (var index = 0; index < this.length; index++) {
              if (fn(current.value, index)) {
                result = current.value;
                break;
              }

              current = current.next;
            }

            return result;
          }
          /* tslint:disable-next-line: no-any*/

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "findIndex",
          value: function findIndex(fn) {
            /** @type {?} */
            var current = this.head;
            /** @type {?} */

            var result;

            for (var index = 0; index < this.length; index++) {
              if (fn(current.value, index)) {
                result = index;
                break;
              }

              current = current.next;
            }

            return result;
          }
          /* tslint:disable-next-line: no-any*/

          /**
           * @protected
           * @param {?} position
           * @return {?}
           */

        }, {
          key: "getNode",
          value: function getNode(position) {
            if (this.length === 0 || position < 0 || position >= this.length) {
              throw new Error('Position is out of the list');
            }
            /** @type {?} */


            var current = this.head;

            for (var index = 0; index < position; index++) {
              current = current.next;
            }

            return current;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "createInternalArrayRepresentation",
          value: function createInternalArrayRepresentation() {
            /* tslint:disable-next-line: no-any*/

            /** @type {?} */
            var outArray = [];
            /** @type {?} */

            var current = this.head;

            while (current) {
              outArray.push(current.value);
              current = current.next;
            }

            this.asArray = outArray;
          }
        }]);

        return _LinkedList;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /*tslint:disable:no-invalid-this */

      /* tslint:disable-next-line: no-any */

      /**
       * @param {?=} defaultValue
       * @return {?}
       */


      function _OnChange(defaultValue) {
        /** @type {?} */
        var sufix = 'Change';
        /* tslint:disable-next-line: no-any */

        return (
          /**
          * @param {?} target
          * @param {?} propertyKey
          * @return {?}
          */
          function OnChangeHandler(target, propertyKey) {
            /** @type {?} */
            var _key = " __".concat(propertyKey, "Value");

            Object.defineProperty(target, propertyKey, {
              /* tslint:disable-next-line: no-any */

              /**
               * @return {?}
               */
              get: function get() {
                return this[_key];
              },

              /* tslint:disable-next-line: no-any */

              /**
               * @param {?} value
               * @return {?}
               */
              set: function set(value) {
                /** @type {?} */
                var prevValue = this[_key];
                this[_key] = value;

                if (prevValue !== value && this[propertyKey + sufix]) {
                  this[propertyKey + sufix].emit(value);
                }
              }
            });
          }
        );
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _Utils = /*#__PURE__*/function () {
        function _Utils() {
          _classCallCheck(this, _Utils);
        }

        _createClass(_Utils, null, [{
          key: "reflow",
          value:
          /* tslint:disable-next-line: no-any */

          /**
           * @param {?} element
           * @return {?}
           */
          function reflow(element) {
            /* tslint:disable-next-line: no-any */
            (
            /**
            * @param {?} bs
            * @return {?}
            */
            function (bs) {
              return bs;
            })(element.offsetHeight);
          } // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js

          /* tslint:disable-next-line: no-any */

          /**
           * @param {?} elem
           * @return {?}
           */

        }, {
          key: "getStyles",
          value: function getStyles(elem) {
            // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
            // IE throws on elements created in popups
            // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"

            /** @type {?} */
            var view = elem.ownerDocument.defaultView;

            if (!view || !view.opener) {
              view = win;
            }

            return view.getComputedStyle(elem);
          }
        }]);

        return _Utils;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var _messagesHash = {};
      /** @type {?} */

      var _hideMsg = typeof console === 'undefined' || !('warn' in console);
      /**
       * @param {?} msg
       * @return {?}
       */


      function _warnOnce(msg) {
        if (!(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)() || _hideMsg || msg in _messagesHash) {
          return;
        }

        _messagesHash[msg] = true;
        /*tslint:disable-next-line*/

        console.warn(msg);
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-utils.js.map

      /***/

    },

    /***/
    8460:
    /*!*******************************************************************************************!*\
      !*** ./dist/ngx-ui-tour-ngx-bootstrap/__ivy_ngcc__/fesm2015/ngx-ui-tour-ngx-bootstrap.js ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgxbTourService": function NgxbTourService() {
          return (
            /* binding */
            _NgxbTourService
          );
        },

        /* harmony export */
        "TourAnchorNgxBootstrapDirective": function TourAnchorNgxBootstrapDirective() {
          return (
            /* binding */
            _TourAnchorNgxBootstrapDirective
          );
        },

        /* harmony export */
        "TourAnchorNgxBootstrapPopoverDirective": function TourAnchorNgxBootstrapPopoverDirective() {
          return (
            /* binding */
            _TourAnchorNgxBootstrapPopoverDirective
          );
        },

        /* harmony export */
        "TourNgxBootstrapModule": function TourNgxBootstrapModule() {
          return (
            /* binding */
            _TourNgxBootstrapModule
          );
        },

        /* harmony export */
        "TourService": function TourService() {
          return (
            /* binding */
            _NgxbTourService
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
        "popoverForRoot": function popoverForRoot() {
          return (
            /* binding */
            _popoverForRoot
          );
        },

        /* harmony export */
        "ɵa": function ɵa() {
          return (
            /* binding */
            TourStepTemplateService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-ui-tour-core */
      5092);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-bootstrap/popover */
      8366);

      var _c0 = ["tourStep"];

      function TourStepTemplateComponent_ng_template_0_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TourStepTemplateComponent_ng_template_0_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r5.tourService.prev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().step;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \xAB ", step_r2 == null ? null : step_r2.prevBtnTitle, " ");
        }
      }

      function TourStepTemplateComponent_ng_template_0_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TourStepTemplateComponent_ng_template_0_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r8.tourService.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().step;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", step_r2 == null ? null : step_r2.nextBtnTitle, " \xBB ");
        }
      }

      function TourStepTemplateComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TourStepTemplateComponent_ng_template_0_button_2_Template, 2, 1, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TourStepTemplateComponent_ng_template_0_button_3_Template, 2, 1, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TourStepTemplateComponent_ng_template_0_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.tourService.end();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r2 = ctx.step;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", step_r2 == null ? null : step_r2.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.tourService.hasPrev(step_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.tourService.hasNext(step_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", step_r2 == null ? null : step_r2.endBtnTitle, " ");
        }
      }

      var _NgxbTourService = /*#__PURE__*/function (_ngx_ui_tour_core__WE) {
        _inherits(_NgxbTourService, _ngx_ui_tour_core__WE);

        var _super = _createSuper(_NgxbTourService);

        function _NgxbTourService() {
          _classCallCheck(this, _NgxbTourService);

          return _super.apply(this, arguments);
        }

        return _NgxbTourService;
      }(ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_2__.TourService);

      _NgxbTourService.ɵfac = /*@__PURE__*/function () {
        var ɵNgxbTourService_BaseFactory;
        return function NgxbTourService_Factory(t) {
          return (ɵNgxbTourService_BaseFactory || (ɵNgxbTourService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_NgxbTourService)))(t || _NgxbTourService);
        };
      }();

      _NgxbTourService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _NgxbTourService,
        factory: _NgxbTourService.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_NgxbTourService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
        }], null, null);
      })();

      var TourStepTemplateService = function TourStepTemplateService() {
        _classCallCheck(this, TourStepTemplateService);
      };

      TourStepTemplateService.ɵfac = function TourStepTemplateService_Factory(t) {
        return new (t || TourStepTemplateService)();
      };

      TourStepTemplateService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TourStepTemplateService,
        factory: TourStepTemplateService.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TourStepTemplateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
        }], null, null);
      })();

      var _TourAnchorNgxBootstrapPopoverDirective = /*#__PURE__*/function (_ngx_bootstrap_popove) {
        _inherits(_TourAnchorNgxBootstrapPopoverDirective, _ngx_bootstrap_popove);

        var _super2 = _createSuper(_TourAnchorNgxBootstrapPopoverDirective);

        function _TourAnchorNgxBootstrapPopoverDirective() {
          _classCallCheck(this, _TourAnchorNgxBootstrapPopoverDirective);

          return _super2.apply(this, arguments);
        }

        return _TourAnchorNgxBootstrapPopoverDirective;
      }(ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_0__.PopoverDirective);

      _TourAnchorNgxBootstrapPopoverDirective.ɵfac = /*@__PURE__*/function () {
        var ɵTourAnchorNgxBootstrapPopoverDirective_BaseFactory;
        return function TourAnchorNgxBootstrapPopoverDirective_Factory(t) {
          return (ɵTourAnchorNgxBootstrapPopoverDirective_BaseFactory || (ɵTourAnchorNgxBootstrapPopoverDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_TourAnchorNgxBootstrapPopoverDirective)))(t || _TourAnchorNgxBootstrapPopoverDirective);
        };
      }();

      _TourAnchorNgxBootstrapPopoverDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _TourAnchorNgxBootstrapPopoverDirective,
        selectors: [["", "tourAnchor", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_TourAnchorNgxBootstrapPopoverDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: '[tourAnchor]'
          }]
        }], null, null);
      })();

      var _TourAnchorNgxBootstrapDirective = /*#__PURE__*/function () {
        function _TourAnchorNgxBootstrapDirective(tourService, tourStepTemplate, element, popoverDirective, tourBackdrop) {
          _classCallCheck(this, _TourAnchorNgxBootstrapDirective);

          this.tourService = tourService;
          this.tourStepTemplate = tourStepTemplate;
          this.element = element;
          this.popoverDirective = popoverDirective;
          this.tourBackdrop = tourBackdrop;
          this.popoverDirective.triggers = '';
        }

        _createClass(_TourAnchorNgxBootstrapDirective, [{
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
            this.popoverDirective.popover = this.tourStepTemplate.template;
            this.popoverDirective.popoverContext = {
              step: step
            };
            this.popoverDirective.popoverTitle = step.title;
            this.popoverDirective.container = 'body';
            this.popoverDirective.containerClass = 'ngx-bootstrap';

            if (step.containerClass) {
              this.popoverDirective.containerClass += " ".concat(step.containerClass);
            }

            this.popoverDirective.placement = step.placement || 'top';
            step.prevBtnTitle = step.prevBtnTitle || 'Prev';
            step.nextBtnTitle = step.nextBtnTitle || 'Next';
            step.endBtnTitle = step.endBtnTitle || 'End';
            this.popoverDirective.show();

            if (!step.preventScrolling) {
              ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_2__.ScrollingUtil.ensureVisible(htmlElement);
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
            this.popoverDirective.hide();

            if (this.tourService.getStatus() === ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_2__.TourState.OFF) {
              this.tourBackdrop.close();
            }
          }
        }]);

        return _TourAnchorNgxBootstrapDirective;
      }();

      _TourAnchorNgxBootstrapDirective.ɵfac = function TourAnchorNgxBootstrapDirective_Factory(t) {
        return new (t || _TourAnchorNgxBootstrapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_NgxbTourService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TourStepTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_TourAnchorNgxBootstrapPopoverDirective, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_2__.TourBackdropService));
      };

      _TourAnchorNgxBootstrapDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _TourAnchorNgxBootstrapDirective,
        selectors: [["", "tourAnchor", ""]],
        hostVars: 2,
        hostBindings: function TourAnchorNgxBootstrapDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("touranchor--is-active", ctx.isActive);
          }
        },
        inputs: {
          tourAnchor: "tourAnchor"
        }
      });

      _TourAnchorNgxBootstrapDirective.ctorParameters = function () {
        return [{
          type: _NgxbTourService
        }, {
          type: TourStepTemplateService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
        }, {
          type: _TourAnchorNgxBootstrapPopoverDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
          }]
        }, {
          type: ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_2__.TourBackdropService
        }];
      };

      _TourAnchorNgxBootstrapDirective.propDecorators = {
        tourAnchor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        isActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
          args: ['class.touranchor--is-active']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_TourAnchorNgxBootstrapDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: '[tourAnchor]'
          }]
        }], function () {
          return [{
            type: _NgxbTourService
          }, {
            type: TourStepTemplateService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }, {
            type: _TourAnchorNgxBootstrapPopoverDirective,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
            }]
          }, {
            type: ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_2__.TourBackdropService
          }];
        }, {
          isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
            args: ['class.touranchor--is-active']
          }],
          tourAnchor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }]
        });
      })();

      var _TourStepTemplateComponent = /*#__PURE__*/function (_ngx_ui_tour_core__WE2) {
        _inherits(_TourStepTemplateComponent, _ngx_ui_tour_core__WE2);

        var _super3 = _createSuper(_TourStepTemplateComponent);

        function _TourStepTemplateComponent(tourStepTemplateService, tourService) {
          var _this9;

          _classCallCheck(this, _TourStepTemplateComponent);

          _this9 = _super3.call(this, tourService);
          _this9.tourStepTemplateService = tourStepTemplateService;
          _this9.tourService = tourService;
          return _this9;
        }

        _createClass(_TourStepTemplateComponent, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.tourStepTemplateService.template = this.stepTemplate || this.stepTemplateContent || this.defaultTourStepTemplate;
          }
        }]);

        return _TourStepTemplateComponent;
      }(ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_2__.TourHotkeyListenerComponent);

      _TourStepTemplateComponent.ɵfac = function TourStepTemplateComponent_Factory(t) {
        return new (t || _TourStepTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TourStepTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_NgxbTourService));
      };

      _TourStepTemplateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _TourStepTemplateComponent,
        selectors: [["tour-step-template"]],
        contentQueries: function TourStepTemplateComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stepTemplateContent = _t.first);
          }
        },
        viewQuery: function TourStepTemplateComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.defaultTourStepTemplate = _t.first);
          }
        },
        inputs: {
          stepTemplate: "stepTemplate"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 2,
        vars: 0,
        consts: [["tourStep", ""], [1, "tour-step-content", 3, "innerHTML"], [1, "tour-step-navigation"], ["class", "btn btn-sm btn-default", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-default", 3, "click"]],
        template: function TourStepTemplateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TourStepTemplateComponent_ng_template_0_Template, 6, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
        encapsulation: 2
      });

      _TourStepTemplateComponent.ctorParameters = function () {
        return [{
          type: TourStepTemplateService
        }, {
          type: _NgxbTourService
        }];
      };

      _TourStepTemplateComponent.propDecorators = {
        defaultTourStepTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
          args: ['tourStep', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef,
            "static": true
          }]
        }],
        stepTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        stepTemplateContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_TourStepTemplateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
            selector: 'tour-step-template',
            template: "\n    <ng-template #tourStep let-step=\"step\">\n      <p class=\"tour-step-content\" [innerHTML]=\"step?.content\"></p>\n      <div class=\"tour-step-navigation\">\n        <button\n          *ngIf=\"tourService.hasPrev(step)\"\n          class=\"btn btn-sm btn-default\"\n          (click)=\"tourService.prev()\"\n        >\n          \xAB {{ step?.prevBtnTitle }}\n        </button>\n        <button\n          *ngIf=\"tourService.hasNext(step)\"\n          class=\"btn btn-sm btn-default\"\n          (click)=\"tourService.next()\"\n        >\n          {{ step?.nextBtnTitle }} \xBB\n        </button>\n        <button class=\"btn btn-sm btn-default\" (click)=\"tourService.end()\">\n          {{ step?.endBtnTitle }}\n        </button>\n      </div>\n    </ng-template>\n  "
          }]
        }], function () {
          return [{
            type: TourStepTemplateService
          }, {
            type: _NgxbTourService
          }];
        }, {
          defaultTourStepTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: ['tourStep', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef,
              "static": true
            }]
          }],
          stepTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          stepTemplateContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef]
          }]
        });
      })();

      var _popoverForRoot = ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_0__.PopoverModule.forRoot();

      var _TourNgxBootstrapModule = /*#__PURE__*/function () {
        function _TourNgxBootstrapModule() {
          _classCallCheck(this, _TourNgxBootstrapModule);
        }

        _createClass(_TourNgxBootstrapModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: _TourNgxBootstrapModule,
              providers: [TourStepTemplateService, ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_2__.TourService, _NgxbTourService, ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_2__.TourBackdropService]
            };
          }
        }]);

        return _TourNgxBootstrapModule;
      }();

      _TourNgxBootstrapModule.ɵfac = function TourNgxBootstrapModule_Factory(t) {
        return new (t || _TourNgxBootstrapModule)();
      };

      _TourNgxBootstrapModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _TourNgxBootstrapModule
      });
      _TourNgxBootstrapModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _popoverForRoot, ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_2__.TourModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_TourNgxBootstrapModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
          args: [{
            declarations: [_TourAnchorNgxBootstrapDirective, _TourAnchorNgxBootstrapPopoverDirective, _TourStepTemplateComponent],
            exports: [_TourAnchorNgxBootstrapDirective, _TourAnchorNgxBootstrapPopoverDirective, _TourStepTemplateComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _popoverForRoot, ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_2__.TourModule]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_TourNgxBootstrapModule, {
          declarations: function declarations() {
            return [_TourAnchorNgxBootstrapDirective, _TourAnchorNgxBootstrapPopoverDirective, _TourStepTemplateComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_0__.PopoverModule, ngx_ui_tour_core__WEBPACK_IMPORTED_MODULE_2__.TourModule];
          },
          exports: function exports() {
            return [_TourAnchorNgxBootstrapDirective, _TourAnchorNgxBootstrapPopoverDirective, _TourStepTemplateComponent];
          }
        });
      })();
      /*
       * Public API Surface of ngx-ui-tour-ngx-bootstrap
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    7990:
    /*!*************************************************!*\
      !*** ./src/app/ngx-bootstrap/docs.component.ts ***!
      \*************************************************/

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


      var ngx_ui_tour_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-ui-tour-ngx-bootstrap */
      8460);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function DocsComponent_tr_320_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 21);

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

      function DocsComponent_td_322_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading data...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocsComponent_td_323_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);

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
            var _this10 = this;

            this.startWaitingSubscription = this.tourService.startWaiting$.subscribe(function () {
              return _this10.loadData();
            });
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this11 = this;

            this.showIsAsyncConfig = false;
            (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([1, 2, 3]).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.delay)(1000)).subscribe(function (result) {
              _this11.isLoading = false;
              _this11.fakeData = result;
              _this11.showIsAsyncConfig = true;
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
        return new (t || _DocsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_tour_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__.TourService));
      };

      _DocsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DocsComponent,
        selectors: [["docs"]],
        decls: 482,
        vars: 40,
        consts: [["tourAnchor", "angular-ui-tour", "href", "http://benmarch.github.io/angular-ui-tour"], ["href", "https://github.com/valor-software/ngx-bootstrap", "rel", "nofollow", "target", "_blank"], ["tourAnchor", "installation"], ["tourAnchor", "usage"], ["tourAnchor", "tourService.start"], ["href", "https://github.com/hakimio/ngx-ui-tour/tree/master/src/app/ngx-bootstrap"], [1, "table"], ["tourAnchor", "config.anchorId"], ["tourAnchor", "config.enableBackdrop"], ["tourAnchor", "config.route"], ["tourAnchor", "config.nextStep"], ["tourAnchor", "config.placement.default"], ["href", "https://valor-software.com/ngx-bootstrap/index-bs4.html#/popover#popover-directive"], ["tourAnchor", "config.containerClass"], ["tourAnchor", "config.buttons.custom"], ["tourAnchor", "config.isAsync", 4, "ngIf"], ["colspan", "4", 4, "ngIf"], ["colspan", "4", "tourAnchor", "config.fakeData", 4, "ngIf"], ["tourAnchor", "hotkeys"], ["tourAnchor", "events"], ["tourAnchor", "template"], ["tourAnchor", "config.isAsync"], ["colspan", "4"], ["colspan", "4", "tourAnchor", "config.fakeData"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "TourNgxBootstrapModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " is an implementation of the tour UI that uses ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "NgxBootstrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " popovers to display tour steps.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Installation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "npm install ngx-ui-tour-core ngx-ui-tour-ngx-bootstrap ngx-bootstrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Import ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "TourNgxBootstrapModule.forRoot()");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Include bootstrap 4 CSS somehow - i.e. in your ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "index.html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " add this line: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css\"> ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Or for Bootstrap 3: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"> ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "<tour-step-template></tour-step-template>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " to your root app component");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Define anchor points for the tour steps by adding the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "tourAnchor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " directive throughout your app. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "<div tourAnchor=\"some.anchor.id\">...</div>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Define your tour steps using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "tourService.initialize(steps)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Start the tour with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "code", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "tourService.start()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Check out the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "demo source code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " for an example.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "FAQ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "How to center tour step?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "You can create an invisible anchor point for the tour step you want to center.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Add a simple div to your html template which will be used as the tour anchor ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\n<div class=\"centered-tour-element\" tourAnchor=\"start-tour\"></div>\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Add CSS for the div ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Use previously defined tour anchor ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "How to disable main content scrolling when UI tour is active?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "You can toggle CSS class which disables main content element scrolling when tour starts/ends.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Create custom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "TourService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Add the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "no-scroll");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " CSS class to your global stylesheet (");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "styles.(s)css");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, ") ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Use your custom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "TourService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " to start the UI tour: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "TourService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "TourService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " controls the tour. Some key functions include:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "dl");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "start()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Starts the tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "startAt(stepId: number | string)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Start the tour at the step with stepId or at the specified index");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "end()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Ends the tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "pause()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Pauses the tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "resume()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Resumes the tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "next()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Goes to the next step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "prev()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Goes to the previous step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Step Configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Each step can have the following properties.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "stepId");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "\"\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "A unique identifier for the step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "anchorId");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "The anchor to which the step will be attached");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "\"\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "The title of the tour step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "\"\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "The content text of the tour step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "enableBackdrop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "boolean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Controls whether to enable active element highlighting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "route");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "string | UrlSegment[]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "undefined");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "nextStep");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "number | string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "undefined");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "The step index or stepId of the next step. If undefined, the next step in the steps array is used.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "prevStep");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "number | string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "undefined");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "The step index or stepId of the previous step. If undefined, the previous step in the steps array is used.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "placement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "'top' | 'bottom' | 'left' | 'right' | 'auto'");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "'top'");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " Placement of a popover. See the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "ngx-bootstrap docs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "containerClass");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "\"\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " Custom CSS class for popover container. It helps when you want to add custom style only for tour step popovers. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "preventScrolling");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "boolean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to true will disable the scroll behavior. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "prevBtnTitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, " Sets a custom prev button title for a given step. Default is \"Prev\" ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "nextBtnTitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " Sets a custom next button title for a given step. Default is \"Next\" ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "endBtnTitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, " Sets a custom end button title for a given step. Default is \"End\" ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "del");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "waitFor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Promise | Observable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "undefined");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, " [Deprecated: use \"isAsync\" instead] Waits for the given Promise or Observable before showing the step contents. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](320, DocsComponent_tr_320_Template, 10, 0, "tr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](322, DocsComponent_td_322_Template, 3, 0, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](323, DocsComponent_td_323_Template, 3, 3, "td", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Defaults");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "You can set default values in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "TourService.initialize");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, " function.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Any value explicitly defined in a step will override the default value.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "h2", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Hotkeys");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, " Hotkeys are provided using Angular's ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "@HostListener");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, " decorator. Hotkeys are enabled when the tour starts and disabled when the tour ends.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "left arrow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, " - previous step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "right arrow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, " - next step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "esc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, " - end tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, " You can disable hotkeys by calling ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "tourService.disableHotkeys()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, " or re-enable with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "tourService.enableHotkeys()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "h2", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Event Observables");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "TourService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, " emits events that can be subscribed to like this:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "Payload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Emitted When");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "stepShow$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "A step is shown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "stepHide$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "A step is hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "initialize$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "IStepOption[]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "The tour is configured with a set of steps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "start$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "The tour begins");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "end$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "any");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "The tour ends");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "pause$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "The tour is paused");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "resume$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "The tour resumes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "anchorRegister$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "An anchor is registered with the tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "anchorUnregister$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "An anchor is unregistered from the tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "startWaiting$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "Starts waiting for async step (\"isAsync\" or \"waitFor\" configs set)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "stopWaiting$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "Async anchor is registered or \"waitFor\" config Promise/Observable completes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "h2", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "Custom template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, " You can also customize the tour step template by providing an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "<ng-template let-step=\"step\" >");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, " inside the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "<tour-step-template>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, " The default template is equivalent to this:\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "Styling Active Tour Anchor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, " The currently active tour anchor element has a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "touranchor--is-active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, " class applied to it, so you can apply your own custom styles to that class to highlight the element being referenced.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](64);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](193);

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
        directives: [ngx_ui_tour_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__.TourAnchorNgxBootstrapDirective, ngx_ui_tour_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__.TourAnchorNgxBootstrapPopoverDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.JsonPipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    3521:
    /*!**********************************************************!*\
      !*** ./src/app/ngx-bootstrap/ngx-bootstrap.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgxBootstrapComponent": function NgxBootstrapComponent() {
          return (
            /* binding */
            _NgxBootstrapComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var ngx_ui_tour_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-ui-tour-ngx-bootstrap */
      8460);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var _NgxBootstrapComponent = /*#__PURE__*/function () {
        function _NgxBootstrapComponent(tourService) {
          _classCallCheck(this, _NgxBootstrapComponent);

          this.tourService = tourService;
        }

        _createClass(_NgxBootstrapComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.tourService.initialize([{
              anchorId: 'start.tour',
              content: 'Welcome to the Ngx-UI-Tour tour!',
              placement: 'right',
              title: 'Welcome'
            }, {
              anchorId: 'angular-ui-tour',
              content: 'Thanks to angular-ui-tour for the inspiration for the library',
              placement: 'bottom',
              title: 'angular-ui-tour'
            }, {
              anchorId: 'usage',
              content: '...then use it.',
              placement: 'right',
              title: 'Usage'
            }, {
              anchorId: 'tourService.start',
              content: 'Don\'t forget to actually start the tour.',
              placement: 'top',
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
              content: 'Tours can span multiple routes. No placement.',
              title: 'Route'
            }, {
              anchorId: 'config.containerClass',
              content: 'You can add custom container class.',
              title: 'Custom CSS Class',
              containerClass: 'custom-tour-class'
            }, {
              anchorId: 'another.route',
              content: 'Like this!',
              route: 'ngx-bootstrap/other',
              title: 'Another Route'
            }, {
              anchorId: 'config.route',
              content: 'And then back again.',
              title: 'Route Return'
            }, {
              anchorId: 'config.placement.default',
              content: 'Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.',
              title: 'No Placement'
            }, {
              anchorId: 'config.placement.default',
              content: 'Sliiide to the left.',
              placement: 'left',
              title: 'Left Placement'
            }, {
              anchorId: 'config.placement.default',
              content: 'Sliiide to the right.',
              placement: 'right',
              title: 'Right Placement'
            }, {
              anchorId: 'config.placement.default',
              content: 'Take it back now y\'all.  One hop this time.',
              placement: 'bottom',
              title: 'Bottom Placement'
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
              route: 'ngx-bootstrap'
            });
            this.tourService.start();
          }
        }]);

        return _NgxBootstrapComponent;
      }();

      _NgxBootstrapComponent.ɵfac = function NgxBootstrapComponent_Factory(t) {
        return new (t || _NgxBootstrapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_tour_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__.TourService));
      };

      _NgxBootstrapComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NgxBootstrapComponent,
        selectors: [["ngx-bootstrap-route"]],
        decls: 6,
        vars: 0,
        consts: [["href", "https://github.com/hakimio/ngx-ui-tour", "rel", "nofollow", "target", "_blank", 1, "btn", "btn-default"], ["tourAnchor", "start.tour", 1, "btn", "btn-primary", 2, "cursor", "pointer", 3, "click"]],
        template: function NgxBootstrapComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View on GitHub");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxBootstrapComponent_Template_a_click_2_listener() {
              return ctx.tourService.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start Demo Tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tour-step-template");
          }
        },
        directives: [ngx_ui_tour_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__.TourAnchorNgxBootstrapDirective, ngx_ui_tour_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__.TourAnchorNgxBootstrapPopoverDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, ngx_ui_tour_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__.TourStepTemplateComponent],
        styles: [".custom-tour-class,\r\n.custom-tour-class .popover-header,\r\n.custom-tour-class .popover-body {\r\n  color: #eee;\r\n  background-color: #333;\r\n  border-color: #333;\r\n}\r\n.custom-tour-class .popover-arrow:before,\r\n.custom-tour-class .popover-arrow:after {\r\n  border-top-color: #333 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5neC1ib290c3RyYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoibmd4LWJvb3RzdHJhcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS10b3VyLWNsYXNzLFxyXG4uY3VzdG9tLXRvdXItY2xhc3MgLnBvcG92ZXItaGVhZGVyLFxyXG4uY3VzdG9tLXRvdXItY2xhc3MgLnBvcG92ZXItYm9keSB7XHJcbiAgY29sb3I6ICNlZWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBib3JkZXItY29sb3I6ICMzMzM7XHJcbn1cclxuLmN1c3RvbS10b3VyLWNsYXNzIC5wb3BvdmVyLWFycm93OmJlZm9yZSxcclxuLmN1c3RvbS10b3VyLWNsYXNzIC5wb3BvdmVyLWFycm93OmFmdGVyIHtcclxuICBib3JkZXItdG9wLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    7778:
    /*!*******************************************************!*\
      !*** ./src/app/ngx-bootstrap/ngx-bootstrap.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgxBootstrapModule": function NgxBootstrapModule() {
          return (
            /* binding */
            _NgxBootstrapModule
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


      var ngx_ui_tour_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-ui-tour-ngx-bootstrap */
      8460);
      /* harmony import */


      var _docs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./docs.component */
      7990);
      /* harmony import */


      var _ngx_bootstrap_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ngx-bootstrap.component */
      3521);
      /* harmony import */


      var _other_route_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./other-route.component */
      7869);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _NgxBootstrapModule = function _NgxBootstrapModule() {
        _classCallCheck(this, _NgxBootstrapModule);
      };

      _NgxBootstrapModule.ɵfac = function NgxBootstrapModule_Factory(t) {
        return new (t || _NgxBootstrapModule)();
      };

      _NgxBootstrapModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _NgxBootstrapModule
      });
      _NgxBootstrapModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
          component: _ngx_bootstrap_component__WEBPACK_IMPORTED_MODULE_1__.NgxBootstrapComponent,
          path: '',
          children: [{
            component: _docs_component__WEBPACK_IMPORTED_MODULE_0__.DocsComponent,
            path: ''
          }, {
            component: _other_route_component__WEBPACK_IMPORTED_MODULE_2__.OtherRouteComponent,
            path: 'other'
          }]
        }]), ngx_ui_tour_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__.TourNgxBootstrapModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_NgxBootstrapModule, {
          declarations: [_ngx_bootstrap_component__WEBPACK_IMPORTED_MODULE_1__.NgxBootstrapComponent, _docs_component__WEBPACK_IMPORTED_MODULE_0__.DocsComponent, _other_route_component__WEBPACK_IMPORTED_MODULE_2__.OtherRouteComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, ngx_ui_tour_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__.TourNgxBootstrapModule]
        });
      })();
      /***/

    },

    /***/
    7869:
    /*!********************************************************!*\
      !*** ./src/app/ngx-bootstrap/other-route.component.ts ***!
      \********************************************************/

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


      var ngx_ui_tour_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-ui-tour-ngx-bootstrap */
      8460);

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
        directives: [ngx_ui_tour_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__.TourAnchorNgxBootstrapDirective, ngx_ui_tour_ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__.TourAnchorNgxBootstrapPopoverDirective],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_ngx-bootstrap_ngx-bootstrap_module_ts-es5.js.map