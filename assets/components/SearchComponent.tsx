import React, { useEffect, useRef, useState } from 'react'
import { Animated, Pressable, StyleSheet, Text, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_PLACES_API_KEY } from '@env'
import Test from './test';
import { useIsFocused } from '@react-navigation/native';


export default function SearchComponent({ expanded = false, setExpanded }) {

    const ref = useRef();
    const [top] = useState(new Animated.Value(0))
    const isFocused = useIsFocused();

    useEffect(() => {
        Animated.timing(top, {
            toValue: !expanded ? 70 : 80,
            duration: 150,
            useNativeDriver: false
        }).start();
    }, [expanded, top]);


    return (
        < Animated.View style={{ top }}>
            < GooglePlacesAutocomplete
                ref={ref}
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    // console.log(data, details);
                    console.log(ref.current);
                }}
                query={{
                    key: GOOGLE_PLACES_API_KEY,
                    language: 'en',
                    components: 'country:ca'
                }}
            />
            {isFocused ? (<Text>Hello</Text>) : (<Text>Hi</Text>)}
        </Animated.View>

    )
}
