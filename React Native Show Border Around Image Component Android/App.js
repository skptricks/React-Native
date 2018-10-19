/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, Image } from "react-native";

export default class HomeActivity extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.addBorder}
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png"}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#e5e5e5"
  },
  addBorder: {
    width: 200,
    height: 200,
    resizeMode: "stretch",
    // Set border width.
    borderWidth: 2,
    // Set border color.
    borderColor: 'red',
    }
});
