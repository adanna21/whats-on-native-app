import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Card, Button, Text, List } from 'react-native-elements'
export default class SearchBody extends Component {
  render () {
    const show = this.props.data
    const url = "https://image.tmdb.org/t/p/w500/"
    // console.log(show)
    // const data = this.props.data.map((d, i) => {d.name});
    // console.log('this is from searchbody', show[0])
    // show.map(elem => console.log(elem.name))
    return (
        <List style={{backgroundColor: 'white'}}>
          <FlatList
            data={this.props.data}
            renderItem={({item}) => (
              <Card
                title={item.name}
                image={{uri: `${url + item.poster_path}`}}
                imageStyle={{}}
                >
                <Text style={{marginBottom: 10}}>
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
