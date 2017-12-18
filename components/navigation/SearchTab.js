import React, { Component } from 'react'
import { StyleSheet, View, Text, Keyboard } from 'react-native'
import {Container, Content, Icon} from 'native-base'
import axios from 'axios'
import SearchHeader from '../Search/SeachHeader'
import SearchBody from '../Search/SearchBody'

// code was heavily influenced by Unsure Programmer's React App in 40 mins tutorial
// https://www.youtube.com/watch?v=5l2pN8w5uDk&t=320s
export default class SearchTab extends Component {
  static navigationOptions = {
    header: null,
  }
  state = {
    searchShow: '',
    showData: {},
    showFound: false
  }

  // below function qeryies the movie db using axios
  // if data is found it is added to the state otherwise it returns false
  showSearch = () => {
    Keyboard.dismiss()
    const showName = this.state.searchShow.replace(/\s+/g, '%20').toLowerCase()

    const query = `https://api.themoviedb.org/3/search/tv?api_key=90234414e613d661340f75a5b7f57e08&language=en-US&query=${showName}&page=1`

    axios.get(query)
      .then((response) => {
        let data = response.data.results ? response.data.results : false
        // console.log(data)

        if(data) {
          this.setState({
            showData: data,
            showFound: true
          })
        }
      }).catch((error => {
        this.setState({
          showFound: false
        })
      }))
  }

  renderContent = () => {
    if(this.state.showFound) {
      return this.state.showData.map(show => {
        // console.log("seartab", show)
        <SearchBody key={show.id} showData={show} />
      })
    }else {
      console.log('show not found')
    }
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
          {this.renderContent()}
        </Content>
      </Container>
    )
  }
}