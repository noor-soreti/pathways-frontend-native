import React, { useEffect, useState } from 'react'
import { Animated, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import { Icon } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
// import { Icon } from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome';




export default function SearchComponent({ expanded = false, setExpanded }) {

    const [search, setSearch] = useState('')

    const [bottom] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(bottom, {
            toValue: !expanded ? 80 : 10,
            duration: 150,
            useNativeDriver: false
        }).start();
    }, [expanded, bottom]);

    const onPressInput = () => {
        console.log(expanded);

    }


    return (

        <Animated.View style={{ bottom, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            {/* <Icon name="ios-search" style={{ fontSize: 25, paddingRight: 10 }} /> */}

            <Icon name="rocket" size={30} color="#900" />

            <TextInput onPressOut={() => setExpanded(!expanded)} underlineColor='transparent' placeholder='Search' defaultValue={search} onChangeText={e => setSearch(e)} style={{
                backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, width: '90%'
            }} />

        </Animated.View>

    )
}
