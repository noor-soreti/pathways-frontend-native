import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

export default function Test({ prop }) {


    const [t, tt] = useState()

    useEffect(() => {
        tt(prop)
        console.log(t);

    })




    return (
        <View>
            <Text>myy</Text>
        </View>
    )
}
