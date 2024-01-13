import React, { useEffect } from 'react';
import Styled from 'styled-components/native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { KeyboardAvoidingView, Platform } from 'react-native';

const Container = Styled.View`
    flex: 1;
`;

export default function MapScreen({ location, setLocation }) {

    if (Platform.OS === 'ios') {
        Geolocation.requestAuthorization("always")
    }

    // Only runs after first render
    useEffect(() => {
        if (location == undefined) {
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
            console.log(location);
        }
    }, []);

    // Runs after first render and after dependency value (location) changes
    useEffect(() => {
        console.log(location);
    }, [location])

    // use this function to pass reference 
    // async function regionChange(event) {
    //     const data = await axios.get("http://localhost:3000/getData", {
    //         params: {
    //             latitude: event.latitude,
    //             longitude: event.longitude
    //         }
    //     })
    //         .then(res => {
    //             console.log({ event });
    //         })
    //         .catch(err => {
    //             console.log("ERROR");
    //         })
    //     setLocation({ latitude: event.latitude, longitude: event.longitude })
    //     console.log(event);
    // }

    return (
        <Container>
            {location != undefined && (
                <MapView
                    provider={PROVIDER_GOOGLE}
                    // onRegionChangeComplete={(e) => {
                    //     const { latitude, longitude } = e;
                    //     setLocation({ latitude, longitude })
                    // }}
                    style={{ flex: 1, height: '100%' }}
                    region={location}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.0105,
                        longitudeDelta: 0.0031,
                    }} >
                    <Marker draggable
                        coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }}
                    />
                </MapView>
            )}
        </Container >
    );
};