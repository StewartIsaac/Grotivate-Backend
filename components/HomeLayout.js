import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import HomeFooter from './HomeFooter'
import HomeHeader from './HomeHeader'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import { useRecoilValue } from 'recoil'
import { homeTabs } from '../atoms/tab'
import { menuClick } from '../atoms/menu'

const HomeLayout = () => {
  let activeComponent = useRecoilValue(homeTabs);
  let menu = useRecoilValue(menuClick);
  
  return (
    <View>
        <HomeHeader />
         <SafeAreaView className='h-[80vh] ' >
            <ScrollView className='h-[100vh]  pt-[25px] ' >

              <View>
              {
                activeComponent
              }
              </View>

            </ScrollView>
         </SafeAreaView>
        {
          !menu &&  <HomeFooter /> 
        }
    </View>
  )
}

export default HomeLayout
