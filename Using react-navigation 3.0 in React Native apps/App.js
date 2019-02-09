/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeActivity from './src/component/HomeActivity';
import ProfileActivity from './src/component/ProfileActivity';

const AppNavigator = createStackNavigator(
{
  Home: { screen: HomeActivity },
  Profile: { screen: ProfileActivity },
},
{
    initialRouteName: 'Home',
}

);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer  />;
  }
}