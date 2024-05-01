import { theme } from "@/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  guessDataContainer: {
    alignItems: "stretch",
    marginVertical: 10,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    //alignItems: "stretch",
    paddingHorizontal: 20,
  },
  leftText: {
    //flex: 1,
    fontFamily: theme.fonts.regular,
    fontSize: 15,
    color: "white",
    //textAlign: "left",
  },
  rightText: {
    //flex: 1,
    //alignSelf: "flex-end",
    fontFamily: theme.fonts.regular,
    fontSize: 15,
    color: "white",
    //textAlign: "right",
  },
});
