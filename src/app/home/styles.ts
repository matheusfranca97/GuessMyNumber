import { theme } from "@/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 25,
  },
  blurRect: {
    width: "100%",
    height: "85%",
    borderRadius: 10,
    overflow: "hidden",
  },

  blueRectInsideContainer: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 30,
    flexDirection: "column",
    justifyContent: "space-around",
  },

  blueRectInsideContainerTop: {
    alignItems: "center",
  },

  blueRectInsideContainerBottom: {},

  blurRectHeaderText: {
    color: "white",
    fontFamily: theme.fonts.bold,
    fontSize: 30,
  },
  titleText: {
    fontFamily: theme.fonts.medium,
    color: "white",
    fontSize: 20,
  },
  numberInput: {
    alignSelf: "center",
    width: "20%",
    backgroundColor: "white",
    borderRadius: 10,
    fontFamily: theme.fonts.regular,
  },
  tutorialText: {
    color: "white",
    fontSize: 15,
    fontFamily: theme.fonts.regular,
    alignSelf: "center",
    paddingVertical: 30,
  },
});
