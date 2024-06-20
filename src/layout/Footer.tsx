import { StyleSheet, View, ImageBackground } from "react-native"

export default function Footer() {
    return (
        <View style={styles.footer}>
            <ImageBackground style={styles.footerImg} source={require('../../assets/footer.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
      height: 60
    },
    footerImg: {
      width: '100%',
      height: '100%',
      borderTopColor: 'lightgray',
      borderTopWidth: 1
    }
  })