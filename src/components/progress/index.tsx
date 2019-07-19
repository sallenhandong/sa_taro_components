import Taro, { Component } from '@tarojs/taro'
import { View, Canvas} from '@tarojs/components'
import './index.scss'

export default class SAPickerView extends Component {
    static defaultProps = {
    
        maxValue:40,
        maxHour:12,
        currentHour:5,
        currentMinute:20
    }
    componentDidMount () {
        this.drawDisplayTimeCirle()
        this.drawSystemBar()
        
    }
    drawDisplayTimeCirle = () => {
        const maxValue = this.props.maxValue
        const maxHour = this.props.maxHour
        const proportionHour = maxValue/maxHour
        const resultHour = Number(this.props.currentHour) * proportionHour 
        let c = resultHour/ maxValue * 100
        c = Math.floor(c)
        let h = 60
        let x = 200
        let r = 50
        const ctx = Taro.createCanvasContext('myCanvas', this.$scope);
        var num = (2 * Math.PI / 100 * c) - 0.5 * Math.PI;
        //圆环的绘制
        ctx.arc(x, h, r, -0.5 * Math.PI, num, false); //绘制的动作
        ctx.setStrokeStyle("#489B70"); //圆环线条的颜色
        ctx.setLineWidth(1);	//圆环的粗细
        ctx.setLineCap("butt");	//圆环结束断点的样式  butt为平直边缘 round为圆形线帽  square为正方形线帽
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
            ctx.rotate(i * 2 / 40 * Math.PI);//i * 360/maxvalue * Math.PI / 180
            ctx.beginPath();
            ctx.moveTo(0, -(r));
            ctx.lineTo(0, -(r - 4));
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        }

       
        const maxminute = 60
        const proportion = maxValue/maxminute
        const result = Number(this.props.currentMinute) * proportion

        //分钟进度刻度              
        for (var i = 0; i < maxValue; i++) {
            ctx.save();
            ctx.setLineWidth(2);
            ctx.setStrokeStyle('#285E41');
            if (i > result) {
                ctx.setStrokeStyle('#C0C0C0');
            }
            ctx.translate(x, h);
            ctx.rotate(i * 2 / 40 * Math.PI);//i * 360/maxvalue * Math.PI / 180
            ctx.beginPath();
            ctx.moveTo(0, -(r - 10));
            ctx.lineTo(0, -(r - 12));
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        }

        //小时
        ctx.setFillStyle('#3a5463');
        ctx.setFontSize(16);
        ctx.setTextAlign('center');
        ctx.fillText(this.props.currentHour, x - 10, h - 5);

        ctx.setFillStyle('#9B9B9B');
        ctx.setFontSize(14);
        ctx.setTextAlign('center');
        ctx.fillText('小时', x + 9, h - 5);

        //分钟
        ctx.setFillStyle('#3a5463');
        ctx.setFontSize(16);
        ctx.setTextAlign('center');
        ctx.fillText(this.props.currentMinute, x - 12, h + 20);

        ctx.setFillStyle('#9B9B9B');
        ctx.setFontSize(14);
        ctx.setTextAlign('center');
        ctx.fillText('分钟', x + 12, h + 20);

        ctx.draw();
    }
    drawSystemBar() {
        let c = Number(5)/this.props.maxValue * 100
        let h = 60
        let x = 200
        let r = 50
        const ctx2 = Taro.createCanvasContext('myCanvas1', this.$scope);
        var num = (2 * Math.PI / 100 * c) - 0.5 * Math.PI;
        //圆环的绘制
        ctx2.arc(x, h, r, -0.5 * Math.PI, num); //绘制的动作
        ctx2.setStrokeStyle("#73EC45"); //圆环线条的颜色
        ctx2.setLineWidth(4);	//圆环的粗细
        ctx2.setLineCap("square");	//圆环结束断点的样式  butt为平直边缘 round为圆形线帽  square为正方形线帽
        ctx2.stroke();
        ctx2.closePath(); //结束画布  

        //圆形外面刻度               
        for (var i = 0; i < 100; i++) {
            ctx2.save();
            ctx2.setLineWidth(2);
            ctx2.setStrokeStyle('#C0C0C0');
            ctx2.translate(x, h);
            ctx2.rotate(i * 2 / 50 * Math.PI);//i * 360/maxvalue * Math.PI / 180
            ctx2.beginPath();
            ctx2.moveTo(0, (r + 2));
            ctx2.lineTo(0, (r - 2));
            ctx2.stroke();
            ctx2.closePath();
            ctx2.restore();
        }
        ctx2.beginPath(); //画笔开始
        ctx2.setLineWidth(1);
        ctx2.setStrokeStyle('#7ED321'); //设置画笔的颜色 
        ctx2.arc(x, h, r, -0.5 * Math.PI, num); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针 
        ctx2.setLineWidth(6);	//圆环的粗细
        ctx2.stroke(); //绘图    
        ctx2.closePath(); //结束画布


        ctx2.setFillStyle('#3a5463');
        ctx2.setFontSize(16);
        ctx2.setTextAlign('center');
        ctx2.fillText('5', x - 8, h - 5);

        ctx2.setFillStyle('#9B9B9B');
        ctx2.setFontSize(14);
        ctx2.setTextAlign('center');
        ctx2.fillText('bar', x + 9, h - 5);

        ctx2.setFillStyle('#000000');
        ctx2.setFontSize(14);
        ctx2.setTextAlign('center');
        ctx2.fillText('压差', x, h + 20);


        ctx2.draw();
    }
    render() {

        return (
            <View className=''>
                <Canvas canvasId="myCanvas" className="canvas" />
                <Canvas canvasId="myCanvas1" className="canvas" />
            </View>
        )
    }
}

