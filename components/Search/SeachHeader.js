import React, { Component } from 'react'
import { StyleSheet, Text, View} from 'react-native'
import {Header, Item, Icon, Input} from 'native-base'

export default class SearchHeader extends Component {
  render () {
    return (
      <Header
        style={{height: 80}}
        searchBar
        rounder
      >
        <Item>
          <Icon name='ios-search' />
          <Input
            placeholder='Search for a tv show'
            returnKeyType='search'
            onChangeText={this.props.onChangeText}
            onSubmitEditing={this.props.showSearch}
          />
        </Item>
      </Header>
    )
  }
}
