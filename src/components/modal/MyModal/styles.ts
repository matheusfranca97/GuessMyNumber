import { theme } from "@/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  myModalContainer: {
    justifyContent: "center",
    alignItems: "center",
    //margin: 0,
    color: "blue",
  },
  modalBox: {
    paddingHorizontal: 50,
    width: 250,
    height: 150,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  boxMainText: {
    fontFamily: theme.fonts.regular,
    fontSize: 15,
    textAlign: "center",
  },
});
