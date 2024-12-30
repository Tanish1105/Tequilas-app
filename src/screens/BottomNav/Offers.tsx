import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {Offerslist} from '../../components';
import { ScrollView } from 'react-native-gesture-handler';

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
});
export const Offers: React.FC = () => {
  return (
    <View style={styles.body}>
      <View style={styles.hedaer}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="rgba(245, 102, 0, 1)"
        />
        <Text style={styles.hello}>Offers</Text>
      </View>
      <ScrollView>
      <Offerslist text="Visit the restaurant and get this offer. Get up to 30% off upto 100$. Grab the Offer Now" />
      <Offerslist text="Visit the restaurant and get this offer. Get up to 30% off upto 100$. Grab the Offer Now" />
      <Offerslist text="Visit the restaurant and get this offer. Get up to 30% off upto 100$. Grab the Offer Now" />
      <Offerslist text="Visit the restaurant and get this offer. Get up to 30% off upto 100$. Grab the Offer Now" />
      <Offerslist text="Visit the restaurant and get this offer. Get up to 30% off upto 100$. Grab the Offer Now" />
      </ScrollView>
    </View>
  );
};
