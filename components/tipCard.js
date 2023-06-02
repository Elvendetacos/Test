import { StyleSheet, Text, View, Image, Button, TouchableHighlight, ImageBackground, ScrollView } from 'react-native';

function TipCard() {
    return ( 
        <View style={styles.cardsPoint}>
            <Text>Tip de cuidado de agua del día
            Anexar link con imagen de algún post o blog</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    cardsPoint: {
        color: '#342A21',
        backgroundColor: '#95E7FB',
        marginRight: 20,
        marginLeft: 20,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderBottomWidth: 2,
        borderLeftWidth:1,
        borderRightWidth:3,
        flex: 1,
        height: 154,
        width: 199,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default TipCard;