import { StyleSheet } from "react-native";

export const styles = (props) =>
  StyleSheet.create({
    blurRectContainer: {
      //flex: 1,
      width: props.width,
      height: props.height,
      borderRadius: 10,
      overflow: "hidden",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },
    blueRectInsideContainer: {
      //marginTop: 40,
      marginHorizontal: props.insideMarginHorizontal,
    },
  });
