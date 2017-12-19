import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';
import RootNavigator from './components/navigation/RootNavigator'
import { Tabs } from './src/config/router'
import Auth from './src/modules/Auth'

class App extends Component {
  constructor () {
    super()
    this.state = {
      auth: ''
    }
    this.setToken = this.setToken.bind(this)
  }

  async componentDidMount () {
    const auth = await Auth.isUserAuthenticated()
    this.setState({auth})
  }
  async setToken (token) {
    await Auth.authenticateToken(token)
    this.setState({ auth: token })
    console.log('setToken')
  }

  render () {
    const props = {
      auth: this.state.auth,
      setToken: this.setToken
    }
    return <Tabs screenProps={props} />
  }
}
export default App
