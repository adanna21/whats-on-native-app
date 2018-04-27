import React, { Component } from 'react'
import { FlatList, AsyncStorage } from 'react-native'
import { Card, Button, Text, List } from 'react-native-elements'
import axios from 'axios'

const ACCESS_TOKEN = 'access_token'

export default class WatchList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      error: '',
      data: []
    }
  }

  componentDidMount () {
    this.getToken()
  }

  async getToken () {
    try {
      let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN)
      if (!accessToken) {
        console.log('WATCHLIST Did not get token')
      } else {
        console.log('watchList!!!!', accessToken)
        this.getUserShows(accessToken)
      }
    } catch (error) {
      console.log("something's wrong!!!")
    }
  }

  getUserShows (token) {
    console.log('showsss')
    let query = 'https://agile-forest-84610.herokuapp.com/shows'
    this.setState({isLoading: true})
    axios.get(query, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
      .then((response) => {
        let data = response.data
        console.log('this is show', data)
        if (data.shows) {
          this.setState({
            data: data,
            isLoading: false,
            error: response.error || null
          })
        } else {
          console.log('no shows')
        }
      }).catch(error => {
      this.setState({
        error,
        isLoading: false
      })
    })
  }

  render () {
    // const show = this.props.data
    // const url = "https://image.tmdb.org/t/p/w500/"
    // console.log(show)
    return (
      <List style={{backgroundColor: 'white'}}>
          <Text>hhhhhhhh</Text>
        <FlatList
          data={this.props.data}
          renderItem={({item}) => (
            <Card
              title={item.name}
              image={{uri: `${url + item.poster_path}`}}
              // imageStyle={{}}
            >
              <Text style={{marginBottom: 5}}>
                  {item.overview}
              </Text>
              <Button
                icon={{name: 'add'}}
                backgroundColor='#03A9F4'
                // fontFamily='Lato'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Add to Watchlist' />
            </Card>
          )}
          keyExtractor={item => item.id}
        />
      </List>
    )
  }
}
