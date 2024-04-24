import { View, Text, Button } from "react-native";
import Modal from "react-native-modal";
import { styles } from "./styles";

const MyModal = ({ visible, onClose, mainText }) => {
  return (
    <Modal
      style={styles.myModalContainer}
      isVisible={visible}
      onBackdropPress={() => onClose}
      backdropOpacity={0.45}
      animationIn={"swing"}
      animationOut={"slideOutDown"}
    >
      <View style={styles.modalBox}>
        <Text style={styles.boxMainText}>{mainText}</Text>
        <Button title="OK!" onPress={onClose}></Button>
      </View>
    </Modal>
  );
};

export default MyModal;
