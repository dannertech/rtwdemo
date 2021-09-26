import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const CardScroll = (props) => {
    return(
        <View style={{marginHorizontal: 10, marginVertical: 20}}>
            <Image source={props.imageSource} style={{height: 120, width: 120, borderRadius: 10}}/>
        </View>
    )
};

export default CardScroll;