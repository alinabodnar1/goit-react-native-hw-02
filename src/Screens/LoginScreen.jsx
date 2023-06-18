import React from 'react';
import background from '../images/background.jpg';
import {
    View,
    ImageBackground,
    Text,
    StyleSheet,
    Pressable,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import Loginform from './Loginform';
import { commonStyles } from '../commonStyles';

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <ImageBackground source={background} resizeMode='cover' style={styles.image}>
                        <View style={styles.loginform}>
                           <Text style={styles.title}>Увійти</Text>  
                                <Loginform />
                                <Pressable style={styles.button} >
                                    <Text style={styles.signin}>Увійти</Text>
                                </Pressable>
                                <Text style={styles.signup}>Немає акаунту?
                                    <Text style={{textDecorationLine: 'underline'}}>Зареєструватися</Text>
                                </Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback> 
        </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        ...commonStyles.image,
    },
    loginform: {
        ...commonStyles.form,
        marginTop: 323,
    },
    title: {
        ...commonStyles.title,
        marginTop: 32,
        marginBottom: 32,
       
    },
    button: {
        ...commonStyles.heroButton,
    },
    signin: {
        ...commonStyles.font,
        color: 'white',
        fontFamily: 'Roboto-Medium',
    },
    signup: {
        ...commonStyles.font,
        marginTop: 16,
        color: '#1B4371',
        fontFamily: 'Roboto-Light',
    }
});