

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, TextInput } from 'react-native';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      textInputHolder: 0,
      sumHolder: 0,
      randomNumberOne: 0,
      randomNumberTwo: 0,
    }
  }

  componentDidMount() {
    this.generateCaptcha();
  }

  generateCaptcha = () => {
    var numberOne = Math.floor(Math.random() * 100) + 1;
    var numberTwo = Math.floor(Math.random() * 100) + 1;
    var sum = numberOne + numberTwo;
    this.setState({ randomNumberOne: numberOne, randomNumberTwo: numberTwo });
    this.setState({ sumHolder: sum });
  }

  validateCaptchaCode = () => {
    var temp = this.state.randomNumberOne + this.state.randomNumberTwo;
    if (this.state.textInputHolder == temp) {
      //Captcha match
      Alert.alert("Captcha Matched");
    }
    else {
      //Captcha not match
      Alert.alert("Captcha NOT Matched");
    }
    // Calling captcha function, to generate captcha code
    this.generateCaptcha();
  }


  render() {
    return (
      <View style={styles.Container}>

        <View style={styles.captchaContainerView}>
          <Text style={{ fontSize: 22, textAlign: 'center', color: '#000' }}>
            {this.state.randomNumberOne} {"+"} {this.state.randomNumberTwo} {"= "}
          </Text>

          <TextInput
            placeholder="Enter Captcha"
            onChangeText={data => this.setState({ textInputHolder: data })}
            style={styles.textInputStyle}
            underlineColorAndroid='transparent'
          />

          <TouchableOpacity onPress={this.generateCaptcha} >
            <Image source={{ uri: "asset:/images/refresh.png" }}
              style={{ width: 40, height: 35, resizeMode: 'contain', margin: 20 }} />
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.button} onPress={this.validateCaptchaCode} >
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 24,
    textAlign: 'center',
    padding: 5,
  },
  captchaContainerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor: '#01579b',
    width: '90%',
    height: 100,
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#e1f5fe'
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: 150,
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
  },
  button: {
    width: '80%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#ec407a',
    borderRadius: 3,
    marginTop: 20
  },
});