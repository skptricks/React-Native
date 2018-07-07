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
          Show Image From Local Resource Folder.
        </Text>       
		
	
		<Image
		 style={{width: '100%', height: 200,resizeMode : 'contain' }}
         source={{uri :'asset:/images/android-image.jpg'}}  
		/> 
	
		
		
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
