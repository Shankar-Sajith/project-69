import React, { Component } from 'react';
import {  View } from 'react-native';
import { createAppContainer} from 'react-navigation'; 
import {createBottomTabNavigator} from 'react-navigation-tabs'


import TransactionScreen from './screens/ScanScreen';



export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Appcontainer />
      </View>
    )
  }
}

var TabNavigator = createBottomTabNavigator({
  TransactionScreen  :{screen:TransactionScreen} 
})
const Appcontainer = createAppContainer(TabNavigator)