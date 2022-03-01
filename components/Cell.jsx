import { StyleSheet, Pressable, View } from "react-native";
import React from "react";

const Cell = (props) => {
  const { cell, pressOnTheGameMap } = props;
  return (
    <Pressable onPress={() => pressOnTheGameMap()} style={styles.cell}>
      {cell == "o" && <View style={styles.circle} />}
      {cell == "x" && (
        <View style={styles.cross}>
          <View style={styles.crossLine} />
          <View style={[styles.crossLine, styles.crossLineReversed]} />
        </View>
      )}
    </Pressable>
  );
};

export default Cell;

const styles = StyleSheet.create({
  cell: { flex: 1 },
  circle: {
    flex: 1,
    borderRadius: 50,
    borderWidth: 10,
    borderColor: "white",
    margin: 20,
  },
  cross: { flex: 1, margin: 20 },
  crossLine: {
    position: "absolute",
    left: "42%",
    width: 10,
    height: "100%",
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
