import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  presentation_container: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  messages_wrapper: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#0088ff",
    borderRadius: 5,
    marginBottom: 20,
    overflow: "hidden",
  },
  scroll_view: {
    flex: 1,
  },
  message_container: {
    paddingBottom: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    paddingHorizontal: 20,
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
