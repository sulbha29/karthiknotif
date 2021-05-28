import React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import RequestScreen from '../screens/requestScreen'
import DonateScreen from '../screens/donateScreen'
import {Image} from 'react-native'
import {AppStackNavigator} from "./appStackNavigator"
export const AppTabNavigator = createBottomTabNavigator({
    donateBooks: {
        screen:AppStackNavigator,
        navigationOptions:{
            tabBarIcon:<Image source = {require("../assets/request-list.png")} style = {{width:20,height:20}}/>,
            tabBarLabel: "donateBooks"
        }
    },
    bookRequest: {
        screen:RequestScreen,
        navigationOptions:{
            tabBarIcon:<Image source = {require("../assets/request-book.png")} style = {{width:20,height:20}}/>,
            tabBarLabel: "bookRequest"
        }
    }
})