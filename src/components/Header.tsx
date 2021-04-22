import React, { Component, useState } from 'react'
import { 
    Text, 
    View ,
    StyleSheet,Image
} from 'react-native';
import colors from '../styles/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import profileImg from '../../src/assets/profile.jpeg'
import fonts from '../styles/fonts';


export function Header(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá</Text>
                <Text style={styles.userName}>Rodrigo</Text>
            </View>
            <Image source={profileImg} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingVertical:20,
      marginTop:getStatusBarHeight(),
    },
    image:{
        width:80,
        height:80,
        borderRadius:40
    },
    greeting:{
        fontSize:32,
        color:colors.heading,
        fontFamily:fonts.text
    },
    userName:{
        fontSize:32,
        color:colors.heading,
        fontFamily:fonts.heading,
        lineHeight:40
    }
})