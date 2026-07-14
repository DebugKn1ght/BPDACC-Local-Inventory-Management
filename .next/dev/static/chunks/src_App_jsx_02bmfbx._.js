(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/App.jsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/src_0-sn0eh._.js",
  "static/chunks/node_modules_1ukn4wk._.js",
  {
    "path": "static/chunks/src_App_127dzg4.css",
    "included": [
      "[project]/src/App.css [app-client] (css)"
    ]
  },
  "static/chunks/src_App_jsx_1mwr_bc._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/App.jsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);