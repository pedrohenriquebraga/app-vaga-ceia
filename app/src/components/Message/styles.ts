import { StyleSheet } from "react-native";

export default StyleSheet.create({
    message_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
        borderBottomWidth: 1,
        borderColor: "#33333333",
        gap: 8,
    },
    message_text: {
        flex: 1,
        fontSize: 14,
    },
    category: {
        fontSize: 14,
        fontWeight: "600",
        minWidth: 80,
        textAlign: "center",
    },
    confidence: {
        fontSize: 14,
        fontWeight: "600",
        minWidth: 50,
        textAlign: "right",
    }
})