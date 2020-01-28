import React, { useEffect, useRef, useState } from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const defaultDeltas = {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
}

const initialLocalization = {
    latitude: 37.78825,
    longitude: -122.4324,
    ...defaultDeltas
}

export default function MapScreen() {
    const mapRef = useRef({})

    const [ location, setLocation ] = useState(null)
    const [ markerLocation, setMarkerLocation ] = useState(null)

    useEffect(() => {
        const geolocation = navigator.geolocation

        if (geolocation.requestAuthorization) {
            geolocation.requestAuthorization()
        }

        setMapToUserLocation()
    }, [])

    const setMapToUserLocation = () => {
        return navigator.geolocation.getCurrentPosition(
            location => setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                ...defaultDeltas
            }),
            err => console.error(err)
        )
    }
    useEffect(() => {
        if (Object.keys(mapRef).keys.length && location) {
            gotoMapRegion(location)
        }
    }, [ location ])

    const setMarker = ( e ) => {
        const location = {
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            ...defaultDeltas
        }

        setMarkerLocation(location)
    }

    const gotoMapRegion = location => {
        mapRef.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            ...defaultDeltas
        }, 1000)
    }


    return (
        <View style={styles.mapWrapper}>
            <MapView
                ref={mapRef}
                style={styles.mapStyles}
                showsUserLocation={true}
                region={location ? location : initialLocalization}
                onDoublePress={setMarker}
            />
            <TouchableOpacity
                onPress={gotoMapRegion}
                style={styles.touchableOpacity}>
                <Text style={styles.touchableText}>Tap</Text>
            </TouchableOpacity>
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
    },
    touchableOpacity: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchableText: {
        padding: 20,
        margin: 20,
        fontSize: 30
    }
})
