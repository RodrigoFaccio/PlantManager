import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';

import { useFonts, Jost_400Regular,Jost_600SemiBold } from '@expo-google-fonts/jost';
import  AppLoading from 'expo-app-loading'

export default function App() {

  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded)
    return (
      <AppLoading/>
    );
  return (
    <Routes/>
   );
  
}

