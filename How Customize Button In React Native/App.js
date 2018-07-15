/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

export default class App extends Component {
  //Binding the function with class
  buttonClickListener = () => {
    alert("Clicked On Button !!!");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Set Button Color In React Native.</Text>

        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
          <Button
            onPress={this.buttonClickListener}
            title="Button One"
            color="#00B0FF"
          />
        </View>

        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
          <Button
            onPress={this.buttonClickListener}
            title="Button Two"
            color="#EC407A"
          />
        </View>

        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
          <Button
            onPress={this.buttonClickListener}
            title="Button Three"
            color="#1DE9B6"
          />
        </View>

        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
          <Button
            onPress={this.buttonClickListener}
            title="Button Three"
            color="#FF3D00"
          />
        </View>
        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
          <Button
            onPress={this.buttonClickListener}
            title="Button Three"
            color="#90A4AE"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  button: {
    padding: 20,
    fontSize: 15,
    fontFamily: "arial",
    width: 400,
    height: 40,
    textAlign: "center"
  }
});
