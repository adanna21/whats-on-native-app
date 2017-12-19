import React, { Component } from 'react'
import { StyleSheet, Text, View} from 'react-native'
import {Container, Content, Icon, Header} from 'native-base'
import RootNavigator from './RootNavigator';

export default class HomeTab extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  render () {
    return (
      <Container>
        {/* <Header
          title='HomeTab'
        /> */}
        <Content>
          
        </Content>
        <RootNavigator />
      </Container>
    )
  }
}
