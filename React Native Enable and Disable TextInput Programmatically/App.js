/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, Button, TextInput, } from "react-native";

export default class App extends Component {

  constructor() {
    super();
    this.state = { TextInputDisableStatus: true }
  }


  onPressButton = () => {   
      this.setState({ TextInputDisableStatus: false })   
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          placeholder="Enter Your Userame"
          underlineColorAndroid='transparent'
          style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus ? '#FFF' : '#C0C0C0' }]}
          editable={this.state.TextInputDisableHolder}
        />        

        <Button
          onPress={this.onPressButton}
          title="Update Username"
          color="#841584"
          accessibilityLabel="Update Username"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',    
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  TextInputStyle: {
    textAlign: 'center',
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#009688',  
    marginBottom: 10
  }
});
