import {
  HttpClient,
  HttpHeaders,
  catchError,
  of,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ZLTDQIP2.js";

// src/app/employee-fetch-details.service.ts
var _EmployeeFetchDetailsService = class _EmployeeFetchDetailsService {
  constructor(http) {
    this.http = http;
    this.employeesUrl = "api/employees";
    this.httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
  }
  /** GET Employees from the server */
  getEmployees() {
    return this.http.get(this.employeesUrl).pipe(catchError(this.handleError("getEmployees", [])));
  }
  /** GET Employee by id. Will 404 if id not found */
  getEmployee(id) {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get(url).pipe(catchError(this.handleError(`getEmployee id=${id}`)));
  }
  /** POST: add a new employee to the server */
  addEmployee(employee) {
    return this.http.post(this.employeesUrl, employee, this.httpOptions).pipe(tap((newEmployee) => console.log(newEmployee)), catchError(this.handleError("addEmployee")));
  }
  /** DELETE: delete the employee from the server */
  deleteEmployee(employeeID) {
    const url = `${this.employeesUrl}/${employeeID}`;
    return this.http.delete(url, this.httpOptions).pipe(tap((_) => console.log(_)), catchError(this.handleError("deleteHero")));
  }
  handleError(operation = "operation", result) {
    return (error) => {
      console.error(error);
      return of(result);
    };
  }
};
_EmployeeFetchDetailsService.\u0275fac = function EmployeeFetchDetailsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmployeeFetchDetailsService)(\u0275\u0275inject(HttpClient));
};
_EmployeeFetchDetailsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmployeeFetchDetailsService, factory: _EmployeeFetchDetailsService.\u0275fac, providedIn: "root" });
var EmployeeFetchDetailsService = _EmployeeFetchDetailsService;

// node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1));
}
var i;
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var stringify_default = stringify;

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify_default(rnds);
}
var v4_default = v4;

export {
  v4_default,
  EmployeeFetchDetailsService
};
//# sourceMappingURL=chunk-IWBCVBXO.js.map
