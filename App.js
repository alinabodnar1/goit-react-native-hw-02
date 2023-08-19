import React from "react";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import MapScreen from "./src/Screens/MapScreen";
import CommentsScreen from "./src/Screens/CommentsScreen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./config";
import { persistor, store } from "./src/redux/store";

const MainStack = createStackNavigator();

export default function App({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Roboto-Light": require("./src/assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <MainStack.Navigator initialRouteName="Registration">
            {/* <MainStack.Navigator > */}
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false,
                headerLeft: () => (
                  <TouchableOpacity
                    style={{ marginLeft: 16, marginBottom: 10 }}
                    onPress={() => navigation.goBack()}
                  >
                    <Feather name="arrow-left" size={24} color="#212121" />
                  </TouchableOpacity>
                ),
              }}
            />
            <MainStack.Screen
              name="CommentsScreen"
              component={CommentsScreen}
              options={{
                title: "Коментарі",
                headerStyle: {
                  backgroundColor: "#FFFFFF",
                },
                headerTitleStyle: {
                  fontWeight: 500,
                  fontSize: 17,
                  lineHeight: 22,
                },
                // headerLeft: () => (
                //   <TouchableOpacity
                //     style={{ marginLeft: 16, marginBottom: 10 }}
                //     onPress={() => navigation.goBack()}
                //   >
                //     <Feather name="arrow-left" size={24} color="#212121" />
                //   </TouchableOpacity>
                // ),
              }}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
