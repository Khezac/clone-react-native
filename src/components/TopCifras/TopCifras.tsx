import { StyleSheet, View, Text } from "react-native"
import OpacityBtn from "../OpacityBtn/OpacityBtn";
import TopCifraCard from "./TopCifraCard";

const cifras = [
  {
    id: 1,
    titulo: "Tu És / Águas Purificadoras (Pot-pourri)",
    artista: "Florianópolis House Of Prayer (fhop music)"
  },
  {
    id: 2,
    titulo: "Bondade de Deus",
    artista: "Isaías Saad"
  },
  {
    id: 3,
    titulo: "Boate Azul",
    artista: "Bruno e Marrone"
  },
  {
    id: 4,
    titulo: "Evidências",
    artista: "Chitãozinho & Xororó"
  },
  {
    id: 5,
    titulo: "Pode Morar Aqui",
    artista: "Chitãozinho & Xororó"
  },
  {
    id: 6,
    titulo: "Sozinho",
    artista: "Caetano Veloso"
  },
  {
    id: 7,
    titulo: "Porque Ele Vive",
    artista: "Harpa Cristã"
  },
  {
    id: 8,
    titulo: "Só Tu És Santo",
    artista: "Morada"
  },
  {
    id: 9,
    titulo: "Lindo Momento",
    artista: "Julliany Souza"
  },
  {
    id: 10,
    titulo: "Me Atraiu",
    artista: "Gabriela Rocha"
  },
]

export default function TopCifras() {

  return (
    <View style={styles.topCifrasWrapper}>
      <Text style={styles.title}>
        Top cifras
      </Text>
      {cifras && cifras.map((element, index) => {
        return (
          <TopCifraCard key={index} cifra={element}/>
        )
      }
      )}
      <OpacityBtn title="Ver mais cifras"/>
    </View>
  )
}

const styles = StyleSheet.create({
  topCifrasWrapper: {
    padding: 15,
    gap: 20
  },
  title: {
    color: 'black',
    fontWeight: "800",
    fontSize: 20
  }
})