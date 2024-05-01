import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import BlurRect from "@/components/blurRect";
import MyButton from "@/components/button/MyButton";
import MyModal from "@/components/modal/MyModal";
import { generateRandomNumber } from "./gameplayFunctions";
import { styles } from "./styles";
import { GuessDataItem } from "@/components/guessDataItem";

let minGuessedNumber = 1;
let maxGuessedNumber = 1000;

function Gameplay(props) {
  let initialGuessedNumber = generateRandomNumber(minGuessedNumber, maxGuessedNumber);
  const [supportText, setSupportText] = useState("Is your number higher or lower?");
  const [isGameOver, setIsGameOver] = useState(false);
  const [alertModalVisible, setAlertModalVisible] = useState(false);
  const [modalAlertText, setModalAlertText] = useState("");

  const [guessedNumber, setGuessedNumber] = useState(initialGuessedNumber);
  useEffect(() => {
    if (guessedNumber === props.numberPicked) {
      setSupportText("Your opponent found your number!");
      setIsGameOver(true);
    }
  }, [guessedNumber, props.numberPicked]);

  useEffect(() => {
    minGuessedNumber = 1;
    maxGuessedNumber = 100;
  }, []);

  function checkNumberInputHandler(playerInput) {
    if (playerInput == "lower" && guessedNumber > props.numberPicked) {
      maxGuessedNumber = guessedNumber;
    } else if (playerInput == "higher" && guessedNumber < props.numberPicked) {
      minGuessedNumber = guessedNumber;
    } else {
      setAlertModalVisible(true);
      setModalAlertText("Stop Lying! (remember your number is: " + props.numberPicked + ")");
      return;
    }

    var newGuessedNumber;
    newGuessedNumber = generateRandomNumber(minGuessedNumber, maxGuessedNumber);
    setGuessedNumber(newGuessedNumber);
  }

  function onGameOverHandler() {
    props.onGameOver();
  }

  return (
    <View style={styles.gameplayContainer}>
      <MyModal
        visible={alertModalVisible}
        mainText={modalAlertText}
        onClose={() => setAlertModalVisible(false)}
      ></MyModal>
      <Text style={styles.headerText}>Opponent Guess</Text>
      <BlurRect width={"80%"} height={300} insideMarginHorizontal={30}>
        <View style={styles.topRectContainer}>
          <Text style={styles.numberText}>{guessedNumber}</Text>
        </View>
        <View style={styles.bottomRectContainer}>
          <Text style={styles.guideText}>{supportText}</Text>
          {!isGameOver && (
            <View style={styles.buttonsContainer}>
              <MyButton width={"48%"} onPress={() => checkNumberInputHandler("lower")}>
                Lower
              </MyButton>
              <MyButton width={"48%"} onPress={() => checkNumberInputHandler("higher")}>
                Higher
              </MyButton>
            </View>
          )}
          {isGameOver && (
            <View style={styles.buttonsContainer}>
              <MyButton width={"100%"} onPress={onGameOverHandler}>
                Return
              </MyButton>
            </View>
          )}
        </View>
      </BlurRect>
      <GuessDataItem></GuessDataItem>
    </View>
  );
}

export default Gameplay;
