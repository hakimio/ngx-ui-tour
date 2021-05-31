(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkngx_ui_tour"] = self["webpackChunkngx_ui_tour"] || []).push([["src_app_md-menu_md-menu_module_ts"], {
    /***/
    1849:
    /*!*******************************************!*\
      !*** ./src/app/md-menu/docs.component.ts ***!
      \*******************************************/

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


      var ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-ui-tour-md-menu */
      5408);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function DocsComponent_tr_355_Template(rf, ctx) {
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

      function DocsComponent_td_357_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading data...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocsComponent_td_358_Template(rf, ctx) {
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
            var _this = this;

            this.startWaitingSubscription = this.tourService.startWaiting$.subscribe(function () {
              return _this.loadData();
            });
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this2 = this;

            this.showIsAsyncConfig = false;
            (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([1, 2, 3]).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.delay)(1000)).subscribe(function (result) {
              _this2.isLoading = false;
              _this2.fakeData = result;
              _this2.showIsAsyncConfig = true;
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
        return new (t || _DocsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_3__.TourService));
      };

      _DocsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DocsComponent,
        selectors: [["docs"]],
        decls: 517,
        vars: 39,
        consts: [["tourAnchor", "angular-ui-tour", "href", "http://benmarch.github.io/angular-ui-tour"], ["href", "http://material.angular.io"], ["tourAnchor", "installation"], ["href", "https://material.angular.io/guide/getting-started"], ["tourAnchor", "usage"], ["tourAnchor", "tourService.start"], ["href", "https://github.com/hakimio/ngx-ui-tour/tree/master/src/app/md-menu"], ["href", "https://github.com/hakimio/ngx-ui-tour/tree/master/src/app/md-menu/mat-lazy-tour"], [1, "table"], ["tourAnchor", "config.anchorId"], ["tourAnchor", "config.enableBackdrop"], ["tourAnchor", "config.route"], ["tourAnchor", "config.nextStep"], ["tourAnchor", "config.buttons.custom"], ["tourAnchor", "config.isAsync", 4, "ngIf"], ["colspan", "4", 4, "ngIf"], ["colspan", "4", "tourAnchor", "config.fakeData", 4, "ngIf"], ["tourAnchor", "hotkeys"], ["tourAnchor", "events"], ["tourAnchor", "template"], ["tourAnchor", "config.isAsync"], ["colspan", "4"], ["colspan", "4", "tourAnchor", "config.fakeData"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "TourMatMenuModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " is an implementation of the tour ui that uses ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Angular Material");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " MatMenu to display tour steps.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Installation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "npm install ngx-ui-tour-core ngx-ui-tour-md-menu @angular/animations @angular/cdk @angular/http @angular/material");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Import ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "TourMatMenuModule.forRoot()");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Make sure Angular Material is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "installed correctly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Simple project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "<tour-step-template></tour-step-template>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " to your root app component");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Define anchor points for the tour steps by adding the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "tourAnchor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " directive throughout your app. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "<div tourAnchor=\"some.anchor.id\">...</div>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Define your tour steps using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "tourService.initialize(steps)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Start the tour with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "tourService.start()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Check out the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "demo source code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " for an example.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Lazy loaded modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "<tour-step-template></tour-step-template>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " to your root app component. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Import ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "TourMatMenuModule.forRoot()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " into your app module. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Import ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "TourMatMenuModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " into all lazy loaded modules needing the tour. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Import the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "TourService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " in your highest level eagerly loaded component and initialize all your steps there (even the ones in the lazy loaded modules). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Make sure every step object contains its route. For example, if the route to a step is '/home' then your step object should have ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "route: '/home'");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " as a member. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Define anchor points for your steps by adding the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "tourAnchor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " directive throughout your modules (any component that requires it at any level). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "<div tourAnchor=\"some.anchor.id\">...</div>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Start the tour with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "tourService.start()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " in the same component you initialized your steps. Call this right after the initialization. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Check out the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "demo source code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " for an example. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "FAQ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "How to center tour step?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "You can create an invisible anchor point for the tour step you want to center.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Add a simple div to your html template which will be used as the tour anchor ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\n<div class=\"centered-tour-element\" tourAnchor=\"start-tour\"></div>\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Add CSS for the div ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Use previously defined tour anchor ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "How to disable main content scrolling when UI tour is active?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "You can toggle CSS class which disables main content element scrolling when tour starts/ends.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Create custom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "TourService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Add the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "no-scroll");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " CSS class to your global stylesheet (");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "styles.(s)css");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, ") ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " Use your custom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "TourService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " to start the UI tour: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "TourService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "TourService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " controls the tour. Some key functions include:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "dl");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "start()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Starts the tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "startAt(stepId: number | string)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Start the tour at the step with stepId or at the specified index");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "end()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Ends the tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "pause()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Pauses the tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "resume()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Resumes the tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "next()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Goes to the next step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "prev()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Goes to the previous step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Step Configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Each step can have the following properties.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "stepId");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "\"\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "A unique identifier for the step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "anchorId");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "The anchor to which the step will be attached");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "\"\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "The title of the tour step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "\"\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "The content text of the tour step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "enableBackdrop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "boolean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Controls whether to enable active element highlighting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "route");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "string | UrlSegment[]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "undefined");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "nextStep");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "number | string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "undefined");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "The step index or stepId of the next step. If undefined, the next step in the steps array is used.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "prevStep");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "number | string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "undefined");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "The step index or stepId of the previous step. If undefined, the previous step in the steps array is used.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "del");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "placement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "N/A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "N/A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, " Ignored by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "TourMatMenuModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "preventScrolling");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "boolean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, " Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to true will disable the scroll behavior. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "prevBtnTitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, " Sets a custom prev button title for a given step. Default is \"Prev\" ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "nextBtnTitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, " Sets a custom next button title for a given step. Default is \"Next\" ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "endBtnTitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, " Sets a custom end button title for a given step. Default is \"End\" ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "waitFor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Promise | Observable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "undefined");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, " [Deprecated: use \"isAsync\" instead] Waits for the given Promise or Observable before showing the step contents. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](355, DocsComponent_tr_355_Template, 10, 0, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](357, DocsComponent_td_357_Template, 3, 0, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](358, DocsComponent_td_358_Template, 3, 3, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Defaults");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "You can set default values in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "TourService.initialize");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, " function.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "Any value explicitly defined in a step will override the default value.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "h2", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "Hotkeys");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, " Hotkeys are provided using Angular's ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "@HostListener");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, " decorator. Hotkeys are enabled when the tour starts and disabled when the tour ends.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "left arrow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, " - previous step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "right arrow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, " - next step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "esc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, " - end tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, " You can disable hotkeys by calling ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "tourService.disableHotkeys()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, " or re-enable with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "tourService.enableHotkeys()");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "h2", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Event Observables");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "TourService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, " emits events that can be subscribed to like this:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "Payload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "Emitted When");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "stepShow$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "A step is shown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "stepHide$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "A step is hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "initialize$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "IStepOption[]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "The tour is configured with a set of steps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "start$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "The tour begins");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "end$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "any");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "The tour ends");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "pause$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "The tour is paused");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "resume$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "The tour resumes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "anchorRegister$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "An anchor is registered with the tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "anchorUnregister$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "An anchor is unregistered from the tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "startWaiting$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "Starts waiting for async step (\"isAsync\" or \"waitFor\" configs set)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "stopWaiting$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, "IStepOption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "Async anchor is registered or \"waitFor\" config Promise/Observable completes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "h2", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "Custom template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, " You can also customize the tour step template by providing an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "<ng-template let-step=\"step\" >");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, " inside the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "<tour-step-template>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, " The default template is equivalent to this:\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "Styling Active Tour Anchor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, " The currently active tour anchor element has a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "touranchor--is-active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, " class applied to it, so you can apply your own custom styles to that class to highlight the element being referenced.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("this.tourService.initialize([", "{", "\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, ", "{", "\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n.centered-tour-element ", "{", "\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  /* The anchor should be translated to the left by half of your step width and half height  */\n  /* For example, if your tour step has dimensions of 280 \xD7 156 px, you have to translate by (-140px, -78px) */\n  transform: translate(-140px, -78px);\n", "}", "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\nthis.tourService.initialize([", "{", "\n  anchorId: 'start-tour',\n  title: 'Welcome',\n  content: 'Welcome to the Ngx-UI-Tour tour!'\n", "}", "]);\nthis.tourService.start();\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolateV"](["\n@Injectable()\nexport class MyTourService ", "{", "\n\n  constructor(\n    private readonly tourService: TourService\n  ) ", "{", "", "}", "\n\n  private readonly MAIN_SECTION_CSS_SELECTOR = 'section.main-content';\n  private readonly NO_SCROLL_CSS_CLASS = 'no-scroll';\n\n  start(steps: IStepOption[]) ", "{", "\n    this.tourService.initialize(steps, ", "{", "\n      route: 'my-route',\n      enableBackdrop: true\n    ", "}", ");\n    this.tourService.end$.subscribe(() => this.setIsScrollable(true));\n    this.setIsScrollable(false);\n    this.tourService.start();\n  ", "}", "\n\n  private setIsScrollable(isScrollable: boolean) ", "{", "\n    const body = document.body,\n      mainSection = document.querySelector(this.MAIN_SECTION_CSS_SELECTOR),\n      addOrRemove = isScrollable ? 'remove' : 'add';\n\n    mainSection.classList[addOrRemove](this.NO_SCROLL_CSS_CLASS);\n    // You can also optionally disable iOS Safari bounce effect\n    body[addOrRemove + 'EventListener']('touchmove', this.preventTouchMove, ", "{", " passive: false });\n  ", "}", "\n\n  private preventTouchMove(e) ", "{", "\n    e.preventDefault();\n  ", "}", "\n\n", "}", "\n    "]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n.no-scroll ", "{", "\n  overflow: hidden;\n", "}", "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolateV"](["\nimport ", "{", "MyTourService", "}", " from '@app-utils/my-tour.service';\n\n@Component(", "{", "\n  selector: 'my-app',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n", "}", ")\nexport class AppComponent ", "{", "\n\n  constructor(\n    private readonly myTourService: MyTourService\n  ) ", "{", "\n    this.myTourService.start([", "{", "\n      anchorId: 'start-tour',\n      title: 'Welcome',\n      content: 'Welcome to the Ngx-UI-Tour tour!'\n    ", "}", "]);\n  ", "}", "\n\n", "}", "\n    "]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](182);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIsAsyncConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading && !ctx.showIsAsyncConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("this.tourService.initialize(steps, ", "{", "\n  route: '',\n  preventScrolling: true,\n});\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("this.tourService.initialize$.subscribe((steps: IStepOption[]) => ", "{", "\n  console.log('tour configured with these steps:', steps);\n});\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("<tour-step-template>\n  <ng-template let-step=\"step\">\n    <mat-card (click)=\"$event.stopPropagation()\">\n      <mat-card-title>\n        ", "{{", "step?.title}}\n      </mat-card-title>\n      <mat-card-content>\n        ", "{{", "step?.content}}\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-icon-button [disabled]=\"!tourService.hasPrev(step)\" (click)=\"tourService.prev()\">\n          <mat-icon>chevron_left</mat-icon>\n        </button>\n        <button mat-icon-button [disabled]=\"!tourService.hasNext(step)\" (click)=\"tourService.next()\">\n          <mat-icon>chevron_right</mat-icon>\n        </button>\n        <button mat-button (click)=\"tourService.end()\">", "{{", "step?.endBtnTitle}}</button>\n      </mat-card-actions>\n    </mat-card>\n  </ng-template>\n</tour-step-template>\n");
          }
        },
        directives: [ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_3__.TourAnchorMatMenuDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.JsonPipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    1007:
    /*!**********************************************!*\
      !*** ./src/app/md-menu/md-menu.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MdMenuComponent": function MdMenuComponent() {
          return (
            /* binding */
            _MdMenuComponent
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
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function MdMenuComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "json");
        }

        if (rf & 2) {
          var step_r2 = ctx.step;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, step_r2), "\n");
        }
      }

      var _MdMenuComponent = function _MdMenuComponent(tourService) {
        _classCallCheck(this, _MdMenuComponent);

        this.tourService = tourService;
        this.tourService.initialize([{
          anchorId: 'start.tour',
          content: 'Welcome to the Ngx-UI-Tour tour!',
          placement: 'below',
          title: 'Welcome'
        }, {
          anchorId: 'angular-ui-tour',
          content: 'Thanks to angular-ui-tour for the inspiration for the library',
          route: '',
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
          route: 'other',
          title: 'Another Route'
        }, {
          anchorId: 'config.route',
          content: 'And then back again.',
          placement: 'below',
          title: 'Route Return'
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
          route: 'md-menu'
        });
        this.tourService.start();
      };

      _MdMenuComponent.ɵfac = function MdMenuComponent_Factory(t) {
        return new (t || _MdMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_1__.TourService));
      };

      _MdMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MdMenuComponent,
        selectors: [["md-menu-route"]],
        decls: 8,
        vars: 0,
        consts: [["href", "https://github.com/hakimio/ngx-ui-tour", 1, "btn", "btn-default"], ["tourAnchor", "start.tour", 1, "btn", "btn-primary", 2, "cursor", "pointer", 3, "click"], ["jsonTemplate", ""]],
        template: function MdMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View on GitHub");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MdMenuComponent_Template_a_click_2_listener() {
              return ctx.tourService.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start Demo Tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tour-step-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MdMenuComponent_ng_template_6_Template, 2, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }
        },
        directives: [ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_1__.TourAnchorMatMenuDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_1__.TourStepTemplateComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    1451:
    /*!*******************************************!*\
      !*** ./src/app/md-menu/md-menu.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MdMenuModule": function MdMenuModule() {
          return (
            /* binding */
            _MdMenuModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-ui-tour-md-menu */
      5408);
      /* harmony import */


      var _docs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./docs.component */
      1849);
      /* harmony import */


      var _md_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./md-menu.component */
      1007);
      /* harmony import */


      var _other_route_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./other-route.component */
      3004);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _MdMenuModule = function _MdMenuModule() {
        _classCallCheck(this, _MdMenuModule);
      };

      _MdMenuModule.ɵfac = function MdMenuModule_Factory(t) {
        return new (t || _MdMenuModule)();
      };

      _MdMenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _MdMenuModule
      });
      _MdMenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_5__.TourMatMenuModule.forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
          component: _md_menu_component__WEBPACK_IMPORTED_MODULE_1__.MdMenuComponent,
          path: '',
          children: [{
            component: _docs_component__WEBPACK_IMPORTED_MODULE_0__.DocsComponent,
            path: ''
          }, {
            component: _other_route_component__WEBPACK_IMPORTED_MODULE_2__.OtherRouteComponent,
            path: 'other'
          }]
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_MdMenuModule, {
          declarations: [_md_menu_component__WEBPACK_IMPORTED_MODULE_1__.MdMenuComponent, _docs_component__WEBPACK_IMPORTED_MODULE_0__.DocsComponent, _other_route_component__WEBPACK_IMPORTED_MODULE_2__.OtherRouteComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_5__.TourMatMenuModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    3004:
    /*!**************************************************!*\
      !*** ./src/app/md-menu/other-route.component.ts ***!
      \**************************************************/

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


      var ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-ui-tour-md-menu */
      5408);

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
        directives: [ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_1__.TourAnchorMatMenuDirective],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_md-menu_md-menu_module_ts-es5.js.map