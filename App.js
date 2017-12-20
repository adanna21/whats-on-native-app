import React, { Component } from 'react';
import {
  Text,
  View,
  AsyncStorage,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';
import RootNavigator from './components/navigation/RootNavigator'
import { Tabs } from './src/config/router'
import Auth from './src/modules/Auth'

const ACCESS_TOKEN = 'access_token'

class App extends Component {
  constructor () {
    super()
    this.state = {
      auth: ''
    }
    // this.setToken = this.setToken.bind(this)
  }

  componentWillMount () {
    this.getToken()
  }

  async getToken () {
    try {
      let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN)
      if (!accessToken) {
        console.log('Did not get token')
      } else {
        this.verifyToken()
        this.navigate('Home')
      }
    } catch (error) {
      console.log("something's wrong!!!")
    }
  }

  async verifyToken () {
    let accessToken = token
    // try {
    //   // let response = await fe
    // }
  }
  // async componentDidMount () {
  //   const auth = await Auth.isUserAuthenticated()
  //   this.setState({auth})
  // }
  // async setToken (token) {
  //   await Auth.authenticateToken(token)
  //   this.setState({ auth: token })
  //   console.log('setToken')
  // }

  render () {
    const props = {
      auth: this.state.auth
      // setToken: this.setToken
    }
    return <Tabs screenProps={props} />
  }
}
export default App
