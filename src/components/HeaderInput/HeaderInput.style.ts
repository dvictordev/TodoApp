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
    backgroundColor: "#4ea8de",
    borderRadius: 6,
    color: "#fff",
  },
  disabledButton: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a5273",
    borderRadius: 6,
    color: "#fff",
  },
});
