import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import axios from 'axios'

export default class Home extends Component {
  constructor(props) {
    super(props);
      console.log("Fired constructor");
      this.state = {
        searchShow: '',
        trendingData: [],
        loading: false,
        page: 1,
        error: null,
        refreshing: false
        // detailsLoading: false,
        // detailsData: null
      }
      // this.getShowDetails = this.getShowDetails.bind(this)
     }


  componentWillMount(){
    // on mount fetch api data
    const query = `https://api.themoviedb.org/3/tv/popular?api_key=90234414e613d661340f75a5b7f57e08&language=en-US&page={page}&append_to_response=external_ids`
    this.setState({loading: true})
    axios.get(query)
      .then((response) => {
        let trendingData = response.data.results ? response.data.results : false
        // console.log(trendingData)
        if(trendingData) {
          this.setState({
            trendingData: trendingData,
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

  // triggered when user clicks a tv show
   showDetails = (item) => {
    // uses the navigation props passed from router
    this.props.navigation.navigate('ShowDetails', item)
    // this.getShowDetails(item.id)
    // this.getAllData(item.name)
  }

  

  render () {
    const url = "https://image.tmdb.org/t/p/w500/"
    // console.log(this.state.trendingData)
    return (
      <ScrollView>
        <List>
          <FlatList
              data={this.state.trendingData}
              renderItem={({item}) => (
                <ListItem
                  key={item.id}
                  avatar={{uri: `${url + item.poster_path}`}}
                  title={item.name}
                  onPress={() => this.showDetails(item)}
                  details={this.state.detailsData}
                />
              )}
              keyExtractor={item => item.id}
            />
        </List>
      </ScrollView>
    )
  }
}

