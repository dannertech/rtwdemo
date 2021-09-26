import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import CardComponent from '../Components/CardComponent';
import CardScroll from '../Components/CardScroll';

const data = [{
    title: "Fendi",
    imageSource: require('../Images/fendi.png')
},
{
    title: "Gucci",
    imageSource: require('../Images/gucci.png')
},
{
    title: 'Prada',
    imageSource: require('../Images/prada.png')
}
];

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
                <ScrollView>
                <View>
                    <CardComponent title="Featured Brand" imageSource={require('../Images/nike-supreme-af1.png')} cardColor='red'/>
                </View>
                <FlatList 
                horizontal={true}
                data={data}
                renderItem={({item}) => <CardScroll imageSource={item.imageSource} imageTitle={item.title}/>}
                />
                <View>
                    <CardComponent title="Reign Supreme With Supreme" imageSource={require('../Images/pngegg-supreme.png')}/>
                </View>
                </ScrollView>
        </View>
    )
};

export default Home;