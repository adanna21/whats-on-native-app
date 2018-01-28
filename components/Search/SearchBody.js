import React, { Component } from 'react'
import { FlatList, AsyncStorage } from 'react-native'
import { Card, Button, Text, List } from 'react-native-elements'

const ACCESS_TOKEN = 'access_token'

export default class SearchBody extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: false,
      isLoading: false,
      error: '',
      data: [],
      token: ''
    }
  }

  componentDidMount () {
    this.getToken()
    console.log("props!!", this.props.mainProps.auth)
  }

  async getToken () {
    try {
      let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN)
      if (!accessToken) {
        console.log('Did not get token')
        alert('Please Login or Register to add Items')
      } else {
        console.log('watch!!!!', accessToken.token)
        this.setState({
          loggedIn: true,
          token: accessToken
        })
        // this.getUserShows(accessToken)
      }
    } catch (error) {
      console.log("something's wrong!!!")
    }
  }

  async addShow (item) {
    console.log(this.state.accessToken.token)
      try {
        let response = await fetch('https://agile-forest-84610.herokuapp.com/shows', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${this.props.screenProps.currentToken}`
          },
          body: JSON.stringify({
            name: item.name,
            trakt_id: item.id,
            tvdb_id: item.id,
            image_url: item.poster_path
          })
        })
        let res = await response.text()
        if (response.status >= 200 && response.status < 300) {
          this.setState({error: ''})
          console.log('res': res )
          this.props.navigation.navigate('WatchList')
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
    const show = this.props.data
    const url = 'https://image.tmdb.org/t/p/w500/'
    // console.log('search bod',show)
    return (
      <List style={{backgroundColor: 'white'}}>
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
                {this.props.mainProps.auth
                  ? <Button
                    icon={{name: 'add'}}
                    backgroundColor='#03A9F4'
                  // fontFamily='Lato'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Add to Watchlist'
                    onPress={() => this.addShow(item)} />
                :
                  <Button
                    icon={{name: 'add'}}
                    backgroundColor='#03A9F4'
                  // fontFamily='Lato'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Login to Add Show' />
                }

              </Card>
            )}
            keyExtractor={item => item.id}
          />
        </List>
    )
  }
}
