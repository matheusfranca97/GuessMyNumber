import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Loading } from "@/components/loading";
import Home from "@/app/home";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import Gameplay from "@/app/gameplay";

const KeyboardHandler = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
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
        <Home />
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
