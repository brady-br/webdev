module.exports = [
"[project]/kambaz-next-js/.next-internal/server/app/(Kambaz)/Courses/[cid]/People/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/kambaz-next-js/app/favicon.ico.mjs { IMAGE => \"[project]/kambaz-next-js/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/kambaz-next-js/app/favicon.ico.mjs { IMAGE => \"[project]/kambaz-next-js/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/kambaz-next-js/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/kambaz-next-js/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/kambaz-next-js/app/(Kambaz)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/kambaz-next-js/app/(Kambaz)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/kambaz-next-js/app/(Kambaz)/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/kambaz-next-js/app/(Kambaz)/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/kambaz-next-js/app/(Kambaz)/Courses/client.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCourse",
    ()=>createCourse,
    "createModuleForCourse",
    ()=>createModuleForCourse,
    "deleteCourse",
    ()=>deleteCourse,
    "deleteModule",
    ()=>deleteModule,
    "enrollIntoCourse",
    ()=>enrollIntoCourse,
    "fetchAllCourses",
    ()=>fetchAllCourses,
    "findModulesForCourse",
    ()=>findModulesForCourse,
    "findMyCourses",
    ()=>findMyCourses,
    "findUsersForCourse",
    ()=>findUsersForCourse,
    "unenrollFromCourse",
    ()=>unenrollFromCourse,
    "updateCourse",
    ()=>updateCourse,
    "updateModule",
    ()=>updateModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
const axiosWithCredentials = __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
    withCredentials: true
});
const HTTP_SERVER = ("TURBOPACK compile-time value", "http://localhost:4000");
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const USERS_API = `${HTTP_SERVER}/api/users`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;
const fetchAllCourses = async ()=>{
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get(COURSES_API);
    return data;
};
const findMyCourses = async ()=>{
    const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
    return data;
};
const createCourse = async (course)=>{
    const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
    return data;
};
const deleteCourse = async (id)=>{
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].delete(`${COURSES_API}/${id}`);
    return data;
};
const updateCourse = async (course)=>{
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].put(`${COURSES_API}/${course._id}`, course);
    return data;
};
const deleteModule = async (courseId, moduleId)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].delete(`${COURSES_API}/${courseId}/modules/${moduleId}`);
    return response.data;
};
const createModuleForCourse = async (courseId, module)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post(`${COURSES_API}/${courseId}/modules`, module);
    return response.data;
};
const findModulesForCourse = async (courseId)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};
const updateModule = async (courseId, module)=>{
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].put(`${COURSES_API}/${courseId}/modules/${module._id}`, module);
    return data;
};
const enrollIntoCourse = async (userId, courseId)=>{
    const response = await axiosWithCredentials.post(`${USERS_API}/${userId}/courses/${courseId}`);
    return response.data;
};
const unenrollFromCourse = async (userId, courseId)=>{
    const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}/courses/${courseId}`);
    return response.data;
};
const findUsersForCourse = async (courseId)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get(`${COURSES_API}/${courseId}/users`);
    return response.data;
};
}),
"[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/People/Table.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/People/Table.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/People/Table.tsx <module evaluation>", "default");
}),
"[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/People/Table.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/People/Table.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/People/Table.tsx", "default");
}),
"[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/People/Table.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$People$2f$Table$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/People/Table.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$People$2f$Table$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/People/Table.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$People$2f$Table$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/People/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>People
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(Kambaz)/Courses/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$People$2f$Table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/People/Table.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function People() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { cid } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useParams"])();
    const [people, setPeople] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])([]);
    const fetchPeople = async ()=>{
        const enrolled = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findUsersForCourse"](cid);
        setPeople(enrolled);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchPeople();
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "wd-people",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "People"
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/People/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/People/page.tsx",
                lineNumber: 17,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$People$2f$Table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                users: people,
                fetchUsers: fetchPeople
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/People/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/People/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/People/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/People/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c6ca032f._.js.map