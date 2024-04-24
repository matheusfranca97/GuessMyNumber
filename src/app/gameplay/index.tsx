//rnf
import { View, Text } from "react-native";
import React from "react";
import BlurRect from "@/components/blurRect";
import { styles } from "./styles";
import MyButton from "@/components/button/MyButton";

function Gameplay() {
  return (
    <View style={styles.gameplayContainer}>
      <Text style={styles.headerText}>Opponent Guess</Text>
      <BlurRect width={"80%"} height={300}>
        <View style={styles.topRectContainer}>
          <Text style={styles.numberText}>30</Text>
        </View>
        <View style={styles.bottomRectContainer}>
          <Text style={styles.guideText}>Is your number higher or lower?</Text>
          <View style={styles.buttonsContainer}>
            <MyButton width={"48%"}>Lower</MyButton>
            <MyButton width={"48%"}>Higher</MyButton>
          </View>
        </View>
      </BlurRect>
    </View>
  );
}

export default Gameplay;
