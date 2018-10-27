/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeActivity from './component/activity/HomeActivity';
import ProfileActivity from './component/activity/ProfileActivity';

const RootStack = createStackNavigator(
{
  Home: { screen: HomeActivity },
  Profile: { screen: ProfileActivity },
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

YellowBox.ignoreWarnings(
      ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
]);
