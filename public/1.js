(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/components/Crud/CrudAddForm.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Crud/CrudAddForm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_Auxs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hoc/Auxs */ "./resources/js/hoc/Auxs.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _UI_Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Input/Input */ "./resources/js/components/UI/Input/Input.js");
/* harmony import */ var _Loaders_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loaders/Loader */ "./resources/js/components/Loaders/Loader.js");
/* harmony import */ var _UI_Toaster_MessageHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Toaster/MessageHandler */ "./resources/js/components/UI/Toaster/MessageHandler.js");
/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/index */ "./resources/js/store/actions/index.js");
/* harmony import */ var _Helper_Helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Helper/Helper */ "./resources/js/components/Helper/Helper.js");
/* harmony import */ var _axiosApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../axiosApi */ "./resources/js/axiosApi.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var CrudAddForm =
/*#__PURE__*/
function (_Component) {
  _inherits(CrudAddForm, _Component);

  function CrudAddForm(props) {
    var _this;

    _classCallCheck(this, CrudAddForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CrudAddForm).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "formHandler", function (event) {
      event.preventDefault();
      var formData = new FormData();

      for (var formElementIdentifier in _this.state.crudForm) {
        if (formElementIdentifier !== 'image') formData.append(formElementIdentifier, _this.state.crudForm[formElementIdentifier].value);
      }

      formData.append('token', _this.props.token);
      formData.append('image', _this.state.file);
      if (_this.state.editId) formData.append('id', _this.state.editId);

      _this.props.onCrudFormAction('/api/crud', formData);

      _this.setState({
        imagePreviewUrl: '',
        file: ''
      });

      if (!_this.state.editId && !_this.props.crudError) _this.formReset();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "crudListViewHandler", function () {
      _this.props.history.replace('/crud');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "inputChangedHandler", function (event, inputIdentifier) {
      if (inputIdentifier === 'image') {
        console.log('image :', event);

        _this.imageChangeHandler(event);
      } else {
        var config = _Helper_Helper__WEBPACK_IMPORTED_MODULE_7__["inputChangeConfig"](_this.state.crudForm, event, inputIdentifier);

        _this.props.onSuccessErrorSetNull(); // set errror and success status set null to hide toaster


        _this.setState({
          crudForm: config['updatedForm'],
          formIsValid: config['formIsValid']
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "imageChangeHandler", function (e) {
      var reader = new FileReader();
      var file = e.target.files[0];
      console.log('fileData :', file);

      reader.onloadend = function () {
        _this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      };

      reader.readAsDataURL(file);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "imageRemove", function (e) {
      _this.setState({
        imagePreviewUrl: ''
      });
    });

    _this.state = {
      crudForm: {
        name: {
          label: 'Name',
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Enter name'
          },
          value: '',
          validation: {
            required: true
          },
          validationMsg: 'Please enter name',
          valid: false,
          touched: false
        },
        email: {
          label: 'Email',
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Enter email'
          },
          value: '',
          validation: {
            required: true,
            isEmail: true
          },
          validationMsg: 'Please enter a valid email',
          valid: false,
          touched: false
        },
        address: {
          label: 'Address',
          elementType: 'textarea',
          elementConfig: {
            type: 'text',
            placeholder: 'Enter address'
          },
          value: '',
          validation: {},
          validationMsg: 'Please enter address',
          valid: true,
          touched: false
        },
        status: {
          label: 'Status',
          elementType: 'select',
          elementConfig: {
            options: [{
              value: 1,
              displayValue: 'Active'
            }, {
              value: 0,
              displayValue: 'Inactive'
            }]
          },
          value: 1,
          validation: {},
          valid: true
        },
        image: {
          label: 'Image',
          elementType: 'file',
          elementConfig: {
            type: 'file'
          },
          value: '',
          validation: {},
          valid: true,
          touched: false
        }
      },
      formIsValid: false,
      file: '',
      imagePreviewUrl: '',
      editId: '',
      buttonText: 'Save'
    };
    return _this;
  }

  _createClass(CrudAddForm, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.props.onSuccessErrorSetNull(); // set errror and success status set null to hide toaster

      var params = _Helper_Helper__WEBPACK_IMPORTED_MODULE_7__["paramsExtract"](this.props.location.search);
      _axiosApi__WEBPACK_IMPORTED_MODULE_8__["default"].get('/api/crud/' + params.id + '/edit?token=' + this.props.token).then(function (res) {
        _this2.setEditData(res.data.programmer);
      }).catch(function (error) {
        _this2.props.onfetchFail('Internal  server error');
      });
    }
  }, {
    key: "setEditData",
    value: function setEditData(editData) {
      if (editData) {
        var updatedForm = _objectSpread({}, this.state.crudForm);

        updatedForm['name'].value = editData.name;
        updatedForm['email'].value = editData.email;
        updatedForm['address'].value = editData.address;
        updatedForm['status'].value = editData.status;

        for (var formElementIdentifier in updatedForm) {
          updatedForm[formElementIdentifier].valid = true;
        }

        this.setState({
          crudForm: updatedForm,
          editId: editData.id,
          formIsValid: true,
          buttonText: 'Update'
        });
      }
    }
  }, {
    key: "formReset",
    value: function formReset() {
      var updatedForm = _objectSpread({}, this.state.crudForm);

      for (var formElementIdentifier in updatedForm) {
        if (formElementIdentifier === 'status') updatedForm[formElementIdentifier].value = 1;else updatedForm[formElementIdentifier].value = '';
      }

      this.setState({
        crudForm: updatedForm
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // form data refactor 
      var formElementsArray = [];

      for (var key in this.state.crudForm) {
        formElementsArray.push({
          id: key,
          config: this.state.crudForm[key]
        });
      }

      var form = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "form-horizontal form-label-left",
        onSubmit: this.formHandler,
        encType: "multipart/form-data"
      }, formElementsArray.map(function (formElement) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: formElement.id,
          label: formElement.config.label,
          elementType: formElement.config.elementType,
          elementConfig: formElement.config.elementConfig,
          value: formElement.config.value,
          invalid: !formElement.config.valid,
          shouldValidate: formElement.config.validation,
          validationMsg: formElement.config.validationMsg,
          touched: formElement.config.touched,
          imagePreviewUrl: _this3.state.imagePreviewUrl,
          imageRemove: function imageRemove(e) {
            return _this3.imageRemove(e);
          },
          fileKey: _this3.state.theInputKey || '',
          changed: formElement.id === 'image' ? function (e) {
            return _this3.imageChangeHandler(e);
          } : function (event) {
            return _this3.inputChangedHandler(event, formElement.id);
          }
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ln_solid"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-8 col-sm-6 col-xs-12 col-md-offset-3 pull-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-round btn-default",
        type: "button",
        onClick: this.crudListViewHandler
      }, "Back to List"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-round  btn-success",
        disabled: !this.state.formIsValid
      }, this.state.buttonText))));

      if (this.props.loading) {
        form = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loaders_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], null);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "x_panel"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "x_content"
      }, form, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Toaster_MessageHandler__WEBPACK_IMPORTED_MODULE_5__["default"], {
        success: this.props.crudSuccess,
        error: this.props.crudError
      })));
    }
  }]);

  return CrudAddForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    editData: state.crd.dataList,
    crudSuccess: state.crd.success,
    crudError: state.crd.error,
    loading: state.crd.loading,
    token: state.log.token
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onCrudFormAction: function onCrudFormAction(url, formData) {
      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_6__["save"](url, formData));
    },
    onfetchFail: function onfetchFail(error) {
      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_6__["fetchFail"](error));
    },
    onSuccessErrorSetNull: function onSuccessErrorSetNull() {
      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_6__["successErrorSetNull"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CrudAddForm));

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

/***/ }),

/***/ "./resources/js/components/UI/Input/Input.js":
/*!***************************************************!*\
  !*** ./resources/js/components/UI/Input/Input.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_Auxs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hoc/Auxs */ "./resources/js/hoc/Auxs.js");
/* harmony import */ var _Input_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input.css */ "./resources/js/components/UI/Input/Input.css");
/* harmony import */ var _Input_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Input_css__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var input = function input(props) {
  var inputElement = null;
  var imagePreview = null;
  var inputClasses = ['form-control col-md-7 col-sm-7 col-xs-12'];
  var validationError = "";
  var requiredStyle = "";

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push("Invalid");
    validationError = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "badge  alert-danger"
    }, props.validationMsg);
  }

  if (Object.keys(props.shouldValidate).length > 0) {
    requiredStyle = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "required red "
    }, "*");
  }

  var imagePreviewUrl = null,
      removeImage = null;

  if (props.imagePreviewUrl) {
    imagePreviewUrl = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "uploadImg",
      src: props.imagePreviewUrl
    });
    removeImage = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "badge",
      onClick: props.imageRemove
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "glyphicon glyphicon-remove"
    }));
  } else {
    imagePreviewUrl = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Select an Image for Preview"));
  }

  switch (props.elementType) {
    case 'input':
      inputElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
        className: inputClasses.join(' ')
      }, props.elementConfig, {
        value: props.value,
        onChange: props.changed
      }));
      break;

    case 'textarea':
      inputElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", _extends({
        className: inputClasses.join(' ')
      }, props.elementConfig, {
        value: props.value,
        onChange: props.changed
      }));
      break;

    case 'select':
      inputElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: inputClasses.join(' '),
        value: props.value,
        onChange: props.changed
      }, props.elementConfig.options.map(function (option) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: option.value,
          value: option.value
        }, option.displayValue);
      }));
      break;

    case 'file':
      inputElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
        accept: ".jpg, .png, .gif",
        className: inputClasses.join(' ')
      }, props.elementConfig, {
        onChange: props.changed
      }));
      imagePreview = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "control-label col-md-3 col-sm-3 col-xs-12 "
      }, "Image Preview"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-7 col-sm-7 col-xs-12 form-validation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "parentUploadImg img-thumbnail"
      }, imagePreviewUrl, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "removeImage"
      }, removeImage))));
      break;

    default:
      inputElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
        className: inputClasses.join(' ')
      }, props.elementConfig, {
        value: props.value,
        onChange: props.changed
      }));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Auxs__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "control-label col-md-3 col-sm-3 col-xs-12 ",
    htmlFor: ""
  }, props.label, requiredStyle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-7 col-sm-7 col-xs-12 form-validation"
  }, inputElement, validationError)), imagePreview);
};

/* harmony default export */ __webpack_exports__["default"] = (input);

/***/ })

}]);