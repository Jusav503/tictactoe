import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, ImageBackground, Pressable, View } from "react-native";

import bg from "./assets/images/bg.jpeg";
import styles from "./style";

export default function App() {
  const [gameMap, setGameMap] = useState([
    ["", "", ""], //first row
    ["", "", ""], //second row
    ["", "", ""], //third row
  ]);
  const [currentTurn, setCurrentTurn] = useState("o");

  const onPress = (rowIndex, columnIndex) => {
    if (gameMap[rowIndex][columnIndex] !== "") {
      Alert.alert("Esta casilla está ocupada, bro");
      return;
    }
    setGameMap((existinggameMap) => {
      const updatedGameMap = [...existinggameMap];
      updatedGameMap[rowIndex][columnIndex] = currentTurn;
      return updatedGameMap;
    });

    setCurrentTurn(currentTurn == "o" ? "x" : "o");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={bg} style={styles.background} resizeMode="contain">
        <View style={styles.map}>
          {gameMap.map((row, rowIndex) => (
            <View style={styles.row}>
              {row.map((cell, columnIndex) => (
                <Pressable
                  onPress={() => onPress(rowIndex, columnIndex)}
                  style={styles.cell}
                >
                  {cell == "o" && <View style={styles.circle} />}
                  {cell == "x" && (
                    <View style={styles.cross}>
                      <View style={styles.crossLine} />
                      <View
                        style={[styles.crossLine, styles.crossLineReversed]}
                      />
                    </View>
                  )}
                </Pressable>
              ))}
            </View>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
}
