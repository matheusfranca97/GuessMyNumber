import { theme } from "@/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  gameplayContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  blurRectContainer: {
    marginTop: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  flatListContainer: {
    flex: 1,
    width: "100%",
    //position: "absolute",
  },

  headerText: {
    fontFamily: theme.fonts.medium,
    fontSize: 20,
    color: "white",
  },

  topRectContainer: {
    flex: 1,
    flexDirection: "column",
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
