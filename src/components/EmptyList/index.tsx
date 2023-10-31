import { Image, Text, View } from "react-native";
import { emptyListStyle } from "./EmptyList.style";

export function EmptyList() {
  return (
    <View style={emptyListStyle.container}>
      <Image source={require("../../assets/Clipboard.png")} />
      <Text style={emptyListStyle.boldTitle}>
        Voce ainda não tem tarefas cadastradas
      </Text>
      <Text style={emptyListStyle.subtitle}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
