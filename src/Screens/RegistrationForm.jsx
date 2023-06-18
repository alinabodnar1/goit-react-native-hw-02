import React from 'react';
import { Pressable, TextInput, View, StyleSheet, Text } from 'react-native';

export default function RegistrationForm() {
  return (
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Логін" />
        <TextInput style={styles.input} placeholder="Адреса електронної пошти"/>
        <TextInput style={styles.input} placeholder="Пароль"/>
        <Pressable style={styles.show} >
            <Text style={styles.showText}>Показати</Text>
        </Pressable>
    </View>     
  )
}

const styles = StyleSheet.create({
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
        fontFamily: 'Roboto-Light',
        fontSize: 16,
        backgroundColor: '#F6F6F6',  
    },
    show: {
        position: 'absolute',
        right: 16,
        bottom: 30,
    },
    showText: {
        color: '#1B4371',
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'Roboto-Light',
    }
})