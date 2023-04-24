import { ImageBackground, View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { ComponetListMarker, ComponetPageTitulo, ComponetPanelTitulo } from "../../components";
import { IPage } from "../../../App";

export function Pagina1({setPageI, pageNumber}:IPage) {
    const fundo = require("../../assets/fundo.png")
    const pagina1Texto = [
        {id: '1', title: 'Capacidade de processamento', text: 'Processam grandes quantidades de informações em uma velocidade muito rápida.'},
        {id: '2', title: 'Armazenamento de dados', text: 'Armazenam grandes quantidades de dados em um espaço pequeno'},
        {id: '3', title: 'Eficiência energética', text: 'São eficientes no consumo de energia.'},
        {id: '4', title: 'Miniaturização', text: 'Permitem que dispositivos eletrônicos se tornem compactos e portáteis.'},
        {id: '5', title: 'Personalização', text: 'Podem ser programados para realizar tarefas específicas.'},
        {id: '6', title: 'Confiabilidade', text: 'São projetados para serem confiáveis, com vida útil longa e com poucas falhas ou mau funcionamento.'}
    ]
    return (
        <ImageBackground source={fundo} style={styles.container}>
            <ComponetPageTitulo setPageI={setPageI} pageNumber={pageNumber}/>
            <View style={styles.panel}>
                <FlatList style={styles.cima}
                    data={pagina1Texto}
                    renderItem={({ item }) =>
                        <ComponetListMarker key={item.id} textMarkerTitle={item.title} textMarker={item.text} />
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
        </ImageBackground>
    )
}