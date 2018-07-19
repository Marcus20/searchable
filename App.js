import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

// Custom Components
import List from "./src/components/List/List";
import SearchBar from "./src/components/Search/SearchBar";

export default class App extends Component {

  render() {
    return (
      <View>
        <SearchBar />
        <List />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    height: 40
  }
});
