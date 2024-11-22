import React from "react";
import { View, StyleSheet } from "react-native";

const Cross = () => {
  return (
    <View style={styles.cross}>
      <View style={styles.crossLine} />
      <View style={[styles.crossLine, styles.crossLineReversed]} />
    </View>
  );
};

const styles = StyleSheet.create({
  cross: {
    flex: 1,
  },
  crossLine: {
    position: "absolute",
    left: "35%",
    width: 10,
    height: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    margin: 8,
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

export default Cross;
