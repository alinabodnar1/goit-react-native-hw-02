import { useEffect } from "react";
import Post from "../components/Post";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
// import { selectUser, selectUID } from "../../redux/auth/authSelectors";
import { selectPosts } from "../redux/posts/postsSelectors";
import { fetchAllPosts } from "../redux/posts/postsOperations";

export default function PostsScreen ({ route, navigation }) {
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);
  // const uid = useSelector(selectUID);
  const { posts } = useSelector(selectPosts);

 useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  // useEffect(() => {
  //   dispatch(fetchAllPosts(uid));
  // }, [uid]);

  // if (!user) return;

  return (
    <View route={route} navigation={navigation}>
      <ScrollView
        contentContainerStyle={{
          gap: 32,
          paddingBottom: 10,
          paddingTop: 120,
          paddingHorizontal: 16,
        }}
      >
        <View style={styles.container}>
          <View style={styles.avatarWrapper}>
            <Image
              style={styles.avatar}
              source={require("../images/icons/avatar.png")}
            />
          </View>
          <View>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
             {/* <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text> */}
          </View>
        </View>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            commentsCount={post.comments.length}
            navigation={navigation}
            route={route}
          />
        ))}
        {/* <Text>Here is place for posts</Text> */}
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatarWrapper: {
    maxWidth: 60,
    maxHeight: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatar: {
    maxWidth: 60,
    maxHeight: 60,
    borderRadius: 16,
  },
  userName: {
    fontFamily: "Roboto-Medium",
    fontSize: 13,
    lineHeight: 15,
  },
  userEmail: {
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
