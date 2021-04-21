import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View,
    SafeAreaView,
    Dimensions
 } from 'react-native';
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import {Feather} from '@expo/vector-icons/'
import { useNavigation, useNavigationState } from '@react-navigation/core';

export default function Welcome() {
    const navigation = useNavigation();
  return (
   <SafeAreaView style={styles.container}>
       
       <Text style={styles.title}>
        Gerencie{'\n'}
        suas plantas de {'\n'}
         forma fácil
        </Text>

       <Image resizeMode='contain' style={styles.image} source={wateringImg} />

       <Text style={styles.subtitle}>
           Não esqueça de regar suas plantas
           Nos cuidamos de lembrar pra voce sempre que precisar 

       </Text>

       <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('UserIdentification')} style={styles.button}>
           <Text style={styles.buttonText}>
          <Feather style={styles.buttonIcon} name="chevron-right"/>
           </Text>
       </TouchableOpacity>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around'
    },
    title:{
        fontSize:28,
        fontWeight:'bold',
        textAlign:'center',
        color:colors.heading,
        marginTop:38,
        fontFamily:fonts.complement,
        lineHeight:34

    },
    subtitle:{
        textAlign:'center',
        fontSize:18,
        paddingHorizontal:20,
        color:colors.heading,
        fontFamily:fonts.text
    },
        button:{
        backgroundColor:colors.green,

        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        marginBottom:10,
        height:56,
        width:56
        
    },
    
    buttonText:{
        color:colors.white,
        fontSize:24
    },
    buttonIcon:{
        fontSize:24,
        color:colors.white
    },
    image:{
        
        height:Dimensions.get('window').width * 0.7,
    },

})
