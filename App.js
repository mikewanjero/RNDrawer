import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
        }}
      >
        <BottomTab.Screen name={"Welcome"} component={WelcomeScreen} />
        <BottomTab.Screen name={"User"} component={UserScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
