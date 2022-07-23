"use strict";
(self["webpackChunkempRecordManager"] = self["webpackChunkempRecordManager"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation.service */ 2813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', redirectTo: 'routing/emp-list', pathMatch: 'full' },
    { path: 'routing', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 8950)).then(m => m.PagesModule) },
    { path: '**', redirectTo: 'routing/emp-list', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [_validation_service__WEBPACK_IMPORTED_MODULE_0__.ValidationService], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'empRecordManager';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "header-style"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Employee Record Manager\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".header-style[_ngcontent-%COMP%] {\n  min-height: 50px;\n  background-color: #4caf50;\n  font-size: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXN0eWxlIHtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-in-memory-web-api */ 1969);
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./in-memory-data.service */ 2003);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.HttpClientInMemoryWebApiModule.forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_1__.InMemoryDataService, { dataEncapsulation: false })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.HttpClientInMemoryWebApiModule] }); })();


/***/ }),

/***/ 2003:
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InMemoryDataService": () => (/* binding */ InMemoryDataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class InMemoryDataService {
    createDb() {
        const employees = [
            {
                id: 1,
                empGeneral: {
                    firstName: 'John Doe',
                    lastName: 'Tailor',
                    fullName: 'John Doe Tailor',
                    dob: '1991-01-20',
                    age: 26,
                },
                empContact: {
                    email: 'xyz@gmail.com',
                    phone: '979-979-9797',
                    socialInfo: [
                        {
                            url: 's/s',
                            type: 'facebook',
                        },
                    ],
                },
                empSkill: [
                    {
                        skill: 'angular',
                        rate: 7.5,
                    },
                    {
                        skill: 'javascript',
                        rate: 7,
                    },
                ],
                empExperience: [
                    {
                        companyName: 's',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc1.com',
                        role: 'junior developer',
                        fromDate: '2015-06-06',
                        toDate: '2018-03-31',
                        experience: 3,
                    },
                    {
                        companyName: 'abc2',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc2.com',
                        role: 'senior developer',
                        fromDate: '2018-04-01',
                        toDate: '2020-04-01',
                        experience: 2,
                    },
                ],
            },
            {
                id: 2,
                empGeneral: {
                    firstName: 'Vincent',
                    lastName: 'Board',
                    fullName: 'Vincent Board',
                    dob: '1991-01-20',
                    age: 28,
                },
                empContact: {
                    email: 'xyz@gmail.com',
                    phone: '979-979-9797',
                    socialInfo: [
                        {
                            url: '/john-doe',
                            type: 'facebook',
                        },
                    ],
                },
                empSkill: [
                    {
                        skill: 'angular',
                        rate: 7.5,
                    },
                    {
                        skill: 'javascript',
                        rate: 7,
                    },
                ],
                empExperience: [
                    {
                        companyName: 'abc1',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc1.com',
                        role: 'junior developer',
                        fromDate: '26-06-2015',
                        toDate: '31-03-2018',
                        experience: '3',
                    },
                    {
                        companyName: 'abc2',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc2.com',
                        role: 'senior developer',
                        fromDate: '01-04-2018',
                        toDate: 'present',
                        experience: '2',
                    },
                ],
            },
            {
                id: 3,
                empGeneral: {
                    firstName: 'Rtosh',
                    lastName: 'Tailor',
                    fullName: 'Rtosh Tailor',
                    dob: '1991-01-20',
                    age: 26,
                },
                empContact: {
                    email: 'xyz@gmail.com',
                    phone: '979-979-9797',
                    socialInfo: [
                        {
                            url: '/john-doe',
                            type: 'facebook',
                        },
                    ],
                },
                empSkill: [
                    {
                        skill: 'angular',
                        rate: 7.5,
                    },
                    {
                        skill: 'javascript',
                        rate: 7,
                    },
                ],
                empExperience: [
                    {
                        companyName: 'abc1',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc1.com',
                        role: 'junior developer',
                        fromDate: '26-06-2015',
                        toDate: '31-03-2018',
                        experience: '3',
                    },
                    {
                        companyName: 'abc2',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc2.com',
                        role: 'senior developer',
                        fromDate: '01-04-2018',
                        toDate: 'present',
                        experience: '2',
                    },
                ],
            },
            {
                id: 4,
                empGeneral: {
                    firstName: 'John Doe',
                    lastName: 'Tailor',
                    fullName: 'John Doe Tailor',
                    dob: '1991-01-20',
                    age: 26,
                },
                empContact: {
                    email: 'xyz@gmail.com',
                    phone: '979-979-9797',
                    socialInfo: [
                        {
                            url: '/john-doe',
                            type: 'facebook',
                        },
                    ],
                },
                empSkill: [
                    {
                        skill: 'angular',
                        rate: 7.5,
                    },
                    {
                        skill: 'javascript',
                        rate: 7,
                    },
                ],
                empExperience: [
                    {
                        companyName: 'abc1',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc1.com',
                        role: 'junior developer',
                        fromDate: '26-06-2015',
                        toDate: '31-03-2018',
                        experience: '3',
                    },
                    {
                        companyName: 'abc2',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc2.com',
                        role: 'senior developer',
                        fromDate: '01-04-2018',
                        toDate: 'present',
                        experience: '2',
                    },
                ],
            },
            {
                id: 5,
                empGeneral: {
                    firstName: 'John Doe',
                    lastName: 'Tailor',
                    fullName: 'John Doe Tailor',
                    dob: '1991-01-20',
                    age: 26,
                },
                empContact: {
                    email: 'xyz@gmail.com',
                    phone: '979-979-9797',
                    socialInfo: [
                        {
                            url: 's/john-doe',
                            type: 'facebook',
                        },
                    ],
                },
                empSkill: [
                    {
                        skill: 'angular',
                        rate: 7.5,
                    },
                    {
                        skill: 'javascript',
                        rate: 7,
                    },
                ],
                empExperience: [
                    {
                        companyName: 'abc1',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc1.com',
                        role: 'junior developer',
                        fromDate: '26-06-2015',
                        toDate: '31-03-2018',
                        experience: '3',
                    },
                    {
                        companyName: 'abc2',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc2.com',
                        role: 'senior developer',
                        fromDate: '01-04-2018',
                        toDate: 'present',
                        experience: '2',
                    },
                ],
            },
            {
                id: 17,
                empGeneral: {
                    firstName: 'John Doe',
                    lastName: 'Tailor',
                    fullName: 'John Doe Tailor',
                    dob: '1991-01-20',
                    age: 26,
                },
                empContact: {
                    email: 'xyz@gmail.com',
                    phone: '979-979-9797',
                    socialInfo: [
                        {
                            url: '/john-doe',
                            type: 'facebook',
                        },
                    ],
                },
                empSkill: [
                    {
                        skill: 'angular',
                        rate: 7.5,
                    },
                    {
                        skill: 'javascript',
                        rate: 7,
                    },
                ],
                empExperience: [
                    {
                        companyName: 'abc1',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc1.com',
                        role: 'junior developer',
                        fromDate: '26-06-2015',
                        toDate: '31-03-2018',
                        experience: '3',
                    },
                    {
                        companyName: 'abc2',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc2.com',
                        role: 'senior developer',
                        fromDate: '01-04-2018',
                        toDate: 'present',
                        experience: '2',
                    },
                ],
            },
            {
                id: 6,
                empGeneral: {
                    firstName: 'John Doe',
                    lastName: 'Tailor',
                    fullName: 'John Doe Tailor',
                    dob: '1991-01-20',
                    age: 26,
                },
                empContact: {
                    email: 'xyz@gmail.com',
                    phone: '979-979-9797',
                    socialInfo: [
                        {
                            url: '/john-doe',
                            type: 'facebook',
                        },
                    ],
                },
                empSkill: [
                    {
                        skill: 'angular',
                        rate: 7.5,
                    },
                    {
                        skill: 'javascript',
                        rate: 7,
                    },
                ],
                empExperience: [
                    {
                        companyName: 'abc1',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc1.com',
                        role: 'junior developer',
                        fromDate: '26-06-2015',
                        toDate: '31-03-2018',
                        experience: '3',
                    },
                    {
                        companyName: 'abc2',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc2.com',
                        role: 'senior developer',
                        fromDate: '01-04-2018',
                        toDate: 'present',
                        experience: '2',
                    },
                ],
            },
            {
                id: 7,
                empGeneral: {
                    firstName: 'John Doe',
                    lastName: 'Tailor',
                    fullName: 'John Doe Tailor',
                    dob: '1991-01-20',
                    age: 26,
                },
                empContact: {
                    email: 'xyz@gmail.com',
                    phone: '979-979-9797',
                    socialInfo: [
                        {
                            url: '/john-doe',
                            type: 'facebook',
                        },
                    ],
                },
                empSkill: [
                    {
                        skill: 'angular',
                        rate: 7.5,
                    },
                    {
                        skill: 'javascript',
                        rate: 7,
                    },
                ],
                empExperience: [
                    {
                        companyName: 'abc1',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc1.com',
                        role: 'junior developer',
                        fromDate: '26-06-2015',
                        toDate: '31-03-2018',
                        experience: '3',
                    },
                    {
                        companyName: 'abc2',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc2.com',
                        role: 'senior developer',
                        fromDate: '01-04-2018',
                        toDate: 'present',
                        experience: '2',
                    },
                ],
            },
            {
                id: 8,
                empGeneral: {
                    firstName: 'John Doe',
                    lastName: 'Tailor',
                    fullName: 'John Doe Tailor',
                    dob: '1991-01-20',
                    age: 26,
                },
                empContact: {
                    email: 'xyz@gmail.com',
                    phone: '979-979-9797',
                    socialInfo: [
                        {
                            url: '/john-doe',
                            type: 'facebook',
                        },
                    ],
                },
                empSkill: [
                    {
                        skill: 'angular',
                        rate: 7.5,
                    },
                    {
                        skill: 'javascript',
                        rate: 7,
                    },
                ],
                empExperience: [
                    {
                        companyName: 'abc1',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc1.com',
                        role: 'junior developer',
                        fromDate: '26-06-2015',
                        toDate: '31-03-2018',
                        experience: '3',
                    },
                    {
                        companyName: 'abc2',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc2.com',
                        role: 'senior developer',
                        fromDate: '01-04-2018',
                        toDate: 'present',
                        experience: '2',
                    },
                ],
            },
            {
                id: 9,
                empGeneral: {
                    firstName: 'John Doe',
                    lastName: 'Tailor',
                    fullName: 'John Doe Tailor',
                    dob: '1991-01-20',
                    age: 26,
                },
                empContact: {
                    email: 'xyz@gmail.com',
                    phone: '979-979-9797',
                    socialInfo: [
                        {
                            url: '/john-doe',
                            type: 'facebook',
                        },
                    ],
                },
                empSkill: [
                    {
                        skill: 'angular',
                        rate: 7.5,
                    },
                    {
                        skill: 'javascript',
                        rate: 7,
                    },
                ],
                empExperience: [
                    {
                        companyName: 'abc1',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc1.com',
                        role: 'junior developer',
                        fromDate: '26-06-2015',
                        toDate: '31-03-2018',
                        experience: '3',
                    },
                    {
                        companyName: 'abc2',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc2.com',
                        role: 'senior developer',
                        fromDate: '01-04-2018',
                        toDate: 'present',
                        experience: '2',
                    },
                ],
            },
            {
                id: 10,
                empGeneral: {
                    firstName: 'John Doe',
                    lastName: 'Tailor',
                    fullName: 'John Doe Tailor',
                    dob: '1991-01-20',
                    age: 26,
                },
                empContact: {
                    email: 'xyz@gmail.com',
                    phone: '979-979-9797',
                    socialInfo: [
                        {
                            url: '/john-doe',
                            type: 'facebook',
                        },
                    ],
                },
                empSkill: [
                    {
                        skill: 'angular',
                        rate: 7.5,
                    },
                    {
                        skill: 'javascript',
                        rate: 7,
                    },
                ],
                empExperience: [
                    {
                        companyName: 'abc1',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc1.com',
                        role: 'junior developer',
                        fromDate: '26-06-2015',
                        toDate: '31-03-2018',
                        experience: '3',
                    },
                    {
                        companyName: 'abc2',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc2.com',
                        role: 'senior developer',
                        fromDate: '01-04-2018',
                        toDate: 'present',
                        experience: '2',
                    },
                ],
            },
            {
                id: 11,
                empGeneral: {
                    firstName: 'John Doe',
                    lastName: 'Tailor',
                    fullName: 'John Doe Tailor',
                    dob: '1991-01-20',
                    age: 26,
                },
                empContact: {
                    email: 'xyz@gmail.com',
                    phone: '979-979-9797',
                    socialInfo: [
                        {
                            url: '/john-doe',
                            type: 'facebook',
                        },
                    ],
                },
                empSkill: [
                    {
                        skill: 'angular',
                        rate: 7.5,
                    },
                    {
                        skill: 'javascript',
                        rate: 7,
                    },
                ],
                empExperience: [
                    {
                        companyName: 'abc1',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc1.com',
                        role: 'junior developer',
                        fromDate: '26-06-2015',
                        toDate: '31-03-2018',
                        experience: '3',
                    },
                    {
                        companyName: 'abc2',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc2.com',
                        role: 'senior developer',
                        fromDate: '01-04-2018',
                        toDate: 'present',
                        experience: '2',
                    },
                ],
            },
            {
                id: 12,
                empGeneral: {
                    firstName: 'John Doe',
                    lastName: 'Tailor',
                    fullName: 'John Doe Tailor',
                    dob: '1991-01-20',
                    age: 26,
                },
                empContact: {
                    email: 'xyz@gmail.com',
                    phone: '979-979-9797',
                    socialInfo: [
                        {
                            url: '/john-doe',
                            type: 'facebook',
                        },
                    ],
                },
                empSkill: [
                    {
                        skill: 'angular',
                        rate: 7.5,
                    },
                    {
                        skill: 'javascript',
                        rate: 7,
                    },
                ],
                empExperience: [
                    {
                        companyName: 'abc1',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc1.com',
                        role: 'junior developer',
                        fromDate: '2015-06-15',
                        toDate: '31-03-2018',
                        experience: '3',
                    },
                    {
                        companyName: 'abc2',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc2.com',
                        role: 'senior developer',
                        fromDate: '01-04-2018',
                        toDate: 'present',
                        experience: '2',
                    },
                ],
            },
            {
                id: 13,
                empGeneral: {
                    firstName: 'John Doe',
                    lastName: 'Tailor',
                    fullName: 'John Doe Tailor',
                    dob: '1991-01-20',
                    age: 26,
                },
                empContact: {
                    email: 'xyz@gmail.com',
                    phone: '979-979-9797',
                    socialInfo: [
                        {
                            url: '/john-doe',
                            type: 'facebook',
                        },
                    ],
                },
                empSkill: [
                    {
                        skill: 'angular',
                        rate: 7.5,
                    },
                    {
                        skill: 'javascript',
                        rate: 7,
                    },
                ],
                empExperience: [
                    {
                        companyName: 'abc1',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc1.com',
                        role: 'junior developer',
                        fromDate: '26-06-2015',
                        toDate: '31-03-2018',
                        experience: '3',
                    },
                    {
                        companyName: 'abc2',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc2.com',
                        role: 'senior developer',
                        fromDate: '01-04-2018',
                        toDate: 'present',
                        experience: '2',
                    },
                ],
            },
            {
                id: 14,
                empGeneral: {
                    firstName: 'John Doe',
                    lastName: 'Tailor',
                    fullName: 'John Doe Tailor',
                    dob: '1991-01-20',
                    age: 26,
                },
                empContact: {
                    email: 'xyz@gmail.com',
                    phone: '979-979-9797',
                    socialInfo: [
                        {
                            url: '/john-doe',
                            type: 'facebook',
                        },
                    ],
                },
                empSkill: [
                    {
                        skill: 'angular',
                        rate: 7.5,
                    },
                    {
                        skill: 'javascript',
                        rate: 7,
                    },
                ],
                empExperience: [
                    {
                        companyName: 'abc1',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc1.com',
                        role: 'junior developer',
                        fromDate: '26-06-2015',
                        toDate: '31-03-2018',
                        experience: '3',
                    },
                    {
                        companyName: 'abc2',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc2.com',
                        role: 'senior developer',
                        fromDate: '01-04-2018',
                        toDate: 'present',
                        experience: '2',
                    },
                ],
            },
            {
                id: 15,
                empGeneral: {
                    firstName: 'John Doe',
                    lastName: 'Tailor',
                    fullName: 'John Doe Tailor',
                    dob: '1991-01-20',
                    age: 26,
                },
                empContact: {
                    email: 'xyz@gmail.com',
                    phone: '979-979-9797',
                    socialInfo: [
                        {
                            url: '/john-doe',
                            type: 'facebook',
                        },
                    ],
                },
                empSkill: [
                    {
                        skill: 'angular',
                        rate: 7.5,
                    },
                    {
                        skill: 'javascript',
                        rate: 7,
                    },
                ],
                empExperience: [
                    {
                        companyName: 'abc1',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc1.com',
                        role: 'junior developer',
                        fromDate: '26-06-2015',
                        toDate: '31-03-2018',
                        experience: '3',
                    },
                    {
                        companyName: 'abc2',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc2.com',
                        role: 'senior developer',
                        fromDate: '01-04-2018',
                        toDate: 'present',
                        experience: '2',
                    },
                ],
            },
            {
                id: 16,
                empGeneral: {
                    firstName: 'John Doe',
                    lastName: 'Tailor',
                    fullName: 'John Doe Tailor',
                    dob: '1991-01-20',
                    age: 26,
                },
                empContact: {
                    email: 'xyz@gmail.com',
                    phone: '979-979-9797',
                    socialInfo: [
                        {
                            url: '/john-doe',
                            type: 'facebook',
                        },
                    ],
                },
                empSkill: [
                    {
                        skill: 'angular',
                        rate: 7.5,
                    },
                    {
                        skill: 'javascript',
                        rate: 7,
                    },
                ],
                empExperience: [
                    {
                        companyName: 'abc1',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc1.com',
                        role: 'junior developer',
                        fromDate: '26-06-2015',
                        toDate: '31-03-2018',
                        experience: '3',
                    },
                    {
                        companyName: 'abc2',
                        location: {
                            city: 'chennai',
                            country: 'india',
                        },
                        companyUrl: 'www.abc2.com',
                        role: 'senior developer',
                        fromDate: '01-04-2018',
                        toDate: 'present',
                        experience: '2',
                    },
                ],
            },
        ];
        return { employees };
    }
    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(heroes) {
        return heroes.length > 0
            ? Math.max(...heroes.map((hero) => hero.id)) + 1
            : 1;
    }
}
InMemoryDataService.ɵfac = function InMemoryDataService_Factory(t) { return new (t || InMemoryDataService)(); };
InMemoryDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InMemoryDataService, factory: InMemoryDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2813:
/*!***************************************!*\
  !*** ./src/app/validation.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationService": () => (/* binding */ ValidationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ValidationService {
    constructor() { }
    // age abbe 18 or below 80
    static ageValidator() {
        return (control) => {
            const dob = new Date(control.value);
            const diffMs = Date.now() - dob.getTime();
            const ageDt = new Date(diffMs);
            const age = Math.abs(ageDt.getUTCFullYear() - 1970);
            return age > 18 && age < 80 ? null : { invalidAge: true };
        };
    }
    static onlyAlphabetsValidator() {
        return (control) => {
            const onlyAlphabets = control.value.match(/^[A-Za-z\s]*$/);
            return onlyAlphabets ? null : { onlyAlphabets: false };
        };
    }
    static emailValidator() {
        return (control) => {
            const emailMatch = control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
            return emailMatch ? null : { invalidEmailAddress: true };
        };
    }
    static phoneNumberValidator() {
        return (control) => {
            const phoneMatch = control.value.match(/^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/);
            return phoneMatch ? null : { invalidPhoneNumber: true };
        };
    }
    static socialMediaTypeValidator() {
        return (control) => {
            // previous value of typeValidatorArray will be accessed which will exclude
            // the current value
            if (this.typeValidatorArray.length > 1) {
                const unique = this.typeValidatorArray.filter(x => x.type === control.value);
                if (unique.length > 0) {
                    return { socialMediaNotUnique: true };
                }
            }
            return null;
        };
    }
    static socialMediaUrlValidator() {
        return (control) => {
            const urlMatch = control.value.match(/^[A-za-z0-9]+\/[A-za-z0-9]{1}[A-za-z0-9]*$/);
            return urlMatch ? null : { socialMediaUrlMatch: false };
        };
    }
    static storeSocialMediaTypeValidationobjects() {
        return (control) => {
            //  store the current value, this will execute after typeValidator
            this.typeValidatorArray = [...control.value];
            return null;
        };
    }
    static futureDate() {
        return (control) => {
            const currentDate = new Date().getTime();
            const enteredDate = new Date(control.value).getTime();
            return currentDate < enteredDate ? { futureDate: true } : null;
        };
    }
    static rating() {
        return (control) => {
            const rateValue = control.value;
            return rateValue <= 10 ? null : { rateGreaterThanTen: true };
        };
    }
    getValidatorErrorMessage(validatorName, validatorValue) {
        const config = {
            required: 'Required',
            pattern: 'not a required pattern',
            invalidEmailAddress: 'Invalid email address ex: abc@hostname.com',
            minlength: `Minimum length ${validatorValue.requiredLength}`,
            maxlength: `Maximum length ${validatorValue.requiredLength}`,
            invalidAge: 'Please enter dob whose age above 18 and below 80',
            invalidPhoneNumber: 'please enter your phone number like 111-111-1111, only 10 digits allowed',
            socialMediaNotUnique: 'social media already exist',
            futureDate: 'Future date not allowed',
            socialMediaUrlMatch: 'url example abc/cdf',
            onlyAlphabets: 'only alphabets allowed, Please don\'t enter special characters or numbers',
            rateGreaterThanTen: 'Enter a rate less than or equal to 10'
        };
        return config[validatorName];
    }
}
ValidationService.typeValidatorArray = new Array();
ValidationService.ɵfac = function ValidationService_Factory(t) { return new (t || ValidationService)(); };
ValidationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ValidationService, factory: ValidationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map