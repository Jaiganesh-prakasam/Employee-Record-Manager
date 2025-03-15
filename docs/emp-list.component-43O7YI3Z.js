import {
  EmployeeFetchDetailsService,
  v4_default
} from "./chunk-IWBCVBXO.js";
import {
  DatePipe,
  EventEmitter,
  Router,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpropertyInterpolate2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵviewQuery
} from "./chunk-ZLTDQIP2.js";
import "./chunk-RVA4KI76.js";

// src/app/generic/i-table/i-table-shared-function.service.ts
var _ITableSharedFunctionService = class _ITableSharedFunctionService {
  constructor() {
    this.datePipe = new DatePipe("en-IN");
    this.uuid = v4_default();
  }
  mutiValueCombination(data, fieldArray, type, callBack) {
    let displayStringArray = [];
    displayStringArray = fieldArray.map((element) => {
      return this.getValue(data, element);
    });
    if (type === "date") {
      return this.datePipe.transform(displayStringArray[0], "MM-dd-yyyy");
    }
    if (callBack) {
      return callBack(displayStringArray[0]);
    }
    return displayStringArray.join(" ");
  }
  getValue(data, fieldArray) {
    const tempfieldArray = [...fieldArray];
    if (data[fieldArray[0]]) {
      if (fieldArray.length > 1) {
        const dataForRecursion = data[fieldArray[0]];
        tempfieldArray.shift();
        return this.getValue(dataForRecursion, tempfieldArray);
      } else {
        return data[fieldArray[0]] + "";
      }
    }
  }
};
_ITableSharedFunctionService.\u0275fac = function ITableSharedFunctionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ITableSharedFunctionService)();
};
_ITableSharedFunctionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ITableSharedFunctionService, factory: _ITableSharedFunctionService.\u0275fac });
var ITableSharedFunctionService = _ITableSharedFunctionService;

// src/app/generic/i-table/pagination-container/pagination-container.component.ts
var _c0 = ["*"];
function PaginationContainerComponent_Conditional_20_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function PaginationContainerComponent_Conditional_20_For_6_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const \u0275$index_41_r6 = \u0275\u0275nextContext().$index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.jumToThisPage(\u0275$index_41_r6 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_41_r6 = \u0275\u0275nextContext().$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate2("id", "", ctx_r3.iTableSharedFunctionService.uuid, "-", \u0275$index_41_r6 + 1, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_41_r6 + 1);
  }
}
function PaginationContainerComponent_Conditional_20_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PaginationContainerComponent_Conditional_20_For_6_Conditional_0_Template, 2, 4, "div", 11);
  }
  if (rf & 2) {
    const \u0275$index_41_r6 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r3.pageNumberSelected && ctx_r3.pageNumberSelected === ctx_r3.totalDivisions.length && ctx_r3.pageNumberSelected - 3 === \u0275$index_41_r6 ? 0 : -1);
  }
}
function PaginationContainerComponent_Conditional_20_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function PaginationContainerComponent_Conditional_20_For_8_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const \u0275$index_46_r8 = \u0275\u0275nextContext().$index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.jumToThisPage(\u0275$index_46_r8 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_46_r8 = \u0275\u0275nextContext().$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate2("id", "", ctx_r3.iTableSharedFunctionService.uuid, "-", \u0275$index_46_r8 + 1, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_46_r8 + 1);
  }
}
function PaginationContainerComponent_Conditional_20_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PaginationContainerComponent_Conditional_20_For_8_Conditional_0_Template, 2, 4, "div", 11);
  }
  if (rf & 2) {
    const \u0275$index_46_r8 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r3.pageNumberSelected && ctx_r3.pageNumberSelected !== 1 && ctx_r3.pageNumberSelected - 2 === \u0275$index_46_r8 ? 0 : -1);
  }
}
function PaginationContainerComponent_Conditional_20_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function PaginationContainerComponent_Conditional_20_For_10_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const \u0275$index_51_r10 = \u0275\u0275nextContext().$index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.jumToThisPage(\u0275$index_51_r10 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_51_r10 = \u0275\u0275nextContext().$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate2("id", "", ctx_r3.iTableSharedFunctionService.uuid, "-", \u0275$index_51_r10 + 1, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_51_r10 + 1);
  }
}
function PaginationContainerComponent_Conditional_20_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PaginationContainerComponent_Conditional_20_For_10_Conditional_0_Template, 2, 4, "div", 11);
  }
  if (rf & 2) {
    const \u0275$index_51_r10 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r3.pageNumberSelected && ctx_r3.pageNumberSelected === \u0275$index_51_r10 + 1 ? 0 : -1);
  }
}
function PaginationContainerComponent_Conditional_20_For_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function PaginationContainerComponent_Conditional_20_For_12_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const \u0275$index_56_r12 = \u0275\u0275nextContext().$index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.jumToThisPage(\u0275$index_56_r12 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_56_r12 = \u0275\u0275nextContext().$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate2("id", "", ctx_r3.iTableSharedFunctionService.uuid, "-", \u0275$index_56_r12 + 1, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_56_r12 + 1);
  }
}
function PaginationContainerComponent_Conditional_20_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PaginationContainerComponent_Conditional_20_For_12_Conditional_0_Template, 2, 4, "div", 11);
  }
  if (rf & 2) {
    const \u0275$index_56_r12 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r3.pageNumberSelected && ctx_r3.pageNumberSelected !== ctx_r3.totalDivisions.length && ctx_r3.pageNumberSelected + 1 === \u0275$index_56_r12 + 1 ? 0 : -1);
  }
}
function PaginationContainerComponent_Conditional_20_For_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function PaginationContainerComponent_Conditional_20_For_14_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const \u0275$index_61_r14 = \u0275\u0275nextContext().$index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.jumToThisPage(\u0275$index_61_r14 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_61_r14 = \u0275\u0275nextContext().$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate2("id", "", ctx_r3.iTableSharedFunctionService.uuid, "-", \u0275$index_61_r14 + 1, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_61_r14 + 1);
  }
}
function PaginationContainerComponent_Conditional_20_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PaginationContainerComponent_Conditional_20_For_14_Conditional_0_Template, 2, 4, "div", 11);
  }
  if (rf & 2) {
    const \u0275$index_61_r14 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r3.pageNumberSelected && ctx_r3.pageNumberSelected === 1 && ctx_r3.pageNumberSelected + 2 === \u0275$index_61_r14 + 1 ? 0 : -1);
  }
}
function PaginationContainerComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 9)(1, "div", 10);
    \u0275\u0275listener("click", function PaginationContainerComponent_Conditional_20_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.jumpToFirst());
    });
    \u0275\u0275text(2, "\xAB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275listener("click", function PaginationContainerComponent_Conditional_20_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.previous());
    });
    \u0275\u0275text(4, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, PaginationContainerComponent_Conditional_20_For_6_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275repeaterCreate(7, PaginationContainerComponent_Conditional_20_For_8_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275repeaterCreate(9, PaginationContainerComponent_Conditional_20_For_10_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275repeaterCreate(11, PaginationContainerComponent_Conditional_20_For_12_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275repeaterCreate(13, PaginationContainerComponent_Conditional_20_For_14_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(15, "div", 10);
    \u0275\u0275listener("click", function PaginationContainerComponent_Conditional_20_Template_div_click_15_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.next());
    });
    \u0275\u0275text(16, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 10);
    \u0275\u0275listener("click", function PaginationContainerComponent_Conditional_20_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.jumpToLast());
    });
    \u0275\u0275text(18, "\xBB");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r3.totalDivisions);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.totalDivisions);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.totalDivisions);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.totalDivisions);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.totalDivisions);
  }
}
var _PaginationContainerComponent = class _PaginationContainerComponent {
  constructor(iTableSharedFunctionService) {
    this.iTableSharedFunctionService = iTableSharedFunctionService;
    this.itemFromTo = new EventEmitter();
    this.searchString = new EventEmitter();
    this.totalDivisions = [];
    this.initialLoad = true;
  }
  ngAfterViewInit() {
    document.getElementById(this.iTableSharedFunctionService.uuid + "-rows").value = this.numberOfRows;
    this.valueChanged(this.numberOfRows);
  }
  valueChanged(tempNumberOfRows) {
    this.numberOfRows = tempNumberOfRows;
    this.numberOfButtons(Number(tempNumberOfRows));
  }
  numberOfButtons(tempNumberOfRows) {
    let selectedPageId = this.iTableSharedFunctionService.uuid + "-" + this.pageNumberSelected;
    if (this.pageNumberSelected && document.getElementById(selectedPageId)) {
      document.getElementById(selectedPageId).classList.remove("active");
    }
    const noOfPges = Math.ceil(this.totalRecordsSize / tempNumberOfRows);
    setTimeout(function() {
      this.totalDivisions = new Array(noOfPges);
      this.itemFromTo.emit([0, tempNumberOfRows]);
      this.pageNumberSelected = 1;
      selectedPageId = this.iTableSharedFunctionService.uuid + "-1";
      setTimeout(() => document.getElementById(selectedPageId).classList.add("active"));
    }.bind(this), 0);
  }
  // following function is triggered only from the parent using view child
  buttonsAfterFilter(totalRecordcount) {
    let selectedPageId = this.iTableSharedFunctionService.uuid + "-" + this.pageNumberSelected;
    if (this.pageNumberSelected && document.getElementById(selectedPageId)) {
      document.getElementById(selectedPageId).classList.remove("active");
    }
    const tempNumberOfRows = document.getElementById(this.iTableSharedFunctionService.uuid + "-rows").value;
    const noOfPges = Math.ceil(totalRecordcount / Number(tempNumberOfRows));
    setTimeout(function() {
      this.totalDivisions = new Array(noOfPges);
      this.pageNumberSelected = 1;
      selectedPageId = this.iTableSharedFunctionService.uuid + "-1";
      setTimeout(() => document.getElementById(selectedPageId) ? document.getElementById(selectedPageId).classList.add("active") : null);
    }.bind(this), 0);
  }
  jumpToFirst() {
    if (this.pageNumberSelected !== 1) {
      const nextNumber = 1;
      this.jumToThisPage(nextNumber);
    }
  }
  previous() {
    if (this.pageNumberSelected !== 1) {
      const nextNumber = this.pageNumberSelected - 1;
      this.jumToThisPage(nextNumber);
    }
  }
  next() {
    if (this.pageNumberSelected !== this.totalDivisions.length) {
      const nextNumber = this.pageNumberSelected + 1;
      this.jumToThisPage(nextNumber);
    }
  }
  jumpToLast() {
    if (this.pageNumberSelected !== this.totalDivisions.length) {
      const nextNumber = this.totalDivisions.length;
      this.jumToThisPage(nextNumber);
    }
  }
  jumToThisPage(pageNumber) {
    const previousSelectedPageId = this.iTableSharedFunctionService.uuid + "-" + this.pageNumberSelected;
    document.getElementById(previousSelectedPageId).classList.remove("active");
    this.pageNumberSelected = pageNumber;
    this.itemFromTo.emit([(pageNumber - 1) * Number(this.numberOfRows), pageNumber * Number(this.numberOfRows)]);
    const currentSelectedPageId = this.iTableSharedFunctionService.uuid + "-" + pageNumber;
    setTimeout(() => document.getElementById(currentSelectedPageId).classList.add("active"));
  }
  searchFilter(x) {
    this.searchString.emit(x);
  }
};
_PaginationContainerComponent.\u0275fac = function PaginationContainerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaginationContainerComponent)(\u0275\u0275directiveInject(ITableSharedFunctionService));
};
_PaginationContainerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginationContainerComponent, selectors: [["app-pagination-container"]], inputs: { totalRecordsSize: "totalRecordsSize", numberOfRows: "numberOfRows" }, outputs: { itemFromTo: "itemFromTo", searchString: "searchString" }, ngContentSelectors: _c0, decls: 21, vars: 3, consts: [["input", ""], [1, "container"], ["type", "text", 3, "keyup"], ["name", "rows", 3, "change", "id"], ["value", "5"], ["value", "10"], ["value", "15"], ["value", "20"], [1, "container-bottom"], [1, "pagination"], [3, "click"], [3, "id"], [3, "click", "id"]], template: function PaginationContainerComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div", 1)(1, "section")(2, "label");
    \u0275\u0275text(3, "Search:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 2, 0);
    \u0275\u0275listener("keyup", function PaginationContainerComponent_Template_input_keyup_4_listener() {
      \u0275\u0275restoreView(_r1);
      const input_r2 = \u0275\u0275reference(5);
      return \u0275\u0275resetView(ctx.searchFilter([input_r2.value, ctx.numberOfRows]));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "section")(7, "label");
    \u0275\u0275text(8, "Number of records:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 3);
    \u0275\u0275listener("change", function PaginationContainerComponent_Template_select_change_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.valueChanged($event.target.value));
    });
    \u0275\u0275elementStart(10, "option", 4);
    \u0275\u0275text(11, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 5);
    \u0275\u0275text(13, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 6);
    \u0275\u0275text(15, "15");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 7);
    \u0275\u0275text(17, "20");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275projection(18);
    \u0275\u0275elementStart(19, "div", 8);
    \u0275\u0275template(20, PaginationContainerComponent_Conditional_20_Template, 19, 0, "nav", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275propertyInterpolate1("id", "", ctx.iTableSharedFunctionService.uuid, "-rows");
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx.totalDivisions && ctx.totalDivisions.length > 0 ? 20 : -1);
  }
}, styles: ["\n\n.container[_ngcontent-%COMP%] {\n  margin: 4px;\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: 2px;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 4px;\n}\n.pagination[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border: solid 1px black;\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n}\n.pagination[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n}\n.pagination[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: #ddd;\n}\n/*# sourceMappingURL=pagination-container.component.css.map */"] });
var PaginationContainerComponent = _PaginationContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginationContainerComponent, { className: "PaginationContainerComponent", filePath: "src/app/generic/i-table/pagination-container/pagination-container.component.ts", lineNumber: 16 });
})();

// src/app/generic/i-table/table-container/table-container.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TableContainerComponent_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const definition_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", definition_r1.heading, " ");
  }
}
function TableContainerComponent_Conditional_0_For_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const definition_r2 = ctx.$implicit;
    const data_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.iTableSharedFunctionService.mutiValueCombination(data_r3, definition_r2.contentArray, definition_r2.type, definition_r2.callMethod), " ");
  }
}
function TableContainerComponent_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, TableContainerComponent_Conditional_0_For_5_For_2_Template, 2, 1, "td", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.settings.fieldDefinition);
  }
}
function TableContainerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 0)(1, "tr");
    \u0275\u0275repeaterCreate(2, TableContainerComponent_Conditional_0_For_3_Template, 2, 1, "th", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, TableContainerComponent_Conditional_0_For_5_Template, 3, 0, "tr", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.settings.fieldDefinition);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.tableData);
  }
}
function TableContainerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1, " No data to display\n");
    \u0275\u0275elementEnd();
  }
}
var _TableContainerComponent = class _TableContainerComponent {
  constructor(iTableSharedFunctionService) {
    this.iTableSharedFunctionService = iTableSharedFunctionService;
    this.sortFieldName = new EventEmitter();
  }
};
_TableContainerComponent.\u0275fac = function TableContainerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TableContainerComponent)(\u0275\u0275directiveInject(ITableSharedFunctionService));
};
_TableContainerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TableContainerComponent, selectors: [["app-table-container"]], inputs: { tableData: "tableData", settings: "settings" }, outputs: { sortFieldName: "sortFieldName" }, decls: 2, vars: 2, consts: [[1, "table-data"], [1, "no-data"]], template: function TableContainerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TableContainerComponent_Conditional_0_Template, 6, 0, "table", 0)(1, TableContainerComponent_Conditional_1_Template, 2, 0, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.settings && ctx.tableData ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tableData && ctx.tableData.length === 0 ? 1 : -1);
  }
}, styles: ['\n\n.table-data[_ngcontent-%COMP%] {\n  font-family:\n    "Trebuchet MS",\n    Arial,\n    Helvetica,\n    sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n.table-data[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.table-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.table-data[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n.table-data[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n.table-data[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n.table-data[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #4CAF50;\n  color: white;\n}\n.no-data[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin: 8px;\n}\n.sort-by-asc[_ngcontent-%COMP%] {\n  left: 3px;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border: solid 5px transparent;\n  margin: 4px 4px 0 3px;\n  background: transparent;\n  border-bottom: solid 7px #F80;\n  border-top-width: 0;\n}\n.sort-by-desc[_ngcontent-%COMP%] {\n  left: 3px;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border: solid 5px transparent;\n  margin: 4px 4px 0 3px;\n  background: transparent;\n  border-top: solid 7px #F80;\n  border-bottom-width: 0;\n}\n/*# sourceMappingURL=table-container.component.css.map */'] });
var TableContainerComponent = _TableContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableContainerComponent, { className: "TableContainerComponent", filePath: "src/app/generic/i-table/table-container/table-container.component.ts", lineNumber: 9 });
})();

// src/app/generic/i-table/i-table.component.ts
function ITableComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-pagination-container", 1);
    \u0275\u0275listener("itemFromTo", function ITableComponent_Conditional_0_Template_app_pagination_container_itemFromTo_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.arrayRange($event));
    })("searchString", function ITableComponent_Conditional_0_Template_app_pagination_container_searchString_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterData($event));
    });
    \u0275\u0275elementStart(1, "app-table-container", 2);
    \u0275\u0275listener("sortFieldName", function ITableComponent_Conditional_0_Template_app_table_container_sortFieldName_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortData($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("totalRecordsSize", ctx_r1.tableData.length)("numberOfRows", "5");
    \u0275\u0275advance();
    \u0275\u0275property("tableData", ctx_r1.tempDataTable)("settings", ctx_r1.settings);
  }
}
var _ITableComponent = class _ITableComponent {
  constructor(iTableSharedFunctionService) {
    this.iTableSharedFunctionService = iTableSharedFunctionService;
  }
  ngOnChanges(changes) {
    if (changes && this.startEndArrayState && this.tableData) {
      this.filterTableData = null;
      this.arrayRange(this.startEndArrayState, "fromFilter");
    }
  }
  /**
   * Function triggered intially by output event from the child component
   * Function is also triggered after applying filter to the data
   */
  arrayRange(startEndArray, fromFilter) {
    this.startEndArrayState = startEndArray;
    if (!this.filterTableData) {
      this.tempDataTable = this.tableData.filter((x, i) => i >= startEndArray[0] && i < startEndArray[1] ? true : false);
      if (fromFilter === "fromFilter") {
        this.containerComponent.buttonsAfterFilter(this.tableData.length);
      }
    } else {
      this.tempDataTable = this.filterTableData.filter((x, i) => i >= startEndArray[0] && i < startEndArray[1] ? true : false);
      if (fromFilter === "fromFilter") {
        this.containerComponent.buttonsAfterFilter(this.filterTableData.length);
      }
    }
  }
  filterData(x) {
    if (x[0] !== "") {
      const searchField = this.settings.fieldDefinition;
      let searchString = "";
      const subString = x[0].toLowerCase();
      this.filterTableData = this.tableData.filter((item) => {
        const matchFound = searchField.filter((searchObject) => {
          searchString = this.iTableSharedFunctionService.mutiValueCombination(item, searchObject.contentArray);
          if (searchString.toLowerCase().includes(subString)) {
            return true;
          }
        });
        return matchFound.length > 0;
      });
    } else {
      this.filterTableData = null;
    }
    const noOfRecords = this.startEndArrayState[1] - this.startEndArrayState[0];
    this.arrayRange([0, noOfRecords], "fromFilter");
  }
  sortData(x) {
  }
};
_ITableComponent.\u0275fac = function ITableComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ITableComponent)(\u0275\u0275directiveInject(ITableSharedFunctionService));
};
_ITableComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ITableComponent, selectors: [["app-i-table"]], viewQuery: function ITableComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(PaginationContainerComponent, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerComponent = _t.first);
  }
}, inputs: { tableData: "tableData", settings: "settings" }, features: [\u0275\u0275ProvidersFeature([ITableSharedFunctionService]), \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[3, "totalRecordsSize", "numberOfRows"], [3, "itemFromTo", "searchString", "totalRecordsSize", "numberOfRows"], [3, "sortFieldName", "tableData", "settings"]], template: function ITableComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ITableComponent_Conditional_0_Template, 2, 4, "app-pagination-container", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.tableData ? 0 : -1);
  }
}, dependencies: [PaginationContainerComponent, TableContainerComponent], encapsulation: 2 });
var ITableComponent = _ITableComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ITableComponent, { className: "ITableComponent", filePath: "src/app/generic/i-table/i-table.component.ts", lineNumber: 18 });
})();

// src/app/pages/emp-list/emp-list.component.ts
function EmpListComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const employee_r2 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", employee_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", employee_r2.id, " ", " " + employee_r2.empGeneral.firstName, " ", " " + employee_r2.empGeneral.lastName, " ");
  }
}
var _EmpListComponent = class _EmpListComponent {
  constructor(employeeFetchDetailsService, router) {
    this.employeeFetchDetailsService = employeeFetchDetailsService;
    this.router = router;
    this.employeesSettings = {
      fieldDefinition: [
        {
          heading: "id",
          type: "string",
          contentArray: [["id"]]
        },
        {
          heading: "First name",
          type: "string",
          contentArray: [["empGeneral", "firstName"]]
        },
        {
          heading: "Last name",
          type: "string",
          contentArray: [["empGeneral", "lastName"]]
        },
        {
          heading: "Full Name",
          type: "string",
          contentArray: [["empGeneral", "firstName"], ["empGeneral", "lastName"]]
        },
        {
          heading: "D.O.B",
          type: "date",
          contentArray: [["empGeneral", "dob"]]
        },
        {
          heading: "Age",
          type: "age",
          contentArray: [["empGeneral", "dob"]],
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
  fetchEmployee() {
    this.employeeFetchDetailsService.getEmployees().subscribe((employees) => {
      this.employees = employees.sort((employee1, employee2) => Number(employee1.id) - Number(employee2.id));
    });
  }
  addEmployee() {
    this.router.navigate(["/routing/emp-details"], { queryParams: { orderType: "add" } });
  }
  updateEmployee(id) {
    this.router.navigate(["/routing/emp-details"], { queryParams: { orderType: "update", id } });
  }
  deleteEmployee(id) {
    this.employeeFetchDetailsService.deleteEmployee(id).subscribe((data) => {
      this.fetchEmployee();
    });
  }
};
_EmpListComponent.\u0275fac = function EmpListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmpListComponent)(\u0275\u0275directiveInject(EmployeeFetchDetailsService), \u0275\u0275directiveInject(Router));
};
_EmpListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmpListComponent, selectors: [["app-emp-list"]], decls: 13, vars: 2, consts: [["empList", ""], [1, "emp-list-update-delete"], ["name", "emp-list"], [3, "value"], [3, "click"], [1, "emp-list-add", 3, "click"], [3, "tableData", "settings"]], template: function EmpListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "select", 2, 0);
    \u0275\u0275repeaterCreate(3, EmpListComponent_For_4_Template, 2, 4, "option", 3, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function EmpListComponent_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const empList_r3 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(ctx.updateEmployee(empList_r3.value));
    });
    \u0275\u0275text(6, " Update Employee ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 4);
    \u0275\u0275listener("click", function EmpListComponent_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const empList_r3 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(ctx.deleteEmployee(empList_r3.value));
    });
    \u0275\u0275text(8, " Delete Employee ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275listener("click", function EmpListComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addEmployee());
    });
    \u0275\u0275text(10, " Add Employee\n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\nEmployee Table:\n");
    \u0275\u0275element(12, "app-i-table", 6);
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.employees);
    \u0275\u0275advance(9);
    \u0275\u0275property("tableData", ctx.employees)("settings", ctx.employeesSettings);
  }
}, dependencies: [ITableComponent], styles: ["\n\n.emp-list-update-delete[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.emp-list-add[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=emp-list.component.css.map */"] });
var EmpListComponent = _EmpListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmpListComponent, { className: "EmpListComponent", filePath: "src/app/pages/emp-list/emp-list.component.ts", lineNumber: 13 });
})();
export {
  EmpListComponent
};
//# sourceMappingURL=emp-list.component-43O7YI3Z.js.map
