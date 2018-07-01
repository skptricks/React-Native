/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Show Image From HTTP URL In React Native.
        </Text>       
		<Image
		 style={{width: '100%', height: 200,resizeMode : 'stretch' }}
	     source={{uri: 'https://4.bp.blogspot.com/-krdeTqQLML8/Wyf2oV7eedI/AAAAAAAABpI/OZ759swV7L8wWtt2pwBXIgp6aPz33r01gCLcBGAs/s400/fist%2Bapp.jpg'}} 
		/>  
		{/*
		<Image
		 style={{width: '100%', height: 200,resizeMode : 'stretch' }}
	     source={require('./images/react-image.png')}  
		/> 
		*/}
		
      </View>
	  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
	fontWeight: 'bold'
  },
  
});
