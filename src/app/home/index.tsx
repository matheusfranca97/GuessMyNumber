import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import BlurRect from "@/components/blurRect";
import MyButton from "@/components/button/MyButton";
import { useState } from "react";
import MyModal from "@/components/modal/MyModal";

function Home() {
  const [gameNumber, setGameNumber] = useState("");

  const [alertModalVisible, setAlertModalVisible] = useState(false);
  const [modalAlertText, setModalAlertText] = useState("");

  function numberInputHandler(inputText) {
    setGameNumber(inputText);
  }
  function confirmButtonHandler() {
    numberChecker(gameNumber);
  }

  function numberChecker(numberString) {
    var numberInt = parseInt(numberString);
    if (numberString == "" || isNaN(numberString) || isNaN(numberInt)) {
      setModalAlertText("You must enter a valid number");
      setAlertModalVisible(true);
      return;
    }

    if (numberInt < 1) {
      setModalAlertText("Your number must be bigger than 0");
      setAlertModalVisible(true);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.homeContainer} behavior="padding">
      <MyModal
        visible={alertModalVisible}
        mainText={modalAlertText}
        onClose={() => setAlertModalVisible(false)}
      ></MyModal>
      <Text style={styles.titleText}>Guess my Number</Text>
      <BlurRect height={450} width={"100%"}>
        <View style={styles.topBlurRect}>
          <Text style={styles.blurRectHeaderText}>Enter a Number</Text>
          <TextInput
            keyboardType="numeric"
            textAlign="center"
            style={styles.numberInput}
            maxLength={3}
            value={gameNumber}
            onChangeText={numberInputHandler}
          ></TextInput>
        </View>
        <View style={styles.bottomBlurRect}>
          <Text style={styles.tutorialText}>
            Your opponent will try to guess your number. Please inform whether
            it is higher or lower after each attempt
          </Text>
          <MyButton width={"100%"} onPress={confirmButtonHandler}>
            Start
          </MyButton>
        </View>
      </BlurRect>
    </KeyboardAvoidingView>
  );
}

export default Home;
