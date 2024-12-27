import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>Flat Card</Text>

            <View style={styles.container}>

                <View style={[styles.card, styles.cardOne]}>
                    <Text style={styles.textStyle}>Red</Text>
                </View>


                <View style={[styles.card, styles.cardTwo]}>
                    <Text style={styles.textStyle}>Green</Text>
                </View>


                <View style={[styles.card, styles.cardThree]}>
                    <Text style={styles.textStyle}>Blue</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    cardOne: {
        backgroundColor: '#EF5354'

    },
    cardTwo: {
        backgroundColor: '#2ecc72'

    },
    cardThree: {
        backgroundColor: '#5DA3FA'

    }
})