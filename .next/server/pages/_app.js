/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUser\": () => (/* binding */ getUser),\n/* harmony export */   \"emptyUser\": () => (/* binding */ emptyUser),\n/* harmony export */   \"getInitial\": () => (/* binding */ getInitial)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ \"./actions/types.js\");\n\n\n\nconst setUser = (data)=>{\n    return {\n        type: _types__WEBPACK_IMPORTED_MODULE_2__.SET_USER,\n        payload: data\n    };\n};\nconst emptyData = ()=>{\n    return {\n        type: _types__WEBPACK_IMPORTED_MODULE_2__.EMPTY_USER,\n        payload: null\n    };\n};\nconst getInitialData = (data)=>{\n    return {\n        type: _types__WEBPACK_IMPORTED_MODULE_2__.INITIAL_DATA,\n        payload: data\n    };\n};\nconst getUser = (data)=>{\n    return (dispatch)=>{\n        try {\n            axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"https://precily-dev-team.herokuapp.com/api/login\", data).then((res)=>{\n                console.log(\"hhhh\", res, res.data.user);\n                dispatch(setUser(res.data.user));\n                //console.log(res.data);\n                window.localStorage.setItem(\"login\", JSON.stringify(res.data));\n                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(\"login successful\");\n            }).catch((err)=>react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(\"No users found\")\n            );\n        } catch (err) {\n            console.log(err);\n        }\n    };\n};\nconst emptyUser = ()=>{\n    console.log(\"hello\");\n    return (dispatch)=>{\n        localStorage.removeItem(\"login\");\n        dispatch(emptyData(null));\n    };\n};\nconst getInitial = ()=>{\n    return (dispatch)=>{\n        const data = window.localStorage.getItem(\"login\");\n        dispatch(getInitialData(JSON.parse(data)));\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hY3Rpb25zL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2E7QUFDc0I7QUFDNUQsS0FBSyxDQUFDSyxPQUFPLElBQUlDLElBQUksR0FBSyxDQUFDO0lBQzFCLE1BQU0sQ0FBQyxDQUFDO1FBQ1BDLElBQUksRUFBRUosNENBQVE7UUFDZEssT0FBTyxFQUFFRixJQUFJO0lBQ2QsQ0FBQztBQUNGLENBQUM7QUFDRCxLQUFLLENBQUNHLFNBQVMsT0FBUyxDQUFDO0lBQ3hCLE1BQU0sQ0FBQyxDQUFDO1FBQ1BGLElBQUksRUFBRUwsOENBQVU7UUFDaEJNLE9BQU8sRUFBRSxJQUFJO0lBQ2QsQ0FBQztBQUNGLENBQUM7QUFDRCxLQUFLLENBQUNFLGNBQWMsSUFBSUosSUFBSSxHQUFLLENBQUM7SUFDakMsTUFBTSxDQUFDLENBQUM7UUFDUEMsSUFBSSxFQUFFSCxnREFBWTtRQUNsQkksT0FBTyxFQUFFRixJQUFJO0lBQ2QsQ0FBQztBQUNGLENBQUM7QUFFTSxLQUFLLENBQUNLLE9BQU8sSUFBSUwsSUFBSSxHQUFLLENBQUM7SUFDakMsTUFBTSxFQUFFTSxRQUFRLEdBQUssQ0FBQztRQUNyQixHQUFHLENBQUMsQ0FBQztZQUNKWixpREFDTSxDQUFDLENBQWtELG1EQUFFTSxJQUFJLEVBQzdEUSxJQUFJLEVBQUVDLEdBQUcsR0FBSyxDQUFDO2dCQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFNLE9BQUVGLEdBQUcsRUFBRUEsR0FBRyxDQUFDVCxJQUFJLENBQUNZLElBQUk7Z0JBQ3RDTixRQUFRLENBQUNQLE9BQU8sQ0FBQ1UsR0FBRyxDQUFDVCxJQUFJLENBQUNZLElBQUk7Z0JBQzlCLEVBQXdCO2dCQUN4QkMsTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFPLFFBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUixHQUFHLENBQUNULElBQUk7Z0JBQzVETCx5REFBYSxDQUFDLENBQWtCO1lBQ2pDLENBQUMsRUFDQXdCLEtBQUssRUFBRUMsR0FBRyxHQUFLekIsdURBQVcsQ0FBQyxDQUFnQjs7UUFDOUMsQ0FBQyxDQUFDLEtBQUssRUFBRXlCLEdBQUcsRUFBRSxDQUFDO1lBQ2RWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxHQUFHO1FBQ2hCLENBQUM7SUFDRixDQUFDO0FBQ0YsQ0FBQztBQUNNLEtBQUssQ0FBQ0UsU0FBUyxPQUFTLENBQUM7SUFDL0JaLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQU87SUFDbkIsTUFBTSxFQUFFTCxRQUFRLEdBQUssQ0FBQztRQUNyQlEsWUFBWSxDQUFDUyxVQUFVLENBQUMsQ0FBTztRQUMvQmpCLFFBQVEsQ0FBQ0gsU0FBUyxDQUFDLElBQUk7SUFDeEIsQ0FBQztBQUNGLENBQUM7QUFDTSxLQUFLLENBQUNxQixVQUFVLE9BQVMsQ0FBQztJQUNoQyxNQUFNLEVBQUVsQixRQUFRLEdBQUssQ0FBQztRQUNyQixLQUFLLENBQUNOLElBQUksR0FBR2EsTUFBTSxDQUFDQyxZQUFZLENBQUNXLE9BQU8sQ0FBQyxDQUFPO1FBQ2hEbkIsUUFBUSxDQUFDRixjQUFjLENBQUNZLElBQUksQ0FBQ1UsS0FBSyxDQUFDMUIsSUFBSTtJQUN4QyxDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2FjdGlvbnMvaW5kZXguanM/NjhhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IHsgRU1QVFlfVVNFUiwgU0VUX1VTRVIsIElOSVRJQUxfREFUQSB9IGZyb20gXCIuL3R5cGVzXCI7XG5jb25zdCBzZXRVc2VyID0gKGRhdGEpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBTRVRfVVNFUixcblx0XHRwYXlsb2FkOiBkYXRhLFxuXHR9O1xufTtcbmNvbnN0IGVtcHR5RGF0YSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBFTVBUWV9VU0VSLFxuXHRcdHBheWxvYWQ6IG51bGwsXG5cdH07XG59O1xuY29uc3QgZ2V0SW5pdGlhbERhdGEgPSAoZGF0YSkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IElOSVRJQUxfREFUQSxcblx0XHRwYXlsb2FkOiBkYXRhLFxuXHR9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSAoZGF0YSkgPT4ge1xuXHRyZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGF4aW9zXG5cdFx0XHRcdC5wb3N0KFwiaHR0cHM6Ly9wcmVjaWx5LWRldi10ZWFtLmhlcm9rdWFwcC5jb20vYXBpL2xvZ2luXCIsIGRhdGEpXG5cdFx0XHRcdC50aGVuKChyZXMpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImhoaGhcIiwgcmVzLCByZXMuZGF0YS51c2VyKTtcblx0XHRcdFx0XHRkaXNwYXRjaChzZXRVc2VyKHJlcy5kYXRhLnVzZXIpKTtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKHJlcy5kYXRhKTtcblx0XHRcdFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2dpblwiLCBKU09OLnN0cmluZ2lmeShyZXMuZGF0YSkpO1xuXHRcdFx0XHRcdHRvYXN0LnN1Y2Nlc3MoXCJsb2dpbiBzdWNjZXNzZnVsXCIpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycikgPT4gdG9hc3QuZXJyb3IoXCJObyB1c2VycyBmb3VuZFwiKSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH1cblx0fTtcbn07XG5leHBvcnQgY29uc3QgZW1wdHlVc2VyID0gKCkgPT4ge1xuXHRjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuXHRyZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2dpblwiKTtcblx0XHRkaXNwYXRjaChlbXB0eURhdGEobnVsbCkpO1xuXHR9O1xufTtcbmV4cG9ydCBjb25zdCBnZXRJbml0aWFsID0gKCkgPT4ge1xuXHRyZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3QgZGF0YSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ2luXCIpO1xuXHRcdGRpc3BhdGNoKGdldEluaXRpYWxEYXRhKEpTT04ucGFyc2UoZGF0YSkpKTtcblx0fTtcbn07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ0b2FzdCIsIkVNUFRZX1VTRVIiLCJTRVRfVVNFUiIsIklOSVRJQUxfREFUQSIsInNldFVzZXIiLCJkYXRhIiwidHlwZSIsInBheWxvYWQiLCJlbXB0eURhdGEiLCJnZXRJbml0aWFsRGF0YSIsImdldFVzZXIiLCJkaXNwYXRjaCIsInBvc3QiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInN1Y2Nlc3MiLCJjYXRjaCIsImVyciIsImVycm9yIiwiZW1wdHlVc2VyIiwicmVtb3ZlSXRlbSIsImdldEluaXRpYWwiLCJnZXRJdGVtIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./actions/index.js\n");

/***/ }),

/***/ "./actions/types.js":
/*!**************************!*\
  !*** ./actions/types.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SET_USER\": () => (/* binding */ SET_USER),\n/* harmony export */   \"EMPTY_USER\": () => (/* binding */ EMPTY_USER),\n/* harmony export */   \"INITIAL_DATA\": () => (/* binding */ INITIAL_DATA)\n/* harmony export */ });\nconst SET_USER = \"SET_USER\";\nconst EMPTY_USER = \"EMPTY_USER\";\nconst INITIAL_DATA = \"INITIAL_DATA\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hY3Rpb25zL3R5cGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLEtBQUssQ0FBQ0EsUUFBUSxHQUFHLENBQVU7QUFDM0IsS0FBSyxDQUFDQyxVQUFVLEdBQUcsQ0FBWTtBQUMvQixLQUFLLENBQUNDLFlBQVksR0FBRyxDQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vYWN0aW9ucy90eXBlcy5qcz80ZTcxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTRVRfVVNFUiA9IFwiU0VUX1VTRVJcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9VU0VSID0gXCJFTVBUWV9VU0VSXCI7XG5leHBvcnQgY29uc3QgSU5JVElBTF9EQVRBID0gXCJJTklUSUFMX0RBVEFcIjtcbiJdLCJuYW1lcyI6WyJTRVRfVVNFUiIsIkVNUFRZX1VTRVIiLCJJTklUSUFMX0RBVEEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./actions/types.js\n");

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": () => (/* binding */ Nav),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ \"./actions/index.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"react-icons/bs\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_scroll_into_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll-into-view */ \"react-scroll-into-view\");\n/* harmony import */ var react_scroll_into_view__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll_into_view__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst Nav = (props)=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        props.getInitial();\n    }, [\n        props.user && props.user.user && props.user.user.user\n    ]);\n    console.log();\n    const emptyUser1 = ()=>{\n        props.emptyUser();\n        router.push(\"/login\");\n    };\n    const register = ()=>{\n        router.push(\"/\");\n    };\n    const login = ()=>{\n        router.push(\"/login\");\n    };\n    //console.log(props.user.user);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar\",\n        children: props.user && props.user.user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: \"Precily\"\n                }, void 0, false, {\n                    fileName: \"/home/alanhub/react-projects/client/components/Nav.js\",\n                    lineNumber: 30,\n                    columnNumber: 6\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_scroll_into_view__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    selector: \".listings\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"/home/alanhub/react-projects/client/components/Nav.js\",\n                        lineNumber: 32,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/alanhub/react-projects/client/components/Nav.js\",\n                    lineNumber: 31,\n                    columnNumber: 6\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    onClick: emptyUser1,\n                    children: \"logout\"\n                }, void 0, false, {\n                    fileName: \"/home/alanhub/react-projects/client/components/Nav.js\",\n                    lineNumber: 35,\n                    columnNumber: 6\n                }, undefined)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    onClick: login,\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/home/alanhub/react-projects/client/components/Nav.js\",\n                    lineNumber: 39,\n                    columnNumber: 6\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    onClick: register,\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"/home/alanhub/react-projects/client/components/Nav.js\",\n                    lineNumber: 40,\n                    columnNumber: 6\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/home/alanhub/react-projects/client/components/Nav.js\",\n        lineNumber: 27,\n        columnNumber: 3\n    }, undefined));\n};\nconst mapDispatchToProps = (dispatch)=>{\n    return {\n        getState: (data)=>{\n            dispatch(getUser(data));\n        },\n        getInitial: ()=>{\n            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_4__.getInitial)());\n        },\n        emptyUser: ()=>{\n            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_4__.emptyUser)());\n        }\n    };\n};\nconst mapStateToProps = (state)=>{\n    return {\n        user: state.allUsers.user\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(Nav));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ2I7QUFDRTtBQUNXO0FBQ0w7QUFDb0I7QUFFMUQsS0FBSyxDQUFDVSxHQUFHLElBQUlDLEtBQUssR0FBSyxDQUFDO0lBQzlCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHUixzREFBUztJQUN4QkYsZ0RBQVMsS0FBTyxDQUFDO1FBQ2hCUyxLQUFLLENBQUNMLFVBQVU7SUFDakIsQ0FBQyxFQUFFLENBQUNLO1FBQUFBLEtBQUssQ0FBQ0UsSUFBSSxJQUFJRixLQUFLLENBQUNFLElBQUksQ0FBQ0EsSUFBSSxJQUFJRixLQUFLLENBQUNFLElBQUksQ0FBQ0EsSUFBSSxDQUFDQSxJQUFJO0lBQUEsQ0FBQztJQUMxREMsT0FBTyxDQUFDQyxHQUFHO0lBQ1gsS0FBSyxDQUFDVixVQUFTLE9BQVMsQ0FBQztRQUN4Qk0sS0FBSyxDQUFDTixTQUFTO1FBQ2ZPLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLENBQVE7SUFDckIsQ0FBQztJQUNELEtBQUssQ0FBQ0MsUUFBUSxPQUFTLENBQUM7UUFDdkJMLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLENBQUc7SUFDaEIsQ0FBQztJQUNELEtBQUssQ0FBQ0UsS0FBSyxPQUFTLENBQUM7UUFDcEJOLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLENBQVE7SUFDckIsQ0FBQztJQUNELEVBQStCO0lBRS9CLE1BQU0sNkVBQ0pHLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVE7a0JBQ3JCVCxLQUFLLENBQUNFLElBQUksSUFBSUYsS0FBSyxDQUFDRSxJQUFJLENBQUNBLElBQUk7OzRGQUUzQlEsQ0FBRTs4QkFBQyxDQUFPOzs7Ozs7NEZBQ1ZiLCtEQUFRO29CQUFDYyxRQUFRLEVBQUMsQ0FBVzswR0FDNUJELENBQUU7a0NBQUMsQ0FBUzs7Ozs7Ozs7Ozs7NEZBR2JBLENBQUU7b0JBQUNFLE9BQU8sRUFBRWxCLFVBQVM7OEJBQUUsQ0FBTTs7Ozs7Ozs7OzRGQUk3QmdCLENBQUU7b0JBQUNFLE9BQU8sRUFBRUwsS0FBSzs4QkFBRSxDQUFLOzs7Ozs7NEZBQ3hCRyxDQUFFO29CQUFDRSxPQUFPLEVBQUVOLFFBQVE7OEJBQUUsQ0FBUTs7Ozs7Ozs7Ozs7OztBQUtwQyxDQUFDO0FBQ0QsS0FBSyxDQUFDTyxrQkFBa0IsSUFBSUMsUUFBUSxHQUFLLENBQUM7SUFDekMsTUFBTSxDQUFDLENBQUM7UUFDUEMsUUFBUSxHQUFHQyxJQUFJLEdBQUssQ0FBQztZQUNwQkYsUUFBUSxDQUFDRyxPQUFPLENBQUNELElBQUk7UUFDdEIsQ0FBQztRQUNEckIsVUFBVSxNQUFRLENBQUM7WUFDbEJtQixRQUFRLENBQUNuQixvREFBVTtRQUNwQixDQUFDO1FBQ0RELFNBQVMsTUFBUSxDQUFDO1lBQ2pCb0IsUUFBUSxDQUFDcEIsbURBQVM7UUFDbkIsQ0FBQztJQUNGLENBQUM7QUFDRixDQUFDO0FBQ0QsS0FBSyxDQUFDd0IsZUFBZSxJQUFJQyxLQUFLLEdBQUssQ0FBQztJQUNuQyxNQUFNLENBQUMsQ0FBQztRQUNQakIsSUFBSSxFQUFFaUIsS0FBSyxDQUFDQyxRQUFRLENBQUNsQixJQUFJO0lBQzFCLENBQUM7QUFDRixDQUFDO0FBQ0QsaUVBQWVWLG9EQUFPLENBQUMwQixlQUFlLEVBQUVMLGtCQUFrQixFQUFFZCxHQUFHLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTmF2LmpzPzg2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgZW1wdHlVc2VyLCBnZXRJbml0aWFsIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcbmltcG9ydCB7IEJzRGFzaFNxdWFyZSB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IFNjcm9sbFRvLCB7IHNjcm9sbEludG9WaWV3IH0gZnJvbSBcInJlYWN0LXNjcm9sbC1pbnRvLXZpZXdcIjtcblxuZXhwb3J0IGNvbnN0IE5hdiA9IChwcm9wcykgPT4ge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRwcm9wcy5nZXRJbml0aWFsKCk7XG5cdH0sIFtwcm9wcy51c2VyICYmIHByb3BzLnVzZXIudXNlciAmJiBwcm9wcy51c2VyLnVzZXIudXNlcl0pO1xuXHRjb25zb2xlLmxvZygpO1xuXHRjb25zdCBlbXB0eVVzZXIgPSAoKSA9PiB7XG5cdFx0cHJvcHMuZW1wdHlVc2VyKCk7XG5cdFx0cm91dGVyLnB1c2goXCIvbG9naW5cIik7XG5cdH07XG5cdGNvbnN0IHJlZ2lzdGVyID0gKCkgPT4ge1xuXHRcdHJvdXRlci5wdXNoKFwiL1wiKTtcblx0fTtcblx0Y29uc3QgbG9naW4gPSAoKSA9PiB7XG5cdFx0cm91dGVyLnB1c2goXCIvbG9naW5cIik7XG5cdH07XG5cdC8vY29uc29sZS5sb2cocHJvcHMudXNlci51c2VyKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG5cdFx0XHR7cHJvcHMudXNlciAmJiBwcm9wcy51c2VyLnVzZXIgPyAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PGxpPlByZWNpbHk8L2xpPlxuXHRcdFx0XHRcdDxTY3JvbGxUbyBzZWxlY3Rvcj1cIi5saXN0aW5nc1wiPlxuXHRcdFx0XHRcdFx0PGxpPkRhc2hib2FyZDwvbGk+XG5cdFx0XHRcdFx0PC9TY3JvbGxUbz5cblxuXHRcdFx0XHRcdDxsaSBvbkNsaWNrPXtlbXB0eVVzZXJ9PmxvZ291dDwvbGk+XG5cdFx0XHRcdDwvPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHQ8bGkgb25DbGljaz17bG9naW59PkxvZ2luPC9saT5cblx0XHRcdFx0XHQ8bGkgb25DbGljaz17cmVnaXN0ZXJ9PlJlZ2lzdGVyPC9saT5cblx0XHRcdFx0PC8+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGdldFN0YXRlOiAoZGF0YSkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2goZ2V0VXNlcihkYXRhKSk7XG5cdFx0fSxcblx0XHRnZXRJbml0aWFsOiAoKSA9PiB7XG5cdFx0XHRkaXNwYXRjaChnZXRJbml0aWFsKCkpO1xuXHRcdH0sXG5cdFx0ZW1wdHlVc2VyOiAoKSA9PiB7XG5cdFx0XHRkaXNwYXRjaChlbXB0eVVzZXIoKSk7XG5cdFx0fSxcblx0fTtcbn07XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcblx0cmV0dXJuIHtcblx0XHR1c2VyOiBzdGF0ZS5hbGxVc2Vycy51c2VyLFxuXHR9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE5hdik7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbm5lY3QiLCJ1c2VSb3V0ZXIiLCJlbXB0eVVzZXIiLCJnZXRJbml0aWFsIiwiQnNEYXNoU3F1YXJlIiwiU2Nyb2xsVG8iLCJzY3JvbGxJbnRvVmlldyIsIk5hdiIsInByb3BzIiwicm91dGVyIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwicmVnaXN0ZXIiLCJsb2dpbiIsImRpdiIsImNsYXNzTmFtZSIsImxpIiwic2VsZWN0b3IiLCJvbkNsaWNrIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsImRhdGEiLCJnZXRVc2VyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhbGxVc2VycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ \"./store/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _pages_navbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/navbar.css */ \"./pages/navbar.css\");\n/* harmony import */ var _pages_navbar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_navbar_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/index.css */ \"./pages/index.css\");\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pages_index_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _pages_home_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/home.css */ \"./pages/home.css\");\n/* harmony import */ var _pages_home_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_pages_home_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width,initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/home/alanhub/react-projects/client/pages/_app.js\",\n                        lineNumber: 16,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"/home/alanhub/react-projects/client/pages/_app.js\",\n                        lineNumber: 20,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"/home/alanhub/react-projects/client/pages/_app.js\",\n                        lineNumber: 21,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/home/alanhub/react-projects/client/pages/_app.js\",\n                        lineNumber: 22,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/alanhub/react-projects/client/pages/_app.js\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_9__.ToastContainer, {\n                position: \"top-center\"\n            }, void 0, false, {\n                fileName: \"/home/alanhub/react-projects/client/pages/_app.js\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n                store: _store_index__WEBPACK_IMPORTED_MODULE_1__.store,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/alanhub/react-projects/client/pages/_app.js\",\n                        lineNumber: 29,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/home/alanhub/react-projects/client/pages/_app.js\",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/alanhub/react-projects/client/pages/_app.js\",\n                lineNumber: 28,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDQTtBQUNIO0FBQ1A7QUFDRDtBQUNBO0FBQ0Q7QUFDRTtBQUMwQjtBQUNSO1NBRXJDTSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN6QyxNQUFNOzt3RkFFSEwsa0RBQUk7O2dHQUNITSxDQUFJO3dCQUNKQyxJQUFJLEVBQUMsQ0FBVTt3QkFDZkMsT0FBTyxFQUFDLENBQXNDOzs7Ozs7Z0dBRTlDQyxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBWTt3QkFBQ0MsSUFBSSxFQUFDLENBQThCOzs7Ozs7Z0dBQ3pERixDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBWTt3QkFBQ0MsSUFBSSxFQUFDLENBQTJCO3dCQUFDQyxXQUFXOzs7Ozs7Z0dBQ2xFSCxDQUFJO3dCQUNKRSxJQUFJLEVBQUMsQ0FBNEU7d0JBQ2pGRCxHQUFHLEVBQUMsQ0FBWTs7Ozs7Ozs7Ozs7O3dGQUdqQlQsMERBQWM7Z0JBQUNZLFFBQVEsRUFBQyxDQUFZOzs7Ozs7d0ZBQ3BDZixpREFBUTtnQkFBQ0QsS0FBSyxFQUFFQSwrQ0FBSzs7Z0dBQ3BCRSx1REFBRzs7Ozs7Z0dBQ0hLLFNBQVM7MkJBQUtDLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FBSTVCLENBQUM7QUFDRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlL2luZGV4XCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZcIjtcbmltcG9ydCBcIi4uL3BhZ2VzL25hdmJhci5jc3NcIjtcbmltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5pbXBvcnQgXCIuLi9wYWdlcy9ob21lLmNzc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PG1ldGFcblx0XHRcdFx0XHRuYW1lPVwidmlld3BvcnRcIlxuXHRcdFx0XHRcdGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLjBcIlxuXHRcdFx0XHQ+PC9tZXRhPlxuXHRcdFx0XHQ8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxuXHRcdFx0XHQ8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc29yaWdpbiAvPlxuXHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytTbGFiOndnaHRAMTAwJmRpc3BsYXk9c3dhcFwiXG5cdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8VG9hc3RDb250YWluZXIgcG9zaXRpb249XCJ0b3AtY2VudGVyXCIgLz5cblx0XHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdFx0XHQ8TmF2IC8+XG5cdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0PC8+XG5cdCk7XG59XG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJzdG9yZSIsIlByb3ZpZGVyIiwiTmF2IiwiSGVhZCIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiY3Jvc3NvcmlnaW4iLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/rootReducer.js":
/*!*********************************!*\
  !*** ./reducers/rootReducer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rootReducer\": () => (/* binding */ rootReducer)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userReducer */ \"./reducers/userReducer.js\");\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    allUsers: _userReducer__WEBPACK_IMPORTED_MODULE_1__.loginReducer\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9yb290UmVkdWNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVDO0FBQ0s7QUFFckMsS0FBSyxDQUFDRSxXQUFXLEdBQUdGLHNEQUFlLENBQUMsQ0FBQztJQUMzQ0csUUFBUSxFQUFFRixzREFBWTtBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcmVkdWNlcnMvcm9vdFJlZHVjZXIuanM/ODMyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IGxvZ2luUmVkdWNlciB9IGZyb20gXCIuL3VzZXJSZWR1Y2VyXCI7XG5cbmV4cG9ydCBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG5cdGFsbFVzZXJzOiBsb2dpblJlZHVjZXIsXG59KTtcbiJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJsb2dpblJlZHVjZXIiLCJyb290UmVkdWNlciIsImFsbFVzZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/rootReducer.js\n");

/***/ }),

/***/ "./reducers/userReducer.js":
/*!*********************************!*\
  !*** ./reducers/userReducer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginReducer\": () => (/* binding */ loginReducer)\n/* harmony export */ });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./actions/types.js\");\n\nconst initialState = {\n    user: null,\n    token: \"\",\n    login: false,\n    page: false\n};\nconst loginReducer = (state = initialState, action)=>{\n    switch(action.type){\n        case _actions_types__WEBPACK_IMPORTED_MODULE_0__.SET_USER:\n            return {\n                ...state,\n                user: action.payload.user,\n                token: action.payload.token,\n                login: true\n            };\n        case _actions_types__WEBPACK_IMPORTED_MODULE_0__.EMPTY_USER:\n            return {\n                ...state,\n                user: null,\n                token: null,\n                page: false\n            };\n        case _actions_types__WEBPACK_IMPORTED_MODULE_0__.INITIAL_DATA:\n            return {\n                ...state,\n                user: action.payload,\n                token: action.payload,\n                page: true\n            };\n        default:\n            return state;\n    }\n    return;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyUmVkdWNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxRTtBQUVyRSxLQUFLLENBQUNHLFlBQVksR0FBRyxDQUFDO0lBQ3JCQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxLQUFLLEVBQUUsQ0FBRTtJQUNUQyxLQUFLLEVBQUUsS0FBSztJQUNaQyxJQUFJLEVBQUUsS0FBSztBQUNaLENBQUM7QUFDTSxLQUFLLENBQUNDLFlBQVksSUFBSUMsS0FBSyxHQUFHTixZQUFZLEVBQUVPLE1BQU0sR0FBSyxDQUFDO0lBQzlELE1BQU0sQ0FBRUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2xCLElBQUksQ0FBQ1Ysb0RBQVE7WUFDWixNQUFNLENBQUMsQ0FBQzttQkFDSlEsS0FBSztnQkFDUkwsSUFBSSxFQUFFTSxNQUFNLENBQUNFLE9BQU8sQ0FBQ1IsSUFBSTtnQkFDekJDLEtBQUssRUFBRUssTUFBTSxDQUFDRSxPQUFPLENBQUNQLEtBQUs7Z0JBQzNCQyxLQUFLLEVBQUUsSUFBSTtZQUNaLENBQUM7UUFDRixJQUFJLENBQUNOLHNEQUFVO1lBQ2QsTUFBTSxDQUFDLENBQUM7bUJBQ0pTLEtBQUs7Z0JBQ1JMLElBQUksRUFBRSxJQUFJO2dCQUNWQyxLQUFLLEVBQUUsSUFBSTtnQkFDWEUsSUFBSSxFQUFFLEtBQUs7WUFDWixDQUFDO1FBQ0YsSUFBSSxDQUFDTCx3REFBWTtZQUNoQixNQUFNLENBQUMsQ0FBQzttQkFDSk8sS0FBSztnQkFDUkwsSUFBSSxFQUFFTSxNQUFNLENBQUNFLE9BQU87Z0JBQ3BCUCxLQUFLLEVBQUVLLE1BQU0sQ0FBQ0UsT0FBTztnQkFDckJMLElBQUksRUFBRSxJQUFJO1lBQ1gsQ0FBQzs7WUFFRCxNQUFNLENBQUNFLEtBQUs7O0lBRWQsTUFBTTtBQUNQLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9yZWR1Y2Vycy91c2VyUmVkdWNlci5qcz81MDdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVNUFRZX1VTRVIsIFNFVF9VU0VSLCBJTklUSUFMX0RBVEEgfSBmcm9tIFwiLi4vYWN0aW9ucy90eXBlc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdHVzZXI6IG51bGwsXG5cdHRva2VuOiBcIlwiLFxuXHRsb2dpbjogZmFsc2UsXG5cdHBhZ2U6IGZhbHNlLFxufTtcbmV4cG9ydCBjb25zdCBsb2dpblJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBTRVRfVVNFUjpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR1c2VyOiBhY3Rpb24ucGF5bG9hZC51c2VyLFxuXHRcdFx0XHR0b2tlbjogYWN0aW9uLnBheWxvYWQudG9rZW4sXG5cdFx0XHRcdGxvZ2luOiB0cnVlLFxuXHRcdFx0fTtcblx0XHRjYXNlIEVNUFRZX1VTRVI6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXNlcjogbnVsbCxcblx0XHRcdFx0dG9rZW46IG51bGwsXG5cdFx0XHRcdHBhZ2U6IGZhbHNlLFxuXHRcdFx0fTtcblx0XHRjYXNlIElOSVRJQUxfREFUQTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR1c2VyOiBhY3Rpb24ucGF5bG9hZCxcblx0XHRcdFx0dG9rZW46IGFjdGlvbi5wYXlsb2FkLFxuXHRcdFx0XHRwYWdlOiB0cnVlLFxuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG5cdHJldHVybjtcbn07XG4iXSwibmFtZXMiOlsiRU1QVFlfVVNFUiIsIlNFVF9VU0VSIiwiSU5JVElBTF9EQVRBIiwiaW5pdGlhbFN0YXRlIiwidXNlciIsInRva2VuIiwibG9naW4iLCJwYWdlIiwibG9naW5SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/userReducer.js\n");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/rootReducer */ \"./reducers/rootReducer.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst composedEnhancer = (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__.rootReducer, composedEnhancer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvRDtBQUNYO0FBQ1k7QUFDUztBQUM5RCxLQUFLLENBQUNLLGdCQUFnQixHQUFHRCw2RUFBbUIsQ0FBQ0gsc0RBQWUsQ0FBQ0Msb0RBQWU7QUFFckUsS0FBSyxDQUFDSSxLQUFLLEdBQUdOLGtEQUFXLENBQUNHLDhEQUFXLEVBQUVFLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3N0b3JlL2luZGV4LmpzPzU2YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCB7IHJvb3RSZWR1Y2VyIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyXCI7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xuY29uc3QgY29tcG9zZWRFbmhhbmNlciA9IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgY29tcG9zZWRFbmhhbmNlcik7XG4iXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJyb290UmVkdWNlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJjb21wb3NlZEVuaGFuY2VyIiwic3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/index.js\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./pages/home.css":
/*!************************!*\
  !*** ./pages/home.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./pages/navbar.css":
/*!**************************!*\
  !*** ./pages/navbar.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-scroll-into-view":
/*!*****************************************!*\
  !*** external "react-scroll-into-view" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll-into-view");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();