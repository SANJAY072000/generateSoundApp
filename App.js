import React,{Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
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
      await obj.loadAsync(require(url));
      await obj.playAsync()
      .then(playBackStatus=>{
        // obj.unloadAsync();
      })
      .catch(err=>console.log(err));
    }
    catch(err){
      console.log(err);
    }
  }
  render(){
    return (
      <ScrollView style={styles.container}>
        <View style={styles.grid}>
          <Image source={require('./assets/logo.png')} style={styles.logo}/>
        <View style={styles.row}>
          <TouchableOpacity style={[{backgroundColor:listBackgroundColors[1]},styles.item]}
            onPress={()=>this.playSound('one')}>
            <Text style={styles.itemText}>One</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor:listBackgroundColors[2]},styles.item]}
            onPress={()=>this.playSound('two')}>
            <Text style={styles.itemText}>Two</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[{backgroundColor:listBackgroundColors[3]},styles.item]}
            onPress={()=>this.playSound('three')}>
            <Text style={styles.itemText}>Three</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor:listBackgroundColors[4]},styles.item]}
            onPress={()=>this.playSound('four')}>
            <Text style={styles.itemText}>Four</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[{backgroundColor:listBackgroundColors[5]},styles.item]}
            onPress={()=>this.playSound('five')}>
            <Text style={styles.itemText}>Five</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor:listBackgroundColors[6]},styles.item]}
            onPress={()=>this.playSound('six')}>
            <Text style={styles.itemText}>Six</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[{backgroundColor:listBackgroundColors[7]},styles.item]}
            onPress={()=>this.playSound('seven')}>
            <Text style={styles.itemText}>Seven</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor:listBackgroundColors[8]},styles.item]}
            onPress={()=>this.playSound('eight')}>
            <Text style={styles.itemText}>Eight</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[{backgroundColor:listBackgroundColors[9]},styles.item]}
            onPress={()=>this.playSound('nine')}>
            <Text style={styles.itemText}>Nine</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor:listBackgroundColors[10]},styles.item]}
            onPress={()=>this.playSound('ten')}>
            <Text style={styles.itemText}>Ten</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    marginTop:35
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
