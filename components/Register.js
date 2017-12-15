import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View} from 'react-native'

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
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='username'
          onChangeText={(val) => this.setState({username: val})}
          style={styles.input}
        />
        <TextInput
          placeholder='email'
          onChangeText={(val) => this.setState({email: val})}
          style={styles.input}
        />
        <TextInput
          placeholder='password'
          onChangeText={(val) => this.setState({password: val})}
          style={styles.input}
        />
        <TextInput
          placeholder='password_confirmation'
          onChangeText={(val) => this.setState({password_confirmation: val})}
          style={styles.input}
        />
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
