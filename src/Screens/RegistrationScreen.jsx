import React from 'react';
import background from '../images/background.jpg';
import { Ionicons } from '@expo/vector-icons';
import RegistrationForm from './RegistrationForm';
import {
    View,
    ImageBackground,
    Text,
    StyleSheet,
    Pressable,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

export default function RegistrationScreen() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground source={background} resizeMode='cover' style={styles.image}>
                    <View style={styles.form}>
                        <View style={styles.addphoto}>
                            <Ionicons name="ios-add-circle-outline" size={24} style={styles.adduser} />
                        </View>
                        <Text style={styles.title}>Реєстрація</Text>

                        {/* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} */}
                        
                        {/* > */}
                            <RegistrationForm />
                        {/* </KeyboardAvoidingView> */}
        
                        <Pressable style={styles.button} >
                            <Text style={styles.signup}>Зареєструватися</Text>
                        </Pressable>
                            <Text style={styles.signin}>Вже є акаунт? Увійти</Text>  
                     </View>       
                </ImageBackground>
            </View>
         </TouchableWithoutFeedback> 
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
    form: {
        marginTop: 263,
        paddingTop: 20,
        backgroundColor: 'white',
        flex: 1,
        borderRadius: '25px 25px 0px 0px',
    },
    addphoto: {
        position: 'absolute',
        width: 120,
        height: 120,
        left: 128,
        top: -60,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },
    adduser: {
        position: 'absolute',
        right: -12,
        bottom: 14,
        color: 'rgba(255, 108, 0, 1)',
    },
    title: {
        marginTop: 62,
        marginBottom: 32,
        fontFamily: 'Roboto-Light',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        letterSpacing: 0.01,
        color: '#212121',
    },
    button: {
        display: 'inline-block',
        width: 343,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 27,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        alignItems: 'center',
        paddingBottom: 16,
        paddingTop: 16,
    },
    signup: {
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Roboto-Light',
    },
    signin: {
        marginTop: 16,
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#1B4371',
        fontFamily: 'Roboto-Light',
    }
});

