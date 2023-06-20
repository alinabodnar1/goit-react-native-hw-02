import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 343,
  },
  font: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
  heroButton: {
    width: 343,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 27,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingBottom: 16,
    paddingTop: 16,
  },
  form: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white",
    borderRadius: "25px 25px 0px 0px",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  input: {
    marginBottom: 16,
    paddingLeft: 16,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",

  },
  showPosition: {
    position: "absolute",
    right: 16,
    bottom: 30,
  },
  showText: {
    color: "#1B4371",
    fontFamily: "Roboto-Light",
  },
});
