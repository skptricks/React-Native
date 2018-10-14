/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {  Platform,  StyleSheet,  Text,  View,  Button,  Image,  Animated} from "react-native";
import SnackBar from "./component/SnackBar";

export default class HomeActivity extends Component {


  DisplaySnackBar = () => {
    this.refs.ReactNativeSnackBar.ShowSnackBarFunction("Snackbar example");
  };

  render() {
    return (
      <View style={styles.container}>

        <Button onPress={this.DisplaySnackBar} title=" Show SnackBar ">
        </Button>

        <SnackBar ref="ReactNativeSnackBar" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5"
  }
});
