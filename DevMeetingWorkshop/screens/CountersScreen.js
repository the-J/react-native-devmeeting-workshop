import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export default function CountersScreen() {
    const [ buttonState, setButtonState ] = useState(0)
    const [ touchablePressCount, setTouchablePressCount ] = useState(0)

    const _buttonPress = () => setButtonState(buttonState + 1)

    const _touchablePress = () => setTouchablePressCount(touchablePressCount + 1)

    return (
        <View>
            <Text style={styles.textCounter}>{buttonState}</Text>
            <Text style={styles.textCounter}>{touchablePressCount}</Text>
            <TouchableOpacity
                style={styles.touchable}
                onPress={_buttonPress}
                title='Button'>
                <Text>_touchableButton</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchable}
                onPress={_touchablePress}>
                <Text>_touchablePress</Text>
            </TouchableOpacity>
        </View>
    )
}

CountersScreen.navigationOptions = {
    title: 'Counters'
}

const styles = StyleSheet.create({
    touchable: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        marginTop: 25,
        height: 50
    },
    textCounter: {
        textAlign: 'center',
        fontSize: 50
    }
})
