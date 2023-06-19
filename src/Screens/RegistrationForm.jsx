import React from 'react';
import { Pressable, TextInput, View, StyleSheet, Text } from 'react-native';
import { commonStyles } from '../commonStyles';

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
        ...commonStyles.container,
    },
    input: {
        ...commonStyles.input,
    },
    show: {
        ...commonStyles.showPosition,
    },
    showText: {
         ...commonStyles.showText,
        ...commonStyles.font,
    }
})