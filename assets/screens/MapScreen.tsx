import React, { useState, useEffect, useRef } from 'react';
import Styled from 'styled-components/native';
import MapView, { Circle, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { Platform } from 'react-native';
import Axios from 'axios'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


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

    // use this function to pass reference 
    function regionChange(event) {
        setLocation({ latitude: event.latitude, longitude: event.longitude })
        console.log(event);

    }

    const getData = async (reference) => {
        const res = await Axios.get("http://localhost:3000/getData")
        console.log(reference);
    }

    return (
        <Container>
            {location && (
                <MapView onRegionChangeComplete={(e) => console.log(e)}
                    style={{ flex: 1, height: '100%' }}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.0035,
                        longitudeDelta: 0.0021,

                    }} showsUserLocation>
                    {/* <Circle center={location} radius={90} strokeColor='rgba(100, 196, 251, 0.4)' fillColor='rgba(100, 196, 251, 0.4)' /> */}
                    <Marker onDragEnd={(e) => regionChange(e.nativeEvent.coordinate)} draggable
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
