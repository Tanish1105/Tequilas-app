import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
} from 'react-native';
import React, {useEffect,useState} from 'react';
// import {Images} from '../../assets/Images';
import {PEdit} from '../../components';
import {useForm} from 'react-hook-form';
// import { Changepass } from '../User/Changepass';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getSpecificData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? value : '';
  } catch (e) {
    console.error(e);
    return '';
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },

  hedaer: {
    height: 80,
    backgroundColor: 'rgba(245, 102, 0, 1)',
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
  },
  hello: {
    fontFamily: 'Urbanist-Bold',
    color: 'white',
    fontSize: 23,
    marginTop: 20,
    marginLeft: 20,
  },
  content: {
    height: 150,
    // width: 300,
    // backgroundColor: 'red',
    margin: 30,
    marginTop: 60,
    // alignSelf:'center',
  },
  imgcontener: {
    backgroundColor: 'grey',
    height: 105,
    width: 105,
    marginTop: 20,
    borderRadius: '50%',
  },
  img: {
    height: 105,
    width: 105,
    // marginTop:6,
    alignSelf: 'center',
    borderRadius: 100,
  },
  data: {
    position: 'absolute',
    marginTop: 40,
    marginLeft: 115,
  },
  edit: {
    height: 60,
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 15,
  },
  icon: {
    alignSelf: 'center',
    marginLeft: 18,
    // marginRight: 8,
    height: 20,
    width: 15,
  },
  text: {
    alignSelf: 'center',
    marginLeft: 25,
    fontSize: 18,
    fontFamily: 'Urbanist-Reguler',
  },
  arrow: {
    alignSelf: 'center',
    marginLeft: 110,
  },
});

export const Profile: React.FC = () => {
  const navigation = useNavigation();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');  
  const getSpecificData = async (key) => {
        const jsonValue = await AsyncStorage.getItem('User_Data');
        const allData = jsonValue != null ? JSON.parse(jsonValue) : null;
        return allData ? allData[key] : null;
};
useEffect(() => {
  const fetchSettings = async () => {
      const namedata = await getSpecificData('Name');
      setname(namedata);
      const emaildata = await getSpecificData('Email');
      setemail(emaildata);
  };
  fetchSettings();
}, []);
  return (
    <View style={styles.body}>
      <View style={styles.hedaer}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="rgba(245, 102, 0, 1)"
        />
        <Text style={styles.hello}>Hello,{name}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.imgcontener}>
          <Image
            style={styles.img}
            resizeMode="cover"
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            }}
          />
        </View>
        <View style={styles.data}>
          <Text>{name}</Text>
          <Text>+91 63561 63602</Text>
          <Text>{email}</Text>
        </View>
      </View>
      <Pressable onPress={() => navigation.navigate('Editprofile')}>
        <PEdit source="EditProfile" text="Edit Profile" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Changepass')}>
        <PEdit source="lock" text="Change Password" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Logout')}>
        <PEdit source="logout" text="Logout" />
      </Pressable>
    </View>
  );
};
