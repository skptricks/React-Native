

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      //defalt false and if true cannon will be fired
      shoot: false,
    };
  }
  componentDidMount() {
    //Time out to fire the cannon
    setTimeout(() => {
      this.setState({ shoot: true });
    }, 1000);
  }
  _handlePress() {
    //To fire the cannon again. You can make your own logic here
    this.setState({ shoot: false });
    setTimeout(() => {
      this.setState({ shoot: true });
    }, 1000);
  }


  render() {
    return (
      <View style={styles.Container}>

        <View style={styles.cardLayoutView}>
          <Text style={styles.paragraphHeading}>Congratulation!!</Text>
          <Text style={styles.paragraph}>You have recieved 500 Rs Cashback</Text>
          <Image style={styles.logo} source={{ uri: 'asset:/images/gift.png' }} />
          <Button
            onPress={() => this._handlePress()}
            title="Claim Now"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        
        {this.state.shoot ? (
          <ConfettiCannon count={200} explosionSpeed={350} origin={{ x: -10, y: 10 }} />
        ) : null}

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
  cardLayoutView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff9c4',
  }, 
  paragraphHeading: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  logo: {
    height: 130,
    width: 130,
    marginBottom: 20,
  },
});