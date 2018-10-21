/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, Button, Picker, Alert } from "react-native";

export default class HomeActivity extends Component {

  constructor(){
     super();
     this.state={
       PickerSelectedVal : ''
     }
   }

   getSelectedPickerValue=()=>{
      Alert.alert("Selected country is : " +this.state.PickerSelectedVal);
    }


  render() {
    return (
      <View style={styles.container}>
      <Picker
           selectedValue={this.state.PickerSelectedVal}
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >

           <Picker.Item label="India" value="India" />
           <Picker.Item label="USA" value="USA" />
           <Picker.Item label="China" value="China" />
           <Picker.Item label="Russia" value="Russia" />
           <Picker.Item label="United Kingdom" value="United Kingdom" />
           <Picker.Item label="France" value="France" />

         </Picker>

         <Button title="Get Selected Picker Value" onPress={ this.getSelectedPickerValue } />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin :30
  },
});
