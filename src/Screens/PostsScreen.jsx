// import React from "react";
// import { EvilIcons } from "@expo/vector-icons";
// import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
// import { commonStyles } from "../../commonStyles";

// export default function PostsScreen({ route, navigation }) {
//   return (
//     <View style={{ flex: 1, backgroundColor: "#FFFFFF" }} route={route} navigation={navigation}>
//        <ScrollView
//         contentContainerStyle={{
//           gap: 32,
//           paddingBottom: 10,
//           paddingTop: 120,
//           paddingHorizontal: 16,
//         }}
//       >
//       <View style={commonStyles.wrapper}>
//         <View style={styles.person}>
//           <Image style={styles.avatar} source={require("./img/avatar.jpg")} />
//           <View style={styles.nameEmail}>
//             <Text style={styles.name}>Natali Romanova</Text>
//             <Text style={styles.email}>email@example.com</Text>
//           </View>
//         </View>

//         <Image source={require("./img/publicationPhoto.jpg")} />
//         <Text style={commonStyles.publicationTitle}>Ліс</Text>

//         <View style={commonStyles.publicationInfo}>
//           <EvilIcons name="comment" size={24} color="#BDBDBD" />
//           <Text style={styles.commentsNumber}>0</Text>
//           <EvilIcons
//             name="location"
//             size={28}
//             style={commonStyles.locationIcon}
//           />
//           <Text style={commonStyles.location}>
//             Ivano-Frankivs'k Region, Ukraine
//           </Text>
//         </View>
//         <Image
//           style={styles.nextPublication}
//           source={require("./img/sunset.jpg")}
//         />
//       </View>
//       </ScrollView>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   logout: {
//     position: "absolute",
//     bottom: 9,
//     // right: 16,
//   },
//   person: {
//     flexDirection: "row",
//     alignItems: "center",
//     // marginTop: 32,
//     // marginBottom: 32,
//   },
//   avatar: {
//     width: 60,
//     height: 60,
//     borderRadius: 16,
//   },
//   nameEmail: {
//     marginLeft: 8,
//   },
//   name: {
//     ...commonStyles.font,
//     fontSize: 13,
//     fontWeight: "bold",
//   },
//   email: {
//     fontSize: 11,
//     color: "#212121",
//   },
//   commentsNumber: {
//     ...commonStyles.commentsNumber,
//     marginRight: 45,
//   },
//   nextPublication: {
//     overflow: "hidden",
//     zIndex: 10,
//   },
// });

import Post from "../components/Post";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
// import { useSelector, useDispatch } from "react-redux";
// import { selectUser, selectUID } from "../../redux/auth/authSelectors";
// import { selectPosts } from "../../redux/posts/postsSelectors";
// import { useEffect } from "react";
// import { fetchAllPosts } from "../../redux/posts/postsOperations";


export default function PostsScreen ({ route, navigation }) {
  // const dispatch = useDispatch();
  // const user = useSelector(selectUser);
  // const uid = useSelector(selectUID);
  // const { posts } = useSelector(selectPosts);

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
              source={require("../ProfileScreen/img/avatar.png")}
            />
          </View>
          <View>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
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
