import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function ContactList() {

    const contacts = [
        {
            uid: 1,
            name: 'Ashish Kushwaha',
            status: 'I love coding and teach!',
            imageUrl: 'https://avatar.iran.liara.run/public/boy?username=Ashish'
        },
        {
            uid: 2,
            name: 'Rishab Gupta',
            status: 'I love coding and teach!',
            imageUrl: 'https://avatar.iran.liara.run/public/boy?username=Rishab'
        },
        {
            uid: 3,
            name: 'Rajesh Gupta',
            status: 'I love coding and teach!',
            imageUrl: 'https://avatar.iran.liara.run/public/boy?username=Rajesh'
        },
        {
            uid: 4,
            name: 'Ashish Gupta',
            status: 'I love coding and teach!',
            imageUrl: 'https://avatar.iran.liara.run/public/boy?username=AshishG'
        },
        {
            uid: 5,
            name: 'Rahul Gupta',
            status: 'I love coding and teach!',
            imageUrl: 'https://avatar.iran.liara.run/public/boy?username=Rahul'
        },

    ]
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{ uri: imageUrl }} style={styles.userIamge} />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
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
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#AE1438',
        padding: 8,
        borderRadius: 10
    },
    userIamge: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff'
    },
    userStatus: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff'
    }

})
