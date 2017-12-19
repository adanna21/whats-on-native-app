import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'

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
            email: this.state.email,
            password_confirmation: this.state.password_confirmation
          }
        })
      })
      let res = await response.text()
      if (response.status >= 200 && response.status < 300) {
        console.log('res is:' + res)
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
