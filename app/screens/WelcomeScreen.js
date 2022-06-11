import { ImageBackground, StyleSheet } from "react-native";
import React from "react";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    />
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
export default WelcomeScreen;
