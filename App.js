import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import store from "./app/store";

import Login from './app/screens/Login/Login';
import Signup from './app/screens/Signup/Signup';

export default class App extends Component {
  render() {
    return(
      <View styles = {style.container}>
        <Signup/>
        <Login/>
        <Notes/>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container : {
    backgroundColor = '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});