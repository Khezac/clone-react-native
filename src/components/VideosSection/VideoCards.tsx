import { StyleSheet, View, Text, Image } from "react-native"

type VideoCardProps= {
    videoInfos: {
        img: any,
        title: string
    }
}

export default function VideoCard({ videoInfos }: VideoCardProps) {
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.videoImg} source={videoInfos.img}/>
            <Text style={styles.videoTitle}>{videoInfos.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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