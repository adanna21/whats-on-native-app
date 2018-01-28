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
      auth: false,
      currenToken: ''
    }
    this.removeToken = this.removeToken.bind(this)
    this.setCurrentToken = this.setCurrentToken.bind(this)
  }

  componentDidMount () {
    this.getToken()
  }

  async getToken () {
    try {
      let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN)
      if (!accessToken) {
        console.log('Did not get token')
      } else {
        this.setState({
          auth: true
        })
        // this.verifyToken()
        this.navigate('Home')
      }
    } catch (error) {
      console.log("something's wrong!!!")
    }
  }

  async removeToken () {
    try {
      await AsyncStorage.removeItem(ACCESS_TOKEN)
      this.setState({
        auth: false,
        token: ''
      })
      // this.props.navigation.navigate('Home')
      alert('you have logged out')
    } catch (error) {
      console.log('something went wrong ' + error)
    }
  }

  setCurrentToken (token) {
    this.setState({
      currentToken: token
    })
  }

  async verifyToken () {
    // let accessToken = token
    // this.setState(accessToken)
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
      auth: this.state.auth,
      token: this.setCurrentToken,
      remove: this.removeToken,
      currenToken: this.state.currenToken
    }
    return <Tabs screenProps={props} />
  }
}
export default App
