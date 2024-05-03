import { theme } from "@/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },

  homeContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
  },
  titleText: {
    fontFamily: theme.fonts.medium,
    color: "white",
    fontSize: 20,
  },

  topBlurRect: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  blurRectHeaderText: {
    color: "white",
    fontFamily: theme.fonts.bold,
    fontSize: 50,
    textAlign: "center",
  },
  numberInput: {
    width: 70,
    height: 45,
    borderBottomWidth: 2,
    borderColor: "white",
    color: "white",
    fontFamily: theme.fonts.regular,
    textAlign: "center",
    fontSize: 25,
  },

  bottomBlurRect: { flex: 1, alignItems: "center", justifyContent: "center" },

  tutorialText: {
    color: "white",
    fontSize: 15,
    fontFamily: theme.fonts.regular,
    paddingVertical: 20,
    textAlign: "center",
  },
});
