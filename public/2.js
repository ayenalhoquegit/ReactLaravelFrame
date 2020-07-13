(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/components/Crud/CrudList.js":
/*!**************************************************!*\
  !*** ./resources/js/components/Crud/CrudList.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/index.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _hoc_Auxs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hoc/Auxs */ "./resources/js/hoc/Auxs.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _UI_Toaster_MessageHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Toaster/MessageHandler */ "./resources/js/components/UI/Toaster/MessageHandler.js");
/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/index */ "./resources/js/store/actions/index.js");
/* harmony import */ var _Loaders_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Loaders/Loader */ "./resources/js/components/Loaders/Loader.js");
/* harmony import */ var _Helper_Helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Helper/Helper */ "./resources/js/components/Helper/Helper.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var CrudList =
/*#__PURE__*/
function (_Component) {
  _inherits(CrudList, _Component);

  function CrudList(props) {
    var _this;

    _classCallCheck(this, CrudList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CrudList).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getData", function (pageNo) {
      _this.props.onInitCrudDataList('/api/crud?page=' + pageNo, {
        params: {
          token: _this.props.token
        }
      }, 'yes');

      _this.props.history.replace('/crud?page=' + pageNo);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "crudAddformHandler", function () {
      _this.props.history.replace('/crud/add-crud-form');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "deleteData", function (delId) {
      var params = _Helper_Helper__WEBPACK_IMPORTED_MODULE_8__["paramsExtract"](_this.props.location.search);
      axios.delete('api/crud/' + delId + '?token=' + _this.props.token).then(function (res) {
        _this.props.onSuccess(res.data.success);

        _this.getData(params.page);

        _this.props.onSuccessErrorSetNull();
      }).catch(function (error) {
        _this.props.onFail('Internal server error');
      });
    });

    _this.handlePageClick = _this.handlePageClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CrudList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onSuccessErrorSetNull(); // set errror and success status set null to hide toaster

      var params = _Helper_Helper__WEBPACK_IMPORTED_MODULE_8__["paramsExtract"](this.props.location.search);
      this.getData(params.page ? params.page : 1);
    }
  }, {
    key: "handlePageClick",
    value: function handlePageClick(data) {
      var page = data.selected >= 0 ? data.selected + 1 : 0;
      this.props.onSetPagiCurrentPage(page);
      this.getData(page);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var onLoadContent = this.props.crudError ? this.props.crudError : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loaders_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], null);
      var pagination = null;
      var programmerList = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: 6,
        className: "text-center"
      }, "  ", onLoadContent, " "));

      if (this.props.dataList && this.props.dataList.programmerList) {
        programmerList = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Auxs__WEBPACK_IMPORTED_MODULE_3__["default"], null, this.props.dataList.programmerList.data.map(function (programmer, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
            key: key
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, key + 1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, programmer.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, programmer.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: programmer.image ? 'programmerImg/' + programmer.image : 'img/no_image.png',
            width: "50",
            height: "50"
          }), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, programmer.status == 1 ? 'Active' : 'Inactive'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
            width: "25%"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: "btn btn-default edit buttonBorderStyle",
            type: "button"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            to: "/crud/edit-crud-form?id=" + programmer.id
          }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            type: "button",
            className: "btn btn-danger dataDelete buttonBorderStyle",
            onClick: function onClick() {
              return _this2.deleteData(programmer.id);
            }
          }, "Delete")));
        }));
        pagination = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
          "aria-label": ""
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_paginate__WEBPACK_IMPORTED_MODULE_1___default.a, {
          pageCount: this.props.pageCount,
          initialPage: this.props.currentPage - 1,
          forcePage: this.props.currentPage - 1,
          pageRangeDisplayed: 2,
          marginPagesDisplayed: 2,
          previousLabel: "Prev",
          nextLabel: "Next",
          containerClassName: "pagination",
          activeClassName: "active",
          disabledClassName: "disabled",
          onPageChange: this.handlePageClick,
          disableInitialCallback: true
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Auxs__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Toaster_MessageHandler__WEBPACK_IMPORTED_MODULE_5__["default"], {
        success: this.props.crudSuccess,
        error: this.props.crudError
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "well well-sm bar-height",
        id: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12 col-sm-12 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3 col-sm-3 col-xs-12 pull-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "search",
        id: "search",
        placeholder: "Search by name"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "input-group-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary classSearch"
      }, "Search"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group col-md-3 col-sm-3 col-xs-12 pull-right",
        id: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "pull-right btn btn-primary btn-round",
        onClick: this.crudAddformHandler
      }, "Add New"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "listView",
        className: "table-responsive-lg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "table table-bordered table-striped jambo_table"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "#"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Programmer Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Image"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        width: "25%"
      }, "Action"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, programmerList)), pagination));
    }
  }]);

  return CrudList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    dataList: state.crd.dataList,
    pageCount: state.crd.pageCount,
    currentPage: state.crd.currentPage,
    crudSuccess: state.crd.success,
    crudError: state.crd.error,
    token: state.log.token
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onInitCrudDataList: function onInitCrudDataList(url, params, pagiStatus) {
      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_6__["getData"](url, params, pagiStatus));
    },
    onStart: function onStart() {
      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_6__["start"]());
    },
    onSuccess: function onSuccess(success) {
      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_6__["success"](success));
    },
    onSetPagiCurrentPage: function onSetPagiCurrentPage(pageNo) {
      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_6__["setPagiCurrentPage"](pageNo));
    },
    onError: function onError(error) {
      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_6__["fail"](error));
    },
    onSuccessErrorSetNull: function onSuccessErrorSetNull() {
      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_6__["successErrorSetNull"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(CrudList));

/***/ }),

/***/ "./resources/js/components/Helper/Helper.js":
/*!**************************************************!*\
  !*** ./resources/js/components/Helper/Helper.js ***!
  \**************************************************/
/*! exports provided: paramsExtract, checkValidity, inputChangeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paramsExtract", function() { return paramsExtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkValidity", function() { return checkValidity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputChangeConfig", function() { return inputChangeConfig; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var paramsExtract = function paramsExtract(location) {
  var querystring = location.substring(location.indexOf('?') + 1).split('&');
  var params = {},
      pair,
      d = decodeURIComponent;

  for (var i = querystring.length - 1; i >= 0; i--) {
    pair = querystring[i].split('=');
    params[d(pair[0])] = d(pair[1] || '');
  }

  return params;
};
var checkValidity = function checkValidity(value, rules) {
  var isValid = true;

  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    var pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    var _pattern = /^\d+$/;
    isValid = _pattern.test(value) && isValid;
  }

  return isValid;
};
var inputChangeConfig = function inputChangeConfig(state, event, inputIdentifier) {
  var updatedForm = _objectSpread({}, state);

  var updatedFormElement = _objectSpread({}, updatedForm[inputIdentifier]);

  updatedFormElement.value = event.target.value;
  updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
  updatedFormElement.touched = true;
  updatedForm[inputIdentifier] = updatedFormElement;
  var formIsValid = true;

  for (var inputIdn in updatedForm) {
    formIsValid = updatedForm[inputIdn].valid && formIsValid;
  }

  return {
    updatedForm: updatedForm,
    formIsValid: formIsValid
  };
};

/***/ })

}]);