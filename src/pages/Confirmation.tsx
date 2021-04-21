import React, { Component } from 'react'
import { Text, View,StyleSheet,SafeAreaView } from 'react-native'

import {Button} from '../components/Button';

import colors from '../styles/colors'
import fonts from '../styles/fonts';

export default function Confirmation(){
    return(
    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.emoji}>
                😄
            </Text>
            <Text style={styles.title}>
                Prontinho
            </Text>

            <Text style={styles.subTitle}>
                Agora vamos começar a cuidar das suas plantinhas  com muito cuidado
            </Text>

            <View style={styles.footer}>
                <Button title="Começar" />

            </View>
            
        </View>

    </SafeAreaView>
    )
}

const styles  = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',


    },
    content:{
        flex:1,
        alignItems:'center',
        justifyContent:'center', 
        width:'100%',
        padding:30
    },
    title:{
        fontSize:22,
        fontFamily:fonts.heading,
        textAlign:'center',
        color:colors.heading,
        lineHeight:38,
        marginTop:15
    },
    subTitle:{
        fontFamily:fonts.text,
        textAlign:'center',
        fontSize:17,
        paddingVertical:20,
        color:colors.heading,
    },

    emoji:{
        fontSize:78
    },
    footer:{
        width:'100%',
        paddingHorizontal:75,
        marginTop:20
    }
})
