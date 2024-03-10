import React from 'react';
import {Button, View} from 'react-native';
import {readCSVAndFindClosestPoint} from './Utilities/findClosestAEDPoint';

const AEDButton = ({ onAEDFound }) => {
    const handlePress = async () => {
        // Przykładowe "fake'owe" dane lokalizacyjne
        const refLat = 52.237049; // Przykładowa szerokość geograficzna
        const refLon = 21.017532; // Przykładowa długość geograficzna
        const csvPath = 'aed_poland.csv'; // Przykładowa ścieżka do pliku CSV

        const closestPoint = await readCSVAndFindClosestPoint(refLat, refLon, csvPath);

        if (closestPoint) {
            console.log('Najbliższy punkt AED:', closestPoint);
            onAEDFound(closestPoint); // Przekazanie danych do komponentu nadrzędnego
        } else {
            console.log('Nie znaleziono punktu AED.');
        }
    };

    return (
        <View>
            <Button title="Znajdź najbliższy AED" onPress={handlePress} />
        </View>
    );
};

export default AEDButton;
