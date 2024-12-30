import React, {useContext} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Logout} from './src';
import {Editprofile} from './src';
import {SplashScreen} from './src';
import {LoginScreen} from './src';
import {DetailScreen} from './src';
import {Terms} from './src';
import {Ragisterscreen} from './src';
import {Bottom} from './src';
import {Changepass} from './src';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {AuthContext, AuthProvider} from './src/Context/AuthContext';

export type RootStackParamList = {
  Splash: undefined;
  Login: {itemId: number};
  Ragister: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
    
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
            />
           
              <Stack.Screen
              name="Bottom"
              component={Bottom}
              options={{headerShown: false}}
            />
            
              <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
           
            <Stack.Screen
              name="Ragister"
              component={Ragisterscreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Detail"
              component={DetailScreen}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Changepass"
              component={Changepass}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Logout"
              component={Logout}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Editprofile"
              component={Editprofile}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Terms"
              component={Terms}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
     
    </View>
  );
}
export default App;
