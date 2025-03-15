import "./chunk-RVA4KI76.js";

// src/app/pages/pages-routing.ts
var PageRoutes = [
  {
    path: "",
    redirectTo: "emp-list",
    pathMatch: "full"
  },
  {
    path: "emp-list",
    loadComponent: () => import("./emp-list.component-43O7YI3Z.js").then((m) => m.EmpListComponent)
  },
  {
    path: "emp-details",
    loadComponent: () => import("./emp-details.component-H5NVKWQ2.js").then((m) => m.EmpDetailsComponent)
  }
];
export {
  PageRoutes
};
//# sourceMappingURL=pages-routing-7XUFIMRD.js.map
