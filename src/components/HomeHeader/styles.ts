import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingBottom: 12,
        borderBottomColor: THEME.COLORS.BORDER,
        borderBottomWidth: 1,
    },

    userNameText: {
        fontFamily: THEME.FONT_FAMYLI.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT,
        marginStart: 12,
    },
});