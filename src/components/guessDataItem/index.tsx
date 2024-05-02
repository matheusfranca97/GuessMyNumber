import { View, Text } from "react-native";
import BlurRect from "../blurRect";
import { styles } from "./styles";

export function GuessDataItem({ guessCount, guessNumber }) {
  return (
    <View style={styles.guessDataContainer}>
      <BlurRect width={"80%"} height={40} customStyle={styles.blurRectCustomStyle}>
        <View style={styles.textContainer}>
          <Text style={styles.leftText}>#{guessCount}</Text>
          <Text style={styles.rightText}>Opponent guess: {guessNumber}</Text>
        </View>
      </BlurRect>
    </View>
  );
}
