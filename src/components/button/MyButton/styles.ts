import { theme } from "@/themes";
import { StyleSheet } from "react-native";

export const styles = (props) =>
  StyleSheet.create({
    container: {
      width: props.width,
      borderRadius: 10,
      backgroundColor: theme.colors.vividMediumBlue,
      overflow: "hidden",
    },
    insideText: {
      fontFamily: theme.fonts.medium,
      color: theme.colors.white,
      textAlign: "center",
    },
    innerButton: {
      paddingVertical: 6,
    },

    pressedStyle: {
      opacity: 0.75,
      backgroundColor: theme.colors.vividDarkBlue,
    },
  });
