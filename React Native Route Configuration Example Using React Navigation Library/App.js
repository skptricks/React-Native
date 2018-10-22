/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, YellowBox } from "react-native";
import { createStackNavigator } from "react-navigation";


class HomeActivity extends Component {
  /* The header config from HomeScreen is now here */
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#00a152"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
{
  Home: { screen: HomeActivity  }
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

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
