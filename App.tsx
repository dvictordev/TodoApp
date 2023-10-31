import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { Header } from "./src/components/Header";
import { HeaderInput } from "./src/components/HeaderInput";
import { Counter } from "./src/components/Counter";
import { useFonts } from "expo-font";
import { EmptyList } from "./src/components/EmptyList";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  let [fontsLoaded, fontError] = useFonts({
    InterBold: require("./src/assets/fonts/Inter-Bold.ttf"),
    Inter: require("./src/assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.form}>
        <HeaderInput />
        <Counter concluded={0} created={0} />
        <View style={styles.separator}></View>
        <FlatList
          ListEmptyComponent={<EmptyList />}
          data={todos}
          renderItem={() => <Text>teste</Text>}
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
