import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import Auth from '../modules/Auth'

export default class Settings extends Component {
  constructor (props) {
    super(props)
    
  }
  
  onLogout () {
    this.setState({
      auth: Auth.deauthenticateUser()
    })
    this.props.navigation.navigate('Home')
  }

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
            onPress={this.onLogout.bind(this)}
          />
        </List>
      </ScrollView>
    )
  }
}
