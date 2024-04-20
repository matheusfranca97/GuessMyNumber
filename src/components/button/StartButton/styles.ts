import { theme } from "@/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: theme.colors.vividMediumBlue,
    overflow: "hidden",
    //paddingVertical: 6,
  },
  insideText: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.white,
    textAlign: "center",
  },
  innerButton: {
    paddingVertical: 6,
  },

  pressed: {
    opacity: 0.75,
    backgroundColor: theme.colors.vividDarkBlue,
  },
});
