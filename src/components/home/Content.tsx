import React from 'react';
// import {Controller} from 'react-hook-form';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ImageKey, Images} from '../../assets/Images';


const styles = StyleSheet.create({
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
  name: {
    fontSize: 20,
    // fontWeight: 700,
    margin: 15,
    fontFamily: 'Urbanist-Bold',
  },
  tex2: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    padding: 5,
    flexDirection: 'row',
  },
  city: {
    fontSize: 14,
    fontFamily: 'Urbanist-Regular',
  },
  country: {
    fontSize: 14,
    fontFamily: 'Urbanist-Regular',
  },
  detailsText: {
    fontSize: 14,
    left: 90,
    opacity: 0.5,
    fontFamily: 'Urbanist-Regular',
  },
});

interface ContentProps  {
  name: string;
  country: string;
  city: string;
  source: ImageKey;
}
export const Content: React.FC<ContentProps> = ({
  country,
  name,
  city,
  source,
}: ContentProps) => {
  return (
    <View style={styles.center}>
      <ImageBackground
        style={styles.one}
        source={Images[source]}
        imageStyle={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}
        resizeMode="cover"
      />

      <Text style={styles.name}>{name}</Text>
      <View style={styles.tex2}>
        <Text style={styles.city}>{city},</Text>
        <Text style={styles.country}>{country}</Text>
        <Text style={styles.detailsText}>View Details &gt; </Text>
      </View>
    </View>
  );
};


