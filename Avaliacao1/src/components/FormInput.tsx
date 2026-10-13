import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface FormInputProps extends TextInputProps {
    label: string;
    error?: string;
}

export function FormInput({ label, error, ...rest }: FormInputProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <TextInput
                style={[
                    styles.input,
                    error ? styles.inputError : null
                ]}
                placeholderTextColor="#A3B18A"
                {...rest}
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        width: '100%',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#344E41',
        marginBottom: 6,
    },
    input: {
        backgroundColor: '#DAD7CD',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        color: '#344E41',
        borderWidth: 1,
        borderColor: 'transparent',
    },
    inputError: {
        borderColor: '#E07A5F',
        borderWidth: 1.5,
    },
    errorText: {
        color: '#E07A5F',
        fontSize: 12,
        marginTop: 4,
        fontWeight: '500',
    },
});