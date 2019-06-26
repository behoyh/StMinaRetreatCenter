(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mbr-section content4 cid-rr9S5NAU38 bg-secondary\" id=\"content4-5\">\n  <div class=\"container\">\n    <div class=\"media-container-row\">\n      <div class=\"title col-12 col-md-8\">\n        <h2 class=\"align-center pb-3 mbr-fonts-style display-2\">\n          &nbsp;</h2>\n        <h2 class=\"align-center pb-3 mbr-fonts-style display-2\">\n          &nbsp;</h2>\n        <h2 class=\"align-center pb-3 mbr-fonts-style display-2\">\n          About Us</h2>\n        <h3 class=\"mbr-section-subtitle align-center mbr-light mbr-fonts-style display-5\">Saint Mina Retreat Center\n          lies on forty-five acres of land located in Mio, Michigan. Saint Mina Coptic Orthodox Church is located on\n          the property of St. Mina Retreat Center for religious services and quiet meditation. The newly completed\n          building houses sleeping rooms for family and youth retreats, a reception area with a library, meeting\n          rooms, and kitchen amenities. The location of the land provides a wonderful opportunity for those who wish\n          to leave the outside world behind and enjoy the serenity of a remote wooded area surrounding a gorgeous body\n          of water. Such peaceful ambiance truly offers the person an opportunity to examine the soul and find\n          calmness and positive energy. You are invited to participate in a moving and magnificent time meditating on\n          the Word of God from the Holy Scriptures and ways to apply it in your life. St. Mina Retreat Center will\n          provide you with the proper atmosphere to achieve this goal. You are encouraged to take full advantage of\n          what St. Mina Retreat Center has to offer.</h3>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/about-us/about-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _shared_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/app.state */ "./src/app/shared/app.state.ts");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/router-plugin */ "./node_modules/@ngxs/router-plugin/fesm5/ngxs-router-plugin.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(store, router) {
        this.store = store;
        this.router = router;
        this.title = 'angular-firestore-k8s';
    }
    AppComponent.prototype.Home = function () {
        this.store.dispatch([
            new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_5__["Navigate"](['/'])
        ]);
    };
    AppComponent.prototype.Profile = function () {
        this.store.dispatch([
            new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_5__["Navigate"](['/profile'])
        ]);
    };
    AppComponent.prototype.Authentication = function () {
        this.store.dispatch([new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_5__["Navigate"](['/auth'])]);
    };
    AppComponent.prototype.onError = function (error) {
        alert(error);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_shared_app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "user$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "router$", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forms_post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forms/post-dialog/post-dialog.component */ "./src/app/forms/post-dialog/post-dialog.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_router_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.router.module */ "./src/app/app.router.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./authentication/authentication.component */ "./src/app/authentication/authentication.component.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "./node_modules/@ngxs/devtools-plugin/fesm5/ngxs-devtools-plugin.js");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngxs/logger-plugin */ "./node_modules/@ngxs/logger-plugin/fesm5/ngxs-logger-plugin.js");
/* harmony import */ var _shared_app_state__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/app.state */ "./src/app/shared/app.state.ts");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngxs/router-plugin */ "./node_modules/@ngxs/router-plugin/fesm5/ngxs-router-plugin.js");
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngxs/storage-plugin */ "./node_modules/@ngxs/storage-plugin/fesm5/ngxs-storage-plugin.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _lodging_lodging_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./lodging/lodging.component */ "./src/app/lodging/lodging.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _donate_donate_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./donate/donate.component */ "./src/app/donate/donate.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _forms_post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_12__["PostDialogComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_17__["PostsComponent"],
                _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_18__["AuthenticationComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_27__["PostComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_30__["AboutUsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_31__["HomeComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_33__["ServicesComponent"],
                _lodging_lodging_component__WEBPACK_IMPORTED_MODULE_32__["LodgingComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_34__["RegisterComponent"],
                _donate_donate_component__WEBPACK_IMPORTED_MODULE_35__["DonateComponent"],
                _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_36__["CalendarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase, 'blog-client'),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _app_router_module__WEBPACK_IMPORTED_MODULE_15__["AppRouterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot([]),
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_19__["NgxsModule"].forRoot([
                    _shared_app_state__WEBPACK_IMPORTED_MODULE_22__["AppState"]
                ], { developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production }),
                _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_24__["NgxsStoragePluginModule"].forRoot(),
                _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_20__["NgxsReduxDevtoolsPluginModule"].forRoot(),
                _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_21__["NgxsLoggerPluginModule"].forRoot(),
                _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_23__["NgxsRouterPluginModule"].forRoot(),
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_26__["AngularEditorModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_28__["OrderModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_29__["HttpModule"]
            ],
            entryComponents: [_forms_post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_12__["PostDialogComponent"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"]],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_16__["APP_BASE_HREF"], useValue: '/' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.router.module.ts ***!
  \**************************************/
/*! exports provided: AppRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication/authentication.component */ "./src/app/authentication/authentication.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _post_post_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post/post-resolver.service */ "./src/app/post/post-resolver.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _lodging_lodging_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lodging/lodging.component */ "./src/app/lodging/lodging.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _donate_donate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./donate/donate.component */ "./src/app/donate/donate.component.ts");














var routes = [
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"] },
    {
        path: 'posts/:id', component: _post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"],
        resolve: {
            post: _post_post_resolver_service__WEBPACK_IMPORTED_MODULE_7__["PostResolverService"]
        }
    },
    { path: 'auth', component: _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_5__["AuthenticationComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: 'lodging', component: _lodging_lodging_component__WEBPACK_IMPORTED_MODULE_11__["LodgingComponent"] },
    { path: 'news', component: _post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"] },
    { path: 'donate', component: _donate_donate_component__WEBPACK_IMPORTED_MODULE_13__["DonateComponent"] }
];
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRouterModule);
    return AppRouterModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.component.html":
/*!**************************************************************!*\
  !*** ./src/app/authentication/authentication.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <mat-card >\n        <mat-card-header>\n          <mat-card-title>Login</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <form [formGroup]=\"LoginAuthForm\">\n                  <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\" name=\"email\" required>\n                  </mat-form-field>\n      \n                  <mat-form-field>\n                    <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" name=\"password\"\n                      required>\n                  </mat-form-field>\n \n          </form>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-raised-button (click)=\"Login()\" color=\"primary\">Login</button>\n          &nbsp;&nbsp;&nbsp;&nbsp;\n          or\n          <button mat-button (click)=\"LoginGoogle()\">Login With Google</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div class=\"col-md-6\">\n      <mat-card >\n        <mat-card-header>\n          <mat-card-title>Register</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <form [formGroup]=\"RegisterAuthForm\">\n            \n                  <mat-form-field>\n                    <input matInput placeholder=\"Fullname\" formControlName=\"name\" name=\"fullname\" \n                      required>\n                  </mat-form-field>\n  \n                  <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\" name=\"email\"\n                      required>\n                  </mat-form-field>\n\n                  <mat-form-field>\n                    <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" name=\"password\" required>\n                  </mat-form-field>\n   \n                  <mat-form-field>\n                    <input matInput placeholder=\"Confirm Password\" formControlName=\"confirmPassword\" type=\"password\"\n                      name=\"confirmPassword\" required>\n                  </mat-form-field>\n\n          </form>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-raised-button (click)=\"Register()\" color=\"primary\">Register</button>\n        </mat-card-actions>\n        </mat-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/authentication/authentication.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/authentication/authentication.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/authentication.component.ts":
/*!************************************************************!*\
  !*** ./src/app/authentication/authentication.component.ts ***!
  \************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile/profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _shared_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/app.actions */ "./src/app/shared/app.actions.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(store, service, snackBar) {
        this.store = store;
        this.service = service;
        this.snackBar = snackBar;
        this.RegisterAuthForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"],
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"],
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"],
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]
        });
        this.LoginAuthForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        });
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
    };
    AuthenticationComponent.prototype.Login = function () {
        var _this = this;
        this.service.Login(this.LoginAuthForm.controls.email.value, this.LoginAuthForm.controls.password.value)
            .then(function (x) { return _this.SetProfile(x); })
            .catch(function (x) { return _this.onError(x); });
    };
    AuthenticationComponent.prototype.Register = function () {
        var _this = this;
        this.service.CreateUser(this.RegisterAuthForm.controls.name.value, this.RegisterAuthForm.controls.email.value, this.RegisterAuthForm.controls.password.value)
            .then(function (x) { return _this.SetProfile(x); })
            .catch(function (x) { return _this.onError(x); });
    };
    AuthenticationComponent.prototype.SetProfile = function (x) {
        this.store.dispatch([
            new _shared_app_actions__WEBPACK_IMPORTED_MODULE_4__["SetUser"]({
                uid: x.user.uid,
                name: x.user.displayName,
                email: x.user.email,
                picture: x.user.photoURL
            })
        ]);
        this.snackBar.open("Signed In " + this.app$.name, "OKAY", { duration: 3000 });
    };
    AuthenticationComponent.prototype.LoginGoogle = function () {
        var _this = this;
        this.service.SignInGoogle()
            .then(function (x) { return _this.OAuthUser(x); })
            .catch(function (x) { return _this.onError(x); });
    };
    // Mishmitewaka
    AuthenticationComponent.prototype.OAuthUser = function (user) {
        this.snackBar.open("Signed In " + user.displayName, "OKAY", { duration: 3000 });
    };
    AuthenticationComponent.prototype.onError = function (error) {
        alert(error);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthenticationComponent.prototype, "app$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthenticationComponent.prototype, "router$", void 0);
    AuthenticationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__(/*! ./authentication.component.html */ "./src/app/authentication/authentication.component.html"),
            styles: [__webpack_require__(/*! ./authentication.component.scss */ "./src/app/authentication/authentication.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.component.html":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  calendar works!\n</p>\n"

/***/ }),

/***/ "./src/app/calendar/calendar.component.scss":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.scss */ "./src/app/calendar/calendar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/donate/donate.component.html":
/*!**********************************************!*\
  !*** ./src/app/donate/donate.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"itemFullText\">\n  <h3 style=\"text-align: center;\">Donate with Paypal</h3>\n  <div align=\"center\">\n    <form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\">\n      <p><input name=\"cmd\" type=\"hidden\" value=\"_s-xclick\"> <input name=\"hosted_button_id\" type=\"hidden\"\n          value=\"CTM87S6TESV9S\"> <input alt=\"PayPal - The safer, easier way to pay online!\" name=\"submit\"\n          src=\"https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif\" type=\"image\"> <img\n          src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" alt=\"\" width=\"1\" height=\"1\" border=\"0\"></p>\n    </form>\n  </div>\n  <h3 style=\"text-align: center;\">Direct Withdrawal</h3>\n  <p style=\"text-align: center;\">The church now has an option for direct withdrawal!&nbsp;Have your monthly tithe\n    automatically deducted&nbsp;from your checking or savings bank account without having to write a check every month.\n  </p>\n  <p style=\"text-align: center;\"><a href=\"/StMarkBankDirectWthdrwal.pdf\" target=\"_blank\">You can download the Direct\n      Withdraw Form from here</a></p>\n  <p style=\"text-align: center;\">Please Print, Fill, attach a voided check and handle to Mr. Maged Essak in church or\n    mail to:</p>\n  <p style=\"text-align: center;\">&nbsp;<strong>St. Mark Coptic Orthodox Church</strong></p>\n  <p style=\"text-align: center;\"><strong>&nbsp;Attn: Treasurer</strong></p>\n  <p style=\"text-align: center;\">&nbsp;P.O. Box 692</p>\n  <p style=\"text-align: center;\">&nbsp;Troy, MI 48099</p>\n</div>"

/***/ }),

/***/ "./src/app/donate/donate.component.scss":
/*!**********************************************!*\
  !*** ./src/app/donate/donate.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvbmF0ZS9kb25hdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/donate/donate.component.ts":
/*!********************************************!*\
  !*** ./src/app/donate/donate.component.ts ***!
  \********************************************/
/*! exports provided: DonateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateComponent", function() { return DonateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DonateComponent = /** @class */ (function () {
    function DonateComponent() {
    }
    DonateComponent.prototype.ngOnInit = function () {
    };
    DonateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-donate',
            template: __webpack_require__(/*! ./donate.component.html */ "./src/app/donate/donate.component.html"),
            styles: [__webpack_require__(/*! ./donate.component.scss */ "./src/app/donate/donate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DonateComponent);
    return DonateComponent;
}());



/***/ }),

/***/ "./src/app/forms/post-dialog/post-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forms/post-dialog/post-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Post {{data.id}}</h1>\n<div mat-dialog-content>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Name</mat-label>\n        <input [(ngModel)]=\"data.name\" matInput placeholder=\"Placeholder\">\n      </mat-form-field>\n    </div>\n    <div class=\"row\">\n        <angular-editor [(ngModel)]=\"data.body\"></angular-editor>\n    </div>\n    <div class=\"row\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Date</mat-label>\n        <input [(ngModel)]=\"data.date\" matInput placeholder=\"Placeholder\">\n      </mat-form-field>\n    </div>\n    <div class=\"row\">\n      <div mat-dialog-actions>\n        <button mat-button [mat-dialog-close]=\"data\" color=\"accent\" cdkFocusInitial>Save</button>\n        <button mat-button (click)=\"dialogRef.close()\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/post-dialog/post-dialog.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/forms/post-dialog/post-dialog.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-content {\n  max-height: 100vh;\n  overflow: initial; }\n\n.mat-input-wrapper {\n  width: 100% !important; }\n\n.mat-form-field {\n  width: 100%; }\n\n.cdk-overlay-pane {\n  max-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZXNob3loYW5uYS9Bbmd1bGFyRmlyZXN0b3JlSzhzL2FuZ3VsYXItZmlyZXN0b3JlLWs4cy9zcmMvYXBwL2Zvcm1zL3Bvc3QtZGlhbG9nL3Bvc3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLHNCQUFxQixFQUFBOztBQUd2QjtFQUVJLFdBQVcsRUFBQTs7QUFHZjtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3Bvc3QtZGlhbG9nL3Bvc3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGVudHtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogaW5pdGlhbDtcbn1cbi5tYXQtaW5wdXQtd3JhcHBlcntcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGRcbiAge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktcGFuZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuIH0iXX0= */"

/***/ }),

/***/ "./src/app/forms/post-dialog/post-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forms/post-dialog/post-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: PostDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDialogComponent", function() { return PostDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var PostDialogComponent = /** @class */ (function () {
    function PostDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PostDialogComponent.prototype.ngOnInit = function () {
    };
    PostDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PostDialogComponent.prototype.uploadFile = function () {
    };
    PostDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-dialog',
            template: __webpack_require__(/*! ./post-dialog.component.html */ "./src/app/forms/post-dialog/post-dialog.component.html"),
            styles: [__webpack_require__(/*! ./post-dialog.component.scss */ "./src/app/forms/post-dialog/post-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], PostDialogComponent);
    return PostDialogComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"carousel slide cid-rquI0ZF9tm\" data-interval=\"false\" id=\"slider1-3\">\n  <div class=\"full-screen\">\n    <div class=\"mbr-slider slide carousel\" data-pause=\"true\" data-keyboard=\"false\" data-ride=\"carousel\"\n      data-interval=\"4000\">\n      <ol class=\"carousel-indicators\">\n        <li data-app-prevent-settings=\"\" data-target=\"#slider1-3\" class=\" active\" data-slide-to=\"0\">\n        </li>\n        <li data-app-prevent-settings=\"\" data-target=\"#slider1-3\" data-slide-to=\"1\">\n        </li>\n        <li data-app-prevent-settings=\"\" data-target=\"#slider1-3\" data-slide-to=\"2\">\n        </li>\n      </ol>\n      <div class=\"carousel-inner\" role=\"listbox\">\n        <div class=\"carousel-item slider-fullscreen-image active\" data-bg-video-slide=\"false\"\n          style=\"background-image: url(assets/images/1.jpg);\">\n          <div class=\"container container-slide\">\n            <div class=\"image_wrapper\">\n              <div class=\"mbr-overlay\" style=\"opacity: 0;\">\n              </div>\n              <img src=\"assets/images/1.jpg\">\n              <div class=\"carousel-caption justify-content-center\">\n                <div class=\"col-10 align-center\">\n                  <h2 class=\"mbr-fonts-style display-1\">\n                    St. Mina Retreat Center\n                  </h2>\n                  <div class=\"mbr-section-btn\" buttons=\"0\">\n                    <a class=\"btn  display-4 btn-secondary\" href=\"/donate\">\n                      Donate\n                    </a>\n                    <a class=\"btn  btn-white-outline display-4\" href=\"/calendar\">\n                      Calendar\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"carousel-item slider-fullscreen-image\" data-bg-video-slide=\"false\"\n          style=\"background-image: url(assets/images/2.jpg);\">\n          <div class=\"container container-slide\">\n            <div class=\"image_wrapper\">\n              <div class=\"mbr-overlay\">\n              </div>\n              <img src=\"assets/images/2.jpg\">\n              <div class=\"carousel-caption justify-content-center\">\n                <div class=\"col-10 align-left\">\n                  <h2 class=\"mbr-fonts-style display-1\">\n                    St. Mina Retreat Center</h2>\n                  <div class=\"mbr-section-btn\" buttons=\"0\">\n                      <a class=\"btn  display-4 btn-secondary\" href=\"/donate\">\n                        Donate\n                      </a>\n                      <a class=\"btn  btn-white-outline display-4\" href=\"/calendar\">\n                        Calendar\n                      </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"carousel-item slider-fullscreen-image\" data-bg-video-slide=\"false\"\n          style=\"background-image: url(assets/images/3.jpg);\">\n          <div class=\"container container-slide\">\n            <div class=\"image_wrapper\">\n              <div class=\"mbr-overlay\">\n              </div>\n              <img src=\"assets/images/3.jpg\">\n              <div class=\"carousel-caption justify-content-center\">\n                <div class=\"col-10 align-right\">\n                  <h2 class=\"mbr-fonts-style display-1\">\n                    St. Mina Retreat Center\n                  </h2>\n                  <div class=\"mbr-section-btn\" buttons=\"0\">\n                      <a class=\"btn  display-4 btn-secondary\" href=\"/donate\">\n                        Donate\n                      </a>\n                      <a class=\"btn  btn-white-outline display-4\" href=\"/calendar\">\n                        Calendar\n                      </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/lodging/lodging.component.html":
/*!************************************************!*\
  !*** ./src/app/lodging/lodging.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  lodging works!\n</p>\n"

/***/ }),

/***/ "./src/app/lodging/lodging.component.scss":
/*!************************************************!*\
  !*** ./src/app/lodging/lodging.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZGdpbmcvbG9kZ2luZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/lodging/lodging.component.ts":
/*!**********************************************!*\
  !*** ./src/app/lodging/lodging.component.ts ***!
  \**********************************************/
/*! exports provided: LodgingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LodgingComponent", function() { return LodgingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LodgingComponent = /** @class */ (function () {
    function LodgingComponent() {
    }
    LodgingComponent.prototype.ngOnInit = function () {
    };
    LodgingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lodging',
            template: __webpack_require__(/*! ./lodging.component.html */ "./src/app/lodging/lodging.component.html"),
            styles: [__webpack_require__(/*! ./lodging.component.scss */ "./src/app/lodging/lodging.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LodgingComponent);
    return LodgingComponent;
}());



/***/ }),

/***/ "./src/app/post/post-resolver.service.ts":
/*!***********************************************!*\
  !*** ./src/app/post/post-resolver.service.ts ***!
  \***********************************************/
/*! exports provided: PostResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostResolverService", function() { return PostResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _posts_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../posts/post.service */ "./src/app/posts/post.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/router-plugin */ "./node_modules/@ngxs/router-plugin/fesm5/ngxs-router-plugin.js");







var PostResolverService = /** @class */ (function () {
    function PostResolverService(postService, store) {
        this.postService = postService;
        this.store = store;
    }
    PostResolverService.prototype.resolve = function (route) {
        var _this = this;
        var id = route.paramMap.get('id');
        this.postService.GetPost(id).get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (post) {
            if (post) {
                _this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_6__["Navigate"](['/posts/' + id]));
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(post);
            }
            else { // id not found
                _this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_6__["Navigate"](['/posts']));
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
            }
        }));
    };
    PostResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], PostResolverService);
    return PostResolverService;
}());



/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   \n</div>"

/***/ }),

/***/ "./src/app/post/post.component.scss":
/*!******************************************!*\
  !*** ./src/app/post/post.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts/post.service */ "./src/app/posts/post.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _shared_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/app.state */ "./src/app/shared/app.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var PostComponent = /** @class */ (function () {
    function PostComponent(store, service, router) {
        this.store = store;
        this.service = service;
        this.router = router;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (post) {
            _this.LoadPost(post.id);
        });
    };
    PostComponent.prototype.LoadPost = function (post) {
        var _this = this;
        this.service.GetPost(post).get().subscribe(function (post) {
            _this.post = post.data();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_shared_app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostComponent.prototype, "user$", void 0);
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.scss */ "./src/app/post/post.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _posts_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/posts/post.service.ts":
/*!***************************************!*\
  !*** ./src/app/posts/post.service.ts ***!
  \***************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var PostService = /** @class */ (function () {
    function PostService(db) {
        this.db = db;
    }
    PostService.prototype.GetPost = function (id) {
        return this.db.collection("posts").doc(id);
    };
    PostService.prototype.GetPosts = function () {
        return this.db.collection("posts");
    };
    PostService.prototype.CreatePost = function (post) {
        var id = this.db.createId();
        var data = {
            id: id,
            name: post.name,
            body: post.body,
            date: post.date
        };
        return this.db.collection("posts").doc(id).set(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data));
    };
    PostService.prototype.EditPost = function (post) {
        var postsRef = this.db.collection("posts");
        var ref = postsRef.doc(post.id);
        return ref.set({
            body: post.body,
            name: post.name,
            date: post.date
        }, { merge: true });
    };
    PostService.prototype.DeletePost = function (id) {
        var postsRef = this.db.collection("posts");
        var ref = postsRef.doc(id);
        return ref.delete();
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <button mat-raised-button *ngIf=\"admin\" (click)=\"PostDialog()\">Create Post</button>\n  <hr *ngIf=\"admin\">\n  <div class=\"card-columns\">\n    <div class=\"card\" *ngFor=\"let item of items | async | orderBy:'date':true\">\n      <div (click)=\"GetPost(item.id)\" class=\"pointer\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{item.name}}</h5>\n          <mat-card-footer><small>{{item.date | date}}</small></mat-card-footer>\n          <div *ngIf=\"admin\">\n            <button mat-button (click)=\"PostDialog(item)\">edit</button>\n            <button mat-button (click)=\"DeletePost(item.id)\">delete</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cdk-overlay-pane {\n  max-width: 100vw !important; }\n\n.pointer {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZXNob3loYW5uYS9Bbmd1bGFyRmlyZXN0b3JlSzhzL2FuZ3VsYXItZmlyZXN0b3JlLWs4cy9zcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksMkJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2RrLW92ZXJsYXktcGFuZVxuICB7XG4gICAgbWF4LXdpZHRoOiAxMDB2dyFpbXBvcnRhbnQ7XG4gIH1cblxuICAucG9pbnRlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _forms_post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/post-dialog/post-dialog.component */ "./src/app/forms/post-dialog/post-dialog.component.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _shared_app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/app.state */ "./src/app/shared/app.state.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.service */ "./src/app/posts/post.service.ts");
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile/profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/router-plugin */ "./node_modules/@ngxs/router-plugin/fesm5/ngxs-router-plugin.js");









var PostsComponent = /** @class */ (function () {
    function PostsComponent(store, postService, userService, dialog, snackBar) {
        var _this = this;
        this.store = store;
        this.postService = postService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.admin = false;
        this.items = postService.GetPosts().valueChanges();
        this.user$.subscribe(function (user) {
            userService.GetUser(user.uid).get().subscribe(function (doc) {
                if (doc && doc.data() && doc.data().admin) {
                    _this.admin = doc.data().admin;
                }
            });
        });
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent.prototype.GetPost = function (id) {
        this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_8__["Navigate"](["/posts/" + id]));
    };
    PostsComponent.prototype.CreatePost = function (post) {
        var _this = this;
        this.postService.CreatePost(post)
            .then(function (x) { return _this.snackBar.open("Created Post!", "OKAY", { duration: 3000 }); })
            .catch(function (x) { return _this.onError(x); });
    };
    PostsComponent.prototype.EditPost = function (post) {
        var _this = this;
        this.postService.EditPost(post)
            .then(function (x) { return _this.snackBar.open("Updated Post", "OKAY", { duration: 2000 }); })
            .catch(function (x) { return _this.onError(x); });
    };
    PostsComponent.prototype.DeletePost = function (id) {
        var _this = this;
        this.postService.DeletePost(id)
            .then(function (x) { return _this.snackBar.open("Deleted Post", "OKAY", { duration: 2000 }); })
            .catch(function (x) { return _this.onError(x); });
    };
    PostsComponent.prototype.PostDialog = function (item) {
        var _this = this;
        if (item === void 0) { item = {}; }
        var dialogRef = this.dialog.open(_forms_post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_3__["PostDialogComponent"], {
            width: '100%',
            height: '100%',
            data: {
                id: item.id,
                body: item.body,
                name: item.name,
                date: item.date
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.Post(result);
        });
    };
    PostsComponent.prototype.Post = function (result) {
        if (result.id) {
            this.EditPost(result);
        }
        else {
            this.CreatePost(result);
        }
    };
    PostsComponent.prototype.onError = function (error) {
        alert(error);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_shared_app_state__WEBPACK_IMPORTED_MODULE_5__["AppState"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostsComponent.prototype, "user$", void 0);
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/posts/posts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"], _profile_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/profile/copier.service.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/copier.service.ts ***!
  \*******************************************/
/*! exports provided: CopierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopierService", function() { return CopierService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");






var CopierService = /** @class */ (function () {
    function CopierService(db, afAuth, http) {
        this.db = db;
        this.afAuth = afAuth;
        this.http = http;
    }
    CopierService.prototype.ForkParentRepository = function (authToken) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append('Accept', 'application/vnd.github.v3+json');
        headers.set('Authorization', 'token ' + authToken);
        return this.http.post("https://api.github.com/repos/behoyh/AngularFirestoreK8s/forks", {}, { headers: headers });
    };
    CopierService.prototype.SignInGithub = function () {
        var provider = new firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].GithubAuthProvider();
        provider.addScope('repo');
        provider.setCustomParameters({
            'allow_signup': 'true'
        });
        return this.afAuth.auth.signInWithPopup(provider);
    };
    CopierService.prototype.LinkToAccount = function (email, password, pendingCred) {
        var _this = this;
        // Get sign-in methods for this email.
        this.afAuth.auth.fetchSignInMethodsForEmail(email).then(function (methods) {
            // Step 3.
            // If the user has several sign-in methods,
            // the first method in the list will be the "recommended" method to use.
            if (methods[0] === 'password') {
                // Asks the user his password.
                // In real scenario, you should handle this asynchronously.
                // TODO: Setup a extra feild with a password prompt to take in a password instead of hardcoded string.
                _this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (user) {
                    // Step 4a.
                    return user.link(pendingCred);
                }).then(function () {
                    // GitHub account successfully linked to the existing Firebase user.
                    return;
                });
                return;
            }
        });
    };
    ;
    CopierService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]])
    ], CopierService);
    return CopierService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"Info\">\n    <div class=\"profile-picture mat-elevation-z1\" matRipple><img [src]=\"picture$ | async\"></div>\n    <mat-form-field>\n      <input matInput placeholder=\"Username\" [ngModel]=\"displayName$ | async\" />\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Primary Email\"  [ngModel]=\"email$ | async\"/>\n    </mat-form-field>\n  </mat-tab>\n  <mat-tab label=\"Copy This Blog For Me!\">\n    <mat-horizontal-stepper [linear]=\"true\" #stepper (selectionChange)=\"StepChanged($event)\">\n      <mat-step [stepControl]=\"GoogleAuthForm\">\n        <form [formGroup]=\"GoogleAuthForm\">\n          <ng-template matStepLabel>Before we begin</ng-template>\n          <h3>Let's do this! Here is the game plan:</h3>\n          <ul>\n            <li>Authenticate with GitHub (GitLab coming soon). \n                We will use this to fork the parent project on your behalf.</li>\n            <li>Put your Cloud Firestore info here so we can link it to your shiny new blog.</li>\n            <li>OPTIONAL: Decide if you'd like your site to be copied by others. \n                We will need to configure a few more things if you decide to allow coping.</li>\n            <li>Setup your Docker Hub account so we can build your blog image.</li>\n            <li>Link your Azure AKS or Google Cloud GKS so we can issue the command to launch your new blog!</li>\n            <li>Let's Encrypt autmatically enables https on your new blog for security.</li>\n            <li>We will give you your IP address here. You can view your website using the IP.</li>\n            <li>OPTIONAL: Setup a domain account and get a domain name for your new website!</li>\n          </ul>\n          <div>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"GoogleAuthForm\">\n        <form [formGroup]=\"GoogleAuthForm\">\n          <ng-template matStepLabel>Login With GitHub</ng-template>\n          <p>The first step is to login with your prefered source control credentails. \n            We will fork the parent repository for you.</p>\n            <div class=\"card\" style=\"width: 18rem;\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">Login With Github</h5>\n                  <p class=\"card-text\">You will need a Github account.</p>\n                  <button (click)=\"LinkGitHub()\" mat-button><i class=\"fab fa-github\"> &nbsp;Sign In</i></button>\n                  <span class=\"badge badge-pill badge-success\" *ngIf=\"GitHubLinked!=false\">@{{GitHubUsername}}</span>\n                </div>\n              </div>\n              <div class=\"card\" style=\"width: 18rem;\">\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title\">Login With GitLab</h5>\n                    <p class=\"card-text\">Coming Soon!</p>\n                    <a href=\"#\" class=\"btn btn-primary\" disabled>Login With GitLab</a>\n                  </div>\n                </div>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"GoogleAuthForm\">\n        <form [formGroup]=\"GoogleAuthForm\">\n          <ng-template matStepLabel>Fork Parent Repo</ng-template>\n          <h3>Now we are going to clone you a copy</h3>\n          <h5>Parent Repo: {{parentRepo}}</h5>\n         <p>Click the button below to clone the parent repo into your GitHub account</p>\n         <p>You can also do this manually. The next button should light up below once this is completed.</p>\n         <button (click)=\"GitHubForkProject()\" mat-button><i class=\"fas fa-clone\"> &nbsp;Clone</i></button>\n          <div>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"GoogleAuthForm\">\n        <form [formGroup]=\"GoogleAuthForm\">\n          <ng-template matStepLabel>Link Docker Hub</ng-template>\n          <h3>Nice! Almost There.</h3>\n          <h5>Now we are going to link your new repository to Docker Hub.</h5>\n         <p>This will allow you to deploy your new app to Azure, Amazon, or even your own on-prem Kubernetes cluster!</p>\n         <button mat-button><i class=\"fab fa-docker\"> &nbsp; Docker Hub</i></button>\n          <div>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step>\n        <ng-template matStepLabel>Done</ng-template>\n        You are now done.\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button (click)=\"stepper.reset()\">Reset</button>\n        </div>\n      </mat-step>\n    </mat-horizontal-stepper>\n  </mat-tab>\n  <mat-tab label=\"Change Password\">\n    <mat-form-field>\n      <input matInput placeholder=\"Current Password\" />\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"New Password\" />\n    </mat-form-field>\n  </mat-tab>\n  <mat-tab label=\"Logout\">\n      <button mat-button (click)=\"logout()\">Logout</button>\n    </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-picture {\n  cursor: pointer;\n  text-align: center;\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n  border-radius: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZXNob3loYW5uYS9Bbmd1bGFyRmlyZXN0b3JlSzhzL2FuZ3VsYXItZmlyZXN0b3JlLWs4cy9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFFbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFFbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBRXJCLHVCQUF1QjtFQUN2Qix3Q0FBd0M7RUFFeEMsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1waWN0dXJlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzAwcHg7XHJcbiAgXHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIFxyXG4gICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _shared_app_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/app.actions */ "./src/app/shared/app.actions.ts");
/* harmony import */ var _shared_app_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/app.state */ "./src/app/shared/app.state.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngxs/router-plugin */ "./node_modules/@ngxs/router-plugin/fesm5/ngxs-router-plugin.js");
/* harmony import */ var _copier_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./copier.service */ "./src/app/profile/copier.service.ts");











var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(store, profileService, copierService, snackBar) {
        this.store = store;
        this.profileService = profileService;
        this.copierService = copierService;
        this.snackBar = snackBar;
        this.displayName$ = '';
        this.parentRepo = "Ur Mom";
        this.user = { credential: null, user: null };
        this.GitHubLinked = false;
        this.GitHubUsername = '';
        this.GitHubAuthToken = '';
        this.GoogleAuthForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"],
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"],
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]
        });
    }
    ProfileComponent.prototype.LoginGoogle = function () {
        var _this = this;
        this.profileService.SignInGoogle()
            .then(function (x) { return _this.OAuthUser(x); });
    };
    //Mishmitewaka
    ProfileComponent.prototype.OAuthUser = function (user) {
        this.snackBar.open("Signed in " + user.displayName, "OKAY", { duration: 3000 });
    };
    ProfileComponent.prototype.logout = function () {
        this.profileService.SignOut();
        this.store.dispatch([
            new _shared_app_actions__WEBPACK_IMPORTED_MODULE_6__["SetUser"]({
                uid: null,
                name: '',
                email: '',
                picture: ''
            }),
            new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_9__["Navigate"](['/'])
        ]);
    };
    ProfileComponent.prototype.StepChanged = function (event) {
        var _this = this;
        if (event.selectedIndex == 2) {
            this.profileService.CreateUser("", this.GoogleAuthForm.controls.email.value, this.GoogleAuthForm.controls.confirmPassword.value)
                .then(function (x) { return _this.UserLogin(x); })
                .catch(function (x) { return _this.onError(x); });
        }
    };
    ProfileComponent.prototype.UserLogin = function (user) {
        user.user.updateProfile({
            displayName: 'remoteUser.additionalUserInfo.profile.name',
            photoURL: 'remoteUser.additionalUserInfo.profile.picture'
        });
        this.store.dispatch([
            new _shared_app_actions__WEBPACK_IMPORTED_MODULE_6__["SetUser"]({
                uid: user.user.uid,
                name: user.user.displayName,
                email: user.user.email,
                picture: user.user.photoURL
            })
        ]);
        this.snackBar.open("Added User.", "OKAY", { duration: 3000 });
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    // https://docs.gitlab.com/ce/api/projects.html#fork-project
    ProfileComponent.prototype.GitHubForkProject = function () {
        this.copierService.ForkParentRepository(this.GitHubAuthToken)
            .subscribe(function (x) { return alert(JSON.stringify(x.json())); }, function (x) { return alert(x); });
    };
    ProfileComponent.prototype.LinkGitHub = function () {
        var _this = this;
        this.copierService.SignInGithub().then(function (result) {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            if (result.additionalUserInfo.providerId == "github.com") {
                debugger;
                _this.GitHubLinked = true;
                _this.GitHubUsername = result.additionalUserInfo.username;
                _this.GitHubAuthToken = result.credential.accessToken;
            }
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            // An error happened.
            if (error.code === 'auth/account-exists-with-different-credential') {
                // Step 2.
                // User's email already exists.
                // The pending GitHub credential.
                var pendingCred = error.credential;
                // The provider account's email address.
                var email = error.email;
                _this.copierService.LinkToAccount(email, "{password here}", pendingCred);
            }
        });
    };
    ;
    ProfileComponent.prototype.onError = function (error) {
        alert(error);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_shared_app_state__WEBPACK_IMPORTED_MODULE_7__["AppState"].getUserEmail),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"])
    ], ProfileComponent.prototype, "email$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_shared_app_state__WEBPACK_IMPORTED_MODULE_7__["AppState"].getUserPicture),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"])
    ], ProfileComponent.prototype, "picture$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileComponent.prototype, "router$", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"], _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"], _copier_service__WEBPACK_IMPORTED_MODULE_10__["CopierService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var js_sha512__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-sha512 */ "./node_modules/js-sha512/src/sha512.js");
/* harmony import */ var js_sha512__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_sha512__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _shared_app_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/app.actions */ "./src/app/shared/app.actions.ts");








var ProfileService = /** @class */ (function () {
    function ProfileService(store, db, afAuth) {
        var _this = this;
        this.store = store;
        this.db = db;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.store.dispatch([
                    new _shared_app_actions__WEBPACK_IMPORTED_MODULE_7__["SetUser"]({
                        uid: user.uid,
                        name: user.displayName,
                        email: user.email,
                        picture: user.photoURL
                    })
                ]);
            }
        });
    }
    ProfileService.prototype.SignInGoogle = function () {
        return this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider().setCustomParameters({
            prompt: 'select_account'
        }));
    };
    ProfileService.prototype.SignOut = function () {
        this.afAuth.auth.signOut();
    };
    ProfileService.prototype.Login = function (email, password) {
        return this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password);
    };
    ProfileService.prototype.CreateUser = function (name, email, password) {
        return this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, js_sha512__WEBPACK_IMPORTED_MODULE_5__["sha512"](password));
    };
    ProfileService.prototype.GetUser = function (id) {
        return this.db.collection('users').doc(id);
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  services works!\n</p>\n"

/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/shared/app.actions.ts":
/*!***************************************!*\
  !*** ./src/app/shared/app.actions.ts ***!
  \***************************************/
/*! exports provided: SetUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUser", function() { return SetUser; });
var SetUser = /** @class */ (function () {
    function SetUser(payload) {
        this.payload = payload;
    }
    SetUser.type = '[app] set user';
    return SetUser;
}());



/***/ }),

/***/ "./src/app/shared/app.state.ts":
/*!*************************************!*\
  !*** ./src/app/shared/app.state.ts ***!
  \*************************************/
/*! exports provided: AppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppState", function() { return AppState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.actions */ "./src/app/shared/app.actions.ts");



var AppState = /** @class */ (function () {
    function AppState() {
    }
    AppState.getUserPicture = function (state) {
        return state.picture;
    };
    AppState.getUserEmail = function (state) {
        return state.email;
    };
    AppState.getUserUid = function (state) {
        return state.email;
    };
    AppState.getName = function (state) {
        return state.name;
    };
    AppState.prototype.setUser = function (_a, _b) {
        var setState = _a.setState;
        var payload = _b.payload;
        setState({
            uid: payload.uid,
            name: payload.name,
            email: payload.email,
            picture: payload.picture
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_app_actions__WEBPACK_IMPORTED_MODULE_2__["SetUser"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _app_actions__WEBPACK_IMPORTED_MODULE_2__["SetUser"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppState.prototype, "setUser", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppState, "getUserPicture", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppState, "getUserEmail", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppState, "getUserUid", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppState, "getName", null);
    AppState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: 'app',
            defaults: {
                uid: null,
                name: '',
                email: '',
                picture: ''
            }
        })
    ], AppState);
    return AppState;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: '<APIKEY>',
        authDomain: '<AUTHDOMAIN>',
        databaseURL: '<BASEURL>',
        projectId: '<PROJECTID>',
        storageBucket: '<STORAGEBUCKET>',
        messagingSenderId: '<MESSAGESENDERID>'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/beshoyhanna/AngularFirestoreK8s/angular-firestore-k8s/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map