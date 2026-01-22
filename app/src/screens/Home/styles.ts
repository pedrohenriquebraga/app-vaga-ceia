import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 12,
  },
  message_container: {
    height: 500,
    borderWidth: 1,
    marginVertical: 20,
    borderColor: "#0088ff",
    borderRadius: 5,
  },
  presentation_container: {
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
  },
  input_container: {
    flexDirection: "row",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    flex: 1,
    borderColor: "#33333333",
  },
  send_button: {
    backgroundColor: "#0088ff",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    borderTopEndRadius: 8,
    borderBottomEndRadius: 8,
  },
});
