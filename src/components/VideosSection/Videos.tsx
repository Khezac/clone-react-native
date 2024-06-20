import { StyleSheet, View, Text } from "react-native"
import VideoCard from "./VideoCards"

const videos = [
    {
        id: 1,
        img: require('../../../assets/videoImgs/piratasDoCaribe.png'),
        title: "HE'S A PIRATE (TEMA PIRATAS DO CARIBE) - Klaus Badelt"
    },
    {
        id: 2,
        img: require('../../../assets/videoImgs/horaDeAventura.png'),
        title: "HORA DE AVENTURA (MUSICA TEMA) | Como tocar no ukulele"
    },
    {
        id: 3,
        img: require('../../../assets/videoImgs/beaga.png'),
        title: "CONHEÇA OS TALENTOS DE BEAGÁ! | 5 ARTISTAS SENSACIONAIS"
    },
    {
        id: 4,
        img: require('../../../assets/videoImgs/worship.png'),
        title: "TIMBRES ESSENCIAIS PARA O WORSHIP!"
    }
]

export default function Videos() {
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                Videos
            </Text>
            <View style={styles.cardsContainer}>
            {videos && videos.map((video,index) => {
                return (
                    <VideoCard key={index} videoInfos={video}/>
                )
            })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: 420,
        gap: 10
    },
    cardsContainer: {
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: 350,
        gap: 10,
    },
    cardContainer: {
        width: 180
    },
    videoImg: {
        width: '100%',
        height: 110,
        borderRadius: 8
    },
    videoTitle: {
        width: '100%',
        height: 60
    }

})