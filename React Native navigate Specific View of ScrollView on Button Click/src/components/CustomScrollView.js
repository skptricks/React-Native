import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView, Dimensions, TouchableOpacity, TextInput, StyleSheet, Platform } from 'react-native';

var deviceWidth = Dimensions.get('window').width;

export default class CustomScrollView extends Component
{
  constructor()
  {
    super();
    this.state = { getTextInput: '' }
  }

  moveToPage()
  {
    if( this.state.getTextInput === '' )
    {
      alert('Please enter some text');
    }
    else if(( this.state.getTextInput > React.Children.count( this.props.children )) || ( this.state.getTextInput <= 0 ))
    {
      alert('View not found...');
    }
    else
    {
      this.refs.scrollView.scrollTo({ x: (( this.state.getTextInput - 1 ) * deviceWidth ), y: 0, animated: true });
    }  
  }
  
  render()
  {
    return(
      <View style = { styles.container }>
        <ScrollView ref = "scrollView" showsHorizontalScrollIndicator = { false } horizontal = { true } pagingEnabled = { true }>
          { this.props.children }
        </ScrollView>
        
        {
          (React.Children.count( this.props.children ) <= 1)
          ?
            null
          :
            (<View style = { styles.secondLayoutContainer }>
              <View style = { styles.textInutHolder }>
                <TextInput onChangeText = {(text) => this.setState({ getTextInput: text })} style = { styles.textInputLayout } underlineColorAndroid = "transparent"/>
                <TouchableOpacity activeOpacity = { 0.8 } onPress = { this.moveToPage.bind(this) } style = { styles.buttonLayout }>
                  <Text style = { styles.textColor }>GoTo View</Text>
                </TouchableOpacity>
              </View> 
            </View>)
        }
      </View>
    );
  }
}



const styles = StyleSheet.create(
{
  container: {
    flex: 1,
    position: 'relative',
    marginTop: (Platform.OS === 'ios') ? 20 : 0
  }, 
   secondLayoutContainer:{    
    width: '100%',    
  },
  textInutHolder: {
    position: 'relative',
    margin: 15
  },
  textInputLayout: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: 40,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    
  },
  buttonLayout :  {
    backgroundColor: '#2196f3',
    height: 39,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    right: 0,
    top: 0,    
  },
});

