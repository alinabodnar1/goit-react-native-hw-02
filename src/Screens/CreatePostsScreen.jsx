import React from "react";
import emptyPhoto from "../images/empty-photo.jpg";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import RegistrationForm from "./RegistrationForm";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Button,
  TextInput,
} from "react-native";
import { commonStyles } from "../commonStyles";

export default function CreatePostsScreen() {
  return (
    // <KeyboardAvoidingView
    // behavior={Platform.OS === "ios" ? "padding" : "height"}
    // style={styles.container}
    // keyboardVerticalOffset={-250}
    // >
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} style={styles.back} />
        <Text style={styles.title}>Створити публікацію</Text>
      </View>
      <View style={styles.wrapper}>
        <Image style={styles.emptyPhoto} source={emptyPhoto} />
        <Pressable>
          <Text style={styles.loadPhoto}>Завантажте фото</Text>
        </Pressable>
        <TextInput
          style={styles.inputName}
          placeholder="Назва..."
        />
        <View >
           <EvilIcons
            name="location"
            size={24}
            style={styles.locationIcon}
          />
          <TextInput
          style={styles.location}
          placeholder="Місцевість..."
          />
        
     
    </View>
       
       
      
      </View>
    </View>
    // </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    paddingBottom: 34,
  },
  header: {
    marginTop: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: "E5E5E5",
  },
  back: {
    color: "#808080",
    position: "absolute",
    bottom: 5,
    left: 16,
  },
  title: {
    ...commonStyles.font,
    paddingTop: 11,
    paddingBottom: 11,
  },
  wrapper: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  emptyPhoto: {
    marginTop: 32,
    marginBottom: 8,
    width: 343,
    height: 240,
    borderRadius: 8,
  },
  loadPhoto: {
    ...commonStyles.font,
    textAlign: "left",
    color: "#BDBDBD",
  },
  inputName: {
    ...commonStyles.font,
    textAlign: "left",
    marginTop: 48,
    marginBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingBottom: 15,
  },
  location: {
    ...commonStyles.font,
    textAlign: "left",
    marginLeft: 22,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingBottom: 15,
  },
  locationIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    color: 'gray',
  }
});
