import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle } from 'react-native-svg';
export default function App() {
  return (
    // Background Linear Gradient
    <LinearGradient colors={['transparent', '#00CCF9']} style={styles.backgroundColor}>
      <View style={styles.container}>


        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
          <circle cx="70" cy="70" r="62.5" stroke="black" stroke-width="15" />
        </svg>
        <text style={styles.heading}>GLOW YOUR BUSSINES</text>
        <text style={styles.text}>We will help you to grow your business using
          online server</text>
        <View style={styles.viewBtn}>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text }>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text }>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
    padding: '1rem'
  },
  viewBtn: {
    width: '100%',
    'flex-direction': 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },
  backgroundColor: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  button: {
    color:'#000',
    marginTop: 30,
    backgroundColor: '#E3C000',
    borderRadius: 5,
    height: 40,
    width: 120,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: '700'
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
  },
});