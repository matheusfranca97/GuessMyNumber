import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { theme } from "@/themes";

function MyButton(props) {
  const width = props.width;

  const { container, pressedStyle, innerButton, insideText } = styles({
    width,
  });

  return (
    <View style={[container, theme.globalStyles.shadow]}>
      <Pressable
        onPress={props.onPress}
        style={({ pressed }) =>
          pressed ? [pressedStyle, innerButton] : innerButton
        }
      >
        <Text style={insideText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default MyButton;
