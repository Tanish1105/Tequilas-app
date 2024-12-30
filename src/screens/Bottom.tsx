import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Offers} from './BottomNav/Offers';
import {Image} from 'react-native';
import {Profile} from './BottomNav/Profile';
import {Rewards} from './BottomNav/Rewards';
import {HomeScreen} from './BottomNav/HomeScreen';
import {Images} from '../assets/Images';
// import search from '../assets/png/search.png';
const Tab = createBottomTabNavigator();

const TabIcon = (props: {
  focused: boolean;
  color: string;
  size: number;
}) : React.ReactNode => {
  return <Image source={Images.home} />
};
export const Bottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'rgba(0, 0, 0, 1)',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 1)',
        tabBarStyle: {backgroundColor: 'rgba(245, 102, 0, 1)', height: 55},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: TabIcon,
          
        }}
      />
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={{
          title: 'Offers',
          tabBarIcon: () => (
            <Image source={Images.offers} style={{height: 24, width: 24}} />
          ),
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          title: 'Rewards',
          tabBarIcon: ({focused}) => (
            <Image source={Images.clock} style={{height: 24, width: 24}} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({focused}) => (
            <Image source={Images.user} style={{height: 24, width: 24}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
