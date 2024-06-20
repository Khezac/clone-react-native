import { StyleSheet, View, Text, FlatList } from "react-native"
import Spacer from "../Spacer/Spacer"

const generos = [
    {
        id:1,
        genero: "Tudo"
    },
    {
        id:2,
        genero: "Rock"
    },
    {
        id:3,
        genero: "Sertanejo"
    },
    {
        id:4,
        genero: "Gospel/Religioso"
    },
    {
        id:5,
        genero: "MPB"
    },
    {
        id:6,
        genero: "Mais..."
    },
]

export default function Generos() {
    return(
    <View>
        <FlatList
        ListFooterComponent={Spacer}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.generoMusicalWrapper}
        data={generos}
        renderItem={({item}) => {
            return(
            <View style={item.id == 1 ? styles.generoMusicalSelecionado : styles.generoMusical}>
                <Text style={item.id == 1 ? styles.generoMusicalSelecionadoTxt : styles.generoMusicalTxt}>
                    {item.genero}
                </Text>
            </View>
            )
        }}/>
    </View>
    )
}

const styles = StyleSheet.create({
    generoMusicalWrapper: {
        flexDirection: 'row',
        display: 'flex',
        padding: 15
    },
    generoMusical: {
        backgroundColor: 'white',
        height: 33,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 5
    },
    generoMusicalTxt: {
        color: 'gray',
    },
    generoMusicalSelecionado: {
        backgroundColor: 'black',
        height: 33,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 5
    },
    generoMusicalSelecionadoTxt: {
        color: 'white',
    }
})