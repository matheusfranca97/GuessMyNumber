import { theme } from "@/themes";
import { StyleSheet, Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  gameplayContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  blurRectContainer: {
    //backgroundColor: "green",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  flatListContainer: {
    flex: 1,
    marginTop: deviceHeight <= 720 ? 60 : 0,
    width: "100%",
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
