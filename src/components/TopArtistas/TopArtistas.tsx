import { StyleSheet, View, Text } from "react-native"
import OpacityBtn from "../OpacityBtn/OpacityBtn";
import TopArtistaCard from "./TopArtistaCard";

const artistas = [
    {
        id: 1,
        genero: "Sertanejo",
        artista: "Bruno e Marrone",
        img: require('../../../assets/topArtistas/bruno e marrone.jpg'),
        color: "red"
    },
    {
        id: 3,
        genero: "Gospel/Religioso",
        artista: "Harpa Cristã",
        img: require('../../../assets/topArtistas/harpa crista.jpg'),
        color: "brown"
    },
    {
        id: 2,
        genero: "Gospel/Religioso",
        artista: "Florianópolis House",
        img: require('../../../assets/topArtistas/floripa house.jpg'),
        color: "orange"
    },
    {
        id: 4,
        genero: "Sertanejo",
        artista: "Jorge & Matheus",
        img: require('../../../assets/topArtistas/Jorge e Matheus.jpg'),
        color: "purple"
    }
]

export default function TopArtistas() {

    return (
        <View style={styles.TopArtistasWrapper}>
            <Text style={styles.TopArtistasTitle}>
                Top Artistas
            </Text>
            <View style={styles.TopArtistasContainer}>
                {artistas && artistas.map((artista) => {
                    return (
                        <TopArtistaCard key={artista.id} artista={artista} color={artista.color}/>
                    )
                })}
            </View>
            <OpacityBtn title="Ver mais artistas"/>
        </View>
    )
}

const styles = StyleSheet.create({
    TopArtistasWrapper: {
        padding: 20,
        gap: 15
    },
    TopArtistasTitle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    TopArtistasContainer: {
        width: '100%',
        height: 390,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    imgContainer: {
        width: 180,
        height: 190,
        overflow: "hidden",
        position: "relative",
        borderRadius: 8
    },
    imgArtist: {
        width: '100%',
        height: '100%'
    },
    lowOpacityBackground: {
        backgroundColor: 'black',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
        opacity: 0.3
    },
    artistInfo: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
        padding: 10,
        justifyContent: 'flex-end'
    },
    generoMusical: {
        color: 'lightgray',
        fontSize: 14
    },
    artistName: {
        color: 'white',
        fontSize: 14,
        fontWeight: '700'
    },
    bottomBar: {
        backgroundColor: 'green',
        width: '100%',
        height: 4,
        position: 'absolute',
        bottom: 0,
        zIndex: 2
    }
})