"use strict";
exports.id = 474;
exports.ids = [474];
exports.modules = {

/***/ 474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PR": () => (/* binding */ getUser),
/* harmony export */   "SX": () => (/* binding */ emptyUser),
/* harmony export */   "gc": () => (/* binding */ getInitial)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(218);



const setUser = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_2__/* .SET_USER */ .QE,
        payload: data
    };
};
const emptyData = ()=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_USER */ .QP,
        payload: null
    };
};
const getInitialData = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_2__/* .INITIAL_DATA */ .iW,
        payload: data
    };
};
const getUser = (data)=>{
    return (dispatch)=>{
        try {
            axios__WEBPACK_IMPORTED_MODULE_0___default().post("https://precily-dev-team.herokuapp.com/api/login", data).then((res)=>{
                console.log("hhhh", res, res.data.user);
                dispatch(setUser(res.data.user));
                //console.log(res.data);
                window.localStorage.setItem("login", JSON.stringify(res.data));
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("login successful");
            }).catch((err)=>react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("No users found")
            );
        } catch (err) {
            console.log(err);
        }
    };
};
const emptyUser = ()=>{
    console.log("hello");
    return (dispatch)=>{
        localStorage.removeItem("login");
        dispatch(emptyData(null));
    };
};
const getInitial = ()=>{
    return (dispatch)=>{
        const data = window.localStorage.getItem("login");
        dispatch(getInitialData(JSON.parse(data)));
    };
};


/***/ }),

/***/ 218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QE": () => (/* binding */ SET_USER),
/* harmony export */   "QP": () => (/* binding */ EMPTY_USER),
/* harmony export */   "iW": () => (/* binding */ INITIAL_DATA)
/* harmony export */ });
const SET_USER = "SET_USER";
const EMPTY_USER = "EMPTY_USER";
const INITIAL_DATA = "INITIAL_DATA";


/***/ })

};
;