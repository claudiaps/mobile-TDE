import { useState } from "react";
import {
  Button,
  Modal,
  Pressable,
  Text,
  View,
  StyleSheet,
  TextInput,
} from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 16,
  },
  input: {
    width: 300,
    height: 48,
    borderRadius: 8,
    borderColor: "#bdbdbd",
    borderWidth: 1,
    padding: 8,
  },
  createButtonText: {
    color: "#ffffff",
    fontSize: 18,
  },
  createButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: "#482069",
  },
  title: {
    fontSize: 18,
    color: "#482069",
  },
});

type TodoModalFormProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (title: string, description?: string) => void;
};

const TodoModalForm = ({ visible, onClose, onSave }: TodoModalFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const createTodo = () => {
    onSave(title, description);
    setTitle("");
    setDescription("");
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      onDismiss={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Criar tarefa</Text>
          <TextInput
            onChangeText={setTitle}
            value={title}
            style={styles.input}
            placeholder="Título:"
          />
          <TextInput
            onChangeText={setDescription}
            value={description}
            style={styles.input}
            placeholder="Descrição:"
          />
          <Pressable onPress={createTodo}>
            <View style={styles.createButtonContainer}>
              <Text style={styles.createButtonText}>Criar</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default TodoModalForm;
