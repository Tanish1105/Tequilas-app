import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import { Images } from '../assets/Images';
interface PEditProps  {
  text: string;
  source: string;
}
export const PEdit: React.FC<PEditProps> = ({text, source}) => {
  return (
    <View style={styles.edit}>
      <Image style={styles.icon} source={Images[source]} />
      <Text style={styles.text}>{text}</Text>
      <Image style={styles.arrow} source={Images.arrow} />
    </View>
  );
};

const styles = StyleSheet.create({
  edit: {
    height: 60,
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 15,
    margin:10,
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
    marginLeft: 260,
    position:'absolute',
  },
});
