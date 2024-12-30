import React, {useEffect} from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';
import {Images} from '../assets/Images';
import {LoginScreen} from './Login&Ragister/LoginScreen';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const SplashScreen: React.FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  });

  return (
    <View style={styles.container}>
      <Image source={Images.logo} />
    </View>
  );
};
