import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import CardComponent from '../Components/CardComponent';

const Home = () => {
    return(
        <View>
            <View style={{backgroundColor: '#AACFCA', width: '100%'}}>
                <Text style={{alignSelf: 'center', marginVertical: 10}}>MOST-LOVED PLAN: 8 ITEMS FOR $99</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center', borderBottomWidth: 1}}>
                    <TouchableOpacity style={{backgroundColor: '#F3EDE6', margin: 10, paddingVertical: 20, paddingHorizontal: 40, borderRadius: 10}}>
                        <Text>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: '#F3EDE6', margin: 10, paddingVertical: 20, paddingHorizontal: 40, borderRadius: 10}}>
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                </View> 
                <View>
                    <CardComponent title="Featured Brand" imageSource={require('../Images/nike-supreme-af1.png')} cardColor='red'/>
                </View>
                <View>
                    <CardComponent title="Reign Supreme With Supreme" imageSource={require('../Images/pngegg-supreme.png')}/>
                </View>
        </View>
    )
};

export default Home;