import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ImageBackground, View } from "react-native";

import bg from "./assets/images/bg.jpeg";
import styles from "./style";

export default function App() {
  const [gameMap, setGameMap] = useState([
    ["o", "", "o"], //first row
    ["", "x", "x"], //second row
    ["x", "", "o"], //third row
  ]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={bg} style={styles.background} resizeMode="contain">
        <View style={styles.map}>
          {gameMap.map((row) => (
            <View style={styles.row}>
              {row.map((cell) => (
                <View style={styles.cell}>
                  {cell == "o" && <View style={styles.circle} />}
                  {cell == "x" && (
                    <View style={styles.cross}>
                      <View style={styles.crossLine} />
                      <View
                        style={[styles.crossLine, styles.crossLineReversed]}
                      />
                    </View>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
}
