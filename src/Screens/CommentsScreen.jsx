// import UpArrowIcon from "../../assets/icons/UpArrowIcon"; FontAwesome name="arrow-up"
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import ImagePost from "../components/ImagePost";
import Comment from "../components/Comment";
// import { selectUser, selectId } from "../../redux/auth/authSelectors";
import { selectPosts } from "../redux/posts/postsSelectors";
import { addComment } from "../redux/posts/postsOperations";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { StyleSheet } from "react-native";
import { nanoid } from "nanoid";

export default function CommentsScreen ({ route, navigation }) {
  const dispatch = useDispatch();
  const postId = route.params;
  // const { name } = useSelector(selectUser);
  // const uid = useSelector(selectUID);
  const { posts } = useSelector(selectPosts);
  const currentPost = posts.find((post) => post.id === postId);
  const [message, setMessage] = useState("");

  const pushBtnPressHandler = () => {
    if (!message) {
      alert("Ви не ввели коментар");
      return;
    }

    const newComment = {
      id: nanoid(7),
      // author: name,
      addedOn: Date.now(),
      message,
    };

    Keyboard.dismiss();
    // dispatch(addComment({ uid, postId, comment: newComment }));
    dispatch(addComment({ postId, comment: newComment }));
    setMessage("");
  };

  if (!currentPost) return;

  const areComments = Boolean(currentPost.comments.length);

  const elements = currentPost.comments.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));

  return (
    // <View>
    //   Here is CommentsScreen
    // </View>
    
    <View route={route} navigation={navigation}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          gap: 32,
          paddingBottom: 70,
          paddingTop: 120,
          paddingHorizontal: 16,
        }}
      >
        <ImagePost source={currentPost.image} />
        {!areComments && (
          <Text style={{ color: "#BDBDBD" }}>
            Під цим постом поки що немає коментарів
          </Text>
        )}
        {areComments && elements}
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.inputWrapper}>
          <TextInput
            onChangeText={(value) => setMessage(value)}
            style={styles.input}
            placeholder="Коментувати..."
            placeholderTextColor="#BDBDBD"
            value={message}
          />
          <TouchableOpacity onPress={pushBtnPressHandler} style={styles.pushBtn}>
            <FontAwesome name="arrow-up" size={24} color={"#BDBDBD"}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 16,
    backgroundColor: "#fff",
  },
  inputWrapper: {
    position: "relative",
  },
  input: {
    maxHeight: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 100,
  },
  pushBtn: {
    position: "absolute",
    bottom: 8,
    right: 8,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 34,
    maxHeight: 34,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});