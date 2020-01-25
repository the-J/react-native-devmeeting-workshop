import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, Text, View } from 'react-native'


export default function MapScreen() {
    const [ location, setLocation ] = useState(null)

    useEffect(() => {
        const location = navigator.geolocation.requestAuthorization;
    }, [])

    useEffect(() => {

    }, [location])
    return (
        <View style={styles.mapWrapper}>
            <MapView
                style={styles.mapStyles}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            >
                <Marker coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324
                }}>
                    <View style={{ backgroundColor: 'red', padding: 10 }}>
                        <Text>SF</Text>
                    </View>
                </Marker>
            </MapView>
        </View>
    )
}

MapScreen.navigationOptions = {
    title: 'Map'
}


const styles = StyleSheet.create({
    mapWrapper: {
        flex: 1
    },
    mapStyles: {
        flex: 1
    }
})
