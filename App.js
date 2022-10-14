import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [counter, setCounter] = useState(0);
  const add= () => setCounter(c => c+1)
  const res = () => setCounter( c => c-1)

  return (
    <View style={styles.container}>

      <Text style={styles.counter}>{ counter }</Text>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.btn} onPress={add}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={res}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer:{
    justifyContent: 'center',
    height: 50,
    width: '100%',
    paddingHorizontal:10,
    flexDirection: 'row'

  },
  btn:{
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#5B89A6',
  },
  text:{
    fontSize:40,
    color: 100,
    paddingHorizontal:10,
  },

  count:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },

  counter:{
    fontSize: 130,
  },
});
