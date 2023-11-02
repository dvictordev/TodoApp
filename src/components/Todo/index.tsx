import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { TodoStyle } from "./Todo.style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";

interface TodoProps {
  task: string;
  concluded: boolean;
  remove: () => void;
  onConclude: () => void;
}

function MyCheckbox({ onChange, checked }: any) {
  return (
    <Pressable
      style={[TodoStyle.checkboxBase, checked && TodoStyle.checkboxChecked]}
      onPress={onChange}
    >
      {checked && <FontAwesome name="check" size={12} color="white" />}
    </Pressable>
  );
}

export function Todo({ concluded, remove, task, onConclude }: TodoProps) {
  const [checked, setChecked] = useState<boolean>(concluded);
  return (
    <View style={TodoStyle.todo}>
      <MyCheckbox
        onChange={() => {
          setChecked(!checked);
          onConclude();
        }}
        checked={checked}
      />
      <Text style={TodoStyle.description}>{task}</Text>
      <TouchableOpacity onPress={remove}>
        <FontAwesome name="trash-o" color={"#808080"} size={24} />
      </TouchableOpacity>
    </View>
  );
}
