import React from "react";
import { Ionicons, EvilIcons, AntDesign } from "@expo/vector-icons";
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

export default function PostsScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Публікації</Text>
            <Image  style={styles.arrow} source={require("./img/log-out.png")}/>
          </View>

          <View style={styles.main}>
            <View style={styles.wrapper}>
            <Image style={styles.avatar} source={require("./img/avatar.jpg")} />
            <View style={styles.nameEmail}>
              <Text style={styles.name}>Natali Romanova</Text>
              <Text style={styles.email}>email@example.com</Text>
            </View>
          </View>

          <Image source={require("./img/publicationPhoto.jpg")} />
            <Text style={styles.publicationTitle}>Ліс</Text>

            <View style={styles.publicationInfo}>
              <EvilIcons name="comment" size={24} color="#BDBDBD" />
              <Text style={styles.commentsNumber}>0</Text>
              <EvilIcons
                name="location"
                size={24}
                style={styles.locationIcon}
              />
              <Text style={styles.location}>Ivano-Frankivs'k Region, Ukraine</Text>
            </View>
          
              
         
          </View>
          

            
            {/* <Pressable style={styles.button}>
              <Text style={styles.publish}>Опубліковати</Text>
            </Pressable>
            <Pressable style={styles.delete}>
              <AntDesign name="delete" size={24} color="#BDBDBD" />
            </Pressable>  */}
          
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 44,
    borderBottomWidth: 0.3,
    borderBottomColor: "E5E5E5",
  },
  title: {
    ...commonStyles.font,
    paddingTop: 11,
    paddingBottom: 11,
  },
  arrow: {
    position: "absolute",
    bottom: 10,
    right: 16,
  },
  main: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
   marginTop: 32,
    marginBottom: 32,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  nameEmail: {
    marginLeft: 8,
  },
  name: {
    ...commonStyles.font,
    fontSize: 13,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 11,
    color: '#212121',
  },
  publicationTitle: {
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 8,
    color: '#212121',
  },
  publicationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  commentsNumber: {
    color: '#BDBDBD',
    marginRight: 45,
  },

  locationIcon: {
    color: "#BDBDBD",
  },
  location: {
    ...commonStyles.font,
    color: '#212121',

    textDecorationLine: 'underline',
  },
  // button: {
  //   ...commonStyles.heroButton,
  //   marginTop: 32,
  //   marginBottom: 120,
  //   backgroundColor: "#F6F6F6",
  // },
  // publish: {
  //   ...commonStyles.font,
  //   color: "#BDBDBD",
  // },
  // delete: {
  //   marginLeft: "auto",
  //   marginRight: "auto",
  //   backgroundColor: "#F6F6F6",
  //   textAlign: "center",
  //   borderRadius: 100,
  //   paddingBottom: 8,
  //   paddingTop: 8,
  //   paddingLeft: 23,
  //   paddingRight: 23,
  // },
});
