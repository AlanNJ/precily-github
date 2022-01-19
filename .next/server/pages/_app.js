(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./actions/types.js
var types = __webpack_require__(218);
;// CONCATENATED MODULE: ./reducers/userReducer.js

const initialState = {
    user: null,
    token: "",
    login: false,
    page: false
};
const loginReducer = (state = initialState, action)=>{
    switch(action.type){
        case types/* SET_USER */.QE:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                login: true
            };
        case types/* EMPTY_USER */.QP:
            return {
                ...state,
                user: null,
                token: null,
                page: false
            };
        case types/* INITIAL_DATA */.iW:
            return {
                ...state,
                user: action.payload,
                token: action.payload,
                page: true
            };
        default:
            return state;
    }
    return;
};

;// CONCATENATED MODULE: ./reducers/rootReducer.js


const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    allUsers: loginReducer
});

;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: ./store/index.js




const composedEnhancer = (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default())));
const store = (0,external_redux_namespaceObject.createStore)(rootReducer, composedEnhancer);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: ./actions/index.js
var actions = __webpack_require__(474);
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
;// CONCATENATED MODULE: external "react-scroll-into-view"
const external_react_scroll_into_view_namespaceObject = require("react-scroll-into-view");
var external_react_scroll_into_view_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_into_view_namespaceObject);
;// CONCATENATED MODULE: ./components/Nav.js







const Nav = (props)=>{
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        props.getInitial();
    }, [
        props.user && props.user.user && props.user.user.user
    ]);
    console.log();
    const emptyUser1 = ()=>{
        props.emptyUser();
        router.push("/login");
    };
    const register = ()=>{
        router.push("/");
    };
    const login = ()=>{
        router.push("/login");
    };
    //console.log(props.user.user);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "navbar",
        children: props.user && props.user.user ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: "Precily"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_scroll_into_view_default()), {
                    selector: ".listings",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Dashboard"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: emptyUser1,
                    children: "logout"
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: login,
                    children: "Login"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: register,
                    children: "Register"
                })
            ]
        })
    }));
};
const mapDispatchToProps = (dispatch)=>{
    return {
        getState: (data)=>{
            dispatch(getUser(data));
        },
        getInitial: ()=>{
            dispatch((0,actions/* getInitial */.gc)());
        },
        emptyUser: ()=>{
            dispatch((0,actions/* emptyUser */.SX)());
        }
    };
};
const mapStateToProps = (state)=>{
    return {
        user: state.allUsers.user
    };
};
/* harmony default export */ const components_Nav = ((0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps)(Nav));

// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(722);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(187);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(819);
;// CONCATENATED MODULE: ./pages/_app.js











function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width,initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossorigin: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {
                position: "top-center"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
                store: store,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Nav, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 722:
/***/ (() => {



/***/ }),

/***/ 819:
/***/ (() => {



/***/ }),

/***/ 167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 22:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [474], () => (__webpack_exec__(461)));
module.exports = __webpack_exports__;

})();