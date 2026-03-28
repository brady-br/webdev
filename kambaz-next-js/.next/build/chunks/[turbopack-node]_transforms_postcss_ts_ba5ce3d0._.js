module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/kambaz-next-js/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "build/chunks/60799_1e49cc0f._.js",
  "build/chunks/[root-of-the-server]__5ca2c0e9._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/kambaz-next-js/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];