import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';


export default function RegistrationScreen() {
//     const [fontsLoaded] = useFonts({
//     'Roboto': require('./assets/fonts/Roboto.otf'),
//   });
  return (
    <View style={styles.form}>
            <View style={styles.addphoto}>
                <Ionicons name="ios-add-circle-outline" size={24} style={styles.adduser} />
            </View>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={styles.container}>
               <TextInput style={styles.input} placeholder="Логін" />
                <TextInput style={styles.input} placeholder="Адреса електронної пошти"/>
                <TextInput style={styles.input} placeholder="Пароль"/>
                <Pressable style={styles.show} onPress={()=> alert('Show parol')}>
                    <Text>Показати</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={()=> alert('Sign up')}>
                    <Text style={styles.signup}>Зареєструватися</Text>
                </Pressable>
                <Text style={styles.signin}>Вже є акаунт? Увійти</Text>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
        fontWeight: 500,
        // fontFamily: 'Roboto',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        letterSpacing: 0.01,
        color: '#212121',
    },
    container: {
        marginLeft: "auto",
        marginRight: "auto",
        width: 343,
    },
    input: {
        marginBottom: 16,
        paddingLeft: 16,
        height: 50,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
        color: '#BDBDBD',
        fontFamily: 'Roboto',
        fontSize: 16,
        lineHeight: 19,
        backgroundColor: '#F6F6F6',  
    },
    show: {
        display: 'block',
        position: 'absolute',
        right: 16,
        bottom: 145,
        color: '#1B4371',
        fontSize: 16,
        lineHeight: 19,
    },
    button: {
        display: 'inline-block',
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
        color: '#FFFFFF',
    },
    signin: {
        marginTop: 16,
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#1B4371',
    }
});

