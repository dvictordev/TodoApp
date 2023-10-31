import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { headerInputStyles } from "./HeaderInput.style";

export function HeaderInput() {
  return (
    <View style={headerInputStyles.container}>
      <TextInput
        style={headerInputStyles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={"#808080"}
      />
      <TouchableOpacity activeOpacity={0.6} style={headerInputStyles.button}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
}
