import React, { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { EvilIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { commonStyles } from "../../commonStyles";
import { useNavigation } from "@react-navigation/native";
import { nanoid } from "nanoid";

export default function CreatePostsScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState("");
  const [comment, setComment] = useState("");
  const [locationName, setLocationName] = useState("");
  const [location, setLocation] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === false) {
    return <Text> No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          // keyboardVerticalOffset={Platform.OS === "ios" ? -165 : -165}
        >
          {photo ? (
            <Camera style={styles.camera} type={type} ref={setCameraRef}>
              <View style={styles.photoView}>
                <Image source={{ uri: photo }} style={styles.previewPhoto} />

                <TouchableOpacity
                  style={styles.flipContainer}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <Text
                    style={{ fontSize: 18, marginBottom: -10, color: "white" }}
                  >
                    Flip{" "}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={async () => {
                    if (cameraRef) {
                      const photo = await cameraRef.takePictureAsync();
                      setPhoto(photo.uri);
                      await MediaLibrary.createAssetAsync(photo.uri);
                    }
                  }}
                >
                  <View style={styles.takePhotoOut}>
                    <FontAwesome name="camera" size={24} color="#BDBDBD" />
                  </View>
                </TouchableOpacity>
              </View>
            </Camera>
          ) : (
            <Camera style={styles.camera} type={type} ref={setCameraRef}>
              <View style={styles.photoView}>
                <TouchableOpacity
                  style={styles.flipContainer}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <Text
                    style={{ fontSize: 18, marginBottom: -10, color: "white" }}
                  >
                    Flip{" "}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={async () => {
                    if (cameraRef) {
                      const photo = await cameraRef.takePictureAsync();
                      setPhoto(photo.uri);
                      await MediaLibrary.createAssetAsync(photo.uri);
                    }
                  }}
                >
                  <View style={styles.takePhotoOut}>
                    <FontAwesome name="camera" size={24} color="#BDBDBD" />
                  </View>
                </TouchableOpacity>
              </View>
            </Camera>
          )}

          {photo ? (
            <Pressable>
              <Text style={styles.loadPhoto}>Редагувати фото</Text>
            </Pressable>
          ) : (
            <Pressable>
              <Text style={styles.loadPhoto}>Завантажте фото</Text>
            </Pressable>
          )}

          <TextInput
            style={styles.inputName}
            placeholder="Назва..."
            placeholderTextColor={"#BDBDBD"}
            value={comment}
            onChangeText={(value) => setComment(value)}
          />
          <View style={styles.locationWraper}>
            <EvilIcons name="location" size={24} style={styles.locationIcon} />
            <TextInput
              style={styles.location}
              placeholder="Місцевість..."
              placeholderTextColor={"#BDBDBD"}
              value={locationName}
              onChangeText={(value) => setLocationName(value)}
            />
          </View>

          <Pressable style={styles.button}>
            <Text
              style={styles.publish}
              onPress={() =>
                navigation.navigate("MapScreen", {
                  location: location.coords,
                })
              }
            >
              Опубліковати
            </Text>
          </Pressable>

          <Pressable style={styles.delete}>
            <AntDesign name="delete" size={24} color="#BDBDBD" />
          </Pressable>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...commonStyles.wrapper,
    flex: 1,
  },
  back: {
    position: "absolute",
    top: 12,
    left: 16,
  },
  emptyPhoto: {
    marginTop: 32,
    marginBottom: 8,
    width: 343,
    height: 240,
    borderRadius: 8,
  },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: "flex-end",
  },

  button: { alignSelf: "center" },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },
  loadPhoto: {
    ...commonStyles.font,
    textAlign: "left",
    color: "#BDBDBD",
  },
  inputName: {
    ...commonStyles.font,
    textAlign: "left",
    marginTop: 48,
    marginBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingBottom: 15,
  },
  locationWraper: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  location: {
    ...commonStyles.font,
    textAlign: "left",
    marginLeft: 22,
  },
  locationIcon: {
    ...commonStyles.zeroLeftPosition,
    color: "gray",
  },
  button: {
    ...commonStyles.heroButton,
    marginTop: 32,
    marginBottom: 90,
    backgroundColor: "#F6F6F6",
  },
  publish: {
    ...commonStyles.font,
    color: "#BDBDBD",
  },
  delete: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#F6F6F6",
    textAlign: "center",
    borderRadius: 100,
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 23,
    paddingRight: 23,
  },
});
