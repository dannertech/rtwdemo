import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const CardComponent = (props) => {
    return(
        <View>
            <Text>{props.title}</Text>

        </View>
    )
};

export default CardComponent;