import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen({ route, navigation }) {
  const {location} = route.params;

  useEffect(() => {
    navigation.setOptions({ tabBarStyle: { display: "none" } });
  }, []);
  
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          title="I am here"
          description="Hello"
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
