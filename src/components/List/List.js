import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

const List = (props) => {

    return (
        <View>
            {
                props.myList.map((item, i) => {
                    return (
                    <View
                        key={i}
                        style={}
                    >
                        <TouchableOpacity>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    </View>
                    );
                })
            }
        </View> 
    )
}

export default List;