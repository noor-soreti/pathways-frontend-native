import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MapScreen from './assets/screens/MapScreen';
import SearchComponent from './assets/components/SearchComponent';
import ExpandedComponent from './assets/components/ExpandedComponent';
import MenuComponent from './assets/components/MenuComponent';

const Stack = createNativeStackNavigator();



export default function App() {

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
  );
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