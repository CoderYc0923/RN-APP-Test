import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SplashScreen from 'expo-splash-screen'; //控制启动页的包

const TOKEN_KEY = 'AUTH_TOKEN'

export default function App() {
  const [ appIsReady, setAppIsReady ] = useState(false);
  const [ root, setRoot ] = useState();

  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); //保证项目启动后，系统启动页一直显示
    // chooseScreen();
  },[])

  /**
   * 选择初始页面
   */
  const chooseScreen = async () => {
    const token = await AsyncStorage.getItem(TOKEN_KEY) as string;
    if (token?.length > 0) {
      //...
    } else {
      setAppIsReady(true);
    }
  }

  //项目启动时会运行一次app.tsx中的代码
  if (!appIsReady) {
    return null;
  } else {
    SplashScreen.hideAsync() //系统启动页消失
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
