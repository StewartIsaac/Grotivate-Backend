import React, { useRef, useState } from 'react'
import { Pressable, Text } from 'react-native'
import { View } from 'react-native'
import { homeData } from './homeData'
import classNames from 'classnames'
import { useRecoilState } from 'recoil'
import { homeTabs } from '../atoms/tab'

const HomeFooter = () => {
    let [icon,setIcon] = useState(homeData);
    let [tab,setTab] = useRecoilState(homeTabs)

    function handleTabClick(id) {
        let upd = icon.map(each=> {
            if(each.id === id) {
                setTab(each.component);
                each.state = true;
            }else{
                each.state = false;
            }

            return each;
        })

        setIcon(upd);
    }
  return (
    <View className='w-full flex flex-row items-center  bg-mgray3 justify-between pb-[25px]  h-[73px]  ' >
     
       {
        icon.map(each=>(
            <Pressable onPress={()=> {handleTabClick(each.id)}}  key={each.id} className={classNames('w-[89px] h-[62px] block flex-1 items-center justify-center ',{
                'relative  bottom-[25px] bg-mgray3 rounded-full ': each.state
            })} > 
              { each.state?each.icong: each.icon }
              <Text className={classNames('font-Inter700 font-bold text-[8px] text-mgray4 text-center mt-1 ',{'text-mgreen3': each.state})} > {each.text}  </Text>
            </Pressable>
        ))
       }
      
    </View>
  )
}

export default HomeFooter
