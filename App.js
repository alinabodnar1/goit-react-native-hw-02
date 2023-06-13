import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import background from './src/images/background.jpg';
import RegistrationScreen from './src/Screens/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode='cover' style={styles.image}>
          <RegistrationScreen />
      </ImageBackground>
     </View>
   )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});