import { StyleSheet } from "react-native";

export const headerInputStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
    marginTop: -30,
  },
  input: {
    backgroundColor: "#262626",
    flex: 1,
    height: 54,
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    color: "#fff",
  },
  button: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e6f9f",
    borderRadius: 6,
    color: "#fff",
  },
});
