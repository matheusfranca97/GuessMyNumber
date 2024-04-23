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
    justifyContent: "center",
  },

  headerText: {
    fontFamily: theme.fonts.medium,
    fontSize: 20,
    color: "white",
  },
  numberText: {
    alignSelf: "center",
    fontFamily: theme.fonts.bold,
    fontSize: 30,
    color: "white",
  },

  bottomRectContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  guideText: {
    alignSelf: "center",
    fontFamily: theme.fonts.regular,
    fontSize: 20,
    color: "white",
  },
  buttonsContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
