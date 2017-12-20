import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import Auth from '../modules/Auth'


// code done with help from https://www.youtube.com/watch?v=btga7TjVJh8
export default class Register extends Component {
  constructor () {
    super()

    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: []
    }
  }

  async onRegister () {
    try {
      let response = await fetch('https://agile-forest-84610.herokuapp.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: this.state.username,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            email: this.state.email
          }
        })
      })
      let res = await response.text()
      if (response.status >= 200 && response.status < 300) {
        console.log('res is:' + res)
        // await Auth.authenticateToken(res.token)
        // const isAuth = await Auth.isUserAuthenticated()
        // console.log(isAuth)
        // this.setState({
        //   auth: isAuth
        // })
      } else {
        let errors = res
        throw errors
      }
    } catch (errors) {
      console.log('errors are:' + errors)
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <FormInput
          placeholder='username'
          onChangeText={(val) => this.setState({username: val})}
        />
        <FormInput
          placeholder='email'
          onChangeText={(val) => this.setState({email: val})}
        />
        <FormInput
          placeholder='password'
          onChangeText={(val) => this.setState({password: val})}
          // secureTextEntry={true}
        />
        <FormInput
          placeholder='confirm password'
          onChangeText={(val) => this.setState({password_confirmation: val})}
          // secureTextEntry={true}
        />
        <Button
          raised
          title='Register'
          onPress={this.onRegister.bind(this)} />
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
