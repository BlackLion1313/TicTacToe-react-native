import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Cross from "./Cross";

const Cell = (props) => {
  const { cell, onPress } = props;
  return (
    <Pressable
      onPress={() => onPress()}
      style={styles.cell}
    >
      {cell === "o" && <View style={styles.circle} />}
      {cell === "x" && <Cross />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    width: 100,
    height: 100,
  },
  circle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 10,
    borderRadius: "50%",
    borderColor: "white",
    margin: 10,
  },
});

export default Cell;
