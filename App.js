import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import bg from "./assets/images/bg.jpeg"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={bg} style={styles.background}>
        <Text>ola</Text>
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
  },
  background:{
    width:"100%",
    height:"100%"
  }
});
 