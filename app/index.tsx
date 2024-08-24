import ListItem from "@/components/ListItem";
import TodoModalForm from "@/components/TodoModalForm";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#ffffff",
    flex: 1,
    gap: 12,
  },
  fab: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    position: "absolute",
    bottom: 20,
    right: 20,
    height: 60,
    backgroundColor: "#482069",
    borderRadius: 100,
  },
  fabText: {
    color: "white",
  },
});

type ToDoProps = {
  title: string;
  description?: string;
  done: boolean;
  id: number;
};

const Home = () => {
  const [todoList, setTodoList] = useState<ToDoProps[]>([]);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const createTodo = (title: string, description?: string) => {
    const newTodoListArray = [
      ...todoList,
      { title, description, done: false, id: new Date().getTime() },
    ];
    setTodoList(newTodoListArray);
  };

  const markAsDone = (todo: ToDoProps) => {
    const newTodoListArray = todoList.map((td) => {
      if (td.id === todo.id) {
        return { ...td, done: !td.done };
      }
      return td;
    });
    setTodoList(newTodoListArray);
  };

  const deleteTodo = (todo: ToDoProps) => {
    const newTodoListArray = todoList.filter((td) => td.id !== todo.id);
    setTodoList(newTodoListArray);
  };

  return (
    <View style={styles.container}>
      {todoList.map((todo) => (
        <ListItem
          key={todo.id}
          title={todo.title}
          description={todo.description}
          done={todo.done}
          onPress={() => markAsDone(todo)}
          onPressdelete={() => deleteTodo(todo)}
        />
      ))}
      <TouchableOpacity style={styles.fab} onPress={() => setDialogOpen(true)}>
        <AntDesign name="plus" size={32} color="white" />
      </TouchableOpacity>
      <TodoModalForm
        visible={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSave={createTodo}
      />
    </View>
  );
};

export default Home;
