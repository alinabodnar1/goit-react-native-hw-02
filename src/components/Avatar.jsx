import CrossIcon from "../images/icons/CrossIcon";
import { View, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

export default function Avatar ({ isAvatarShown, avatarToggle }) {
  return (
    <View style={styles.avatarWrapper}>
      <View style={styles.avatarBG}>
        {isAvatarShown && (
          <Image
            style={styles.avatar}
            source={require("../images/icons/avatar.png")}
          />
        )}
        <TouchableOpacity
          onPress={() => avatarToggle()}
          style={{
            ...avatarAddBtn,
            borderColor: isAvatarShown ? "#E8E8E8" : "#FF6C00",
            transform: [{ rotate: isAvatarShown ? "45deg" : "0deg" }],
          }}
        >
          <CrossIcon fill={isAvatarShown ? "#BDBDBD" : "#FF6C00"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    transform: [{ translateY: -60 }],
    justifyContent: "center",
    alignItems: "center",
  },
  avatarBG: {
    position: "relative",
    minWidth: 120,
    minHeight: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatar: {
    borderRadius: 16,
  },
  avatarAddBtn: {
    position: "absolute",
    bottom: 14,
    right: -13,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 13,
  },
});

