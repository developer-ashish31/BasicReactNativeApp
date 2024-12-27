import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'


export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={{
                    uri: 'https://picsum.photos/600/300'
                }} style={styles.cardImage} />

                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Nature</Text>

                    <Text style={styles.cardLabel}>Everywhere on our earth</Text>

                    <Text style={styles.cardDescription}>Going to far away with our nature and natural. We plan accordingly to live with our nature and never ever harm or play with nature.</Text>

                    <Text style={styles.cardFooter}>Going far away with our nature and natural living.</Text>
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
    card: {
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        }

    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: '#2C3335',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2
    },
    cardLabel: {
        color: '#616C6F',
        fontSize: 16,
        marginBottom: 6,
        fontWeight: '600'

    },
    cardDescription: {
        color: '#7B8788',
        fontSize: 13,
    },
    cardFooter: {
        color: '#47535E',
        marginTop: 8,
        fontSize: 16,
        fontWeight: '600'
    }

})
