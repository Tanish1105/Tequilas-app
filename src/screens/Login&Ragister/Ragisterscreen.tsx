/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import {Images} from '../../assets/Images';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {TInput} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  h1: {
    fontSize: 40,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    fontFamily: 'Urbanist-Bold',
    marginTop: 30,
  },
  h5: {
    fontSize: 16,
    padding: 5,
    fontFamily: 'Urbanist-Medium',
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

  chack: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    marginRight: 15,
    // marginLeft:,
    fontFamily: 'Urbanist-Bold',
    fontSize: 14.11,
    color: '#000', // Black color for the base text
    alignSelf: 'flex-start',
  },
  link: {
    color: '#FF6600', // Orange color for links
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: 'rgba(245, 102, 0, 1)',
    height: 58,
    width: 320,
    marginTop: 20,
    borderRadius: 16,
  },
  checkbox: {
    alignSelf: 'center',
    marginLeft: 15,
    color: 'black',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  btninput: {
    textAlign: 'center',
    fontSize: 24,
    // fontWeight: 700,
    marginTop: 10,
    color: 'white',
    fontFamily: 'Urbanist-Bold',
  },
  bottom: {
    marginTop: 20,
    fontWeight: 600,
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 50,
  },
  policy: {
    width: 280,
  },
});

export const Ragisterscreen: React.FC = () => {
  const navigation = useNavigation();
  const [imageSource, setImageSource] = useState(true);

  type FormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreement: boolean;
  };

  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      name:'' ,
      email: '',
      password: '',
      confirmPassword: '',
      agreement: false,
    },
  });
  const onSubmit = () => {
    handleSubmit(
      async data => {
        // const formData = getValues();
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem('User_Data', jsonValue);
        console.log(data);
        navigation.navigate('Bottom');
      },
      () => {
        console.log('Invalid');
      },
    )();
  };
  // const[name,setname] = useState('');
  //   const onSubmit = () => {
  //     const nameValue = getValues('Name');
  //     console.log('name:',nameValue );
  //     navigation.navigate('Bottom');
  // };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={Images.logo} />
        <Text style={styles.h1}>Welcome!</Text>
        <Text style={styles.h5}>
          Create your account and get best offers on each visits.
        </Text>

        <TInput
          control={control}
          placeholder="Name"
          name={'Name'}
          rules={{
            required: 'Name is required',
          }}
          source={'Email'}
        />

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
          }}
          source={'lock'}
        />

        <TInput
          control={control}
          placeholder="Confirm Password"
          name={'Confirm Password'}
          secureTextEntry
          rules={{
            required: 'Please confirm your password',
            validate: value =>
              value === getValues('Password') || 'Passwords do not match',
          }}
          source={'lock'}
        />

        <View style={styles.chack}>
          <Pressable
            style={styles.icon}
            onPress={() => {
              setImageSource(!imageSource);
            }}>
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={imageSource ? Images.chack : Images.nochack}
            />
          </Pressable>
          <Pressable
            style={styles.policy}
            onPress={() => navigation.navigate('Terms')}>
            <Text style={styles.text}>
              By pressing continue you agree to our{' '}
              <Text style={styles.link}>terms and conditions</Text> and{' '}
              <Text style={styles.link}>privacy policy</Text>.
            </Text>
          </Pressable>
        </View>
        <Pressable
          onPress={() => {
            onSubmit();
          }}>
          <View style={styles.btn}>
            <Text style={styles.btninput}>Register</Text>
          </View>
        </Pressable>
        <Text
          onPress={() => navigation.navigate('Login')}
          style={styles.bottom}>
          Already Have a account?
        </Text>
      </View>
    </ScrollView>
  );
};
