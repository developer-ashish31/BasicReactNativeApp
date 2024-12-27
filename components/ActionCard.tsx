import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import ElevatedCards from './ElevatedCards'

export default function ActionCard() {
    function openWebLink(linkUrl: string) {
        Linking.openURL(linkUrl)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>What's widget in flutter.
                    </Text>
                </View>
                <Image source={{ uri: 'https://picsum.photos/250?image=1' }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={2} style={styles.bodyText}>
                        In Flutter, widgets are the building blocks of a user interface. They represent various UI elements such as buttons, text, images, and more. There are two main types of widgets in Flutter: Stateless Widgets and Stateful Widgets.
                    </Text>
                </View>

                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebLink('https://medium.com/@ashusoftech31/flutter-stateless-stateful-widget-b387820b0df')}>
                        <Text style={styles.readMore}>Read More</Text>
                    </TouchableOpacity>
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
        height: 340,
        marginVertical: 12,
        marginHorizontal: 16,
        borderRadius: 6
    },
    elevatedCard: {
        backgroundColor: '#EA425C',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,

    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600'

    },
    cardImage: {
        height: 200
    },
    bodyContainer: {
        padding: 10,
        color: '#fff'
    },
    bodyText: {
        color: '#fff',
        fontWeight: '400'
    },
    footerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    readMore: {
        fontSize: 14,
        color: '#4834DF',
        fontWeight: '500',
        textDecorationLine: 'underline'

    }

})
