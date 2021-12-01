import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import bg from "./assets/images/bg.jpeg";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={bg} style={styles.background} resizeMode="contain">
        <View style={styles.map}>
          <View style={styles.circle} />
          
          <View style={styles.cross}>
            <View style={styles.crossLine} />
            <View style={[styles.crossLine, styles.crossLineReversed]} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#242D34",
  },
  background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop:15
  },
  map:{
    borderWidth:1,
    borderColor:"white",
    width: "80%",
    aspectRatio:1
  },
  circle: {
    width: 70,
    height: 70,
    borderWidth: 10,
    borderColor: "white",
    borderRadius: 50,
    margin: 10,
  },
  cross: {
    width: 75,
    height: 75,
    backgroundColor: "red",
  },
  crossLine: {
    position: "absolute",
    left: 32.5,
    width: 10,
    height: 70,
    backgroundColor: "white",
    borderRadius: 5,
    transform: [
      {
        rotate: "45deg",
      },
    ],
  },
  crossLineReversed: {
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
});
