/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions,ScrollView } from 'react-native';
import Image from 'react-native-scalable-image';


export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
       <ScrollView>
        <Text style={styles.headerText}> Example - 1  </Text>

        <Image
         width={Dimensions.get('window').width} // height will be calculated automatically
         source={{uri: 'https://scontent-sin6-1.cdninstagram.com/vp/ec3d2768cf3fea9f46b00f8d063496e8/5C829D3E/t51.2885-15/e35/39955778_132983540981108_5035102725543527132_n.jpg'}}
       />

       <Text style={styles.headerText}> Example - 2  </Text>
       <Image
        width={Dimensions.get('window').width} // height will be calculated automatically
        source={{uri: 'https://scontent-sin6-1.cdninstagram.com/vp/b332dfe6afb70fb22c62b17477eb61f0/5C726F8B/t51.2885-15/e35/14736276_1142115749229627_5661486251610472448_n.jpg'}}
      />

        <Text style={styles.headerText}> Example - 3  </Text>
        <Image
         width={Dimensions.get('window').width} // height will be calculated automatically
        source={{uri: 'https://scontent-sin6-1.cdninstagram.com/vp/fe70bc2b191352f4be36dec3795b9473/5C75594D/t51.2885-15/e35/14733312_1248595268517155_9138785640962326528_n.jpg'}}
        />

        <Text style={styles.headerText}> Example - 4  </Text>
        <Image
         width={Dimensions.get('window').width} // height will be calculated automatically
         source={{uri: 'https://scontent-sin6-1.cdninstagram.com/vp/dded6cee88aabdb420342d34abcfe549/5C742150/t51.2885-15/e35/36738130_269184743837735_4994613981004955648_n.jpg'}}
        />
      </ScrollView>
    </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
});
