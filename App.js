import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Splash from './components/Splash'
import Login from './components/Login'
import Register from './components/Register'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isLoading: true
    }
  }

  fetchShow () {
    fetch('https://api-staging.trakt.tv/shows/game-of-thrones?extended=full', {
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': 'dc60acabe3d5d953393a0e332d8d7d3c5e3c7b7710158b5223526e79f1cf597a'
      }
    })
      .then(res => res.json())
      .then(res => console.log('res ', res))
      .catch(err => console.log('error ', err))
  }
  getShow () {
    fetch('https://agile-forest-84610.herokuapp.com/shows', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': 'V18A2txYHtwZrjMpZBzVqwBL',
        'Authentication': 'Token V18A2txYHtwZrjMpZBzVqwBL'
      },
      body:  JSON.stringify({
        "name": "Glee",
        "trakt_id": "uuuuu",
        "tvdb_id": "hhhhh",
        "image_url": "jjjkk"
      })
    })
  }
  // async fetchShow () {
  //   try {
  //     let response = await fetch(
  //       'https://api-staging.trakt.tv/shows/game-of-thrones?extended=full', {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'trakt-api-version': '2',
  //           'trakt-api-key': 'dc60acabe3d5d953393a0e332d8d7d3c5e3c7b7710158b5223526e79f1cf597a'
  //         }
  //       })
  //     let responseJson = await response.json()
  //     return responseJson.shows
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  render () {
    return (
      // <Splash />
      <Register />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
