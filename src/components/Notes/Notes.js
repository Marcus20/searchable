import React, { Component }  from 'react';
import {
    View,
    TextInput,
    StyleSheet} from 'react-native';

import rawList from '../../helpers/rawData';
import List from '../List/List';

export default class Notes extends Component {
    state = {
        text: 'Input placeholder',
        list: rawList
    }

    updateList() {

    }

    render() {
        return (
            <View>
                <TextInput 
                    style={styles.inputBox}
                    onChangeText={(text) => console.log(text)}
                    value={this.state.text}
                />

                <List 
                    myList={this.state.list}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    inputBox: {
      height: 40,
      backgroundColor: 'yellow',
      marginTop: 20
    }
});