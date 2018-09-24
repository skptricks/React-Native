/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image, ScrollView} from "react-native";

export default class HomeActivity extends Component {
  render() {
    return (
      <View style={styles.container}>

      <Text style={styles.headerText}>
         Vertical Scrollview Example.
       </Text>

        <ScrollView>
          <Image
            style={{ width: "100%", height: 200, resizeMode: "cover" }}
            source={require("./images/1.jpg")}
          />

          <Image
            style={{ width: "100%", height: 200, resizeMode: "cover" }}
            source={require("./images/2.jpg")}
          />

          <Image
            style={{ width: "100%", height: 200, resizeMode: "cover" }}
            source={require("./images/3.jpg")}
          />

          <Image
            style={{ width: "100%", height: 200, resizeMode: "cover" }}
            source={require("./images/4.jpg")}
          />

          <Image
            style={{ width: "100%", height: 200, resizeMode: "cover" }}
            source={require("./images/5.jpg")}
          />

          <Image
            style={{ width: "100%", height: 200, resizeMode: "cover" }}
            source={require("./images/6.jpg")}
          />

          <Image
            style={{ width: "100%", height: 200, resizeMode: "cover" }}
            source={require("./images/7.jpg")}
          />

          <Image
            style={{ width: "100%", height: 200, resizeMode: "cover" }}
            source={require("./images/8.jpg")}
          />

          <Image
            style={{ width: "100%", height: 200, resizeMode: "cover" }}
            source={require("./images/9.jpg")}
          />

          <Image
            style={{ width: "100%", height: 200, resizeMode: "cover" }}
            source={require("./images/10.jpg")}
          />
        </ScrollView>
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
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
});
