import { Keyboard, TouchableWithoutFeedback } from "react-native";

const KeyboardHandler = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default KeyboardHandler;
