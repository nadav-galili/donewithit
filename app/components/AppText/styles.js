import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "lime",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 48,
        fontFamily: "Roboto",
      },
    }),
  },
});
export default styles;
