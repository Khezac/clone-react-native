import { StyleSheet, View, Image, FlatList } from "react-native"
import Spacer from "../Spacer/Spacer"

const capas = [
    {
        id: 1,
        img: require('../../../assets/capas/capa1.png')
    },
    {
        id: 2,
        img: require('../../../assets/capas/capa2.png')
    },
    {
        id: 3,
        img: require('../../../assets/capas/capa3.png')
    }
]

export default function Capas() {
    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={Spacer}
            ListFooterComponent={Spacer}
            style={styles.capas}
            horizontal={true}
            data={capas}
            renderItem={({ item }) => {
                return (
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} resizeMode="stretch" source={item.img} />
                    </View>
                )
            }} />
    )
}

const styles = StyleSheet.create({
    capas: {
        padding: 15
    },
    imageContainer: {
        width: 370,
        height: 360
    },
    image: {
        width: '100%',
        height: '100%'
    }
})