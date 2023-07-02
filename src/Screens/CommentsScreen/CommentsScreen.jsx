import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";
import { commonStyles } from "../../commonStyles";

export default function CommentsScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <View style={commonStyles.header}>
            <Ionicons name="arrow-back" size={24} style={commonStyles.back} />
            <Text style={commonStyles.headerTitle}>Коментарі</Text>
          </View>
          <View style={commonStyles.wrapper}>
            <Image style={styles.photo} source={require("./img/sunset.jpg")} />

            <FlatList
              data={[
                {
                  avatar: "./avatar1.jpg",
                  comment:
                    "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
                  dateAndTime: "09 червня, 2020 | 08:40",
                },
                {
                  avatar: "./avatar2.jpg",
                  comment:
                    "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
                  dateAndTime: "09 червня, 2020 | 09:14",
                },
                {
                  avatar: "./avatar1.jpg",
                  comment: "Thank you! That was very helpful!",
                  dateAndTime: "09 червня, 2020 | 09:20",
                },
              ]}
              renderItem={({ item, index }) => {
                if (index % 2 !== 0) {
                  return (
                    <View key={item.id} style={styles.item}>
                      <Image
                        style={styles.avatarRight}
                        source={require("./img/avatar2.jpg")}
                        // source={require(`${item.avatar}`)}
                      />

                      <View style={styles.commentWrapperRight}>
                        <Text style={styles.commentText}>{item.comment}</Text>
                        <Text style={styles.dateAndTimeLeft}>
                          {item.dateAndTime}
                        </Text>
                      </View>
                    </View>
                  );
                } else if (index % 2 === 0) {
                  return (
                    <View key={item.id} style={styles.item}>
                      <Image
                        style={styles.avatarLeft}
                        source={require("./img/avatar1.jpg")}
                      />

                      <View style={styles.commentWrapperLeft}>
                        <Text style={styles.commentText}>{item.comment}</Text>
                        <Text style={styles.dateAndTimeRight}>
                          {item.dateAndTime}
                        </Text>
                      </View>
                    </View>
                  );
                }
              }}
            />

            <Pressable style={styles.button}>
              <TextInput style={styles.publish} placeholder="Коментувати..." />
              <View style={styles.arrowUp}>
                <Ionicons name="arrow-up" size={24} color="white" />
              </View>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  photo: {
    marginTop: 32,
    marginBottom: 32,
    borderRadius: 8,
  },
  avatarLeft: {
    ...commonStyles.zeroLeftPosition,
  },
  avatarRight: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  commentWrapperLeft: {
    ...commonStyles.commentWrapper,
    marginLeft: 36,
  },
  commentWrapperRight: {
    ...commonStyles.commentWrapper,
    marginRight: 36,
  },
  commentText: {
    color: "#212121",
    fontSize: 13,
  },
  dateAndTimeRight: {
    ...commonStyles.dateAndTime,
    textAlign: "right",
  },
  dateAndTimeLeft: {
    ...commonStyles.dateAndTime,
    textAlign: "left",
  },
  button: {
    ...commonStyles.heroButton,
    marginTop: 0,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    padding: 8,
  },
  publish: {
    ...commonStyles.font,
    color: "#BDBDBD",
    textAlign: "left",
    paddingLeft: 8,
  },
  arrowUp: {
    position: "absolute",
    top: 5,
    right: 8,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    padding: 7,
  },
});
