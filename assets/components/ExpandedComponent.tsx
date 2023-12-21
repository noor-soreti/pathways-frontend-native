import React, { useEffect, useState } from 'react'
import { Animated, Text, View } from 'react-native'

export default function ExpandedComponent({ expanded = false }) {

    const [height] = useState(new Animated.Value(0));

    useEffect(() => { // 2. Use Animated.timing() to drive updates of style attributes
        Animated.timing(height, {
            toValue: !expanded ? 0 : 700,
            duration: 150,
            useNativeDriver: false
        }).start();
    }, [expanded, height]);



    /*
    The FlatList component displays a scrolling list of changing, but similarly structured, data.
    FlatList only renders elements that are CURRENTLY showing on the screen, not all the elements at once.
    */
    return (
        <View>
            <Animated.View style={{ height, backgroundColor: 'rgba(255, 255, 255, .4)' }}>
                {/* // 1. Animated.Value, hook it up to one or more style attributes of an animated component */}
                <View >
                    <Text>kdfldsjl</Text>

                </View>
            </Animated.View>
        </View>
    )
}

