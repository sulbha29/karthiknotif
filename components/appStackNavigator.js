import React,{Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import BookDonateScreen from '../screens/donateScreen'
import RecieverDetailsScreen from '../screens/recieverDetails'
export const AppStackNavigator = createStackNavigator({
    bookDonateList:{
        screen:BookDonateScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    recieverDetails:{screen:RecieverDetailsScreen , navigationOptions : {headerShown:false}},


},
{initialRouteName:"bookDonateList"}
)

