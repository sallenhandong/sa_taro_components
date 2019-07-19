"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _tslib = require("../../npm/tslib/tslib.js");

var tslib_1 = _interopRequireWildcard(_tslib);

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _counter = require("../../actions/counter.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__60", "$compid__61", "$compid__62", "asyncAdd", "__fn_onClick", "isShowInputModal", "isShowPickView", "pickerViewList", "defaultIndex"], _this.config = {
      navigationBarTitleText: 'Taro Components'
    }, _this.showInputAlert = function () {
      _this.setState({
        isShowInputModal: true
      });
    }, _this.dismissModal = function () {
      _this.setState({
        isShowInputModal: false,
        isShowPickView: false
      });
    }, _this.handleAreaNameChange = function () {}, _this.pickViewConfirmAction = function () {}, _this.pickViewCancelAction = function () {}, _this.showPickerView = function () {
      var pickerViewList = new Array();
      for (var i = 0; i < 31; i++) {
        var name = i + '分';
        pickerViewList.push(name);
      }
      _this.setState({
        isShowPickView: true,
        pickerViewList: pickerViewList
      });
      var selectIndex = _this.findPickerIndexWithValue(pickerViewList, '1分');
      _this.setDefaultPikerIndex(selectIndex);
    }, _this.setDefaultPikerIndex = function (index) {
      var that = _this;
      setTimeout(function () {
        that.setState({
          defaultIndex: [index]
        });
      }, 500);
    }, _this.findPickerIndexWithValue = function (array, value) {
      for (var i = 0; i < array.length; i++) {
        var result = array[i];
        if (result == value) {
          return i;
        }
      }
      return 0;
    }, _this.clickProgress = function () {
      _index2.default.navigateTo({
        url: '../progress/index'
      });
    }, _this.showArrowTip = function () {
      var arr = [{ name: 'slim' }, { name: 'sallen' }, { name: 'jack' }, { name: 'mavk' }];
      _this.setState({
        isShowArrowTip: true,
        arrowTipsArr: arr
      });
    }, _this.customComponents = ["InputModal", "SAPickerView", "ArrowTip"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      /**
      * 指定config的类型声明为: Taro.Config
      *
      * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
      * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
      * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
      */
      this.$$refs = [];
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(this.props, nextProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__60 = (0, _index.genCompid)(__prefix + "$compid__60");
      var $compid__61 = (0, _index.genCompid)(__prefix + "$compid__61");
      var $compid__62 = (0, _index.genCompid)(__prefix + "$compid__62");

      var _state = this.__state,
          arrowTipsArr = _state.arrowTipsArr,
          isShowArrowTip = _state.isShowArrowTip;

      _index.propsManager.set({
        "isShow": this.__state.isShowInputModal,
        "title": '标题',
        "placeholder": '请输入区域名称',
        "OndismissModal": this.dismissModal,
        "handleAreaName": this.handleAreaNameChange.bind(this),
        "onConfimClick": this.dismissModal,
        "onCancelClick": this.dismissModal
      }, $compid__60);
      _index.propsManager.set({
        "isShow": this.__state.isShowPickView,
        "columnsData": this.__state.pickerViewList,
        "confirmAction": this.dismissModal,
        "cancelAction": this.dismissModal,
        "columns": 1,
        "values": this.__state.defaultIndex
      }, $compid__61);
      _index.propsManager.set({
        "datas": arrowTipsArr,
        "isShow": isShowArrowTip
      }, $compid__62);
      Object.assign(this.__state, {
        $compid__60: $compid__60,
        $compid__61: $compid__61,
        $compid__62: $compid__62
      });
      return this.__state;
    }
  }, {
    key: "funPrivateYMidM",
    value: function funPrivateYMidM() {
      return this.props.asyncAdd.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }]);

  return Index;
}(_index.Component), _class.$$events = ["showInputAlert", "showPickerView", "clickProgress", "funPrivateYMidM", "showArrowTip"], _class.$$componentPath = "pages/index/index", _temp2);
Index = tslib_1.__decorate([(0, _index3.connect)(function (_ref2) {
  var counter = _ref2.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {
    add: function add() {
      dispatch((0, _counter.add)());
    },
    dec: function dec() {
      dispatch((0, _counter.minus)());
    },
    asyncAdd: function asyncAdd() {
      dispatch((0, _counter.asyncAdd)());
    }
  };
})], Index);
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));