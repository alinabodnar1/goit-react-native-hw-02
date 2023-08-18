import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

export default function Button ({ title, pressHandler, activeBtn }) {
  return (
    <TouchableOpacity
      onPress={pressHandler}
      style={[
        submitBtn,
        !activeBtn && {
          pointerEvents: "none",
          backgroundColor: "#F6F6F6",
          borderColor: "#F6F6F6",
        },
      ]}
    >
      <Text style={[submitBtnText, !activeBtn && { color: "#BDBDBD" }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    marginTop: 43,
    paddingHorizontal: 32,
    paddingVertical: 12,

    backgroundColor: "#FF6C00",
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 100,
  },
  submitBtnText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});
