import { Image } from "react-native";
import {  StyleSheet } from "react-native";

export default function ImagePost ({ source }) {
  return <Image source={{ uri: source }} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
});
