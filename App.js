import React from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
      'Roboto-Light': require('./src/assets/fonts/Roboto-Light.ttf'),
  });
    
  if (!fontsLoaded) {
    return null;
  }

  return (
      <RegistrationScreen />
      
   )
}
 
// const styles = StyleSheet.create({
  
// });