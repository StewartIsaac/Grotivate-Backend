import { useNavigation, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RecoilRoot } from 'recoil';

export default function App() {
  let router = useRouter();
  const navigation = useNavigation();
  useEffect(()=> {
    router.replace('/index')
  },[navigation])
  return (
   <RecoilRoot>
     <View className=' flex-1 items-center justify-center ' >
      <Text>Grotivate</Text>
      <StatusBar style="auto" />
    </View>
   </RecoilRoot>
  );
}


