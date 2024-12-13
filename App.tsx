import React from 'react';
import{
View,
Text,
SafeAreaView
}from'react-native';

import { SplashScreen } from './src';
import { LoginScreen } from './src';
import {HomeScreen} from './src';
import {DetailScreen} from './src';
import { Ragisterscreen } from './src';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  Splash: undefined;
  Login: { itemId: number };
  Ragister:undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App(){
  return(
    <View style={{flex:1, backgroundColor:"white"}}>
        <NavigationContainer>
         <Stack.Navigator>
        
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}  />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Ragister" component={Ragisterscreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}  />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  ) 
};
export default App;
