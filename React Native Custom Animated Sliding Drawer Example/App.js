import React, { Component } from 'react';
import { AppRegistry, Text, View, Animated, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';


const DRAWER_WIDTH = 300;

export default class App extends Component {

  constructor() {
    super();

    this.state = { hidePassword: true }
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }


  render() {

    const animatedValue = this.animatedValue.interpolate(
      {
        inputRange: [0, 1],
        outputRange: [DRAWER_WIDTH - 46, 0]
      });

    return (
      <View style={styles.container}>
        <View style={styles.textBoxBtnHolder}>
          <TextInput underlineColorAndroid="transparent" secureTextEntry={this.state.hidePassword} style={styles.textBox} />
          <TouchableOpacity activeOpacity={0.8} style={styles.visibilityBtn} onPress={this.managePasswordVisibility}>
            <Image source={(this.state.hidePassword) ? require('./assets/hide.png') : require('./assets/view.png')} style={styles.btnImage} />
          </TouchableOpacity>
        </View>
      </View>
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
      fontSize: 25,
      textAlign: "center",
      margin: 10,
      color: 'black',
      fontWeight: "bold"
    },
    textBoxBtnHolder:
  {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  textBox:
  {
    fontSize: 18,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: 'grey',
    borderRadius: 5
  },

  visibilityBtn:
  {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },

  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  }

  });

