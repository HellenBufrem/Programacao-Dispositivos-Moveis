import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

function SensorDeEstacionamento() {
    const [distancia, setDistancia] = useState<number>(50);

    useEffect(() => {
        console.log("Sistema de Sensores Iniciado");

        const intervalo = setInterval(() => {
            console.log("Sistema de sensores ativo (vivo)...");
        }, 2000);

        return () => {
            clearInterval(intervalo);
            console.log("Sistema de Sensores Desligado");
        };
    }, []);

    useEffect(() => {
        if (distancia < 20) {
            Alert.alert("PERIGO", "Muito Próximo!");
        }
    }, [distancia]);

    const aproximar = () => setDistancia(prev => prev - 5);
    const afastar = () => setDistancia(prev => prev + 5);

    return (
        <View style={styles.sensorCard}>
            <Text style={styles.sensorTitle}>Radar Traseiro</Text>

            { }
            <Text style={[styles.distanciaText, { color: distancia < 20 ? 'red' : '#4CAF50' }]}>
                {distancia} cm
            </Text>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.actionButton} onPress={aproximar}>
                    <Text style={styles.buttonText}>Aproximar (-5cm)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton} onPress={afastar}>
                    <Text style={styles.buttonText}>Afastar (+5cm)</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default function App() {
    const [sensorLigado, setSensorLigado] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Painel do Veículo</Text>

            { }
            <Button
                title={sensorLigado ? "Desligar Sensor" : "Ligar Sensor"}
                color={sensorLigado ? "#d9534f" : "#007AFF"}
                onPress={() => setSensorLigado(!sensorLigado)}
            />

            { }
            {sensorLigado && <SensorDeEstacionamento />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f9',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    sensorCard: {
        marginTop: 30,
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        width: '100%',
    },
    sensorTitle: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 10,
    },
    distanciaText: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 15,
    },
    actionButton: {
        backgroundColor: '#555',
        padding: 15,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
});