import React, { Component }  from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';


import List from '../List/List';

export default class Notes extends Component {
    state = {
        searchText: '',
    }

    render() {
        return (
            <View>
                <TextInput 
                    style={styles.inputBox}
                    onChangeText={text => this.setState({searchText: text})}
                    value={this.state.searchText}
                />

                <List 
                    searchTerm={this.state.searchText}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    inputBox: {
      height: 40,
      backgroundColor: 'yellow',
      marginTop: 20,
    },
});