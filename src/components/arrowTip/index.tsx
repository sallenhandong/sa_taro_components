import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class SAPickerView extends Component {
    static defaultProps = {
     datas :[],
     isShow:false,
     direction:'right'
    }
    render() {
        const {
            datas,isShow,direction
        } = this.props
        return (
            <View className={isShow? 'moreListView_wrapper' : 'moreListView_wrapper_hidden'}>
            <View className={'moreListView ' +  direction}>
              {datas.map((group, index) => (
                <View className='moreListView_item' key={index} >
                  <Text className='moreListView_item_title'>{group.name}</Text>
                  <View className='line'></View>
                </View>
              ))}
              <View className='arrow'></View>
            </View>
            </View>
        
        )
    }
}

