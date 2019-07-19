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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SAPickerView.__proto__ || Object.getPrototypeOf(SAPickerView)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["maxValue", "maxHour", "currentHour", "currentMinute"], _this.drawDisplayTimeCirle = function () {
      var maxValue = _this.props.maxValue;
      var maxHour = _this.props.maxHour;
      var proportionHour = maxValue / maxHour;
      var resultHour = Number(_this.props.currentHour) * proportionHour;
      var c = resultHour / maxValue * 100;
      c = Math.floor(c);
      var h = 60;
      var x = 200;
      var r = 50;
      var ctx = _index2.default.createCanvasContext('myCanvas', _this.$scope);
      var num = 2 * Math.PI / 100 * c - 0.5 * Math.PI;
      //圆环的绘制
      ctx.arc(x, h, r, -0.5 * Math.PI, num, false); //绘制的动作
      ctx.setStrokeStyle("#489B70"); //圆环线条的颜色
      ctx.setLineWidth(1); //圆环的粗细
      ctx.setLineCap("butt"); //圆环结束断点的样式  butt为平直边缘 round为圆形线帽  square为正方形线帽
      ctx.stroke();
      ctx.closePath(); //结束画布  
      //小时进度刻度              
      for (var i = 0; i < maxValue; i++) {
        ctx.save();
        ctx.setLineWidth(2);
        ctx.setStrokeStyle('#489B70');
        if (i > resultHour) {
          ctx.setStrokeStyle('#C0C0C0');
        }
        ctx.translate(x, h);
        ctx.rotate(i * 2 / 40 * Math.PI); //i * 360/maxvalue * Math.PI / 180
        ctx.beginPath();
        ctx.moveTo(0, -50);
        ctx.lineTo(0, -46);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
      }
      var maxminute = 60;
      var proportion = maxValue / maxminute;
      var result = Number(_this.props.currentMinute) * proportion;
      //分钟进度刻度              
      for (var i = 0; i < maxValue; i++) {
        ctx.save();
        ctx.setLineWidth(2);
        ctx.setStrokeStyle('#285E41');
        if (i > result) {
          ctx.setStrokeStyle('#C0C0C0');
        }
        ctx.translate(x, h);
        ctx.rotate(i * 2 / 40 * Math.PI); //i * 360/maxvalue * Math.PI / 180
        ctx.beginPath();
        ctx.moveTo(0, -40);
        ctx.lineTo(0, -38);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
      }
      //小时
      ctx.setFillStyle('#3a5463');
      ctx.setFontSize(16);
      ctx.setTextAlign('center');
      ctx.fillText(_this.props.currentHour, 190, 55);
      ctx.setFillStyle('#9B9B9B');
      ctx.setFontSize(14);
      ctx.setTextAlign('center');
      ctx.fillText('小时', 209, 55);
      //分钟
      ctx.setFillStyle('#3a5463');
      ctx.setFontSize(16);
      ctx.setTextAlign('center');
      ctx.fillText(_this.props.currentMinute, 188, 80);
      ctx.setFillStyle('#9B9B9B');
      ctx.setFontSize(14);
      ctx.setTextAlign('center');
      ctx.fillText('分钟', 212, 80);
      ctx.draw();
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SAPickerView, [{
    key: "_constructor",
    value: function _constructor() {
      _get(SAPickerView.prototype.__proto__ || Object.getPrototypeOf(SAPickerView.prototype), "_constructor", this).apply(this, arguments);
      this.$$refs = [];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.drawDisplayTimeCirle();
      this.drawSystemBar();
    }
  }, {
    key: "drawSystemBar",
    value: function drawSystemBar() {
      var c = Number(5) / this.props.maxValue * 100;
      var h = 60;
      var x = 200;
      var r = 50;
      var ctx2 = _index2.default.createCanvasContext('myCanvas1', this.$scope);
      var num = 2 * Math.PI / 100 * c - 0.5 * Math.PI;
      //圆环的绘制
      ctx2.arc(x, h, r, -0.5 * Math.PI, num); //绘制的动作
      ctx2.setStrokeStyle("#73EC45"); //圆环线条的颜色
      ctx2.setLineWidth(4); //圆环的粗细
      ctx2.setLineCap("square"); //圆环结束断点的样式  butt为平直边缘 round为圆形线帽  square为正方形线帽
      ctx2.stroke();
      ctx2.closePath(); //结束画布  
      //圆形外面刻度               
      for (var i = 0; i < 100; i++) {
        ctx2.save();
        ctx2.setLineWidth(2);
        ctx2.setStrokeStyle('#C0C0C0');
        ctx2.translate(x, h);
        ctx2.rotate(i * 2 / 50 * Math.PI); //i * 360/maxvalue * Math.PI / 180
        ctx2.beginPath();
        ctx2.moveTo(0, 52);
        ctx2.lineTo(0, 48);
        ctx2.stroke();
        ctx2.closePath();
        ctx2.restore();
      }
      ctx2.beginPath(); //画笔开始
      ctx2.setLineWidth(1);
      ctx2.setStrokeStyle('#7ED321'); //设置画笔的颜色 
      ctx2.arc(x, h, r, -0.5 * Math.PI, num); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针 
      ctx2.setLineWidth(6); //圆环的粗细
      ctx2.stroke(); //绘图    
      ctx2.closePath(); //结束画布
      ctx2.setFillStyle('#3a5463');
      ctx2.setFontSize(16);
      ctx2.setTextAlign('center');
      ctx2.fillText('5', 192, 55);
      ctx2.setFillStyle('#9B9B9B');
      ctx2.setFontSize(14);
      ctx2.setTextAlign('center');
      ctx2.fillText('bar', 209, 55);
      ctx2.setFillStyle('#000000');
      ctx2.setFontSize(14);
      ctx2.setTextAlign('center');
      ctx2.fillText('压差', x, 80);
      ctx2.draw();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return SAPickerView;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "components/progress/index", _temp2);


SAPickerView.defaultProps = {
  maxValue: 40,
  maxHour: 12,
  currentHour: 5,
  currentMinute: 20
};
exports.default = SAPickerView;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(SAPickerView));