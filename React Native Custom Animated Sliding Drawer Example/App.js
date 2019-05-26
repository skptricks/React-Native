import React, { Component } from 'react';
import { AppRegistry, Text, View, Animated, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';


const DRAWER_WIDTH = 300;

export default class App extends Component {
  
  constructor() {
    super();

    this.animatedValue = new Animated.Value(0);
    this.state = { disabled: false }
    this.toggleFlag = 0;
  }

  toggleDrawer = () => {
    if (this.toggleFlag == 0) {
      this.setState({ disabled: true }, () => {
        Animated.timing(
          this.animatedValue,
          {
            toValue: 1,
            duration: 250
          }
        ).start(() => {
          this.setState({ disabled: false });
          this.toggleFlag = 1;
        });
      });
    }
    else {
      this.setState({ disabled: true }, () => {
        Animated.timing(
          this.animatedValue,
          {
            toValue: 0,
            duration: 250
          }
        ).start(() => {
          this.setState({ disabled: false });
          this.toggleFlag = 0;
        });
      });
    }
  }


  render() {

    const animatedValue = this.animatedValue.interpolate(
      {
        inputRange: [0, 1],
        outputRange: [DRAWER_WIDTH - 46, 0]
      });

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Animated Sliding Drawer Tutorial.</Text>
        <Animated.View style={[styles.drawer, { transform: [{ translateX: animatedValue }] }]}>
          <TouchableOpacity disabled={this.state.disabled} onPress={this.toggleDrawer} style={{ padding: 8 }}>
            <Image source={require('./images/menu.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
          </TouchableOpacity>
          <View style={styles.drawerContainer}>
            <Text style={styles.menuLayout}>Buy Now</Text>
            <Text style={styles.menuLayout}>Offer Zone</Text>
            <Text style={styles.menuLayout}>Qualty Product</Text>
            <Text style={styles.menuLayout}>50% Off</Text>
          </View>
        </Animated.View>
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
    drawer: {
      position: 'absolute',
      top: (Platform.OS == 'ios') ? 20 : 0,
      right: 0,
      bottom: 0,
      width: DRAWER_WIDTH,
      flexDirection: 'row'
    },
    drawerContainer: {
      flex: 1,
      backgroundColor: '#f53b3b',
      alignItems: 'center'
    },
    menuLayout: {
      marginBottom: 1,
      backgroundColor: '#4CAF50',
      width: '100%',
      fontSize: 25,
      color: 'white',
      padding: 10,
    }

  });
