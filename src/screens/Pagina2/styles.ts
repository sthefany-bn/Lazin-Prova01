import { StyleSheet } from "react-native"
import { colors } from "../../styles/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    panel: {
        flex: 1,
        margin: 20,
        borderRadius: 20,
        backgroundColor: colors.secondaryLight,
        alignItems: "center"
    }
})