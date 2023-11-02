import { StyleSheet } from "react-native";

export const TodoStyle = StyleSheet.create({
  todo: {
    width: "100%",

    backgroundColor: "#262626",
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 12,
    marginTop: 12,
    gap: 6,
  },
  checkbox: {
    /* borderRadius: 999,
    borderColor: "#4ea8de", */
  },
  description: {
    color: "#f2f2f2",
    fontSize: 16,
    fontFamily: "Inter",
    flex: 1,
  },
  buttonText: {
    color: "#808080",
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#4ea8de",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "#5e60ce",
  },
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: "bold",
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
  },
});
