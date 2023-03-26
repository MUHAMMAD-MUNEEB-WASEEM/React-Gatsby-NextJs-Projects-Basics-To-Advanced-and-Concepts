module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default, FormikStep, FormikStepper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormikStep", function() { return FormikStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormikStepper", function() { return FormikStepper; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik-material-ui */ "formik-material-ui");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik_material_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Github\\react-multi-step-form\\src\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const sleep = time => new Promise(acc => setTimeout(acc, time));

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createStyles"])({
  root: {
    backgroundColor: "#757983",
    color: "#fff"
  },
  back: {
    backgroundColor: "#15d68d",
    backgroundImage: "linear-gradient(90deg, #15d68d 0%, #09b3df 100%)"
  }
}));
function Home() {
  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    style: {
      backgroundColor: "#757983"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(FormikStepper, {
    initialValues: {
      firstName: '',
      lastName: '',
      millionaire: false,
      money: 0,
      description: ''
    },
    onSubmit: async values => {
      await sleep(3000);
      console.log('values', values);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(FormikStep, {
    label: "Personal Data",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    paddingBottom: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    fullWidth: true,
    name: "firstName",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_2__["TextField"],
    label: "First Name",
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    paddingBottom: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    fullWidth: true,
    name: "lastName",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_2__["TextField"],
    label: "Last Name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    paddingBottom: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "millionaire",
    type: "checkbox",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_2__["CheckboxWithLabel"],
    Label: {
      label: 'I am a millionaire'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }))), __jsx(FormikStep, {
    label: "Bank Accounts",
    validationSchema: Object(yup__WEBPACK_IMPORTED_MODULE_4__["object"])({
      money: Object(yup__WEBPACK_IMPORTED_MODULE_4__["mixed"])().when('millionaire', {
        is: true,
        then: Object(yup__WEBPACK_IMPORTED_MODULE_4__["number"])().required().min(1000000, 'Because you said you are a millionaire you need to have 1 million'),
        otherwise: Object(yup__WEBPACK_IMPORTED_MODULE_4__["number"])().required()
      })
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    paddingBottom: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    fullWidth: true,
    name: "money",
    type: "number",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_2__["TextField"],
    label: "All the money I have",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }))), __jsx(FormikStep, {
    label: "More Info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    paddingBottom: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    fullWidth: true,
    name: "description",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_2__["TextField"],
    label: "Description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }))))));
}
function FormikStep({
  children
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, children);
}
function FormikStepper(_ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  const childrenArray = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children);
  const {
    0: step,
    1: setStep
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);
  const currentChild = childrenArray[step];
  const {
    0: completed,
    1: setCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  const classes = useStyles();
  const classes1 = useStyles();
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], _extends({}, props, {
    validationSchema: currentChild.props.validationSchema,
    onSubmit: async (values, helpers) => {
      if (isLastStep()) {
        await props.onSubmit(values, helpers);
        setCompleted(true);
        helpers.resetForm();
      } else {
        setStep(s => s + 1);
        helpers.setTouched({});
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }), ({
    isSubmitting
  }) => __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Stepper"], {
    alternativeLabel: true,
    activeStep: step,
    className: classes1.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, childrenArray.map((child, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Step"], {
    className: classes1.root,
    key: child.props.label,
    completed: step > index || completed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["StepLabel"], {
    className: classes1.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, child.props.label)))), currentChild, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, step > 0 ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    disabled: isSubmitting,
    variant: "contained",
    color: "primary",
    onClick: () => setStep(s => s - 1),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, "Back")) : null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    startIcon: isSubmitting ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CircularProgress"], {
      size: "1rem",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 43
      }
    }) : null,
    disabled: isSubmitting,
    variant: "contained",
    className: classes.back,
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next')))));
}

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Github\react-multi-step-form\src\pages\index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "formik-material-ui":
/*!*************************************!*\
  !*** external "formik-material-ui" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik-material-ui");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvcm1pay1tYXRlcmlhbC11aVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieXVwXCIiXSwibmFtZXMiOlsic2xlZXAiLCJ0aW1lIiwiUHJvbWlzZSIsImFjYyIsInNldFRpbWVvdXQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJiYWNrIiwiYmFja2dyb3VuZEltYWdlIiwiSG9tZSIsImNsYXNzZXMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIm1pbGxpb25haXJlIiwibW9uZXkiLCJkZXNjcmlwdGlvbiIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJUZXh0RmllbGQiLCJDaGVja2JveFdpdGhMYWJlbCIsImxhYmVsIiwib2JqZWN0IiwibWl4ZWQiLCJ3aGVuIiwiaXMiLCJ0aGVuIiwibnVtYmVyIiwicmVxdWlyZWQiLCJtaW4iLCJvdGhlcndpc2UiLCJGb3JtaWtTdGVwIiwiY2hpbGRyZW4iLCJGb3JtaWtTdGVwcGVyIiwicHJvcHMiLCJjaGlsZHJlbkFycmF5IiwiUmVhY3QiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJzdGVwIiwic2V0U3RlcCIsInVzZVN0YXRlIiwiY3VycmVudENoaWxkIiwiY29tcGxldGVkIiwic2V0Q29tcGxldGVkIiwiaXNMYXN0U3RlcCIsImxlbmd0aCIsImNsYXNzZXMxIiwidmFsaWRhdGlvblNjaGVtYSIsImhlbHBlcnMiLCJvblN1Ym1pdCIsInJlc2V0Rm9ybSIsInMiLCJzZXRUb3VjaGVkIiwiaXNTdWJtaXR0aW5nIiwibWFwIiwiY2hpbGQiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLE1BQU1BLEtBQUssR0FBSUMsSUFBRCxJQUFVLElBQUlDLE9BQUosQ0FBYUMsR0FBRCxJQUFTQyxVQUFVLENBQUNELEdBQUQsRUFBTUYsSUFBTixDQUEvQixDQUF4Qjs7QUFHQSxNQUFNSSxTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsSUFDM0JDLDZFQUFZLENBQUM7QUFDWEMsTUFBSSxFQUFFO0FBQ0pDLG1CQUFlLEVBQUUsU0FEYjtBQUVKQyxT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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HK0MsWUFBWSxHQUFHLFlBQUgsR0FBa0JULFVBQVUsS0FBSyxRQUFMLEdBQWdCLE1BUDNELENBREYsQ0FiRixDQVhGLENBakJKLENBREY7QUEwREQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5S0QsOEM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IHsgQm94LCBCdXR0b24sIENhcmQsIENhcmRDb250ZW50LCBDaXJjdWxhclByb2dyZXNzLCBjb2xvcnMsIEdyaWQsIFN0ZXAsIFN0ZXBMYWJlbCwgU3RlcHBlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgRmllbGQsIEZvcm0sIEZvcm1paywgRm9ybWlrQ29uZmlnLCBGb3JtaWtWYWx1ZXMgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgeyBDaGVja2JveFdpdGhMYWJlbCwgVGV4dEZpZWxkIH0gZnJvbSAnZm9ybWlrLW1hdGVyaWFsLXVpJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtaXhlZCwgbnVtYmVyLCBvYmplY3QgfSBmcm9tICd5dXAnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIFRoZW1lLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCBzbGVlcCA9ICh0aW1lKSA9PiBuZXcgUHJvbWlzZSgoYWNjKSA9PiBzZXRUaW1lb3V0KGFjYywgdGltZSkpO1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzc1Nzk4M1wiLFxyXG4gICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICB9LFxyXG4gICAgYmFjazoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE1ZDY4ZFwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTVkNjhkIDAlLCAjMDliM2RmIDEwMCUpXCIsXHJcbiAgICB9XHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgY2xhc3NlczogUmVjb3JkPFwicm9vdFwiLCBzdHJpbmc+ID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgPENhcmQgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiIzc1Nzk4M1wifX0+XHJcbiAgICAgIDxDYXJkQ29udGVudCA+XHJcbiAgICAgICAgPEZvcm1pa1N0ZXBwZXIgXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgbWlsbGlvbmFpcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBtb25leTogMCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHNsZWVwKDMwMDApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmFsdWVzJywgdmFsdWVzKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZvcm1pa1N0ZXAgbGFiZWw9XCJQZXJzb25hbCBEYXRhXCI+XHJcbiAgICAgICAgICAgIDxCb3ggcGFkZGluZ0JvdHRvbT17Mn0+XHJcbiAgICAgICAgICAgICAgPEZpZWxkIGZ1bGxXaWR0aCBuYW1lPVwiZmlyc3ROYW1lXCIgY29tcG9uZW50PXtUZXh0RmllbGR9IGxhYmVsPVwiRmlyc3QgTmFtZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fS8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IHBhZGRpbmdCb3R0b209ezJ9PlxyXG4gICAgICAgICAgICAgIDxGaWVsZCBmdWxsV2lkdGggbmFtZT1cImxhc3ROYW1lXCIgY29tcG9uZW50PXtUZXh0RmllbGR9IGxhYmVsPVwiTGFzdCBOYW1lXCIgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggcGFkZGluZ0JvdHRvbT17Mn0+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibWlsbGlvbmFpcmVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Q2hlY2tib3hXaXRoTGFiZWx9XHJcbiAgICAgICAgICAgICAgICBMYWJlbD17eyBsYWJlbDogJ0kgYW0gYSBtaWxsaW9uYWlyZScgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvRm9ybWlrU3RlcD5cclxuICAgICAgICAgIDxGb3JtaWtTdGVwIFxyXG4gICAgICAgICAgICBsYWJlbD1cIkJhbmsgQWNjb3VudHNcIlxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtvYmplY3Qoe1xyXG4gICAgICAgICAgICAgIG1vbmV5OiBtaXhlZCgpLndoZW4oJ21pbGxpb25haXJlJywge1xyXG4gICAgICAgICAgICAgICAgaXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0aGVuOiBudW1iZXIoKVxyXG4gICAgICAgICAgICAgICAgICAucmVxdWlyZWQoKVxyXG4gICAgICAgICAgICAgICAgICAubWluKFxyXG4gICAgICAgICAgICAgICAgICAgIDFfMDAwXzAwMCxcclxuICAgICAgICAgICAgICAgICAgICAnQmVjYXVzZSB5b3Ugc2FpZCB5b3UgYXJlIGEgbWlsbGlvbmFpcmUgeW91IG5lZWQgdG8gaGF2ZSAxIG1pbGxpb24nXHJcbiAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBvdGhlcndpc2U6IG51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Qm94IHBhZGRpbmdCb3R0b209ezJ9PlxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibW9uZXlcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQWxsIHRoZSBtb25leSBJIGhhdmVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Gb3JtaWtTdGVwPlxyXG4gICAgICAgICAgPEZvcm1pa1N0ZXAgbGFiZWw9XCJNb3JlIEluZm9cIj5cclxuICAgICAgICAgICAgPEJveCBwYWRkaW5nQm90dG9tPXsyfT5cclxuICAgICAgICAgICAgICA8RmllbGQgZnVsbFdpZHRoIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbXBvbmVudD17VGV4dEZpZWxkfSBsYWJlbD1cIkRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0Zvcm1pa1N0ZXA+XHJcbiAgICAgICAgPC9Gb3JtaWtTdGVwcGVyPlxyXG4gICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWlrU3RlcFByb3BzXHJcbiAgZXh0ZW5kcyBQaWNrPEZvcm1pa0NvbmZpZzxGb3JtaWtWYWx1ZXM+LCAnY2hpbGRyZW4nIHwgJ3ZhbGlkYXRpb25TY2hlbWEnPiB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZvcm1pa1N0ZXAoeyBjaGlsZHJlbiB9OiBGb3JtaWtTdGVwUHJvcHMpIHtcclxuICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRm9ybWlrU3RlcHBlcih7IGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBGb3JtaWtDb25maWc8Rm9ybWlrVmFsdWVzPikge1xyXG4gIGNvbnN0IGNoaWxkcmVuQXJyYXkgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKSBhcyBSZWFjdC5SZWFjdEVsZW1lbnQ8Rm9ybWlrU3RlcFByb3BzPltdO1xyXG4gIGNvbnN0IFtzdGVwLCBzZXRTdGVwXT0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgY3VycmVudENoaWxkID0gY2hpbGRyZW5BcnJheVtzdGVwXTtcclxuICBjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBpc0xhc3RTdGVwKCkge1xyXG4gICAgcmV0dXJuIHN0ZXAgPT09IGNoaWxkcmVuQXJyYXkubGVuZ3RoIC0gMTtcclxuICB9XHJcbiAgY29uc3QgY2xhc3NlczogUmVjb3JkPFwiYmFja1wiLCBzdHJpbmc+ID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgY2xhc3NlczE6IFJlY29yZDxcInJvb3RcIiwgc3RyaW5nPiA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybWlrXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgdmFsaWRhdGlvblNjaGVtYT17Y3VycmVudENoaWxkLnByb3BzLnZhbGlkYXRpb25TY2hlbWF9XHJcbiAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCBoZWxwZXJzKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTGFzdFN0ZXAoKSkge1xyXG4gICAgICAgICAgYXdhaXQgcHJvcHMub25TdWJtaXQodmFsdWVzLCBoZWxwZXJzKTtcclxuICAgICAgICAgIHNldENvbXBsZXRlZCh0cnVlKTtcclxuICAgICAgICAgIGhlbHBlcnMucmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0U3RlcCgocykgPT4gcyArIDEpO1xyXG5cclxuICAgICAgICAgIGhlbHBlcnMuc2V0VG91Y2hlZCh7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7KHsgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICA8Rm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgIDxTdGVwcGVyIGFsdGVybmF0aXZlTGFiZWwgYWN0aXZlU3RlcD17c3RlcH0gY2xhc3NOYW1lPXtjbGFzc2VzMS5yb290fT5cclxuICAgICAgICAgICAge2NoaWxkcmVuQXJyYXkubWFwKChjaGlsZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8U3RlcCBjbGFzc05hbWU9e2NsYXNzZXMxLnJvb3R9IGtleT17Y2hpbGQucHJvcHMubGFiZWx9IGNvbXBsZXRlZD17c3RlcCA+IGluZGV4IHx8IGNvbXBsZXRlZH0+XHJcbiAgICAgICAgICAgICAgICA8U3RlcExhYmVsIGNsYXNzTmFtZT17Y2xhc3NlczEucm9vdH0+e2NoaWxkLnByb3BzLmxhYmVsfTwvU3RlcExhYmVsPlxyXG4gICAgICAgICAgICAgIDwvU3RlcD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1N0ZXBwZXI+XHJcblxyXG4gICAgICAgICAge2N1cnJlbnRDaGlsZH1cclxuXHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIHtzdGVwID4gMCA/IChcclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3RlcCgocykgPT4gcyAtIDEpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBCYWNrXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17aXNTdWJtaXR0aW5nID8gPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT1cIjFyZW1cIiAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFja31cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpc1N1Ym1pdHRpbmcgPyAnU3VibWl0dGluZycgOiBpc0xhc3RTdGVwKCkgPyAnU3VibWl0JyA6ICdOZXh0J31cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybWlrPlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWstbWF0ZXJpYWwtdWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieXVwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=