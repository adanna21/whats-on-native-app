import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, AsyncStorage } from 'react-native'
// import {StackNavigator, NavigationActions} from 'react-navigation'
import { Button } from 'react-native-elements'
// import axios from 'axios'
import Auth from '../modules/Auth'

const ACCESS_TOKEN = 'access_token'
export default class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      auth: '',
      errors: ''
    }
  }

  // store token in storage, using async bc storage is outside of class so it has to make request 
  async storeToken (accessToken) {
    try {
      let currenToken = JSON.parse(accessToken).token
      await AsyncStorage.setItem(ACCESS_TOKEN, currenToken)
      
      console.log("login access token", JSON.parse(accessToken).token)
      this.props.screenProps.token(currenToken)
      // this.getToken()
      // console.log("token is:" + token)
    } catch (error) {
      console.log('did not store token')
    }
  }
  
  // gettoken called in storeToken method
  // async getToken () {
  //   try {
  //     let token = await AsyncStorage.getItem(ACCESS_TOKEN)
  //     token = JSON.parse(token)
  //     console.log("token is:" + token)
  //     console.log(token.token)
  //     return token.token
  //   } catch (errors) {
  //     console.log('did not get token')
  //   }
  // }
  // async componentDidMount () {
  //   const auth = await Auth.getToken() 
  //   this.setState({auth})
  // }

  async onLogin () {
    try {
      let response = await fetch('https://agile-forest-84610.herokuapp.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
      let res = await response.text()
      if (response.status >= 200 && response.status < 300) {
        this.setState({error: ''})
        let accessToken = res
        this.storeToken(accessToken)
        console.log('res token:' + accessToken)
        // this.props.screenProps.setToken(res.token)
        this.props.navigation.navigate('WatchList')
        console.log(this.props.navigation)
        this.setState({auth: accessToken})
      } else {
        let errors = res
        throw errors
      }
    } catch (errors) {
      this.setState({errors: errors})
      console.log('errors are:' + errors)
    }
  }

  render () {
    // console.log("settings tab", this.props.navigation)
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='username'
          onChangeText={(val) => this.setState({username: val})}
          style={styles.input}
        />
        <TextInput
          placeholder='password'
          onChangeText={(val) => this.setState({password: val})}
          // secureTextEntry={true}
          style={styles.input}
        />
        <Button
          raised
          title='Login'
          onPress={this.onLogin.bind(this)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    fontSize: 30,
    color: '#fff'
  }
})
