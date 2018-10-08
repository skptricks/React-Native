/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, SectionList, Alert } from "react-native";

export default class HomeActivity extends Component {

/* Function display user data, when user click on sectionlist items */
  GetSectionListItem=(item)=>{
      Alert.alert(item)
  }

  render() {
    return (
      <View style={styles.container}>
      <SectionList
       sections={[
         { title: 'Username Starts with A', data: ['Amit', 'Anand', 'Abhishek'] },
         { title: 'Username Starts with B', data: ['Bikash', 'Bingo', 'Baby'] },
         { title: 'Username Starts with C', data: ['cat', 'cathy', 'Charan'] },
         { title: 'Username Starts with D', data: ['Deepak', 'Deepti', 'Dhananjay'] },
         { title: 'Username Starts with F', data: ['Fatay', 'Fanny', 'Fresher'] },
       ]}
       renderSectionHeader={ ({section}) => <Text style={styles.SectionHeader}> { section.title } </Text> }
       renderItem={ ({item}) => <Text style={styles.SectionListItemS} onPress={this.GetSectionListItem.bind(this, item)}> { item } </Text> }
       keyExtractor={ (item, index) => index }
     />
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
    SectionHeader:{
      backgroundColor : '#64B5F6',
      fontSize : 20,
      padding: 5,
      color: '#fff',
      fontWeight: 'bold'
   },
    SectionListItemS:{
      fontSize : 16,
      padding: 6,
      color: '#000',
      backgroundColor : '#F5F5F5'
  }
});
