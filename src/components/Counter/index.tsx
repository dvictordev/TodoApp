import { Text, View } from "react-native";
import { counterStyles } from "./Counter.styles";

interface CounterProps {
  created: number;
  concluded: number;
}
export function Counter({ created, concluded }: CounterProps) {
  return (
    <View style={counterStyles.container}>
      <View style={counterStyles.titles}>
        <Text style={counterStyles.createdStyle}>Criadas</Text>
        <Text style={counterStyles.counter}>{created}</Text>
      </View>
      <View style={counterStyles.titles}>
        <Text style={counterStyles.concludedStyle}>Concluídas</Text>
        <Text style={counterStyles.counter}>{concluded}</Text>
      </View>
    </View>
  );
}
