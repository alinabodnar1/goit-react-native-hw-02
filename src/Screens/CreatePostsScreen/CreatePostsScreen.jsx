import React from "react";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  TextInput,
} from "react-native";
import { commonStyles } from "../../commonStyles";

export default function CreatePostsScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#FFFFFF" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <View style={commonStyles.wrapper}>
            <Image
              style={styles.emptyPhoto}
              source={require("./img/empty-photo.jpg")}
            />
            <Pressable>
              <Text style={styles.loadPhoto}>Завантажте фото</Text>
            </Pressable>
            <TextInput style={styles.inputName} placeholder="Назва..." />
            <View style={styles.locationWraper}>
              <EvilIcons
                name="location"
                size={24}
                style={styles.locationIcon}
              />
              <TextInput style={styles.location} placeholder="Місцевість..." />
            </View>
            <Pressable style={styles.button}>
              <Text style={styles.publish}>Опубліковати</Text>
            </Pressable>
            <Pressable style={styles.delete}>
              <AntDesign name="delete" size={24} color="#BDBDBD" />
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  back: {
    position: "absolute",
    top: 12,
    left: 16,
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
  locationWraper: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  location: {
    ...commonStyles.font,
    textAlign: "left",
    marginLeft: 22,
  },
  locationIcon: {
    ...commonStyles.zeroLeftPosition,
    color: "gray",
  },
  button: {
    ...commonStyles.heroButton,
    marginTop: 32,
    marginBottom: 90,
    backgroundColor: "#F6F6F6",
  },
  publish: {
    ...commonStyles.font,
    color: "#BDBDBD",
  },
  delete: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#F6F6F6",
    textAlign: "center",
    borderRadius: 100,
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 23,
    paddingRight: 23,
  },
});
