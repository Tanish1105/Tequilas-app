import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Alert,
  Pressable,
  ScrollView,
} from 'react-native';
import { useForm, SubmitHandler } from "react-hook-form"
import {Images} from '../assets/Images';
import {Fonts} from '../styles/fonts';
import {useNavigation} from '@react-navigation/native';
import { Controller } from 'react-hook-form';

const styles = StyleSheet.create({
  container: {
    fontFamily: Fonts.regular,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 40,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    fontWeight: 700,
  },
  h5: {
    fontSize: 16,
    padding: 5,
    fontWeight: 500,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
  },
  input1: {
    alignSelf: 'center',
    color: 'black',
    width: 300,
  },
  input2: {
    alignSelf: 'center',
    color: 'black',
    width: 260,
  },

  input: {
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor:"red",
    height: 60,
    borderRadius: 12,
    marginTop: 20,
  },
  icon: {
    alignSelf: 'center',
    marginLeft: 8,
    marginRight: 8,
  },
  loginbtn: {
    backgroundColor: 'rgba(245, 102, 0, 1)',
    height: 58,
    width: 320,
    marginTop: 30,
    borderRadius: 16,
  },
});

export const LoginScreen: React.FC = () => {
  const [hidePass, setHidePass] = useState(true);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   console.log('imageSource', hidePass );
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
    if (email !== 'tanishpatel1104@gmail.com') {
      Alert.alert('Error', 'email do not match.');
      return;
    }

    if (password !== 'Tanish') {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    // console.log({ email, password });
    navigation.navigate('Home');
  };
  return (
    // <ScrollView>
    <View style={styles.container}>
      <Image source={Images.logo} />
      <Text style={styles.h1}>Welcome!</Text>
      <Text style={styles.h5}>
        Login to your account and get best offers on each visits.
      </Text>

      <View style={styles.input}>
        <Image style={styles.icon} source={Images.Email} />
        
        <TextInput
          placeholderTextColor="black"
          style={styles.input1}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.input}>
        <Image style={styles.icon} source={Images.lock} />
        <TextInput
          placeholderTextColor="black"
          style={styles.input2}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={hidePass ? true : false}
          autoCorrect={false}
          keyboardType='number'
        />
        <Pressable onPress={() => setHidePass(!hidePass)} style={styles.icon}>
          <Image source={hidePass ? Images.frame : Images.frame2} />
        </Pressable>
      </View>
      <Text
        style={{
          alignSelf: 'flex-end',
          marginRight: 20,
          marginTop: 10,
          fontWeight: 700,
          fontSize: 15,
        }}>
        Forgot password?
      </Text>
      <Pressable onPress={handleLogin}>
        <View style={styles.loginbtn}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 24,
              fontWeight: 700,
              marginTop: 10,
              color: 'white',
            }}>
            Login
          </Text>
        </View>
      </Pressable>
      <Text
        onPress={() => navigation.navigate('Ragister')}
        style={{
          marginTop: 20,
          fontWeight: 600,
          fontSize: 16,
          alignSelf: 'center',
        }}>
        Create Account
      </Text>
    </View>
    // </ScrollView>
  );
};
