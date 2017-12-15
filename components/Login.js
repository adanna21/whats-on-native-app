import React, { Component } from 'react'
import { StyleSheet, Text, View} from 'react-native'

export default class Login extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What's On!?</Text>
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
  title: {
    fontSize: 40,
    color: '#fff'
  }
})