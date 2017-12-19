import React, { Component } from 'react'
import { StyleSheet, View} from 'react-native'
import {StackNavigator} from 'react-navigation'
import { Container, Content, Icon, ListItem, List, Text, Button, Left, Body, Right, Header } from 'native-base'
import Login from '../../screens/Login'
import Register from '../../screens/Register'
import HomeTab from './HomeTab'
import SettingsTab from './SettingsTab'

export default class Settings extends Component {
  render () {
    console.log("settings nav", this.props.navigation.state)
    return (
      <SettingsNavigator />
    )
  }
}


const SettingsNavigator = StackNavigator({
  Settings: {
      screen: SettingsTab,
      navigationOptions:(props) => ({
          title: "Settings"
      })
  },
  Login: {
      screen: Login,
      navigationOptions: (props) => ({
          title: "Login",
      })
  },
  Register: {
    screen: Register,
    navigationOptions: (props) => ({
      title: "Register",
    })
  }
})


