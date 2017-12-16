import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'

export default class Login extends Component {
  constructor () {
    super()

    this.state = {
      username: '',
      password: '',
      errors: ''
    }
  }

  async onLogin () {
    try {
      let response = await fetch('https://agile-forest-84610.herokuapp.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          session: {
            username: this.state.username,
            password: this.state.password
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
        <TouchableOpacity onPress={this.onRegister.bind(this)}>
          <Text>Login</Text>
        </TouchableOpacity>
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
