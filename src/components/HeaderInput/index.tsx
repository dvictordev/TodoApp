import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { headerInputStyles } from "./HeaderInput.style";
import { useState } from "react";

interface HeaderInputProps {
  addTodo: (task: string) => void;
}

export function HeaderInput({ addTodo }: HeaderInputProps) {
  const [todo, setTodo] = useState<string>("");

  return (
    <View style={headerInputStyles.container}>
      <TextInput
        style={headerInputStyles.input}
        placeholder="Adicione uma nova tarefa"
        value={todo}
        placeholderTextColor={"#808080"}
        onChange={(e) => setTodo(e.nativeEvent.text)}
      />
      <TouchableOpacity
        activeOpacity={0.6}
        style={
          todo === ""
            ? headerInputStyles.disabledButton
            : headerInputStyles.button
        }
        disabled={todo === ""}
        onPress={() => {
          addTodo(todo);
          setTodo("");
        }}
      >
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
}
