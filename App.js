import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import bg from "./assets/images/bg.jpeg"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={bg} style={styles.background}>
        <View style={styles.circle}>
          <View style={styles.innerCircle}/>
        </View>

        <View>
          <View style={styles.crossLine} />
          <View style={[styles.crossLine, styles.crossLineReversed]}/>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#242D34",
  },
  background:{
    width:"100%",
    height:"100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle:{
    width:75,
    height:75,
    backgroundColor: "white",
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin:10
  },
  innerCircle:{
    width:50,
    height:50,
    backgroundColor: "#242D34",
    borderRadius: 50,
  },
  crossLine:{
    position: "absolute",
    width: 10,
    height:70,
    backgroundColor: "white",
    borderRadius: 5,
    transform:[{
      rotate: "45deg"
    }]
  },
  crossLineReversed:{
    transform:[{
      rotate: "-45deg",
    }]   
  }
});
 