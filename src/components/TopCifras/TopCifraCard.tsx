import { StyleSheet, View, Text, Image } from "react-native"

type TopCifraCardProps = {
    cifra: {
        id: number,
        titulo: string,
        artista: string
    }
}

export default function TopCifraCard({ cifra }: TopCifraCardProps) {
    return (
        <View style={styles.topCifrasContainer}>
            <Image style={styles.cifraArtistPic} source={require('../../../assets/artistaPic.jpg')} />
            <Text style={styles.cifraId}>
                {cifra.id}
            </Text>
            <View>
                <Text style={styles.cifraTitle}>
                    {cifra.titulo}
                </Text>
                <Text style={styles.cifraArtist}>
                    {cifra.artista}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topCifrasContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    cifraArtistPic: {
        width: 50,
        height: 50,
        borderBottomRightRadius: 25,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25
    },
    cifraId: {
        color: 'gray',
        fontSize: 18
    },
    cifraTitle: {
        fontSize: 16
    },
    cifraArtist: {
        fontSize: 13,
        color: 'gray'
    },
    maisCifrasBtn: {
        borderColor: 'lightgray',
        borderWidth: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    maisCifrasTxt: {
        fontWeight: '800',
        fontSize: 15
    }
})