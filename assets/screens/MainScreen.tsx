import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import MapScreen from './MapScreen'
import MenuComponent from '../components/MenuComponent'
import SearchComponent from '../components/SearchComponent'
import ExpandedComponent from '../components/ExpandedComponent'
import { SafeAreaView } from 'react-native-safe-area-context'

interface ILocation {
    latitude: number;
    longitude: number;
}

export default function MainScreen({ }) {
    const [expanded, setExpanded] = useState(false);
    const [location, setLocation] = useState<ILocation | undefined>(undefined);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mapContainer}>
                <MapScreen
                    location={location}
                    setLocation={setLocation} />
            </View>

            <View style={styles.searchContainer}>
                <SearchComponent
                    expanded={expanded}
                    setExpanded={setExpanded}
                    setLocation={setLocation} />
            </View>

            <View style={styles.menuContainer}>
                <MenuComponent />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mapContainer: {
        position: 'absolute', // removes element from the normal document flow,
        zIndex: 0,
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    searchContainer: {
        position: 'absolute', // 'relative' causes search results to not work: why?
        width: '100%'
    },
    menuContainer: {
        position: 'absolute',
        bottom: 150,
        right: 60
    },
})