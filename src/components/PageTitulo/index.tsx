import { Text, TouchableOpacity, View} from "react-native"
import { styles } from "./styles"
import { IPage } from "../../../App"

export function PageTitulo({setPageI, pageNumber}:IPage) {
    return (
        <View style={styles.container}>
            {pageNumber == 1 ? (
                <>
                    <TouchableOpacity onPress={() => setPageI(pageNumber)}>
                        <Text style={styles.text}>{'<<'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>Solta o SOM</Text>
                </>
            ) : (
                <>
                    <Text style={styles.text}>Solta o SOM</Text>
                    <TouchableOpacity onPress={() => setPageI(pageNumber)}>
                        <Text style={styles.text}>{'>>'}</Text>
                    </TouchableOpacity>
                </>
            )}
            
        </View>
    )
}