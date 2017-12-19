import { AsyncStorage } from 'react-native'

class Auth {
  // collects token and sets it in native storage
  static authenticateToken (token) {
    console.log('about to set token')
    AsyncStorage.setItem('token', token)
    console.log('set token')
  }

  // returns true or false if user authenticated
  static async isUserAuthenticated () {
    const token =  await AsyncStorage.getItem('token')
    console.log(token)
    return token !== null
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
