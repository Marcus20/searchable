import React, { Component }  from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet
} from 'react-native';

export default class SearchBar extends Component {
    state = {
        text: 'Input placeholder',
    }

    render() {
        return (
            <View>
                <TextInput 
                    style={styles.inputBox}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    inputBox: {
      height: 40
    }
});