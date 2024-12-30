import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
interface OfferslistProps  {
  text: string;
}
export const Offerslist : React.FC<OfferslistProps> = ({text}) => {
  return (
    <View style={styles.edit}>
        <Text style={styles.titel}>Offer of the day</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    edit:{
        height:100,
        width:320,
        marginLeft:20,
        marginTop:15,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius:20,
    },
    titel:{
        fontSize:16,
        margin:15,
        marginBottom:10,
        color:'rgba(245, 102, 0, 1)',
        fontFamily: 'Urbanist-Bold',
    },
    text:{
        fontSize:14,
        marginLeft:15,
    },
});