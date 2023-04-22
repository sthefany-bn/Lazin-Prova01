import { Text, View} from "react-native"
import { styles } from "./styles"
import { Marker } from "../Marker"
export interface ITextMarker {
    textMarker: string
}

export function ListMarker({textMarker}:ITextMarker) {
    return (
        <View style={styles.listMarker}>
            <Marker />
            <Text style={styles.textMarker}>{textMarker}</Text>
        </View>
    )
}