import React, {useState} from "react";
import { Text, View, TouchableOpacity,Button ,StyleSheet,Image,TextInput,ScrollView,Pressable,Alert,ImageBackground} from "react-native";
import { Images } from "../assets/Images"
import { Fonts } from "../styles/fonts";


const styles = StyleSheet.create({
    center:{
        // margin:20

    },
img:{
    height:200,
    width:300,
    alignSelf:"center", 
    marginTop:30, 
},
titel:{
    marginLeft:22,
    marginTop:22,
    fontSize:23,
    fontWeight:700,
    color:"rgba(245, 102, 0, 1)"
},
btn:{
    backgroundColor:"rgba(245, 102, 0, 1)",
     height:58,
     width:320,
     margin:20,
     marginRight:10,
     borderRadius:16
  },
})

export const DetailScreen: React.FC = () => {

    return(
        <ScrollView>
        <View style={styles.center}>
    <ImageBackground style={styles.img} source={Images.img4}
     imageStyle={{borderTopLeftRadius: 20,borderTopRightRadius: 20,}} resizeMode="cover">
      </ImageBackground>
      <Text style={styles.titel}>Tequilas Mexican Restaurant</Text>
      <Text style={{marginLeft:22,marginTop:10,}}>Las Vegas, USA</Text>
      <Text style={{marginLeft:22,marginTop:15,marginRight:20, fontSize:18,fontWeight:400,}}>
         Tequilas Mexican Restaurant is a popular and
          authentic dining establishment that has gained
           a loyal following for its delectable Mexican 
           cuisine, warm ambiance, and extensive tequila 
           selection. Located in the heart of [City or 
           Town], Tequilas has been a beloved culinary 
           institution in the area for many years, serving 
           up a taste of Mexico that keeps patrons
           coming back for more.</Text>
        
     <Pressable  >
    <View style={styles.btn} >
     <Text  style={{textAlign:'center', fontSize:24, fontWeight:700,marginTop:10,color:'white'}}>Order Now</Text>
     </View>
     </Pressable>
        <Text style={{marginLeft:22,marginTop:10,fontSize:18,fontWeight:400}}>Upload your Invoice and you will get one point for each $ you sent in Restaurent.</Text>
     <Pressable  >
    <View style={styles.btn} >
     <Text  style={{textAlign:'center', fontSize:24, fontWeight:700,marginTop:10,color:'white'}}>
        Upload Invoice</Text>
     </View>
     </Pressable>
         
         <Text style={{marginLeft:22,marginTop:10,fontSize:18, fontWeight:400}}>Send your location that shows you visted the reatuarent and get one point for each visit.</Text>

     <Pressable  >
    <View style={styles.btn} >
     <Text  style={{textAlign:'center', fontSize:24, fontWeight:700,marginTop:10,color:'white'}}>I am at the Restaurant.</Text>
     </View>
     </Pressable>
        </View>
        </ScrollView>
    )

}