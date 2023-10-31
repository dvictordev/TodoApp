import { StyleSheet } from "react-native";

export const counterStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 30,
  },
  titles: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  createdStyle: {
    color: "#4ea8de",
    fontFamily: "InterBold",
  },
  concludedStyle: {
    color: "#8284fa",
    fontFamily: "InterBold",
  },
  counter: {
    backgroundColor: "#333333",
    color: "#fff",
    width: 25,
    height: 19,
    textAlign: "center",
    alignItems: "center",
    borderRadius: 999,
  },
});
