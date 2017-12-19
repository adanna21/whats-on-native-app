import React, { Component } from 'react'
import { StyleSheet, View} from 'react-native'
import {StackNavigator} from 'react-navigation'
import { Container, Content, Icon, ListItem, List, Text, Button, Left, Body, Right, Header } from 'native-base'
import Login from '../../screens/Login'
import Register from '../../screens/Register'
import HomeTab from './HomeTab'

export default class SettingsTab extends Component {

 static navigationOptions = {
    title: 'Settings'
  }
  render () {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            {/* <Button
              transparent 
              light
              onPress={() => props.navigation.navigate('Login')}
              >
              <Text>Login</Text>
            </Button>
            <Button transparent>
              <Text>Register</Text>
            </Button> */}
            <ListItem onPress={() => props.navigation.navigate('Login')}>
              <Left>
                <Icon name="login" />
              </Left>
              <Body>
                <Text>Login</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => props.navigation.navigate('Register')}>
              <Left>
                <Icon name="registered" />
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
  Settings: {screen: SettingsTab},
  Login: {screen: Login},
  Register: {screen: Register}
})

