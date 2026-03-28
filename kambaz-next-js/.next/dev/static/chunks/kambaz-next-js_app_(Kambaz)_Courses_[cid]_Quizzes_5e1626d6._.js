(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createQuizForCourse",
    ()=>createQuizForCourse,
    "deleteQuiz",
    ()=>deleteQuiz,
    "findQuizzesForCourse",
    ()=>findQuizzesForCourse,
    "updateQuiz",
    ()=>updateQuiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const axiosWithCredentials = __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    withCredentials: true
});
const HTTP_SERVER = ("TURBOPACK compile-time value", "http://localhost:4000");
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const QUIZZES_API = `${HTTP_SERVER}/api/quizzes`;
const findQuizzesForCourse = async (courseId)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${COURSES_API}/${courseId}/quizzes`);
    return response.data;
};
const createQuizForCourse = async (courseId, quiz)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${COURSES_API}/${courseId}/quizzes`, quiz);
    return response.data;
};
const deleteQuiz = async (quizId)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`${QUIZZES_API}/${quizId}`);
    return response.data;
};
const updateQuiz = async (quizId, updates)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`${QUIZZES_API}/${quizId}`, updates);
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DetailsEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormCheck$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/FormCheck.js [app-client] (ecmascript) <export default as FormCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/FormControl.js [app-client] (ecmascript) <export default as FormControl>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormSelect$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/FormSelect.js [app-client] (ecmascript) <export default as FormSelect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript) <export default as Row>");
;
;
function DetailsEditor({ quiz, updateQuiz }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                className: "w-50",
                value: quiz.name,
                onChange: (e)=>updateQuiz({
                        ...quiz,
                        name: e.target.value
                    })
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            "Quiz Instructions:",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                as: "textarea",
                rows: 3,
                value: quiz.description,
                onChange: (e)=>updateQuiz({
                        ...quiz,
                        description: e.target.value
                    })
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                className: "align-items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        xs: 3,
                        className: "text-end",
                        children: "Quiz Type"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormSelect$3e$__["FormSelect"], {
                            value: quiz.quizType,
                            className: "w-50",
                            onChange: (e)=>updateQuiz({
                                    ...quiz,
                                    quizType: e.target.value
                                }),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "GRADED_QUIZ",
                                    children: "Graded Quiz"
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "PRACTICE_QUIZ",
                                    children: "Practice Quiz"
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "GRADED_SURVEY",
                                    children: "Graded Survey"
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "UNGRADED_QUIZ",
                                    children: "Ungraded Survey"
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                className: "align-items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        xs: 3,
                        className: "text-end",
                        children: "Assignment Group"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormSelect$3e$__["FormSelect"], {
                            value: quiz.assignmentGroup,
                            className: "w-50",
                            onChange: (e)=>updateQuiz({
                                    ...quiz,
                                    assignmentGroup: e.target.value
                                }),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "QUIZZES",
                                    children: "Quizzes"
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "EXAMS",
                                    children: "Exams"
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "ASSIGNMENTS",
                                    children: "Assignments"
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "PROJECT",
                                    children: "Project"
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                className: "mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        xs: 3,
                        className: "text-end",
                        children: "Options"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormCheck$3e$__["FormCheck"], {
                                label: "Shuffle Answers",
                                checked: quiz.shuffle,
                                className: "mb-2",
                                onChange: (e)=>updateQuiz({
                                        ...quiz,
                                        shuffle: e.target.checked
                                    })
                            }, void 0, false, {
                                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-50 d-flex align-items-center mb-2",
                                children: [
                                    "Time Limit:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                                        type: "number",
                                        defaultValue: quiz.timeLimit,
                                        className: "ms-3 w-25 me-1",
                                        onChange: (e)=>updateQuiz({
                                                ...quiz,
                                                timeLimit: parseInt(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    "Minutes"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "d-flex w-50 align-items-center mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormCheck$3e$__["FormCheck"], {
                                        label: "Allow Multiple Attempts",
                                        checked: quiz.maxAttempts !== 1,
                                        onChange: (e)=>{
                                            if (!e.target.checked) {
                                                updateQuiz({
                                                    ...quiz,
                                                    maxAttempts: 1
                                                });
                                            } else {
                                                updateQuiz({
                                                    ...quiz,
                                                    maxAttempts: 2
                                                });
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    quiz.maxAttempts !== 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                                        type: "number",
                                        defaultValue: quiz.maxAttempts,
                                        className: "w-50 ms-2",
                                        onChange: (e)=>updateQuiz({
                                                ...quiz,
                                                maxAttempts: parseInt(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormCheck$3e$__["FormCheck"], {
                                label: "One Question at a Time",
                                checked: quiz.oneQuestionAtATime,
                                className: "mb-2",
                                onChange: (e)=>updateQuiz({
                                        ...quiz,
                                        oneQuestionAtATime: e.target.checked
                                    })
                            }, void 0, false, {
                                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormCheck$3e$__["FormCheck"], {
                                label: "Webcam Required",
                                checked: quiz.webcamRequired,
                                className: "mb-2",
                                onChange: (e)=>updateQuiz({
                                        ...quiz,
                                        webcamRequired: e.target.checked
                                    })
                            }, void 0, false, {
                                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormCheck$3e$__["FormCheck"], {
                                label: "Lock Questions After Answering",
                                checked: quiz.lockQuestionsAfterAnswering,
                                onChange: (e)=>updateQuiz({
                                        ...quiz,
                                        lockQuestionsAfterAnswering: e.target.checked
                                    })
                            }, void 0, false, {
                                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                className: "align-items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        xs: 3,
                        className: "text-end",
                        children: "Show Correct Answers"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormSelect$3e$__["FormSelect"], {
                            value: quiz.showCorrectAnswers,
                            className: "w-50",
                            onChange: (e)=>updateQuiz({
                                    ...quiz,
                                    showCorrectAnswers: e.target.value
                                }),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "IMMEDIATELY",
                                    children: "Immediately"
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "DUE",
                                    children: "When Due"
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "UNTIL",
                                    children: "When Closed"
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                className: "align-items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        xs: 3,
                        className: "text-end",
                        children: "Access Code"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                            className: "w-50",
                            defaultValue: quiz.accessCode,
                            onChange: (e)=>updateQuiz({
                                    ...quiz,
                                    accessCode: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                className: "align-items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        xs: 3,
                        className: "text-end",
                        children: "Due"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                            type: "date",
                            defaultValue: quiz.due,
                            onChange: (e)=>updateQuiz({
                                    ...quiz,
                                    due: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                className: "align-items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        xs: 3,
                        className: "text-end",
                        children: "Available"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                            type: "date",
                            defaultValue: quiz.available,
                            onChange: (e)=>updateQuiz({
                                    ...quiz,
                                    available: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                className: "align-items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        xs: 3,
                        className: "text-end",
                        children: "Until"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                            type: "date",
                            defaultValue: quiz.until,
                            onChange: (e)=>updateQuiz({
                                    ...quiz,
                                    until: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = DetailsEditor;
var _c;
__turbopack_context__.k.register(_c, "DetailsEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuestionsEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormCheck$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/FormCheck.js [app-client] (ecmascript) <export default as FormCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/FormControl.js [app-client] (ecmascript) <export default as FormControl>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormSelect$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/FormSelect.js [app-client] (ecmascript) <export default as FormSelect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
;
;
;
;
function QuestionsEditor({ questions, updateQuestions }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            questions.map((question)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        border: "0.5px solid black"
                    },
                    className: "p-2 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                                    className: "w-25 me-2",
                                    value: question.title,
                                    onChange: (e)=>updateQuestions(questions.map((q)=>q._id === question._id ? {
                                                ...q,
                                                title: e.target.value
                                            } : q))
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormSelect$3e$__["FormSelect"], {
                                    value: question.questionType,
                                    className: "w-50 me-2",
                                    onChange: (e)=>updateQuestions(questions.map((q)=>q._id === question._id ? {
                                                ...q,
                                                questionType: e.target.value
                                            } : q)),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "MULTIPLE_CHOICE",
                                            children: "Multiple Choice"
                                        }, void 0, false, {
                                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                            lineNumber: 20,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "TRUE_FALSE",
                                            children: "True or False"
                                        }, void 0, false, {
                                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                            lineNumber: 21,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "FILL_IN_THE_BLANK",
                                            children: "Fill in the Blank"
                                        }, void 0, false, {
                                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                            lineNumber: 22,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "d-flex align-items-center text-end",
                                    children: [
                                        "pts:",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                                            className: "w-25",
                                            type: "number",
                                            value: question.points,
                                            onChange: (e)=>updateQuestions(questions.map((q)=>q._id === question._id ? {
                                                        ...q,
                                                        points: parseInt(e.target.value)
                                                    } : q))
                                        }, void 0, false, {
                                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                            lineNumber: 30,
                            columnNumber: 18
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            children: "Question:"
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                            as: "textarea",
                            rows: 3,
                            value: question.question,
                            className: "mb-2",
                            onChange: (e)=>updateQuestions(questions.map((q)=>q._id === question._id ? {
                                        ...q,
                                        question: e.target.value
                                    } : q))
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            children: "Answers"
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        question.questionType === "MULTIPLE_CHOICE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                question.choices.map((choice, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "d-flex align-items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormCheck$3e$__["FormCheck"], {
                                                label: choice.correct ? "Correct Answer" : "Possible Answer",
                                                name: `choices-${question._id}`,
                                                type: "radio",
                                                checked: choice.correct,
                                                className: "w-25",
                                                onChange: (e)=>updateQuestions(questions.map((q)=>q._id === question._id ? {
                                                            ...q,
                                                            choices: q.choices.map((c, i)=>i === index ? {
                                                                    ...c,
                                                                    correct: e.target.checked
                                                                } : {
                                                                    ...c,
                                                                    correct: false
                                                                })
                                                        } : q))
                                            }, void 0, false, {
                                                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                                lineNumber: 39,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                                                value: choice.choice,
                                                onChange: (e)=>updateQuestions(questions.map((q)=>q._id === question._id ? {
                                                            ...q,
                                                            choices: q.choices.map((c, i)=>i === index ? {
                                                                    ...c,
                                                                    choice: e.target.value
                                                                } : c)
                                                        } : q))
                                            }, void 0, false, {
                                                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                                lineNumber: 44,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, `${question._id}-${index}`, true, {
                                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex justify-content-center flex-fill",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                            variant: "secondary",
                                            className: "me-2",
                                            onClick: ()=>updateQuestions(questions.map((q)=>q._id === question._id ? {
                                                        ...q,
                                                        choices: [
                                                            ...q.choices,
                                                            {
                                                                choice: "",
                                                                correct: q.choices.length === 0
                                                            }
                                                        ]
                                                    } : q)),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {
                                                    className: "position-relative me-2",
                                                    style: {
                                                        bottom: "1px"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, this),
                                                "New Answer"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                            variant: "danger",
                                            onClick: ()=>updateQuestions(questions.map((q)=>q._id === question._id ? {
                                                        ...q,
                                                        choices: q.choices.slice(0, -1)
                                                    } : q)),
                                            children: "Remove Answer"
                                        }, void 0, false, {
                                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this),
                        question.questionType === "TRUE_FALSE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormCheck$3e$__["FormCheck"], {
                                    label: "True",
                                    name: `tf-${question._id}`,
                                    type: "radio",
                                    checked: question.trueFalse,
                                    onChange: (e)=>updateQuestions(questions.map((q)=>q._id === question._id ? {
                                                ...q,
                                                trueFalse: e.target.checked
                                            } : q))
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormCheck$3e$__["FormCheck"], {
                                    label: "False",
                                    name: `tf-${question._id}`,
                                    type: "radio",
                                    checked: !question.trueFalse,
                                    onChange: (e)=>updateQuestions(questions.map((q)=>q._id === question._id ? {
                                                ...q,
                                                trueFalse: !e.target.checked
                                            } : q))
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this),
                        question.questionType === "FILL_IN_THE_BLANK" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                question.answers.map((answer, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "d-flex align-items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-25",
                                                children: "Possible Answer"
                                            }, void 0, false, {
                                                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                                                value: answer,
                                                onChange: (e)=>updateQuestions(questions.map((q)=>q._id === question._id ? {
                                                            ...q,
                                                            answers: q.answers.map((a, i)=>i === index ? e.target.value : a)
                                                        } : q))
                                            }, void 0, false, {
                                                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, `${question._id}-${index}`, true, {
                                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex justify-content-center flex-fill",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                            variant: "secondary",
                                            className: "me-2",
                                            onClick: ()=>updateQuestions(questions.map((q)=>q._id === question._id ? {
                                                        ...q,
                                                        answers: [
                                                            ...q.answers,
                                                            ""
                                                        ]
                                                    } : q)),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {
                                                    className: "position-relative me-2",
                                                    style: {
                                                        bottom: "1px"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, this),
                                                "New Answer"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                            variant: "danger",
                                            onClick: ()=>updateQuestions(questions.map((q)=>q._id === question._id ? {
                                                        ...q,
                                                        answers: q.answers.slice(0, -1)
                                                    } : q)),
                                            children: "Remove Answer"
                                        }, void 0, false, {
                                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    ]
                }, question._id, true, {
                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex justify-content-center flex-fill",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    variant: "secondary",
                    size: "lg",
                    onClick: ()=>updateQuestions([
                            ...questions,
                            {
                                _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                                title: "New Question",
                                points: 5,
                                question: "",
                                questionType: "MULTIPLE_CHOICE",
                                choices: [],
                                trueFalse: false,
                                answers: []
                            }
                        ]),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {
                            className: "position-relative me-2",
                            style: {
                                bottom: "1px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        "New Question"
                    ]
                }, void 0, true, {
                    fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = QuestionsEditor;
var _c;
__turbopack_context__.k.register(_c, "QuestionsEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuizEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/reducer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroup$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/ListGroup.js [app-client] (ecmascript) <export default as ListGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/ListGroupItem.js [app-client] (ecmascript) <export default as ListGroupItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f5b$qid$5d2f$Editor$2f$Details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Details.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f5b$qid$5d2f$Editor$2f$Questions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/Questions.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function QuizEditor() {
    _s();
    const { cid, qid } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { quizzes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "QuizEditor.useSelector": (state)=>state.quizzesReducer
    }["QuizEditor.useSelector"]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [quiz, setQuiz] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        _id: qid,
        name: `Q${quizzes.length + 1}`,
        course: cid,
        description: "",
        published: false,
        available: "2025-12-07",
        due: "2025-12-14",
        until: "2025-12-21",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        questions: Array(),
        quizType: "GRADED_QUIZ",
        assignmentGroup: "QUIZZES",
        shuffle: true,
        timeLimit: 20,
        maxAttempts: 1,
        showCorrectAnswers: "IMMEDIATELY",
        accessCode: "",
        oneQuestionAtATime: true,
        webcamRequired: false,
        lockQuestionsAfterAnswering: false
    });
    const [isNew, setIsNew] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [questionsSelected, setQuestionsSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const createQuiz = async (quiz)=>{
        const newQuiz = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createQuizForCourse"](cid, quiz);
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setQuizzes"])([
            ...quizzes,
            newQuiz
        ]));
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateQuiz = async (quiz)=>{
        const updatedQuiz = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateQuiz"](qid, quiz);
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setQuizzes"])(quizzes.map((q)=>q._id === quiz._id ? quiz : q)));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuizEditor.useEffect": ()=>{
            const fetchQuiz = {
                "QuizEditor.useEffect.fetchQuiz": async ()=>{
                    const quizzes = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findQuizzesForCourse"](cid);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setQuizzes"])(quizzes);
                    const quiz = quizzes.find({
                        "QuizEditor.useEffect.fetchQuiz.quiz": (quiz)=>quiz._id === qid
                    }["QuizEditor.useEffect.fetchQuiz.quiz"]);
                    if (quiz) {
                        setQuiz(quiz);
                        setIsNew(false);
                    }
                }
            }["QuizEditor.useEffect.fetchQuiz"];
            fetchQuiz();
        }
    }["QuizEditor.useEffect"], [
        qid
    ]);
    const onSave = isNew ? createQuiz : updateQuiz;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "me-3 mb-2 clearfix",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                className: "text-end",
                children: [
                    "Points:",
                    " ",
                    quiz.questions !== undefined && quiz.questions.reduce((previousValue, currentValue, currentIndex, array)=>previousValue + currentValue.points, 0)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroup$3e$__["ListGroup"], {
                horizontal: true,
                className: "rounded-0 mb-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__["ListGroupItem"], {
                        as: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"],
                        className: `${questionsSelected ? "text-dark border-0" : "text-danger border-1 border-bottom-0"} rounded-0`,
                        onClick: ()=>setQuestionsSelected(false),
                        children: "Details"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__["ListGroupItem"], {
                        as: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"],
                        className: `${questionsSelected ? "text-danger border-1 border-bottom-0" : "text-dark border-0"} rounded-0`,
                        onClick: ()=>setQuestionsSelected(true),
                        children: "Questions"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "mt-0"
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            questionsSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f5b$qid$5d2f$Editor$2f$Questions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                questions: quiz.questions,
                updateQuestions: (qs)=>setQuiz({
                        ...quiz,
                        questions: qs
                    })
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/page.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f5b$qid$5d2f$Editor$2f$Details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                quiz: quiz,
                updateQuiz: setQuiz
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/page.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                variant: "danger",
                size: "lg",
                className: "float-end",
                onClick: async (e)=>{
                    e.preventDefault();
                    await onSave(quiz);
                    router.push(`/Courses/${cid}/Quizzes/${qid}`);
                },
                children: "Save"
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                variant: "danger",
                size: "lg",
                className: "float-end me-2",
                onClick: async (e)=>{
                    e.preventDefault();
                    const newQuiz = {
                        ...quiz,
                        published: true
                    };
                    setQuiz(newQuiz);
                    await onSave(newQuiz);
                    router.push(`/Courses/${cid}/Quizzes`);
                },
                children: "Save and Publish"
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                variant: "secondary",
                size: "lg",
                className: "float-end me-2",
                href: `/Courses/${cid}/Quizzes`,
                children: "Cancel"
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Editor/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(QuizEditor, "2uks1UNYLZ+1hYpQEOYpB7O7+hk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = QuizEditor;
var _c;
__turbopack_context__.k.register(_c, "QuizEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=kambaz-next-js_app_%28Kambaz%29_Courses_%5Bcid%5D_Quizzes_5e1626d6._.js.map