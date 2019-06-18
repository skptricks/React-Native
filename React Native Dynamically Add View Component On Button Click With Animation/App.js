
import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, Image, Animated, ScrollView, StyleSheet, View, Text } from 'react-native';


export default class App extends Component {

  constructor() {
    super();

    this.state = { valueArray: [], disabled: false }
    this.index = 0;
    this.animatedValue = new Animated.Value(0);
  }

  addMore = () => {
    this.animatedValue.setValue(0);
    let newlyAddedValue = { index: this.index }
    this.setState({ disabled: true, valueArray: [...this.state.valueArray, newlyAddedValue] }, () => {
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        }
      ).start(() => {
        this.index = this.index + 1;
        this.setState({ disabled: false });
      });
    });
  }


  render() {
    const animationValue = this.animatedValue.interpolate(
      {
        inputRange: [0, 1],
        outputRange: [-59, 0]
      });

    let newArray = this.state.valueArray.map((item, key) => {
      if ((key) == this.index) {
        return (
          <Animated.View key={key} style={[styles.viewHolder, { opacity: this.animatedValue, transform: [{ translateY: animationValue }] }]}>
            <Text style={styles.headerText}>Row {item.index}</Text>
          </Animated.View>
        );
      }
      else {
        return (
          <View key={key} style={styles.viewHolder}>
            <Text style={styles.headerText}>Row No :- {item.index}</Text>
          </View>
        );
      }
    });

    return (
      <View style={styles.container} >
        <ScrollView>
          <View style={{ flex: 1, padding: 4 }}>
            {
              newArray
            }
          </View>
        </ScrollView>

        <TouchableOpacity activeOpacity={0.8} style={styles.buttonDesign} disabled={this.state.disabled} onPress={this.addMore}>
          <Image source={require('./images/addButton.png')} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    },
    viewHolder: {
      height: 55,
      backgroundColor: '#ff4081',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 4
    },
    headerText: {
      color: 'white',
      fontSize: 25
    },
    buttonDesign: {
      position: 'absolute',
      right: 25,
      bottom: 25,
      borderRadius: 30,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonImage: {
      resizeMode: 'contain',
      width: '100%',
    }
  });

