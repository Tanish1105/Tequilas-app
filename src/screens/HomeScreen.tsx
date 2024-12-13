import React, {useState} from "react";
import { Text, View, TouchableOpacity,Button ,StyleSheet,Image,TextInput,ScrollView,Pressable,Alert,ImageBackground} from "react-native";
import { Images } from "../assets/Images"
import { Fonts } from "../styles/fonts";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    container :{
        fontFamily:Fonts.regular,
        flex:1,
       },
top:{
    height:150,
    backgroundColor:"rgba(245, 102, 0, 1)",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    // position:'static'

},
welcom:{
    
    color:"white",
    fontSize:23,
    fontWeight:700,
    marginTop:20,
    marginLeft:20,
},
search:{
    height:50,
    width:300,
    backgroundColor:"white",
    margin:20,
    marginLeft:30,
    borderRadius:20,
    display:'flex',
    flexDirection:'row',

},
icon:{
    alignSelf:"center",
    marginLeft:8,
    marginRight:5,
 },

input:{
    color:"black"
},
center:{
  height:240,
  width:320,
  backgroundColor:"rgba(255, 255, 255, 1)",
  alignSelf:'center',
  margin:20,
  borderRadius:20,
  marginBottom:"0"
  },
one:{
    height:150,
    width:320,
},
tex:{
    fontSize:20,
    fontWeight:700,
    margin:15,
},
tex2:{
    position: 'absolute',
    bottom:15,
    left: 20,
    padding: 5,
    flexDirection:"row",
},
title: {
    fontSize: 14,
  },
  location: {
    fontSize: 14,
  
  },
  detailsText: {
    fontSize: 14,
    left:90,
    opacity:0.5
    // marginVertical
//  fontWeight: 'bold',
    
  },
})

export const HomeScreen : React.FC = () => {
    const navigation = useNavigation();
    return(
        
        <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.welcom} >Welcome to Taqila Restaurent</Text>
            <View style={styles.search} > 
            <Image style={styles.icon} source={Images.search}/>
            <TextInput 
            style={styles.input}
            placeholderTextColor="rgba(194, 194, 194, 1)" 
             placeholder ="Search Restaurents"
             
             />
            </View>
        </View>

        <ScrollView>
        <Pressable onPress={() => navigation.navigate("Detail")}>
        <View style={styles.center}>
      <ImageBackground style={styles.one} source={Images.img1} 
      imageStyle={{borderTopLeftRadius: 20,borderTopRightRadius: 20,}} resizeMode="cover">
      </ImageBackground>
      <Text style={styles.tex} >Tequilas Mexican Restaurant</Text>
     <View style={styles.tex2}>
     <Text style={styles.title}>Las Vegas,</Text>
     <Text style={styles.location}>USA</Text> 
         <Text style={styles.detailsText} >View Details &gt; </Text>      
     </View>
     </View>
     </Pressable>

     <Pressable>
      <View style={styles.center}>
      <ImageBackground style={styles.one} source={Images.img2} imageStyle={{borderTopLeftRadius: 20,borderTopRightRadius: 20,}} resizeMode="cover">
      </ImageBackground>
      <Text style={styles.tex} >Tequilas Mexican Restaurant</Text>
     <View style={styles.tex2}>
     <Text style={styles.title}>Las Vegas,</Text>
     <Text style={styles.location}>USA</Text>
         <Text style={styles.detailsText} >View Details &gt; </Text>
    </View>
  </View>
  </Pressable>

  <Pressable>
       <View style={styles.center}>
      <ImageBackground style={styles.one} source={Images.img3} imageStyle={{borderTopLeftRadius: 20,borderTopRightRadius: 20,}} resizeMode="cover">
      </ImageBackground>
      <Text style={styles.tex} >Tequilas Mexican Restaurant</Text>
     <View style={styles.tex2}>
     <Text style={styles.title}>Las Vegas,</Text>
     <Text style={styles.location}>USA</Text>
         <Text style={styles.detailsText} >View Details &gt; </Text>   
     </View>
       </View>
</Pressable>

        
        </ScrollView>
        </View>
        
    )
}