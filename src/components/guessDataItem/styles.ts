import { theme } from "@/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  guessDataContainer: {
    alignItems: "center",
  },

  blurRectCustomStyle: {
    alignItems: "stretch",
    marginVertical: 5,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  leftText: {
    fontFamily: theme.fonts.regular,
    fontSize: 15,
    color: "white",
  },
  rightText: {
    fontFamily: theme.fonts.regular,
    fontSize: 15,
    color: "white",
  },
});
