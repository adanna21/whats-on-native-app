import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'native-base'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Settings from '../screens/Settings'
import WatchList from '../screens/WatchList'
import ShowDetails from '../screens/ShowDetails'
import Login from '../screens/Login'
import Register from '../screens/Register'

export const ShowStack = StackNavigator({
  // this StackNavigator is nested inside the TabNavigator for ShowDetails
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Popular This Week'
    }
  },
  ShowDetails: {
    screen: ShowDetails,
    navigationOptions: ({ navigation }) => ({
      // in order t gain access to the navigation prop pass it to title
      title: `${navigation.state.params.name}`
    })
  }
})

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings'
    }
  },
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      // in order to gain access to the navigation prop pass the route name
      title: `${navigation.state.routeName}`
    })
  },
  Register: {
    screen: Register,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.routeName}`
    })
  },
  WatchList: {
    screen: WatchList,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.routeName}`
    })
  },
  Home: {
    // here ShowStack StackNavigator is called
    screen: ShowStack,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.routeName}`
    })
  }
})

export const Tabs = TabNavigator({
  Home: {
    // here ShowStack StackNavigator is called
    screen: ShowStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => <Icon name="search" size={35} color={tintColor} />
    }
  },
  WatchList: {
    screen: WatchList,
    navigationOptions: {
      tabBarLabel: 'WatchList',
      tabBarIcon: ({ tintColor }) => <Icon name="eye" size={35} color={tintColor} />
    }
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => <Icon name="settings" size={35} color={tintColor} />
    }
  }
})
 