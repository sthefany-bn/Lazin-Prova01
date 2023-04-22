import { Text, View, Image, ImageSourcePropType} from "react-native"
import { styles } from "./styles"
export interface IText {
    text: string
    img: ImageSourcePropType
}

export function ListImage({text, img}:IText) {
    return (
        <View style={styles.list}>
            <Image source={img} />
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}