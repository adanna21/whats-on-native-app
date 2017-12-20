import React, { Component } from 'react'
import { StyleSheet, View, Text, Keyboard } from 'react-native'
import {Container, Content, Icon} from 'native-base'
import axios from 'axios'
import SearchHeader from '../../components/Search/SeachHeader'
import SearchBody from '../../components/Search/SearchBody'

// code was heavily influenced by Unsure Programmer's React App in 40 mins tutorial
// https://www.youtube.com/watch?v=5l2pN8w5uDk&t=320s
export default class Search extends Component {
  static navigationOptions = {
    header: null,
  }
  state = {
    searchShow: '',
    data: [],
    loading: false,
    page: 1,
    error: null,
    refreshing: false
  }

  // below function qeryies the movie db using axios
  // if data is found it is added to the state otherwise it returns false
  showSearch = () => {
    Keyboard.dismiss()
    const showName = this.state.searchShow.replace(/\s+/g, '%20').toLowerCase()
    console.log(showName)
    const query = `https://api.themoviedb.org/3/search/tv?api_key=90234414e613d661340f75a5b7f57e08&language=en-US&query=${showName}&page={page}`
    this.setState({loading: true})
    axios.get(query)
      .then((response) => {
        let data = response.data.results ? response.data.results : false
        // console.log(data)

        if(data) {
          this.setState({
            data: data,
            loading: false,
            refreshing: false,
            error: response.error || null
          })
        }
      }).catch((error => {
        this.setState({
          error,
          loading: false
        })
      }))
  }

  render () {
    return (
      <Container>
        <SearchHeader
          value={this.state.searchShow}
          onChangeText={(searchShow) => this.setState({searchShow})}
          showSearch={this.showSearch}
        />
        <Content>
          <SearchBody data={this.state.data} />
        </Content>
      </Container>
    )
  }
}