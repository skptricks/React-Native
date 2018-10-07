/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Linking } from "react-native";

export default class HomeActivity extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Click Here To Open Website URL"
          onPress={() => Linking.openURL("https://www.skptricks.com")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#e5e5e5"
    },
});
