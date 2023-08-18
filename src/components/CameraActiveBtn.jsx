import CameraIcon from "../images/icons/CameraIcon";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

export default function CameraActiveBtn ({ pressHandler, isActive }) {
  return (
    <TouchableOpacity
      onPress={pressHandler}
      style={[
        addImageBtn,
        isActive && {
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        },
      ]}
    >
      <CameraIcon isImageShow={isActive} />
    </TouchableOpacity>
  );
}; 

const styles = StyleSheet.create({
  addImageBtn: {
    justifyContent: "center",
    alignItems: "center",
    padding: 18,

    borderRadius: 30,
    backgroundColor: "#fff",
    zIndex: 1001,
  },
});