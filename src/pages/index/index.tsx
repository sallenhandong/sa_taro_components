import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import InputModal  from '../../components/inputModal/index'
import { add, minus, asyncAdd } from '../../actions/counter'
import SAPickerView from '../../components/pickerView/index'
import ArrowTip from '../../components/arrowTip/index'
import './index.scss'

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {
  add: () => void
  dec: () => void
  asyncAdd: () => any
}

type PageOwnProps = {}

type PageState = {
  isShowInputModal:false,
  isShowPickView:false,
  pickerViewList:[],
  defaultIndex:[0],
  isShowArrowTip:false,
  arrowTipsArr:[]
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

    /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
    config: Config = {
    navigationBarTitleText: 'Taro Components'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  showInputAlert = () => {
    this.setState({
      isShowInputModal:true
    })
  }
  dismissModal = () => {
    this.setState({
      isShowInputModal:false,
      isShowPickView:false
    })
  }
  handleAreaNameChange = () => {
    
  }
  pickViewConfirmAction = () => {

  }
  pickViewCancelAction = () => {

  }
  showPickerView = () => {
    let pickerViewList = new Array()
    for (let i = 0; i < 31; i++) {
        let name = i + '分'
        pickerViewList.push(name)
    }
    this.setState({
        isShowPickView: true,
        pickerViewList: pickerViewList
    })
    let selectIndex = this.findPickerIndexWithValue(pickerViewList,'1分')
    this.setDefaultPikerIndex(selectIndex)
  }
  setDefaultPikerIndex = (index:number) => {
    let that = this
    setTimeout(() => {
        that.setState({
            defaultIndex:[index]
        })
    }, 500);
    
}
findPickerIndexWithValue = (array:any,value:any) => {
  for (let i = 0; i < array.length; i++) {
      let result = array[i]
      if (result == value) {
          return i
      }
  }
  return 0
}
clickProgress = () => {
  Taro.navigateTo({
    url:'../progress/index'
  })

}
showArrowTip = () => {
  let arr = [{name:'slim'},{name:'sallen'},{name:'jack'},{name:'mavk'}]
  this.setState({
    isShowArrowTip:true,
    arrowTipsArr:arr
  })
}
  render () {
    const {
      arrowTipsArr,isShowArrowTip
    } = this.state
    return (
      <View className='index'>
        <Text className='title'>SA Taro Components</Text>
        <View className='dec_btn' onClick={this.showInputAlert}>Modal</View>
        <View className='dec_btn' onClick={this.showPickerView}>PickerView</View>
        <View className='dec_btn' onClick={this.clickProgress}>Progress</View>
        <View className='dec_btn' onClick={this.props.asyncAdd}>SwipeAction</View>
        <View className='dec_btn' onClick={this.showArrowTip}>Arrow Tip</View>
        <View className='dec_btn' onClick={this.props.asyncAdd}>Radio Button</View>
        <View className='dec_btn' onClick={this.props.asyncAdd}>Slider</View>
        <View className='dec_btn' onClick={this.props.asyncAdd}>List</View>
        <View className='dec_btn' onClick={this.showPickerView}>ActionSheet</View>
        <View className='dec_btn' onClick={this.showPickerView}>TimeLine</View>
        <View className='dec_btn' onClick={this.showPickerView}>Tabs</View>

        <InputModal
                    isShow={this.state.isShowInputModal}
                    title={'标题'}
                    placeholder={'请输入区域名称'}
                    OndismissModal={this.dismissModal}
                    handleAreaName={this.handleAreaNameChange.bind(this)}
                    onConfimClick={this.dismissModal}
                    onCancelClick={this.dismissModal}
                />
            
            <SAPickerView
                    isShow={this.state.isShowPickView}
                    columnsData={this.state.pickerViewList}
                    confirmAction={this.dismissModal}
                    cancelAction={this.dismissModal}
                    columns={1}
                    values = {this.state.defaultIndex}
                />
                <ArrowTip 
                  datas={arrowTipsArr}
                  isShow={isShowArrowTip}
                />

      </View>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index as ComponentClass<PageOwnProps, PageState>
