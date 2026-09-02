import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function NearYouSection() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Near you</Text>
                <Text style={styles.link}>See all</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                <View style={styles.card}>
                    <View style={[styles.box, { backgroundColor: '#333' }]} />
                    <Text>Stylo</Text>
                </View>

                <View style={styles.card}>
                    <View style={[styles.box, { backgroundColor: '#0a0a2a' }]} />
                    <Text>Extreme</Text>
                </View>

                <View style={styles.card}>
                    <View style={[styles.box, { backgroundColor: '#f2a900' }]} />
                    <Text>BJ FIT</Text>
                </View>

                <View style={styles.card}>
                    <View style={[styles.box, { backgroundColor: '#d9534f' }]} />
                    <Text>Templo</Text>
                </View>

                <View style={styles.card}>
                    <View style={[styles.box, { backgroundColor: '#5bc0de' }]} />
                    <Text>Hard</Text>
                </View>

                <View style={styles.card}>
                    <View style={[styles.box, { backgroundColor: '#5cb85c' }]} />
                    <Text>Smart</Text>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    link: {
        fontSize: 14,
        textDecorationLine: 'underline',
    },
    card: {
        marginRight: 15,
        alignItems: 'center',
    },
    box: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginBottom: 5,
    }
});