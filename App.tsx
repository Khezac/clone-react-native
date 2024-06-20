import { StyleSheet, View } from "react-native"
import Header from "./src/layout/Header"
import Generos from "./src/components/Generos/Generos"
import Capas from "./src/components/Capas/Capas"
import { ScrollView } from "react-native"
import TopCifras from "./src/components/TopCifras/TopCifras"
import TopArtistas from "./src/components/TopArtistas/TopArtistas"
import Videos from "./src/components/VideosSection/Videos"
import Footer from "./src/layout/Footer"

export default function Home() {

  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]}>
        <Header />
        <Generos />
        <Capas />
        <TopCifras />
        <TopArtistas />
        <Videos/>
      </ScrollView>
      <Footer/>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "white",
  }
})