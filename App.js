import { StyleSheet, StatusBar, Platform, View, Text } from "react-native";
import AppText from "./app/components/AppText";

import { MaterialCommunityIcons } from "@expo/vector-icons";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>I love react native</AppText>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "orange",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
// });
