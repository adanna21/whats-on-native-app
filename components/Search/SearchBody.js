import React, { Component } from 'react'
import { StyleSheet, View, FlatList, Image} from 'react-native'
import { Container, Content, Icon, ListItem, List, Text } from 'native-base'

export default class SearchBody extends Component {
  render () {
    const show = this.props.data
    const url = "https://image.tmdb.org/t/p/w500/"
    console.log(show)
    // const data = this.props.data.map((d, i) => {d.name});
    // console.log('this is from searchbody', show[0])
    // show.map(elem => console.log(elem.name))
    return (
        <List style={{backgroundColor: 'white'}}>
          <FlatList
            data={this.props.data}
            renderItem={({item}) => (
              <ListItem style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Image source={{uri: `${url + item.poster_path}`}} style={{height: 150, width: 150}}/>
                <Text>{item.name}</Text>
              </ListItem>
            )}
            keyExtractor={item => item.id}
          />
        </List>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    color: '#fff'
  }
})

