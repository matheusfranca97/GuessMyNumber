import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import { useState } from "react";

import BlurRect from "@/components/blurRect";
import MyButton from "@/components/button/MyButton";
import MyModal from "@/components/modal/MyModal";
import { styles } from "./styles";

function Home(props) {
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

    props.onPickNumber(numberInt);
  }

  return (
    <KeyboardAvoidingView style={styles.homeContainer} behavior="padding">
      <MyModal
        visible={alertModalVisible}
        mainText={modalAlertText}
        onClose={() => setAlertModalVisible(false)}
      ></MyModal>
      <Text style={styles.titleText}>Guess my Number</Text>
      <BlurRect height={450} width={"100%"} insideMarginHorizontal={30}>
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
            Your opponent will try to guess your number. Please inform whether it is higher or lower
            after each attempt
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
