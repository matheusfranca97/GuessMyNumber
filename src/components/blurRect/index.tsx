import { BlurView } from "expo-blur";
import React from "react";
import { styles } from "./styles";
import { theme } from "@/themes";
import { View } from "react-native";

function BlurRect(props) {
  const width = props.width;
  const height = props.height;

  const { blurRectContainer, blueRectInsideContainer } = styles({
    width,
    height,
  });

  return (
    <BlurView
      intensity={60}
      style={[blurRectContainer, theme.globalStyles.shadow]}
      experimentalBlurMethod="dimezisBlurView"
    >
      <View style={blueRectInsideContainer}>{props.children}</View>
    </BlurView>
  );
}

export default BlurRect;
