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
                    placeholder={'Enter a team name'}
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
      backgroundColor: '#f7f0d9',
      marginTop: 20,
      color: '#000',
      paddingLeft: 10,
    },
});