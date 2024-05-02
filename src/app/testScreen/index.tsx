import React from "react";
import { View, Text, StyleSheet } from "react-native";

function TestScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.square}></View>
      <View style={styles.textContainer}>
        {[...Array(100)].map((_, index) => (
          <Text key={index} style={styles.text}>
            {index + 1}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    marginBottom: 20,
    position: "absolute",
    top: "50%",
    marginTop: -50, // Metade da altura do quadrado para centralizá-lo
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 100, // Espaçamento para os textos
  },
  text: {
    margin: 5,
    fontSize: 16,
  },
});

export default TestScreen;
