import { View, Text, TextInput } from "react-native";
import { BlurView } from "expo-blur";
import { styles } from "./styles";
import StartButton from "@/components/button/StartButton";
import { theme } from "@/themes";

function Home() {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.titleText}>Guess my Number</Text>
      <BlurView
        intensity={60}
        style={[styles.blurRect, theme.globalStyles.shadow]}
        experimentalBlurMethod="dimezisBlurView"
      >
        <View style={styles.blueRectInsideContainer}>
          <View style={styles.blueRectInsideContainerTop}>
            <Text style={styles.blurRectHeaderText}>Enter a Number</Text>
            <TextInput
              keyboardType="numeric"
              textAlign="center"
              style={[styles.numberInput, theme.globalStyles.shadow]}
              maxLength={3}
            ></TextInput>
          </View>
          <View style={styles.blueRectInsideContainerBottom}>
            <Text style={styles.tutorialText}>
              Your opponent will try to guess your number. Please inform whether
              it is higher or lower after each attempt
            </Text>
            <StartButton>Start</StartButton>
          </View>
        </View>
      </BlurView>
    </View>
  );
}

export default Home;
