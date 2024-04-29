import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Loading } from "@/components/loading";
import KeyboardHandler from "@/components/keyboardHandler";

import Gameplay from "@/app/gameplay";
import Home from "@/app/home";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  if (!fontsLoaded) {
    return <Loading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <Home onPickNumber={pickedNumberHandler} />;

  if (!gameIsOver && userNumber) {
    screen = (
      <Gameplay numberPicked={userNumber} onGameOver={gameOverHandler} />
    );
    //setGameIsOver(false);
  }

  if (gameIsOver) {
    screen = <Home onPickNumber={pickedNumberHandler} />;
  }

  return (
    <KeyboardHandler>
      <View style={styles.container}>
        <StatusBar style="light" />
        <ImageBackground
          style={styles.backgroundImage}
          source={require("./assets/images/background.png")}
          resizeMode="cover"
        ></ImageBackground>
        {screen}
      </View>
    </KeyboardHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    ...StyleSheet.absoluteFillObject,
  },
});
