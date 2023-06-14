import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
      'GreatVibes': require('./src/assets/fonts/GreatVibes.otf'),
  });
    
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
        <RegistrationScreen />
      
      <Text style={{ fontFamily: 'GreatVibes', fontSize: 30 }}>GreatVibes</Text>
     </View>
   )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});