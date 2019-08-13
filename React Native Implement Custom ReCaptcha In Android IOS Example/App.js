

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, TextInput } from 'react-native';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      textInputHolder: 0,
      captchaHolder: 0,
      randomNumberOne: 0,      
    }
  }

  componentDidMount() {
    this.generateCaptcha();
  }

  generateCaptcha = () => {
    var numberOne = Math.floor(Math.random() * 1000000) + 1;   
    var captchaCode = numberOne ;
    this.setState({ randomNumberOne: numberOne });
    this.setState({ captchaHolder: captchaCode });
  }

  validateCaptchaCode = () => {
    var temp = this.state.randomNumberOne ;
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

          <View style={ styles.captchaChildContainer}>
            <Image
              style={{ width: 180, height: 60, resizeMode: 'contain' }}
              source={{ uri: 'https://dummyimage.com/150x40/0091ea/fafafa.png&text=' + this.state.randomNumberOne }}
            />
            <TouchableOpacity onPress={this.generateCaptcha} >
              <Image source={{ uri: "asset:/images/refresh.png" }}
                style={{ width: 40, height: 35, resizeMode: 'contain', margin: 20 }} />
            </TouchableOpacity>
          </View>


          <View  style={ styles.captchaChildContainer}>
            <TextInput
              placeholder="Enter Captcha"
              onChangeText={data => this.setState({ textInputHolder: data })}
              style={styles.textInputStyle}
              underlineColorAndroid='transparent'
            />
          </View>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderColor: '#01579b',
    width: '90%',
    height: 200,
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#e1f5fe'
  },
  captchaChildContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '80%',
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