import { StyleSheet } from "react-native"
import { colors } from "../../styles/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    panel: {
        flex: 1,
        margin: 20,
        borderRadius: 20,
        backgroundColor: colors.primaryLight
    },
    cima: {
        marginTop: 20
    }
})