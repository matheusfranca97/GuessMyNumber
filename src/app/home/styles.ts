import { theme } from "@/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 25,
  },
  titleText: {
    fontFamily: theme.fonts.medium,
    color: "white",
    fontSize: 20,
  },

  topBlurRect: { flex: 1, alignItems: "center", justifyContent: "center" },
  blurRectHeaderText: {
    color: "white",
    fontFamily: theme.fonts.bold,
    fontSize: 30,
  },
  numberInput: {
    width: "30%",
    backgroundColor: "white",
    borderRadius: 10,
    fontFamily: theme.fonts.regular,
  },

  bottomBlurRect: { flex: 1, alignItems: "center", justifyContent: "center" },

  tutorialText: {
    color: "white",
    fontSize: 15,
    fontFamily: theme.fonts.regular,
    paddingVertical: 20,
  },
});
