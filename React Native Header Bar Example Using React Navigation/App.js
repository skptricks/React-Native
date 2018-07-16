/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';


class HomeActivity extends Component {

// Adding header title, color and font weight
static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#03A9F4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
       <View style={styles.container}>
        <Text style={styles.headerText} >Home Screen</Text>
      </View>
    );
  }
}


// Adding Header Bar In React Native
export default createStackNavigator({
  Home: {
    screen: HomeActivity,
  },
});


YellowBox.ignoreWarnings(

      ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'

    ]);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },


});
