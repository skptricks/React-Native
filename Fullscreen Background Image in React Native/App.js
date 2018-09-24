/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ImageBackground } from "react-native";

export default class HomeActivity extends Component {
  render() {
    return (
    <ImageBackground  source={require('./background-image/image1.jpg')}  style={styles.container} >
      <View style={styles.container}>
         <Text style={styles.headerText}>
           Setting background image in react native application
         </Text>
      </View>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: null,
   height: null,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    color: "white",
    fontWeight: "bold"
  }
});
