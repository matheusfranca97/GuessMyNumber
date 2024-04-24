import { theme } from "@/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  gameplayContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
  },

  topRectContainer: {
    flex: 1,
    flexDirection: "column",
  },

  headerText: {
    fontFamily: theme.fonts.medium,
    fontSize: 20,
    color: "white",
  },
  numberText: {
    fontFamily: theme.fonts.bold,
    fontSize: 100,
    color: "white",
    textAlign: "center",
  },

  bottomRectContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  guideText: {
    fontFamily: theme.fonts.regular,
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  buttonsContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
