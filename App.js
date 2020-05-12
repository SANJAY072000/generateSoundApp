import React,{Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {Audio} from 'expo-av';

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
  constructor(props){
    super(props);
    this.state = {};
  }
  playSound=async number=>{
    const obj=new Audio.Sound();
    try{
      let url=soundsList[number];
      await obj.loadAsync(url);
      await obj.playAsync()
      .then(playBackStatus=>{
        setTimeOut(()=>{
          obj.unloadAsync();
        },playBackStatus.playableDurationMillis);
      })
      .catch(err=>console.log(err));
    }
    catch(err){
      console.log(err);
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.grid}>
          <Image source={require('./assets/logo.png')} style={styles.logo}/>
        <View style={styles.row}>
          <TouchableOpacity style={[{backgroundColor:listBackgroundColors[1]},styles.item]}
            onPress={()=>this.playSound('one')}>
            <Text style={styles.itemText}>One</Text>
          </TouchableOpacity>
        </View>
        </View>
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
  grid:{
    flex:1,
    margin:5
  },
  logo:{
    alignSelf:'center',
    marginTop:20
  },
  row:{
    flexDirection:'row',
  },
  item:{
    flex:1,
    height:110,
    alignItems:'center',
    justifyContent:'center',
    margin:2
  },
  itemText:{
    color:'#fff',
    fontSize:20
  }
});
