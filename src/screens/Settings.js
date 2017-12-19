import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { List, ListItem } from 'react-native-elements'

export default class Settings extends Component {
  render () {
    return (
      <ScrollView>
        <List>
          <ListItem
            title='Login'
            onPress={() => this.props.navigation.navigate('Login')}
          />
          <ListItem
            title='Register'
            onPress={() => this.props.navigation.navigate('Register')}
          />
          <ListItem
            title='Log Out'
            rightIcon={{ name: 'cancel' }}
          />
        </List>
      </ScrollView>
    )
  }
}
