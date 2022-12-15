import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/Home';
import LoginScreen from './src/Login';
import Navigator from './src/Navigation';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (

        <Navigator loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
