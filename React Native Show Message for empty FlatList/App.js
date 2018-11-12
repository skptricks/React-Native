/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from "react";
 import { Platform, StyleSheet, FlatList, Text, View, Alert, Dimensions } from "react-native";

 export default class HomeActivity extends Component {
   constructor(props) {
     super(props);

     this.state = {
       FlatListItems: [
      /*  { key: "Skptricks" },
         { key: "Sumit" },
         { key: "Amit" },
         */
       ]
     };
   }

   FlatListItemSeparator = () => {
     return (
       <View style={{ height: 1, width: "100%", backgroundColor: "#607D8B" }} />
     );
   };

   GetItem(item) {
     Alert.alert(item);
   }

  ListEmptyView = () => {
    return (
      <View style={styles.headerText}>
        <Text style={{textAlign: 'center',fontSize:20, fontWeight:'bold'}}> No Data Available...</Text>
      </View>

    );
  }

   render() {
      return (
        <View style={styles.container}>
          <FlatList
             data={ this.state.FlatListItems }
             ItemSeparatorComponent = {this.FlatListItemSeparator}
             renderItem={({item}) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.key)} > {item.key} </Text>}
             ListEmptyComponent={this.ListEmptyView}
          />
        </View>
     );
   }

 }


 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    padding: 10,
    marginTop: Dimensions.get('window').height / 2,
    height: 40,
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 45,
  }
});
