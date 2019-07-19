"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SAPickerView = (_temp2 = _class = function (_BaseComponent) {
  _inherits(SAPickerView, _BaseComponent);

  function SAPickerView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SAPickerView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SAPickerView.__proto__ || Object.getPrototypeOf(SAPickerView)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["columnsData", "isShow", "values", "columns", "cancelTitle", "pickerTitle", "confirmTitle", "cancelAction", "confirmAction", "__fn_onClick", "handleColumnsChange"], _this.onChangePickerValues = function (e) {
      var arr = e.detail.value;
      if (_this.props.columns == 1) {
        var index = arr[0];
        var value = _this.props.columnsData[index];
        console.log(value);
        _this.props.handleColumnsChange(value);
      } else if (_this.props.columns == 2) {
        var index1 = arr[0];
        var index2 = arr[1];
        var value1 = _this.props.columnsData[0][index1];
        var value2 = _this.props.columnsData[1][index2];
        _this.props.handleColumnsChange(value1, value2);
      }
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SAPickerView, [{
    key: "_constructor",
    value: function _constructor() {
      _get(SAPickerView.prototype.__proto__ || Object.getPrototypeOf(SAPickerView.prototype), "_constructor", this).apply(this, arguments);
      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          isShow = _props.isShow,
          pickerTitle = _props.pickerTitle,
          cancelTitle = _props.cancelTitle,
          confirmTitle = _props.confirmTitle,
          values = _props.values,
          columnsData = _props.columnsData,
          columns = _props.columns,
          cancelAction = _props.cancelAction,
          confirmAction = _props.confirmAction;

      Object.assign(this.__state, {
        columnsData: columnsData,
        isShow: isShow,
        values: values,
        columns: columns,
        cancelTitle: cancelTitle,
        pickerTitle: pickerTitle,
        confirmTitle: confirmTitle
      });
      return this.__state;
    }
  }, {
    key: "funPrivateRqkZI",
    value: function funPrivateRqkZI() {
      return this.props.cancelAction.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }, {
    key: "funPrivateRsijP",
    value: function funPrivateRsijP() {
      return this.props.confirmAction.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }]);

  return SAPickerView;
}(_index.Component), _class.$$events = ["funPrivateRqkZI", "funPrivateRsijP", "onChangePickerValues"], _class.$$componentPath = "components/pickerView/index", _temp2);


SAPickerView.defaultProps = {
  isShow: false,
  pickerTitle: '默认标题',
  cancelTitle: '取消',
  confirmTitle: '确定',
  values: [2],
  columnsData: [],
  columns: 1,
  handleColumnsChange: function handleColumnsChange() {},
  confirmAction: function confirmAction() {},
  cancelAction: function cancelAction() {}
};
exports.default = SAPickerView;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(SAPickerView));