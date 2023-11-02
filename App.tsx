import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { Header } from "./src/components/Header";
import { HeaderInput } from "./src/components/HeaderInput";
import { Counter } from "./src/components/Counter";
import { useFonts } from "expo-font";
import { EmptyList } from "./src/components/EmptyList";
import { useState } from "react";
import { Todo } from "./src/components/Todo";

export default function App() {
  const [todos, setTodos] = useState<any>(["1"]);
  const [concludedQtd, setConcludedQtd] = useState<number>(0);
  const [createqtd, setCreateQtd] = useState<number>(0);

  let [fontsLoaded, fontError] = useFonts({
    InterBold: require("./src/assets/fonts/Inter-Bold.ttf"),
    Inter: require("./src/assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const addTodo = (task: string) => {
    setTodos([...todos, { task, completed: false }]);
    setCreateQtd(todos.length + 1);
  };

  const removeTodo = (task: string) => {
    setTodos(todos.filter((todo: any) => todo.task !== task));
    setCreateQtd(todos.length - 1);
    const concludedQtd = todos
      .filter((todo: any) => todo.task !== task)
      .filter((todo: any) => todo.concluded).length;
    setConcludedQtd(concludedQtd);
  };

  const concludeTask = (task: string) => {
    setTodos(
      todos.map((todo: any) => {
        if (todo.task === task) {
          todo.concluded = !todo.concluded;
          todo.concluded
            ? setConcludedQtd(concludedQtd + 1)
            : setConcludedQtd(concludedQtd - 1);
        }
        return todo;
      })
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.form}>
        <HeaderInput addTodo={addTodo} />
        <Counter concluded={concludedQtd} created={createqtd} />
        <View style={styles.separator}></View>
        <FlatList
          ListEmptyComponent={<EmptyList />}
          data={todos}
          renderItem={({ item }) => (
            <Todo
              onConclude={() => concludeTask(item.task)}
              task={item.task}
              concluded={item.concluded}
              remove={() => removeTodo(item.task)}
            />
          )}
        />
      </View>
      <StatusBar style="light" translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    backgroundColor: "#1a1a1a",
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#262626",
    marginTop: 30,
  },
});
