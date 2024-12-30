import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

export const Terms: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.contenur}>
        <Text style={styles.titel}>Terms and Conditions</Text>
        <Text style={styles.text}>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </Text>
        <Text style={styles.text}>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Text>
        <Text style={styles.text}>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </Text>
        <Text style={styles.text}>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of ons of Lorem Ipsum.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titel: {
    fontSize: 46,
    fontFamily: 'Urbanist-Bold',
    marginTop: 30,
    marginLeft: 10,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    width: 350,
    fontFamily: 'Urbanist-Regular',
    marginLeft: 10,
    // marginRight:10,
  },
  contenur: {
    flex: 1,
    marginBottom:30,
  },
});
