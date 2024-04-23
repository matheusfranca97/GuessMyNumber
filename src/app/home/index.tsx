import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { theme } from "@/themes";
import BlurRect from "@/components/blurRect";
import MyButton from "@/components/button/MyButton";

function Home() {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.titleText}>Guess my Number</Text>
      <BlurRect height={"80%"} width={"100%"}>
        <View style={styles.topBlurRect}>
          <Text style={styles.blurRectHeaderText}>Enter a Number</Text>
          <TextInput
            keyboardType="numeric"
            textAlign="center"
            style={[styles.numberInput, theme.globalStyles.shadow]}
            maxLength={3}
          ></TextInput>
        </View>
        <View style={styles.bottomBlurRect}>
          <Text style={styles.tutorialText}>
            Your opponent will try to guess your number. Please inform whether
            it is higher or lower after each attempt
          </Text>
          <MyButton width={"100%"}>Start</MyButton>
        </View>
      </BlurRect>
    </View>
  );
}

export default Home;
