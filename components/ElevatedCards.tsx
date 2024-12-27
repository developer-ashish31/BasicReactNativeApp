import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>

                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.textStyle}>Tap Me</Text>
                </View>

                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.textStyle}>Tap</Text>
                </View>

                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.textStyle}>Scroll Me</Text>
                </View>

                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.textStyle}>Scroll Scroll</Text>
                </View>

                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.textStyle}>Scroll Me More..</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    textStyle: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    container: {
        // flex: 1,
        // flexDirection: 'row',
        padding: 8,
    },
    card: {
        flex: 1,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        margin: 8

    },
    cardElevated: {
        backgroundColor: '#0ABDE3',
        elevation: 4,
        shadowOffset: {
            width: 2,
            height: 2,

        },
        shadowColor: '#33333',
        shadowOpacity: 0.4,
        shadowRadius: 2
    }
})
