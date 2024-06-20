import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native"

export default function Header() {
    return (
        <View style={styles.header}>
            <Image style={styles.logo} resizeMode="cover" source={require('../../assets/logo.png')}></Image>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.proBtn}>
                    <Text style={styles.proBtnTxt}>Seja PRO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{padding: 5}}>
                    <Text style={{fontWeight: "700"}}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'static',
        backgroundColor: 'white'
    },
    logo: {
        width: '30%',
        height: '100%'
    },
    btnContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    proBtn: {
        backgroundColor: 'green',
        padding: 5,
        borderRadius: 8
    },
    proBtnTxt: {
        color: 'white',
        fontWeight: "700"
    }
})