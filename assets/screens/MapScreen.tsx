import React, { useState, useEffect } from 'react';
import Styled from 'styled-components/native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { Platform } from 'react-native';

const Container = Styled.View`
    flex: 1;
`;

interface ILocation {
    latitude: number;
    longitude: number;
}

export default function MapScreen() {
    const [location, setLocation] = useState<ILocation | undefined>(undefined);

    if (Platform.OS === 'ios') {
        Geolocation.requestAuthorization("always")
    }

    useEffect(() => {
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setLocation({
                    latitude,
                    longitude,
                });
            },
            error => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
    }, []);

    return (
        <Container>
            {location && (
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.0035,
                        longitudeDelta: 0.0021,
                    }}>
                    <Marker draggable
                        coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }}
                    />
                </MapView>
            )}
        </Container>
    );
};
