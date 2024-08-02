
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { Image } from 'react-native';
import { View } from 'react-native';
import success from '../assets/success icon component.png';

import { Text } from 'react-native';
import { useEffect } from 'react';

export default function Page() {
  const { slug } = useLocalSearchParams();
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(()=> {
    setTimeout(()=> {
      router.replace('/login')
    },5000)
  },[])

  return <View>
      <Image className='w-[122px] h-[122px] mt-[235px] ' source={success} alt='success' />
    <Text className='mt-[23px] mb-[17px] font-Inter700 font-bold text-15 text-center ' >Email Verification Successful</Text>

    <View className='flex mt-[17px] items-center justify-center flex-row gap-[3px]  ' >
        <Text className='text-15 w-[323px] font-normal text-center font-Roboto400' >Please hold while we redirect you to the home page</Text>
        {/* <Text onPress={()=> router.replace('/login') }  className='text-15 font-bold font-Roboto700' >Login</Text> */}
    </View>
  </View>;
}
