import React, { Component } from 'react'
// import { StyleSheet, Text, View} from 'react-native'
import { ScrollView} from 'react-native';
import { Tile, List, ListItem, Button, Text  } from 'react-native-elements';
import EpisodeDetails from './EpisodeDetails'
import axios from 'axios'

export default class Search extends Component {
  constructor () {
    super()
    this.state = {
      detailsLoading: false,
      detailsData: null,
      error: null
    }
  }

  componentDidMount() {
    this.getAllData()
  }
  // uses id of show to query for show details
  getAllData = () => {
    const name = this.props.navigation.state.params.name
    // console.log("name", name)
    const showName = name.replace(/\s+/g, '%20').toLowerCase()
    const query = `http://api.tvmaze.com/singlesearch/shows?q=${showName}&embed=episodes`
    this.setState({detailsLoading: true})
    axios.get(query)
      .then((response) => {
        // console.log(response.data._embedded.episodes)
        let detailsData = response.data._embedded.episodes ? response.data._embedded.episodes : false
        
        if(detailsData) {
          // console.log("details.......", detailsData)
          this.setState({
            detailsData: detailsData,
            detailsLoading: false,
            error: response.error || null
          })
        }
      }).catch((error => {
        this.setState({
          error,
          detailsLoading: false
        })
      }))
  }

  render () {
    // below data is persited through the nav state params set up in router.js
    const { backdrop_path, name, overview, vote_average, id } = this.props.navigation.state.params
    // console.log(this.props.navigation.state.params)
    // console.log(name)
    // screenProps={props}
    const url = "https://image.tmdb.org/t/p/w500/"
    return (
      <ScrollView>
        <Tile
          imageSrc={{uri: `${url + backdrop_path}`}}
          featured
          title={name}
          imageStyle={{"resizeMode": "cover"} }
          // caption={vote_average}
        >
        </Tile>
        <List>
        <ListItem
            title="Overview"
            hideChevron
          />
          <Text>
          {overview}
          </Text>
        </List>
        <EpisodeDetails details={this.state.detailsData} />
        {/* <List>
          <ListItem
            title="Username"
            rightTitle={login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Birthday"
            rightTitle={dob}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={location.city}
            hideChevron
          />
        </List> */}
      </ScrollView>
    )
  }
}
