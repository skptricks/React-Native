import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView, Dimensions, TouchableOpacity, TextInput, StyleSheet, Platform } from 'react-native';
import CustomScrollView from "./src/components/CustomScrollView.js";

var deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <CustomScrollView>
        <View style={styles.firstView}>
          <Text style={styles.headerText}>First View</Text>
        </View>

        <View style={styles.secondView}>
          <Text style={styles.headerText}>Second View</Text>
        </View>

        <View style={styles.thirdView}>
          <Text style={styles.headerText}>Third View</Text>
        </View>

        <View style={styles.forthView}>
          <Text style={styles.headerText}>Forth View</Text>
        </View>
      </CustomScrollView>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",

    },
    headerText: {
      fontSize: 30,
      textAlign: "center",
      margin: 10,
      color: 'white',
      fontWeight: "bold"
    },

    firstView: {
      width: deviceWidth,
      backgroundColor: '#F44336',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    secondView: {
      width: deviceWidth,
      backgroundColor: '#9C27B0',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    thirdView: {
      width: deviceWidth,
      backgroundColor: '#3F51B5',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    forthView: {
      width: deviceWidth,
      backgroundColor: '#009688',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
  });

