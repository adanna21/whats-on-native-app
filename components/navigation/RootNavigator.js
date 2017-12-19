import React, { Component } from 'react'
import {Text} from 'react-native'
import {Footer, FooterTab, Button, Icon} from 'native-base'
import {TabNavigator} from 'react-navigation'
import HomeTab from './HomeTab'
import SearchTab from './SearchTab'
import SettingsTab from './SettingsTab'
import WatchListTab from './WatchListTab'

const RootNavigator = TabNavigator({
  Home: {screen: HomeTab},
  Search: {screen: SearchTab},
  Settings: {screen: SettingsTab},
  WatchList: {screen: WatchListTab}
}, {
  tabBarPosition: 'bottom',
  tabBarComponent: props => {
    return (
      <Footer>
        <FooterTab>
          <Button 
            vertical
            active={props.navigation.index === 0}
            onPress={() => props.navigation.navigate('Home')}
            >
            <Icon name='home' />
            <Text>Home</Text>
          </Button>
          <Button 
            vertical
            active={props.navigation.index === 1}
            onPress={() => props.navigation.navigate('Search')}
            >
            <Icon name='search' />
            <Text>Search</Text>
          </Button>
          <Button 
            vertical
            active={props.navigation.index === 2}
            onPress={() => props.navigation.navigate('WatchList')}
            >
            <Icon name='eye' />
            <Text>Watch List</Text>
          </Button>
          <Button 
            vertical
            active={props.navigation.index === 3}
            onPress={() => props.navigation.navigate('Settings')}
            >
            <Icon name='settings' />
            <Text>Settings</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
})

export default RootNavigator
