import React, { useEffect, useRef, useState } from 'react'
import { Animated, Text, TextInput } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_PLACES_API_KEY } from '@env'
import Geocoder from 'react-native-geocoding';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

export default function SearchComponent({ expanded = false, setExpanded, setLocation }) {

    Geocoder.init(GOOGLE_PLACES_API_KEY)
    const ref = useRef();
    const [top] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(top, {
            toValue: !expanded ? 60 : 80,
            duration: 150,
            useNativeDriver: false
        }).start();
    }, [expanded, top]);

    function Pressed() {
        let searchLocation = ref.current?.getAddressText();
        Geocoder.from(searchLocation).then(json => {
            let c = json.results[0].geometry.location;
            const latitude = c.lat
            const longitude = c.lng
            setLocation({ latitude, longitude })
            console.log("ok");
        }).catch(e => {
            console.log("eee");
        })
    }

    return (
        < Animated.View style={{ top }}>
            <GooglePlacesAutocomplete
                ref={ref}
                placeholder='Search'
                onPress={(data, details = null) => {
                    Pressed()
                }} n
                query={{
                    key: GOOGLE_PLACES_API_KEY,
                    language: 'en',
                    components: 'country:ca'
                }}
                enablePoweredByContainer={false}
                textInputProps={{
                    onPressOut: () => {
                        setExpanded(true)
                    },
                    onBlur: () => {
                        console.log("skeet");

                    }
                }}
            />
        </Animated.View>
    )
}
