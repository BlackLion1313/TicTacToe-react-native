import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import bg from "./assets/bg.jpeg";
import { useState } from "react";
export default function App() {
  const [map, setMap] = useState([
    ["o", "o", "o"],
    ["x", "o", "x"],
    ["o", "x", "o"],
  ]);
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg} resizeMode="contain">
        <View style={styles.ticTacToeMap}>
          {map.map((row) => {
            return (
              <View style={styles.row}>
                {row.map((cell) => {
                  return (
                    <View style={styles.cell}>
                      {cell === "o" && <View style={styles.circle} />}
                      {cell === "x" && (
                        <View style={styles.cross}>
                          <View style={styles.crossLine} />
                          <View
                            style={[styles.crossLine, styles.crossLineReversed]}
                          />
                        </View>
                      )}
                    </View>
                  );
                })}
              </View>
            );
          })}
    
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242D34",
    alignItems: "center",
    justifyContent: "center",
  },
  bg: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  ticTacToeMap: {
    borderWidth: 1,
    borderColor: "white",
    width: "80%",
    aspectRatio: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    borderColor: "white",
    width: 100,
    height: 100,
    borderWidth: 1,
  },

  circle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 10,
    borderColor: "white",
    margin: 15,
  },
  cross: {
   flex: 1,
  },
  crossLine: {
    position: "absolute",
    left: "45%",
    width: 10,
    height: "100%",
    backgroundColor: "white",
    transform: [{ rotate: "45deg" }],
    borderRadius: 5,
  },
  crossLineReversed: {
    transform: [{ rotate: "-45deg" }],
  },
});
