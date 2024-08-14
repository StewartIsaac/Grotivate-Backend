import { Image, Pressable, Text } from "react-native"
import { View } from "react-native"
import { useRecoilState } from "recoil"
import { hideHeaderAndFooter, hideMenu } from "../atoms/menu"



const Market1 = ({setPart}) => {
    let [all,setAll] = useRecoilState(hideHeaderAndFooter);
   function handleClick() {
    setPart(1);
   }
  return (
      <>
        <View className='pt-12 h-[95.5vh] '>
      <View className='w-[95.2vw] mx-auto h-[179px] bg-mgreen2 rounded-[9px]  ' >
         <View className='flex items-center justify-between flex-row pt-[5px] px-[15px] ' >
          <Pressable onPress={()=> handleClick() } >
            <Text className='text-white font-Inter700 font-[800] text-[14px] ' ><Image className='' source={require('../assets/arrowback.png')} alt="arrow back" />Back</Text>
          </Pressable>

          <Image source={require('../assets/basket1.png')} alt="basket icon" />

         </View>
         <View></View>
      </View>
    
    </View>
   
      </>
  )
}

export default Market1
