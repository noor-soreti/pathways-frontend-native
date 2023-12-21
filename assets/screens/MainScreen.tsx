import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import MapScreen from './MapScreen'
import MenuComponent from '../components/MenuComponent'
import SearchComponent from '../components/SearchComponent'
import ExpandedComponent from '../components/ExpandedComponent'

export default function MainScreen({ }) {


    const [expanded, setExpanded] = useState(false);
    const [page, setPage] = useState('Maps')


    return (
        <SafeAreaView style={styles.container} >
            <SafeAreaProvider>
                <MapScreen />

                <View style={styles.menuContainer}>
                    <MenuComponent />
                </View>


                <View style={styles.searchContainer} >
                    <SearchComponent expanded={expanded} setExpanded={setExpanded} />
                    <ExpandedComponent expanded={expanded} />

                </View>
            </SafeAreaProvider>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        bottom: 0,
        position: 'absolute',
        width: '100%'
    },
    menuContainer: {
        position: 'absolute',
        top: 20,
        left: 40
    }
})