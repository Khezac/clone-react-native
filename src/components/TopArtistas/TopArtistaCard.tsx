import { View, Text, Image, StyleSheet } from "react-native"

type TopArtistaCardProps = {
    artista: {
        id: number,
        genero: string,
        artista: string,
        img: any
    },
    color: string
}

export default function TopArtistaCard({ artista, color }: TopArtistaCardProps) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.filtroPreto} />
            <View style={styles.artistInfo}>
                <Text style={styles.generoMusical}>
                    {artista.genero}
                </Text>
                <Text style={styles.artistaNome}>
                    {artista.artista}
                </Text>
            </View>
            <Image style={styles.imgArtista} resizeMode="cover" source={artista.img} />
            <View style={[styles.corInferior, { backgroundColor: `${color}` }]} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 180,
        height: 190,
        overflow: "hidden",
        position: "relative",
        borderRadius: 8
    },
    imgArtista: {
        width: '100%',
        height: '100%'
    },
    filtroPreto: {
        backgroundColor: 'black',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 3,
        opacity: 0.1
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
    artistaNome: {
        color: 'white',
        fontSize: 14,
        fontWeight: '700'
    },
    corInferior: {
        width: '100%',
        height: 4,
        position: 'absolute',
        bottom: 0,
        zIndex: 2
    }
})