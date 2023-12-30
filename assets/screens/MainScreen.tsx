import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapScreen from './MapScreen'
import MenuComponent from '../components/MenuComponent'
import SearchComponent from '../components/SearchComponent'
import ExpandedComponent from '../components/ExpandedComponent'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MainScreen({ navigation }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mapContainer}>
                <MapScreen />
            </View>

            <View style={styles.searchContainer}>
                <SearchComponent expanded={expanded} setExpanded={setExpanded} />
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
        left: 60
    },
})