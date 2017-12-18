import React, { Component } from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { Container, Content, Icon, ListItem } from 'native-base'

export default class SearchBody extends Component {
  render () {
    console.log(this.props.showData)
    const show = this.props.showData
    console.log(show)
    // const showData = this.props.showData.map((d, i) => {d.name});
    // console.log('this is from searchbody', show[0])
    // show.map(elem => console.log(elem.name))
    return (
        <Content>
        <ListItem>
          <Text>{elem.name}</Text>
        </ListItem>
        <ListItem></ListItem>
       </Content>
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