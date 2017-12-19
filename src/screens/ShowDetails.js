import React, { Component } from 'react'
// import { StyleSheet, Text, View} from 'react-native'
import { ScrollView} from 'react-native';
import { Tile, List, ListItem, Button, Text  } from 'react-native-elements';

export default class Search extends Component {
  
  render () {
    // below data is persited through the nav state params set up in router.js
    const { backdrop_path, name, overview, vote_average, id } = this.props.navigation.state.params
    console.log(name)
    const url = "https://image.tmdb.org/t/p/w500/"
    return (
      <ScrollView>
        <Tile
          imageSrc={{uri: `${url + backdrop_path}`}}
          featured
          title={name}
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
