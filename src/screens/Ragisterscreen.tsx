/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import {Images} from '../assets/Images';
import {Fonts} from '../styles/fonts';
import {useNavigation} from '@react-navigation/native';
import conponentinput from '../components/conponentinput';
import {useForm, Controller} from 'react-hook-form';
const styles = StyleSheet.create({
  container: {
    fontFamily: Fonts.regular,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
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
  icon1: {
    alignSelf: 'center',
    height: '20',
    width: '22',
  },
  chack: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    marginRight: 15,
    // marginLeft:,
    fontWeight: 600,
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
});

export const Ragisterscreen: React.FC = () => {
  // const [isChecked, setIsChecked] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const navigation = useNavigation();
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmpassword] = useState('');
  const [imageSource, setImageSource] = useState(true);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const pwd = ('password');
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // console.log('imageSource', imageSource);
  // const toggleImage = () => {
  //   setImageSource((prevSource) =>
  //     prevSource === require('./png/chackicon.png')
  //       ? require('./png/chackicon2.png')
  //       : require('./png/chackicon.png')
  //   );
  // };

  const handleRegister = () => {
    // Validation
    if (!Name || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email.');
      return;
    }

    if (!imageSource) {
      Alert.alert('Check button', 'Select first check button');
      return;
    }

    // Proceed with registration logic
    Alert.alert('Success', 'Registration successful!');
    console.log({Name, email, password});
    navigation.navigate('Home');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={Images.logo} />
        <Text style={styles.h1}>Welcome!</Text>
        <Text style={styles.h5}>
          Create your account and get best offers on each visits.
        </Text>

        <View style={styles.input}>
          <Image style={styles.icon} source={Images.Email} />
          <TextInput placeholderTextColor="black" 
          style={styles.input1}
          placeholder ="Name"
          value={Name}
          onChangeText={setName}
          />
          {/* <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input1}
                placeholder="Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholderTextColor="black"
              />
            )}
            name="firstName"
          />
          {errors.firstName && <Text>This is required.</Text>} */}
        </View>

        <View style={styles.input}>
          <Image style={styles.icon} source={Images.Email} />

          <TextInput placeholderTextColor="black"
          style={styles.input1}
          placeholder ="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"/>
          {/* <Controller
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {value: EMAIL_REGEX},
            }}
            render={({field: {onChange, onBlur, email}}) => (
              <TextInput
                style={styles.input1}
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={email}
                keyboardType="email-address"
                placeholderTextColor="black"
                autoCapitalize="none"
              />
            )}
            name="Email"
          /> */}
        </View>
        {/* {errors.Email && (
          <Text style={{color: 'red', alignSelf: 'stretch'}}>
            {' '}
            Email is invalid{' '}
          </Text>
        )} */}

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
          />
          {/* <Controller
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password should be at least 8 characters long',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input2}
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholderTextColor="black"
                secureTextEntry={hidePass ? true : false}
                autoCorrect={false}
              />
            )}
            name="password"
          /> */}
          <Pressable onPress={() => setHidePass(!hidePass)} style={styles.icon}>
            <Image source={hidePass ? Images.frame : Images.frame2} />
          </Pressable>
        </View>
        {/* {errors.password && (
          <Text style={{color: 'red', alignSelf: 'stretch'}}>
            'Password should be at least 8 characters long'
          </Text>
        )} */}
        <View style={styles.input}>
          <Image style={styles.icon} source={Images.lock} />
          <TextInput
            placeholderTextColor="black"
            style={styles.input2}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmpassword}
            secureTextEntry={hidePass ? true : false}
            autoCorrect={false}
          />
 {/* <Controller
            control={control}
            rules={{
              validate: value => value === pwd || 'Password do not match',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input2}
                placeholder="Confirm Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholderTextColor="black"
                secureTextEntry={hidePass ? true : false}
                autoCorrect={false}
              />
            )}
            name="ConfirmPassword"
          /> */}

          <Pressable onPress={() => setHidePass(!hidePass)} style={styles.icon}>
            <Image source={hidePass ? Images.frame : Images.frame2} />
          </Pressable>
        </View>
        {/* {errors.ConfirmPassword && (
          <Text style={{color: 'red', alignSelf: 'stretch'}}>
            Password do not match
          </Text>
        )} */}

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

          <Text style={styles.text}>
            By pressing continue you agree to our{' '}
            <Text style={styles.link}>terms and conditions</Text> and{' '}
            <Text style={styles.link}>privacy policy</Text>.
          </Text>
        </View>
        <Pressable onPress={handleRegister}>
          <View style={styles.btn}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 24,
                fontWeight: 700,
                marginTop: 10,
                color: 'white',
              }}>
              Register
            </Text>
          </View>
        </Pressable>
        <Text
          onPress={() => navigation.navigate('Login')}
          style={{
            marginTop: 20,
            fontWeight: 600,
            fontSize: 16,
            alignSelf: 'center',
            marginBottom: 50,
          }}>
          Already Have a account?
        </Text>
      </View>
    </ScrollView>
  );
};
