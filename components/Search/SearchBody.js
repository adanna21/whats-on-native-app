import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'
import { Container, Content, Icon, ListItem, List } from 'native-base'

export default class SearchBody extends Component {
  render () {
    const show = this.props.data
    console.log(show)
    // const data = this.props.data.map((d, i) => {d.name});
    // console.log('this is from searchbody', show[0])
    // show.map(elem => console.log(elem.name))
    return (
        <List>
          <FlatList
            data={this.props.data}
            renderItem={(item) => {
              console.log(item)
              // <ListItem
              //   // roundAvatar
              //   title={`${item.name}`}
              //   // avatar={{uri: item.backdrop_path}}
              // />
            }}
            keyExtractor={() => {item.id}}
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