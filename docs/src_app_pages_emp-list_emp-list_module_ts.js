"use strict";
(self["webpackChunkempRecordManager"] = self["webpackChunkempRecordManager"] || []).push([["src_app_pages_emp-list_emp-list_module_ts"],{

/***/ 1420:
/*!********************************************************************!*\
  !*** ./src/app/generic/i-table/i-table-shared-function.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITableSharedFunctionService": () => (/* binding */ ITableSharedFunctionService)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



class ITableSharedFunctionService {
    constructor(datePipe) {
        this.datePipe = datePipe;
        this.uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
    mutiValueCombination(data, fieldArray, type, callBack) {
        let displayStringArray = [];
        displayStringArray = fieldArray.map(element => {
            return this.getValue(data, element);
        });
        // formatting date in MM-dd-yyyy from yyyy-MM0dd
        if (type === 'date') {
            return this.datePipe.transform(displayStringArray[0], 'MM-dd-yyyy');
        }
        // to execute call back function passed
        if (callBack) {
            return callBack(displayStringArray[0]);
        }
        return displayStringArray.join(' ');
    }
    getValue(data, fieldArray) {
        const tempfieldArray = [...fieldArray];
        if (data[fieldArray[0]]) {
            if (fieldArray.length > 1) {
                const dataForRecursion = data[fieldArray[0]];
                tempfieldArray.shift();
                return this.getValue(dataForRecursion, tempfieldArray);
            }
            else {
                return data[fieldArray[0]] + '';
            }
        }
    }
}
ITableSharedFunctionService.ɵfac = function ITableSharedFunctionService_Factory(t) { return new (t || ITableSharedFunctionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe)); };
ITableSharedFunctionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ITableSharedFunctionService, factory: ITableSharedFunctionService.ɵfac });


/***/ }),

/***/ 6602:
/*!******************************************************!*\
  !*** ./src/app/generic/i-table/i-table.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITableComponent": () => (/* binding */ ITableComponent)
/* harmony export */ });
/* harmony import */ var _pagination_container_pagination_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination-container/pagination-container.component */ 8450);
/* harmony import */ var _i_table_shared_function_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i-table-shared-function.service */ 1420);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _table_container_table_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-container/table-container.component */ 2004);







function ITableComponent_app_pagination_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-pagination-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemFromTo", function ITableComponent_app_pagination_container_0_Template_app_pagination_container_itemFromTo_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.arrayRange($event)); })("searchString", function ITableComponent_app_pagination_container_0_Template_app_pagination_container_searchString_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.filterData($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-table-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sortFieldName", function ITableComponent_app_pagination_container_0_Template_app_table_container_sortFieldName_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.sortData($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("totalRecordsSize", ctx_r0.tableData.length)("numberOfRows", "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableData", ctx_r0.tempDataTable)("settings", ctx_r0.settings);
} }
/**
 * @tableData - Array of objects
 * @settings - headers, content level in the object
 */
class ITableComponent {
    constructor(iTableSharedFunctionService) {
        this.iTableSharedFunctionService = iTableSharedFunctionService;
    }
    ngOnChanges(changes) {
        //  to detect changes when the record deleted
        if (changes && this.startEndArrayState && this.tableData) {
            this.filterTableData = null;
            this.arrayRange(this.startEndArrayState, 'fromFilter');
        }
    }
    ngOnInit() {
    }
    ngAfterViewInit() { }
    /**
     * Function triggered intially by output event from the child component
     * Function is also triggered after applying filter to the data
     */
    arrayRange(startEndArray, fromFilter) {
        this.startEndArrayState = startEndArray;
        if (!this.filterTableData) {
            this.tempDataTable = this.tableData.filter((x, i) => i >= startEndArray[0] && i < startEndArray[1] ? true : false);
            if (fromFilter === 'fromFilter') {
                this.containerComponent.buttonsAfterFilter(this.tableData.length);
            }
        }
        else {
            this.tempDataTable = this.filterTableData.filter((x, i) => i >= startEndArray[0] && i < startEndArray[1] ? true : false);
            if (fromFilter === 'fromFilter') {
                this.containerComponent.buttonsAfterFilter(this.filterTableData.length);
            }
        }
    }
    filterData(x) {
        // execute when search strig is available
        if (x[0] !== '') {
            const searchField = this.settings.fieldDefinition;
            let searchString = '';
            const subString = x[0].toLowerCase();
            this.filterTableData = this.tableData.filter((item) => {
                const matchFound = searchField.filter(searchObject => {
                    searchString = this.iTableSharedFunctionService.mutiValueCombination(item, searchObject.contentArray);
                    if (searchString.toLowerCase().includes(subString)) {
                        return true;
                    }
                });
                return matchFound.length > 0;
            });
        }
        else {
            // to reinitialize the data when there is an empty search term
            this.filterTableData = null;
        }
        // move to the first page of table
        const noOfRecords = this.startEndArrayState[1] - this.startEndArrayState[0];
        this.arrayRange([0, noOfRecords], 'fromFilter');
    }
    sortData(x) {
    }
}
ITableComponent.ɵfac = function ITableComponent_Factory(t) { return new (t || ITableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_i_table_shared_function_service__WEBPACK_IMPORTED_MODULE_1__.ITableSharedFunctionService)); };
ITableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ITableComponent, selectors: [["app-i-table"]], viewQuery: function ITableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_pagination_container_pagination_container_component__WEBPACK_IMPORTED_MODULE_0__.PaginationContainerComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.containerComponent = _t.first);
    } }, inputs: { tableData: "tableData", settings: "settings" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_i_table_shared_function_service__WEBPACK_IMPORTED_MODULE_1__.ITableSharedFunctionService]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "totalRecordsSize", "numberOfRows", "itemFromTo", "searchString", 4, "ngIf"], [3, "totalRecordsSize", "numberOfRows", "itemFromTo", "searchString"], [3, "tableData", "settings", "sortFieldName"]], template: function ITableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ITableComponent_app_pagination_container_0_Template, 2, 4, "app-pagination-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tableData);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _pagination_container_pagination_container_component__WEBPACK_IMPORTED_MODULE_0__.PaginationContainerComponent, _table_container_table_container_component__WEBPACK_IMPORTED_MODULE_2__.TableContainerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5954:
/*!***************************************************!*\
  !*** ./src/app/generic/i-table/i-table.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITableModule": () => (/* binding */ ITableModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _i_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i-table.component */ 6602);
/* harmony import */ var _pagination_container_pagination_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination-container/pagination-container.component */ 8450);
/* harmony import */ var _table_container_table_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-container/table-container.component */ 2004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class ITableModule {
}
ITableModule.ɵfac = function ITableModule_Factory(t) { return new (t || ITableModule)(); };
ITableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ITableModule });
ITableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ITableModule, { declarations: [_i_table_component__WEBPACK_IMPORTED_MODULE_0__.ITableComponent, _pagination_container_pagination_container_component__WEBPACK_IMPORTED_MODULE_1__.PaginationContainerComponent, _table_container_table_container_component__WEBPACK_IMPORTED_MODULE_2__.TableContainerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_i_table_component__WEBPACK_IMPORTED_MODULE_0__.ITableComponent, _pagination_container_pagination_container_component__WEBPACK_IMPORTED_MODULE_1__.PaginationContainerComponent, _table_container_table_container_component__WEBPACK_IMPORTED_MODULE_2__.TableContainerComponent] }); })();


/***/ }),

/***/ 8450:
/*!****************************************************************************************!*\
  !*** ./src/app/generic/i-table/pagination-container/pagination-container.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationContainerComponent": () => (/* binding */ PaginationContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _i_table_shared_function_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../i-table-shared-function.service */ 1420);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function PaginationContainerComponent_nav_20_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationContainerComponent_nav_20_ng_container_5_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.jumToThisPage(i_r8 + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("id", "", ctx_r9.iTableSharedFunctionService.uuid, "-", i_r8 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r8 + 1);
} }
function PaginationContainerComponent_nav_20_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PaginationContainerComponent_nav_20_ng_container_5_div_1_Template, 2, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.pageNumberSelected && ctx_r2.pageNumberSelected === ctx_r2.totalDivisions.length && ctx_r2.pageNumberSelected - 3 === i_r8);
} }
function PaginationContainerComponent_nav_20_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationContainerComponent_nav_20_ng_container_6_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.jumToThisPage(i_r15 + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("id", "", ctx_r16.iTableSharedFunctionService.uuid, "-", i_r15 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r15 + 1);
} }
function PaginationContainerComponent_nav_20_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PaginationContainerComponent_nav_20_ng_container_6_div_1_Template, 2, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.pageNumberSelected && ctx_r3.pageNumberSelected !== 1 && ctx_r3.pageNumberSelected - 2 === i_r15);
} }
function PaginationContainerComponent_nav_20_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationContainerComponent_nav_20_ng_container_7_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const i_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.jumToThisPage(i_r22 + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("id", "", ctx_r23.iTableSharedFunctionService.uuid, "-", i_r22 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r22 + 1);
} }
function PaginationContainerComponent_nav_20_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PaginationContainerComponent_nav_20_ng_container_7_div_1_Template, 2, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r22 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.pageNumberSelected && ctx_r4.pageNumberSelected === i_r22 + 1);
} }
function PaginationContainerComponent_nav_20_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationContainerComponent_nav_20_ng_container_8_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r31.jumToThisPage(i_r29 + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("id", "", ctx_r30.iTableSharedFunctionService.uuid, "-", i_r29 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r29 + 1);
} }
function PaginationContainerComponent_nav_20_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PaginationContainerComponent_nav_20_ng_container_8_div_1_Template, 2, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r29 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.pageNumberSelected && ctx_r5.pageNumberSelected !== ctx_r5.totalDivisions.length && ctx_r5.pageNumberSelected + 1 === i_r29 + 1);
} }
function PaginationContainerComponent_nav_20_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationContainerComponent_nav_20_ng_container_9_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r38.jumToThisPage(i_r36 + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("id", "", ctx_r37.iTableSharedFunctionService.uuid, "-", i_r36 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r36 + 1);
} }
function PaginationContainerComponent_nav_20_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PaginationContainerComponent_nav_20_ng_container_9_div_1_Template, 2, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r36 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.pageNumberSelected && ctx_r6.pageNumberSelected === 1 && ctx_r6.pageNumberSelected + 2 === i_r36 + 1);
} }
function PaginationContainerComponent_nav_20_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationContainerComponent_nav_20_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r42.jumpToFirst()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationContainerComponent_nav_20_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r44.previous()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u2039");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PaginationContainerComponent_nav_20_ng_container_5_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PaginationContainerComponent_nav_20_ng_container_6_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PaginationContainerComponent_nav_20_ng_container_7_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PaginationContainerComponent_nav_20_ng_container_8_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PaginationContainerComponent_nav_20_ng_container_9_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationContainerComponent_nav_20_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r45.next()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u203A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationContainerComponent_nav_20_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r46.jumpToLast()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.totalDivisions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.totalDivisions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.totalDivisions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.totalDivisions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.totalDivisions);
} }
const _c0 = ["*"];
class PaginationContainerComponent {
    constructor(iTableSharedFunctionService) {
        this.iTableSharedFunctionService = iTableSharedFunctionService;
        this.itemFromTo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.searchString = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.initialLoad = true;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        document.getElementById(this.iTableSharedFunctionService.uuid + '-rows').value = this.numberOfRows;
        this.valueChanged(this.numberOfRows);
    }
    valueChanged(tempNumberOfRows) {
        this.numberOfRows = tempNumberOfRows;
        this.numberOfButtons(Number(tempNumberOfRows));
    }
    numberOfButtons(tempNumberOfRows) {
        let selectedPageId = this.iTableSharedFunctionService.uuid + '-' + this.pageNumberSelected;
        if (this.pageNumberSelected && document.getElementById(selectedPageId)) {
            document.getElementById(selectedPageId).classList.remove('active');
        }
        const noOfPges = Math.ceil(this.totalRecordsSize / tempNumberOfRows);
        setTimeout(function () {
            this.totalDivisions = new Array(noOfPges);
            // table will be initated only after emitting the array range
            this.itemFromTo.emit([0, tempNumberOfRows]);
            this.pageNumberSelected = 1;
            selectedPageId = this.iTableSharedFunctionService.uuid + '-1';
            setTimeout(() => document.getElementById(selectedPageId).classList.add('active'));
        }.bind(this), 0);
    }
    // following function is triggered only from the parent using view child
    buttonsAfterFilter(totalRecordcount) {
        let selectedPageId = this.iTableSharedFunctionService.uuid + '-' + this.pageNumberSelected;
        if (this.pageNumberSelected && document.getElementById(selectedPageId)) {
            document.getElementById(selectedPageId).classList.remove('active');
        }
        const tempNumberOfRows = document.getElementById(this.iTableSharedFunctionService.uuid + '-rows').value;
        const noOfPges = Math.ceil(totalRecordcount / Number(tempNumberOfRows));
        setTimeout(function () {
            this.totalDivisions = new Array(noOfPges);
            this.pageNumberSelected = 1;
            selectedPageId = this.iTableSharedFunctionService.uuid + '-1';
            setTimeout(() => document.getElementById(selectedPageId) ? document.getElementById(selectedPageId).classList.add('active') : null);
        }.bind(this), 0);
    }
    jumpToFirst() {
        // should stop if it is already in first page
        if (this.pageNumberSelected !== 1) {
            const nextNumber = 1;
            this.jumToThisPage(nextNumber);
        }
    }
    previous() {
        // should stop if it is already in first page
        if (this.pageNumberSelected !== 1) {
            const nextNumber = this.pageNumberSelected - 1;
            this.jumToThisPage(nextNumber);
        }
    }
    next() {
        // already in last page no action taken
        if (this.pageNumberSelected !== this.totalDivisions.length) {
            const nextNumber = this.pageNumberSelected + 1;
            this.jumToThisPage(nextNumber);
        }
    }
    jumpToLast() {
        // already in last page no action taken
        if (this.pageNumberSelected !== this.totalDivisions.length) {
            const nextNumber = this.totalDivisions.length;
            this.jumToThisPage(nextNumber);
        }
    }
    jumToThisPage(pageNumber) {
        const previousSelectedPageId = this.iTableSharedFunctionService.uuid + '-' + this.pageNumberSelected;
        document.getElementById(previousSelectedPageId).classList.remove('active');
        this.pageNumberSelected = pageNumber;
        this.itemFromTo.emit([(pageNumber - 1) * Number(this.numberOfRows), pageNumber * Number(this.numberOfRows)]);
        const currentSelectedPageId = this.iTableSharedFunctionService.uuid + '-' + pageNumber;
        // To add the class after the button is actually added by the program
        setTimeout(() => document.getElementById(currentSelectedPageId).classList.add('active'));
    }
    searchFilter(x) {
        this.searchString.emit(x);
    }
}
PaginationContainerComponent.ɵfac = function PaginationContainerComponent_Factory(t) { return new (t || PaginationContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_i_table_shared_function_service__WEBPACK_IMPORTED_MODULE_0__.ITableSharedFunctionService)); };
PaginationContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaginationContainerComponent, selectors: [["app-pagination-container"]], inputs: { totalRecordsSize: "totalRecordsSize", numberOfRows: "numberOfRows" }, outputs: { itemFromTo: "itemFromTo", searchString: "searchString" }, ngContentSelectors: _c0, decls: 21, vars: 2, consts: [[1, "container"], ["type", "text", 3, "keyup"], ["input", ""], ["name", "rows", 3, "id", "change"], ["value", "5"], ["value", "10"], ["value", "15"], ["value", "20"], [1, "container-bottom"], ["class", "pagination", 4, "ngIf"], [1, "pagination"], [3, "click"], [4, "ngFor", "ngForOf"], [3, "id", "click", 4, "ngIf"], [3, "id", "click"]], template: function PaginationContainerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "section")(2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function PaginationContainerComponent_Template_input_keyup_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.searchFilter([_r0.value, ctx.numberOfRows])); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section")(7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Number of records:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PaginationContainerComponent_Template_select_change_9_listener($event) { return ctx.valueChanged($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PaginationContainerComponent_nav_20_Template, 14, 5, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", ctx.iTableSharedFunctionService.uuid, "-rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.totalDivisions && ctx.totalDivisions.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".container[_ngcontent-%COMP%] {\n  margin: 4px;\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: 2px;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 4px;\n}\n.pagination[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border: solid 1px black;\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n}\n.pagination[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n}\n.pagination[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24tY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFDRjtBQUFFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFFSjtBQUNBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUVGO0FBREM7RUFDRyx1QkFBQTtFQUNGLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDRSxxQkFBQTtBQUdKO0FBRkU7RUFDQyx5QkFBQTtFQUNBLFlBQUE7QUFJSDtBQURHO0VBQ0Msc0JBQUE7QUFHSiIsImZpbGUiOiJwYWdpbmF0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXJnaW46IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgc2VjdGlvbiB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDJweDtcbiAgfVxufVxuLnBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiA0cHg7XG5cdGRpdiB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG5cdFx0Y29sb3I6IGJsYWNrO1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHRcdHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHQmLmFjdGl2ZSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuXHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdH1cblx0XHQmOmhvdmVyIHtcblx0XHRcdCY6bm90KC5hY3RpdmUpIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2RkZDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2004:
/*!******************************************************************************!*\
  !*** ./src/app/generic/i-table/table-container/table-container.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableContainerComponent": () => (/* binding */ TableContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _i_table_shared_function_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../i-table-shared-function.service */ 1420);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function TableContainerComponent_table_0_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const definition_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", definition_r4.heading, " ");
} }
function TableContainerComponent_table_0_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const definition_r8 = ctx.$implicit;
    const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.iTableSharedFunctionService.mutiValueCombination(data_r5, definition_r8.contentArray, definition_r8.type, definition_r8.callMethod), " ");
} }
function TableContainerComponent_table_0_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TableContainerComponent_table_0_tr_3_td_1_Template, 2, 1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.settings.fieldDefinition);
} }
function TableContainerComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 2)(1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TableContainerComponent_table_0_th_2_Template, 2, 1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableContainerComponent_table_0_tr_3_Template, 2, 1, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.settings.fieldDefinition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.tableData);
} }
function TableContainerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No data to display\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class TableContainerComponent {
    constructor(iTableSharedFunctionService) {
        this.iTableSharedFunctionService = iTableSharedFunctionService;
        this.sortFieldName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
}
TableContainerComponent.ɵfac = function TableContainerComponent_Factory(t) { return new (t || TableContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_i_table_shared_function_service__WEBPACK_IMPORTED_MODULE_0__.ITableSharedFunctionService)); };
TableContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TableContainerComponent, selectors: [["app-table-container"]], inputs: { tableData: "tableData", settings: "settings" }, outputs: { sortFieldName: "sortFieldName" }, decls: 2, vars: 2, consts: [["class", "table-data", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], [1, "table-data"], [4, "ngFor", "ngForOf"], [1, "no-data"]], template: function TableContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TableContainerComponent_table_0_Template, 4, 2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TableContainerComponent_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings && ctx.tableData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tableData && ctx.tableData.length === 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".table-data[_ngcontent-%COMP%] {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n.table-data[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.table-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-data[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n.table-data[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n.table-data[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n.table-data[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #4CAF50;\n  color: white;\n}\n.no-data[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin: 8px;\n}\n.sort-by-asc[_ngcontent-%COMP%] {\n  left: 3px;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border: solid 5px transparent;\n  margin: 4px 4px 0 3px;\n  background: transparent;\n  border-bottom: solid 7px #F80;\n  border-top-width: 0;\n}\n.sort-by-desc[_ngcontent-%COMP%] {\n  left: 3px;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border: solid 5px transparent;\n  margin: 4px 4px 0 3px;\n  background: transparent;\n  border-top: solid 7px #F80;\n  border-bottom-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlEQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7QUFFSjtBQUFFO0VBQ0Msc0JBQUE7RUFDQSxZQUFBO0FBRUg7QUFDRTtFQUFtQix5QkFBQTtBQUVyQjtBQUFFO0VBQVUsc0JBQUE7QUFHWjtBQURFO0VBQ0MsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBR0g7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQ0E7RUFFSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVBO0VBRUksU0FBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FBQUoiLCJmaWxlIjoidGFibGUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWRhdGEge1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgdGQsIHRoIHtcbiAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICBwYWRkaW5nOiA4cHg7XG4gIH1cblxuICB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XG5cbiAgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxuXG4gIHRoIHtcbiAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG59XG4ubm8tZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogOHB4O1xufVxuXG4uc29ydC1ieS1hc2NcbntcbiAgICBsZWZ0OiAzcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXI6IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW46IDRweCA0cHggMCAzcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgN3B4ICNGODA7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMDtcbn1cblxuLnNvcnQtYnktZGVzY1xue1xuICAgIGxlZnQ6IDNweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlcjogc29saWQgNXB4IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbjogNHB4IDRweCAwIDNweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wOiBzb2xpZCA3cHggI0Y4MDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuIl19 */"] });


/***/ }),

/***/ 5160:
/*!******************************************************!*\
  !*** ./src/app/pages/emp-list/emp-list.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpListComponent": () => (/* binding */ EmpListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _employee_fetch_details_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../employee-fetch-details.service */ 6598);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _generic_i_table_i_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generic/i-table/i-table.component */ 6602);





function EmpListComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", employee_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", employee_r2.id, " ", " " + employee_r2.empGeneral.firstName, " ", " " + employee_r2.empGeneral.lastName, " ");
} }
class EmpListComponent {
    constructor(employeeFetchDetailsService, router) {
        this.employeeFetchDetailsService = employeeFetchDetailsService;
        this.router = router;
        this.employeesSettings = {
            fieldDefinition: [
                {
                    heading: 'id',
                    type: 'string',
                    contentArray: [['id']]
                },
                {
                    heading: 'First name',
                    type: 'string',
                    contentArray: [['empGeneral', 'firstName']]
                },
                {
                    heading: 'Last name',
                    type: 'string',
                    contentArray: [['empGeneral', 'lastName']]
                },
                {
                    heading: 'Full Name',
                    type: 'string',
                    contentArray: [['empGeneral', 'firstName'], ['empGeneral', 'lastName']]
                },
                {
                    heading: 'D.O.B',
                    type: 'date',
                    contentArray: [['empGeneral', 'dob']]
                },
                {
                    heading: 'Age',
                    type: 'age',
                    contentArray: [['empGeneral', 'dob']],
                    callMethod: (date) => {
                        if (date) {
                            const dob = new Date(date);
                            const diffMs = Date.now() - dob.getTime();
                            const ageDt = new Date(diffMs);
                            return Math.abs(ageDt.getUTCFullYear() - 1970);
                        }
                    }
                }
            ]
        };
        this.fetchEmployee();
    }
    ngOnInit() {
    }
    fetchEmployee() {
        this.employeeFetchDetailsService.getEmployees()
            .subscribe(employees => {
            this.employees = employees.sort((employee1, employee2) => Number(employee1.id) - Number(employee2.id));
        });
    }
    addEmployee() {
        this.router.navigate(['/routing/emp-details'], { queryParams: { orderType: 'add' } });
    }
    updateEmployee(id) {
        this.router.navigate(['/routing/emp-details'], { queryParams: { orderType: 'update', id } });
    }
    deleteEmployee(id) {
        this.employeeFetchDetailsService.deleteEmployee(id).subscribe((data) => {
            this.fetchEmployee();
        });
    }
}
EmpListComponent.ɵfac = function EmpListComponent_Factory(t) { return new (t || EmpListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_employee_fetch_details_service__WEBPACK_IMPORTED_MODULE_0__.EmployeeFetchDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
EmpListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EmpListComponent, selectors: [["app-emp-list"]], decls: 12, vars: 3, consts: [[1, "emp-list-update-delete"], ["name", "emp-list"], ["empList", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "click"], [1, "emp-list-add", 3, "click"], [3, "tableData", "settings"], [3, "value"]], template: function EmpListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "select", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EmpListComponent_option_3_Template, 2, 4, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpListComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.updateEmployee(_r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Update Employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpListComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.deleteEmployee(_r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Delete Employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmpListComponent_Template_button_click_8_listener() { return ctx.addEmployee(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Add Employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Employee Table:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-i-table", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.employees);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableData", ctx.employees)("settings", ctx.employeesSettings);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _generic_i_table_i_table_component__WEBPACK_IMPORTED_MODULE_1__.ITableComponent], styles: [".emp-list-update-delete[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.emp-list-add[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0FBRUYiLCJmaWxlIjoiZW1wLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wLWxpc3QtdXBkYXRlLWRlbGV0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZW1wLWxpc3QtYWRkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 593:
/*!***************************************************!*\
  !*** ./src/app/pages/emp-list/emp-list.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpListModule": () => (/* binding */ EmpListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _generic_i_table_i_table_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generic/i-table/i-table.module */ 5954);
/* harmony import */ var _emp_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emp-list.component */ 5160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    {
        path: '',
        component: _emp_list_component__WEBPACK_IMPORTED_MODULE_1__.EmpListComponent
    }
];
class EmpListModule {
}
EmpListModule.ɵfac = function EmpListModule_Factory(t) { return new (t || EmpListModule)(); };
EmpListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EmpListModule });
EmpListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _generic_i_table_i_table_module__WEBPACK_IMPORTED_MODULE_0__.ITableModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmpListModule, { declarations: [_emp_list_component__WEBPACK_IMPORTED_MODULE_1__.EmpListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _generic_i_table_i_table_module__WEBPACK_IMPORTED_MODULE_0__.ITableModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_emp-list_emp-list_module_ts.js.map