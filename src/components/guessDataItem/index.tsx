import { View, Text } from "react-native";
import BlurRect from "../blurRect";
import { styles } from "./styles";

export function GuessDataItem(props) {
  return (
    <BlurRect width={"80%"} height={40} customStyle={styles.guessDataContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.leftText}>#{props.guessCount}</Text>
        <Text style={styles.rightText}>Opponent guess: {props.guessNumber}</Text>
      </View>
    </BlurRect>
  );
}
