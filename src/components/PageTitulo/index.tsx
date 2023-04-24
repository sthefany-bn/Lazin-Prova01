import { Text, TouchableOpacity, View, Image} from "react-native"
import { styles } from "./styles"
import { IPage } from "../../../App"
import { AntDesign } from '@expo/vector-icons';

export function PageTitulo({setPageI, pageNumber}:IPage) {
    return (
        <View style={styles.container}>
            {pageNumber == 1 ? (
                <>
                    <TouchableOpacity onPress={() => setPageI(pageNumber)}>
                        <AntDesign name="leftcircle" size={40} color={"white"}/>
                    </TouchableOpacity>
                    <Text style={styles.text}>Chip</Text>
                    <Image source={require('../../assets/logo.png')} style={styles.img} />
                </>
            ) : (
                <>
                    <Image source={require('../../assets/logo.png')} style={styles.img} />
                    <Text style={styles.text}>Chip</Text>
                    <TouchableOpacity onPress={() => setPageI(pageNumber)}>
                        <AntDesign name="rightcircle" size={40} color={"white"}/>
                    </TouchableOpacity>
                </>
            )}
            
        </View>
    )
}