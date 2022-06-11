import { StyleSheet, StatusBar, Platform, View, Text } from "react-native";
import AppText from "./app/components/AppText";
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
      <AppText>
        I love react app this is my first react native line heres some more text
      </AppText>
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
