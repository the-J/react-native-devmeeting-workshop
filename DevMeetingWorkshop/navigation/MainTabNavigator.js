import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import CountersScreen from '../screens/CountersScreen'
import MapScreen from '../screens/MapScreen'


const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {}
})

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen
    },
    config
)

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ( { focused } ) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    )
}

HomeStack.path = ''

const CountersStack = createStackNavigator(
    {
        Counters: CountersScreen
    },
    config
)

CountersStack.navigationOptions = {
    tabBarLabel: 'Counters',
    tabBarIcon: ( { focused } ) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
    )
}

CountersStack.path = ''

const MapStack = createStackNavigator(
    {
        Map: MapScreen
    },
    config
)

MapStack.navigationOptions = {
    tabBarLabel: 'Map',
    tabBarIcon: ( { focused } ) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'} />
    )
}

MapStack.path = ''

const tabNavigator = createBottomTabNavigator(
    {
    HomeStack,
    CountersStack,
    MapStack
},
    {
        initialRouteName: 'MapStack'
    })

tabNavigator.path = ''

export default tabNavigator
