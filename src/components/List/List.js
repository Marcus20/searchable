import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class List extends Component {
    state = {
        list: [
            "Chicago Bulls",
            "Los Angeles Lakers"
        ]
    }

    render() {
        return (
            <View>
                {
                    this.state.list.map((item, i) => {
                        return (
                        <View key={i}>
                            <Text>{item}</Text>
                        </View>
                        );
                    })
                }
            </View> 
        )
    }
}