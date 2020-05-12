import React,{Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {Audio} from 'expo';

const listBackgroundColors={
  1:'#01CBC6',
  2:'#8B78E6',
  3:'#E74292',
  4:'#BB2CD9',
  5:'#EA7773',
  6:'#F4C724',
  7:'#FBD28B',
  8:'#218F76',
  9:'#45CE30',
  10:'#4834DF'
};

const soundsList={
  'one':require('./assets/one.wav'),
  'two':require('./assets/two.wav'),
  'three':require('./assets/three.wav'),
  'four':require('./assets/four.wav'),
  'five':require('./assets/five.wav'),
  'six':require('./assets/six.wav'),
  'seven':require('./assets/seven.wav'),
  'eight':require('./assets/eight.wav'),
  'nine':require('./assets/nine.wav'),
  'ten':require('./assets/ten.wav')
};


export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Spanish Number App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
