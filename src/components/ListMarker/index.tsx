import { Text, View} from "react-native"
import { styles } from "./styles"
import { Marker } from "../Marker"
export interface ITextMarker {
    textMarkerTitle: string
    textMarker: string
}

export function ListMarker({textMarkerTitle, textMarker}:ITextMarker) {
    return (
        <View style={styles.org}>
            <View style={styles.listMarker}>
                <Marker />
            </View>
            <Text style={styles.text}>
                <Text style={styles.title}>{textMarkerTitle}: </Text>
                <Text style={styles.text}>{textMarker}</Text>
            </Text>
        </View>
    )
}