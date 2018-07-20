import React from 'react';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import rawList from '../../helpers/rawData';

const List = (props) => {

    return (
        <ScrollView>
            {
                rawList
                .filter(item => item.toLowerCase().indexOf(props.searchTerm.toLowerCase()) >= 0)
                .map((item, i) => {
                    return (
                    <View
                        key={i}
                        style={styles.listItem}
                    >
                        <TouchableOpacity>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    </View>
                    );
                })
            }
        </ScrollView> 
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderBottomWidth: 1,
        padding: 10
    }
})

export default List;