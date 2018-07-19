import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

import Notes from "./src/components/Notes/Notes";

export default class App extends Component {

  render() {
    return (
      <View>
        <Notes />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
