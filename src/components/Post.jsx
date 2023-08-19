// import MessageIcon from "../../assets/icons/MessageIcon";
// import ThumbsUpIcon from "../../assets/icons/ThumbsUpIcon";  thumbs-up
// import MapIcon from "../../assets/icons/MapIcon"; map-marker-alt
import ImagePost from "../components/ImagePost";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import {  FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../redux/posts/postsOperations";
// import { selectUID } from "../../redux/auth/authSelectors";

export default function Post  ({
  post: { id, image, name, likesCount, location, comments },
  navigation,
  route,
}) {
  const dispatch = useDispatch();
  // const uid = useSelector(selectUID);

  const messagePressHandler = (id) => {
    navigation.navigate("CommentsScreen", id);
  };

  const mapPressHandler = () => {
    navigation.navigate("MapScreen", location.coordinates);
  };

  return (
    <View>
      <ImagePost source={image} />
      <Text style={styles.title}>{name}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.positioning}>
          <View style={styles.infoWrapper}>
            <TouchableOpacity onPress={() => messagePressHandler(id)}>
              <FontAwesome name="message" size={24} color="#BDBDBD" commentsCount={comments.length} />
            </TouchableOpacity>
            <Text style={[counts, !comments.length && { color: "#BDBDBD" }]}>
              {comments.length}
            </Text>
          </View>
          {route.name === "ProfileScreen" && (
            <View style={styles.infoWrapper}>
              <TouchableOpacity onPress={() => dispatch(addLike({ uid, id }))}>
                <FontAwesome name="thumbs-up"  size={24} color="#BDBDBD"  likesCount={likesCount} />
              </TouchableOpacity>
              <Text style={[styles.counts, !likesCount && { color: "#BDBDBD" }]}>
                {likesCount}
              </Text>
            </View>
          )}
        </View>
        <View style={likesCount.infoWrapper}>
          <TouchableOpacity onPress={() => mapPressHandler(id)}>
            <FontAwesome name="map-marker-alt" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <Text style={likesCount.locationText}>
            {route.name === "ProfileScreen"
              ? `${location.country}`
              : `${location.region}, ${location.country}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 8,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  infoWrapper: {
    flexDirection: "row",
    gap: 6,
  },
  positioning: {
    flexDirection: "row",
    gap: 24,
  },
  counts: {
    fontSize: 16,
  },
  locationText: {
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
