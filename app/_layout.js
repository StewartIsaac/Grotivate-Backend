import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { Inter_900Black,Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import {  Itim_400Regular } from '@expo-google-fonts/itim';
import {  Roboto_400Regular, Roboto_500Medium, Roboto_500Medium_Italic, Roboto_700Bold } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { RecoilRoot } from 'recoil';

SplashScreen.preventAutoHideAsync();



export default function Layout() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [loaded, error] = useFonts({
    Inter400:Inter_400Regular,
    Inter500:Inter_500Medium,
    Inter900:Inter_900Black,
    Inter600:Inter_600SemiBold,
    Inter700:Inter_700Bold,
    Itim400: Itim_400Regular,
    Roboto500i: Roboto_500Medium_Italic,
    Roboto500: Roboto_500Medium,
    Roboto400: Roboto_400Regular,
    Roboto700: Roboto_700Bold,
  });
  
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  
  if (!loaded && !error) {
    return null;
  }
  return  (
        <RecoilRoot>
          <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        title: params.name,
        headerShadowVisible: true,
      }}
    />
        </RecoilRoot>


    
  )
}
