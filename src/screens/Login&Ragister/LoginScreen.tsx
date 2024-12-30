import React,{useContext} from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import {useForm} from 'react-hook-form';
import {Images} from '../../assets/Images';
import {Fonts} from '../../styles/fonts';
import {useNavigation} from '@react-navigation/native';
import {TInput} from '../../components';
import { AuthContext } from '../../Context/AuthContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    marginTop:40,
    fontFamily:'Urbanist-Bold',
    fontSize: 40,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
  },
  h5: {
    fontFamily: 'Urbanist-Medium',
    fontSize: 16,
    padding: 5,
    fontWeight: 500,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
  },
  loginbtn: {
    backgroundColor: 'rgba(245, 102, 0, 1)',
    height: 58,
    width: 320,
    marginTop: 30,
    borderRadius: 16,
  },
  forgot:{
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 10,
    fontSize: 15,
    fontFamily:'Urbanist-Bold',
  },
  logintext:{
    textAlign: 'center',
    fontSize: 24,
    fontFamily:'Urbanist-Bold',
    marginTop: 10,
    color: 'white',
  },
  create:{
    marginTop: 20,
    fontSize: 16,
    alignSelf: 'center',
    fontFamily:'Urbanist-Bold',
  },
});

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  // const{test}= useContext(AuthContext);

  type FormData = {
    email: string;
    password: string;
    agreement: boolean;
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      // agreement: false,
    },
  });
  const onSubmit = () => {
    handleSubmit(
      async data => {
        console.log(data);
        navigation.navigate('Bottom');
      },
      () => {
        console.log('Invalid');
      },
    )();
  };

  return (
    // <ScrollView>
    <View style={styles.container}>
      <Image source={Images.logo} />
      <Text style={styles.h1}>Welcome!</Text>
      <Text style={styles.h5}>
        Login to your account and get best offers on each visits.
      </Text>
      {/* <Text>{test}</Text> */}
      <TInput
        control={control}
        placeholder="Email"
        name={'Email'}
        keyboardType="email-address"
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Enter a valid email',
          },
          validate: value =>
            value === 'tanishpatel1105@gmail.com' || 'Enter a valid email address',
        }}
        source={'Email'}
      />

      <TInput
        control={control}
        placeholder="Password"
        name={'Password'}
        secureTextEntry
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
          validate: value => value === 'Tanish' || 'Passwords do not exist',
        }}
        source={'lock'}
      />
      <Text
        style={styles.forgot}>
        Forgot password?
      </Text>
      <Pressable onPress={onSubmit}>
        <View style={styles.loginbtn}>
          <Text
            style={styles.logintext}>
            Login
          </Text>
        </View>
      </Pressable>
      <Text
        onPress={() => navigation.navigate('Ragister')}
        style={styles.create}>
        Create Account
      </Text>
    </View>
    // </ScrollView>
  );
};
