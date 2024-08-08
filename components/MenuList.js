import { useState } from "react"
import { Image, Pressable, ScrollView } from "react-native"
import { SafeAreaView } from "react-native"
import { View } from "react-native"
import { menuData } from "./menuData"
import { Text } from "react-native"
import classNames from "classnames"
import { useRecoilState } from "recoil"
import { homeTabs } from "../atoms/tab"
import { menuClick } from "../atoms/menu"

const MenuList = () => {
let [list,setList] = useState(menuData);
let [tab,setTab] = useRecoilState(homeTabs);
let [menu,setMenu] = useRecoilState(menuClick);

 function handleMenu(id) {
    let upd = list.map(each=> {
        if(each.id === id) {
            setTab(each.component);
        }
        return each;
    })

    setList(upd);
 }
  return (
    <SafeAreaView>
      <ScrollView>
        <View className='w-[90vw] mx-auto bg-mgray3 mt-[46px] py-[28px] pl-[5px] ' >
            {
                list.map(each=> (
                    <Pressable onPress={()=> handleMenu(each.id)} className={classNames('flex flex-row items-center py-[7px] pl-[11px] justify-start border-1 w-[278px] h-[39px] mb-[23px] border border-black ',{})} key={each.id} >
                        {each.icon}
                        <Text className='ml-2' > {each.text} </Text>
                    </Pressable>
                ))
            }
            <Pressable className={classNames('flex flex-row items-center py-[7px] pl-[11px] justify-start border-1 w-[278px] h-[39px] mb-[23px] border border-black ',{})} onPress={()=> setMenu(false) } >
                <Image source={require('../assets/home.png')} alt="home" />
                <Text className='ml-2' >Home</Text>
            </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MenuList
