/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from "react";
 import { Platform, StyleSheet, View, Image, TouchableOpacity, Alert, Text, Button } from "react-native";
 import { AnimatedEmoji } from 'react-native-animated-emoji';

 export default class App extends Component {

    defaultval = [] ;

    constructor(props) {
      super(props);

      // Disable warning message
      console.disableYellowBox = true;

      this.state = { emoji: this.defaultval};
    }

    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    showFloatingReaction = () => {
      let emojiCount = this.state.emoji.length;
      let emojis = [...this.state.emoji,emojiCount+1];
      this.setState({emoji : emojis}, () => {
         console.log(this.state.emoji)
      });
    };

    render() {

      let displayFloatingEmojiReaction = this.state.emoji.map(x => (
        <AnimatedEmoji
          index={'emoji.key'} // index to identity emoji component
          style={{ top: this.getRandomInt(200, 500) }} // start bottom position
          name={'sweat_smile'} // emoji name
          size={30} // font size
          duration={4000} // ms
          onAnimationCompleted={this.onAnimationCompleted} // completion handler
        />
      ));

      return (
        <View style={styles.container}>

          {displayFloatingEmojiReaction}

          <View style={{  position: 'absolute', width: '100%',  bottom:10, flex : 1,  alignItems: 'center', }}>
          <Button
            onPress={this.showFloatingReaction}
            title="Click Me"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          </View>

        </View>
      );
    }
 }


 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
