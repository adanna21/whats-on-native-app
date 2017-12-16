import { AsyncStorage } from 'react-native'

class Auth {
  // collects token and sets it in native storage
  static authenticateToken (token) {
    AsyncStorage.setItem('token', token)
  }

  // returns true or false if user authenticated
  static isUserAuthenticated () {
    return AsyncStorage.getItem('token') !== null
  }

  // removes token from storage
  static deauthenticateUser () {
    AsyncStorage.removeItem('token')
  }

  // gets token from storage
  static getToken () {
    return AsyncStorage.getItem('token')
  }
}

export default Auth
