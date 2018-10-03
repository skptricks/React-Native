/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert, YellowBox} from "react-native";
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

export default class HomeActivity extends Component {

  constructor(props) {
     super(props);
     YellowBox.ignoreWarnings([
      'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
    ]);
   }

  render() {
    return (
      <MenuProvider style={{ flexDirection: "column", padding: 30 }}>
        <Menu onSelect={value => alert(`You Clicked : ${value}`)}>

          <MenuTrigger  >
          <Text style={styles.headerText}>DropDown Menu</Text>
          </MenuTrigger  >

          <MenuOptions>
            <MenuOption value={"Login"}>
              <Text style={styles.menuContent}>Login</Text>
            </MenuOption>
            <MenuOption value={"Register"}>
              <Text style={styles.menuContent}>Register</Text>
            </MenuOption>
            <MenuOption value={"Download"}>
              <Text style={styles.menuContent}>Download</Text>
            </MenuOption>
            <MenuOption value={"Logout"}>
              <Text style={styles.menuContent}>Logout</Text>
            </MenuOption>
            <MenuOption value={3} disabled={true}>
              <Text style={styles.menuContent}>Disabled Menu</Text>
            </MenuOption>
          </MenuOptions>

        </Menu>
      </MenuProvider>
    );
  }
}

const styles = StyleSheet.create({
    headerText: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold"
  },
  menuContent: {
    color: "#000",
    fontWeight: "bold",
    padding: 2,
    fontSize: 20
  }
});
