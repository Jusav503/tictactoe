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

    const winner = getWinner();
    if(winner){
      gameWon(winner);
    }else{
      checkTieState();
    }
  };

  const getWinner = () => {
    //Row result
    for (let i = 0; i < 3; i++) {
      const isRowOWinning = gameMap[i].every((cell) => cell == "o");
      const isRowXWinning = gameMap[i].every((cell) => cell == "x");
      if (isRowOWinning) {
        return "o";
      }
      if (isRowXWinning) {
        return "x";
      }
    }
    //End Row result

    //Column result
    for (let col = 0; col < 3; col++) {
      let isColumnOWinner = true;
      let isColumnXWinner = true;

      for (let row = 0; row < 3; row++) {
        if (gameMap[row][col] !== "o") {
          isColumnOWinner = false;
        }
        if (gameMap[row][col] !== "x") {
          isColumnXWinner = false;
        }
      }
      if (isColumnOWinner) {
        return "o";
      }
      if (isColumnXWinner) {
        return "x";
      }
    }
    //End column result

    // Diagonal result
    let isDiagonal1oWinnning = true;
    let isDiagonal1xWinnning = true;
    let isDiagonal2oWinnning = true;
    let isDiagonal2xWinnning = true;

    for (let i = 0; i < 3; i++) {
      if (gameMap[i][i] !== "o") {
        isDiagonal1oWinnning = false;
      }
      if (gameMap[i][i] !== "x") {
        isDiagonal1xWinnning = false;
      }

      if (gameMap[i][2 - i] !== "o") {
        isDiagonal2oWinnning = false;
      }
      if (gameMap[i][2 - i] !== "x") {
        isDiagonal2xWinnning = false;
      }
    }
    if (isDiagonal1oWinnning || isDiagonal2oWinnning) {
      return "o";
    }
    if (isDiagonal1xWinnning || isDiagonal2xWinnning) {
      return "x";
    }
    //End diagonal result
  };
  const resetGame = () => {
    setGameMap([
      ["", "", ""], //first row
      ["", "", ""], //second row
      ["", "", ""], //third row
    ]);
    setCurrentTurn("o");
  };
  const checkTieState = () => {
    if(!gameMap.some((row) => row.some((cell) => cell == ""))){
      Alert.alert('Tie?',"Ok, let's do it again", [
        {
          text: "REMATCH",
          onPress: resetGame
        },
      ]);  
    }
  }
  const gameWon = (player) => {
    Alert.alert(`'${player}' winner`,'Rematch?', [
      {
        text: "REMATCH",
        onPress: resetGame
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={bg} style={styles.background} resizeMode="contain">
        <View style={styles.map}>
          {gameMap.map((row, rowIndex) => (
            <View key={`row-${rowIndex}`} style={styles.row}>
              {row.map((cell, columnIndex) => (
                <Pressable
                  key={`row-${rowIndex}-col-${columnIndex}`}
                  onPress={() => onPress(rowIndex, columnIndex)}
                  style={styles.cell}
                >
                  {cell == "o" && <View style={styles.circle} />}
                  {cell == "x" && (
                    <View style={styles.cross}>
                      <View style={styles.crossLine} />
                      <View style={[styles.crossLine, styles.crossLineReversed]} />
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
