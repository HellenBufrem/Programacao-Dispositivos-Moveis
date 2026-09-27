import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface UserProfileCardProps {
    name: string;
    role: string;
    avatarUrl: string;
    bio?: string;
    status?: 'online' | 'offline';
    onPressFollow?: () => void;
}

export default function UserProfileCard({
    name,
    role,
    avatarUrl,
    bio,
    status,
    onPressFollow
}: UserProfileCardProps) {

    return (
        <View style={styles.cardContainer}>

            { }
            <View style={styles.headerRow}>

                <View>
                    { }
                    <Image source={{ uri: avatarUrl }} style={styles.avatar} />

                    { }
                    { }
                    {status === 'online' && <View style={styles.onlineIndicator} />}
                </View>

                <View style={styles.userInfo}>
                    <Text style={styles.nameText}>{name}</Text>
                    <Text style={styles.roleText}>{role}</Text>
                </View>

            </View>

            { }
            { }
            <Text style={styles.bioText}>
                {bio ? bio : "Este usuário não possui biografia."}
            </Text>

            { }
            { }
            {onPressFollow && (
                <TouchableOpacity style={styles.button} onPress={onPressFollow}>
                    <Text style={styles.buttonText}>Seguir</Text>
                </TouchableOpacity>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    onlineIndicator: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#4CAF50',
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderWidth: 2,
        borderColor: '#fff',
    },
    userInfo: {
        marginLeft: 16,
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    roleText: {
        fontSize: 14,
        color: '#666',
    },
    bioText: {
        fontSize: 14,
        color: '#444',
        lineHeight: 20,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
});