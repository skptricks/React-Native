/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";

export default class HomeActivity extends Component {
  constructor(props) {
    super(props);
    // State helps to Store and Display User Input
    this.state = {
      TextInputValue: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
      {/* TextInput Component helps to accept user inputs via keyboard...*/ }
        <TextInput
          style={{ height: 40, width: "95%" }}
          onChangeText={TextInputValue => this.setState({ TextInputValue })}
        />
        {/* Display the user inputs */}
        <Text style={styles.headerText}>
          {" Display User Input: " + this.state.TextInputValue}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }
});
