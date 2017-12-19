import React, { Component } from 'react'
import { StyleSheet, View} from 'react-native'
import {StackNavigator, NavigationActions} from 'react-navigation'
import { Container, Content, Icon, ListItem, List, Text, Button, Left, Body, Right, Header } from 'native-base'
import Login from '../../screens/Login'
import Register from '../../screens/Register'
import HomeTab from './HomeTab'

export default class SettingsTab extends Component {
  static navigationOptions = {
    title: 'Settings',
  }
  render () {
    console.log("settings tab", this.props.navigation)
    // const {navigate} = this.props.navigation
    // const navigateAction = NavigationActions.navigate({
    //   routeName: 'Settings',
    //   params: {},
    // })
    
    
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem onPress={() => this.props.navigation.navigate('Login')}>
              <Left>
                <Icon name="log-in" />
              </Left>
              <Body>
                <Text>Login</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('Register')}>
              <Left>
                <Icon name="book" />
              </Left>
              <Body>
                <Text>Register</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
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