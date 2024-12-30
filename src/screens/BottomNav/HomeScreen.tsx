import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
} from 'react-native';
import {Images} from '../../assets/Images';
import {Content} from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: 150,
    backgroundColor: 'rgba(245, 102, 0, 1)',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    // position:'static'
  },
  welcom: {
    fontFamily: 'Urbanist-Bold',
    color: 'white',
    fontSize: 23,
    // fontWeight: 700,
    marginTop: 20,
    marginLeft: 20,
  },
  search: {
    height: 50,
    width: 300,

    backgroundColor: 'white',
    margin: 20,
    marginLeft: 30,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    alignSelf: 'center',
    marginLeft: 8,
    marginRight: 5,
  },

  input: {
    fontFamily: 'Urbanist-Medium',
    color: 'black',
  },
  center: {
    height: 240,
    width: 320,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignSelf: 'center',
    margin: 20,
    borderRadius: 20,
    marginBottom: 0,
  },
  one: {
    height: 150,
    width: 320,
  },
  tex: {
    fontSize: 20,
    fontWeight: 700,
    margin: 15,
  },
  tex2: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    padding: 5,
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
  },
  location: {
    fontSize: 14,
  },
  detailsText: {
    fontSize: 14,
    left: 90,
    opacity: 0.5,
  },
  footer: {
    height: 80,
    width: 370,
    backgroundColor: ' rgba(245, 102, 0, 1)',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  footericon: {
    // alignSelf:'center',
    justifyContent: 'space-evenly',
    marginLeft: 25,
    marginTop: 10,
    backgroundColor: 'red',
    height: 60,
    width: 60,
  },
  footerimg: {
    alignSelf: 'center',
  },
  footertext: {
    alignSelf: 'center',
    marginTop: 5,
  },
});

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="rgba(245, 102, 0, 1)"
        />
        <Text style={styles.welcom}>Welcome to Taqila Restaurent</Text>
        <View style={styles.search}>
          <Image style={styles.icon} source={Images.search} />
          <TextInput
            style={styles.input}
            placeholderTextColor="rgba(194, 194, 194, 1)"
            placeholder="Search Restaurents"
          />
        </View>
      </View>

      <ScrollView>
        <Pressable onPress={() => navigation.navigate('Detail')}>
          <Content
            source={'img1'}
            name={'Tequilas Mexican Restaurant'}
            city={'Las Vegas'}
            country={'USA'}
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Detail')}>
          <Content
            source={'img2'}
            name={'Tequilas Mexican Restaurant'}
            city={'Las Vegas'}
            country={'USA'}
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Detail')}>
          <Content
            source={'img3'}
            name={'Tequilas Mexican Restaurant'}
            city={'Las Vegas'}
            country={'USA'}
          />
        </Pressable>
      </ScrollView>
    </View>
  );
};



