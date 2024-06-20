import { StyleSheet, Text, TouchableOpacity } from "react-native"

type OpacityBtnProps = {
    title: string;
};

export default function OpacityBtn({ title }: OpacityBtnProps) {
    return (
        <TouchableOpacity style={styles.maisCifrasBtn}>
            <Text style={styles.maisCifrasTxt}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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