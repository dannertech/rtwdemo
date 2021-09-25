import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const CardComponent = (props) => {
    return(
        <View>
            <Text>{props.title}</Text>
            <Image source={props.imageSource} style={{borderRadius: 10, height: '50%', width: '50%'}} />
        </View>
    )
};

export default CardComponent;