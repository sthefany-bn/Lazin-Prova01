import { ImageBackground, View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { ComponetListMarker, ComponetPageTitulo, ComponetPanelTitulo } from "../../components";
import { IPage } from "../../../App";

export function Pagina1({setPageI, pageNumber}:IPage) {
    const fundo = require("../../assets/fundo.png")
    const pagina1Texto = [
        {id: '1', text: 'Crie sua playlist'},
        {id: '2', text: 'Escolha suas bandas preferidas'},
        {id: '3', text: 'Utiliza IA para sugerir novas músicas'},
    ]
    return (
        <ImageBackground source={fundo} style={styles.container}>
            <ComponetPageTitulo setPageI={setPageI} pageNumber={pageNumber}/>
            <View style={styles.panel}>
                <ComponetPanelTitulo titulo="Aplicativo para ouvir sua música preferida"/>
                <FlatList 
                    data={pagina1Texto}
                    renderItem={({ item }) =>
                        <ComponetListMarker key={item.id} textMarker={item.text} />
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
        </ImageBackground>
    )
}