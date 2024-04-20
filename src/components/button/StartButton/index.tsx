import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { theme } from "@/themes";

function StartButton(props) {
  return (
    <View style={[styles.container, theme.globalStyles.shadow]}>
      <Pressable
        onPress={props.onPress}
        style={({ pressed }) =>
          pressed ? [styles.pressed, styles.innerButton] : styles.innerButton
        }
      >
        <Text style={styles.insideText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default StartButton;
