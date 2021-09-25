import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const CardComponent = (props) => {
    return(
        <View style={{alignSelf: 'center', borderRadius: 10}}>
            <Text style={{fontSize: 18, fontWeight: '600', marginVertical: 10, letterSpacing: 3}}>{props.title}</Text>
            <Image source={props.imageSource} style={{borderRadius: 10, backgroundColor: props.cardColor == 'red' ? '#B93837' :  '#F3EDE6', width: 320, height: 210}} />
        </View>
    )
};

export default CardComponent;