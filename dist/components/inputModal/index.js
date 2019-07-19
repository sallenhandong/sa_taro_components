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

var InputModal = (_temp2 = _class = function (_BaseComponent) {
  _inherits(InputModal, _BaseComponent);

  function InputModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InputModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputModal.__proto__ || Object.getPrototypeOf(InputModal)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["isShow", "placeholder", "maxLength", "name", "title", "areaName", "OndismissModal", "__fn_onClick", "handleAreaName"], _this.OnAreaChange = function (e) {
      var value = e.detail.value;
      _this.props.handleAreaName(value);
    }, _this.detailClcik = function (e) {
      e.stopPropagation();
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputModal, [{
    key: "_constructor",
    value: function _constructor() {
      _get(InputModal.prototype.__proto__ || Object.getPrototypeOf(InputModal.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        maxLength: 40,
        areaName: ''
      };
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
          onCancelClick = _props.onCancelClick,
          isShow = _props.isShow,
          name = _props.name,
          title = _props.title,
          OndismissModal = _props.OndismissModal,
          onConfimClick = _props.onConfimClick,
          placeholder = _props.placeholder;
      var maxLength = this.__state.maxLength;

      Object.assign(this.__state, {
        isShow: isShow,
        placeholder: placeholder,
        name: name,
        title: title
      });
      return this.__state;
    }
  }, {
    key: "funPrivategYOzw",
    value: function funPrivategYOzw() {
      return this.props.OndismissModal.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }, {
    key: "funPrivatepUHoz",
    value: function funPrivatepUHoz() {
      return this.props.onCancelClick.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }, {
    key: "funPrivateINdzn",
    value: function funPrivateINdzn() {
      return this.props.onConfimClick.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }]);

  return InputModal;
}(_index.Component), _class.$$events = ["funPrivategYOzw", "detailClcik", "OnAreaChange", "funPrivatepUHoz", "funPrivateINdzn"], _class.$$componentPath = "components/inputModal/index", _temp2);


InputModal.defaultProps = {
  isShow: false,
  name: '',
  title: '',
  OndismissModal: function OndismissModal() {},
  onConfimClick: function onConfimClick() {},
  handleAreaName: function handleAreaName() {},
  onCancelClick: function onCancelClick() {},
  placeholder: ''
};
exports.default = InputModal;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(InputModal));