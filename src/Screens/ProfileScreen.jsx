import Post from "../components/Post";
import Avatar from "../components/Avatar";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts } from "../redux/posts/postsSelectors";

import { StyleSheet } from "react-native";
import {
  ImageBackground,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ProfileScreen({ route, navigation }) {
  const dispatch = useDispatch();

  const { posts } = useSelector(selectPosts);
  const [isAvatarShown, setIsAvatarShown] = useState(true);


  const avatarToggle = () => {
    setIsAvatarShown((state) => !state);
  };

  return (
    <>
      <View
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      >
        <ImageBackground
          source={require("../images/background.jpg")}
          style={{ flex: 1}}
        />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.containe}>
          <View style={styles.avatarWrapper}>
            <Avatar isAvatarShown={isAvatarShown} avatarToggle={avatarToggle} />
            <TouchableOpacity
              onPress={() => logoutBtnPressHandler()}
              style={{ marginLeft: "auto", marginRight: 16, marginTop: 10 }}
            >
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>{user.name}</Text>
        
            <Post
              navigation={navigation}
              route={route}
            />
     
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 147,
  },
  container: {
    position: "relative",
    flexDirection: "column",
    gap: 32,
    paddingTop: 92,
    paddingBottom: 115,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "100%",
  },
  userName: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
  },
});