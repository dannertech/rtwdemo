import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/Screens/Home';
import BagScreen from './src/Screens/Bag';
import BrowseScreen from './src/Screens/Browse';
import HeartsScreen from './src/Screens/Hearts';
import MyRTRScreen from './src/Screens/MyRTR';

const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerTitle: 'RENT THE RUNWAY'}}>
        <Tab.Screen name="Home" component={HomeScreen} options={
          {
            tabBarIcon: () => {
              return(
                <Icon name="home-outline" size={24} />
              )
            }
          }
        }
        />
        <Tab.Screen name="Browse" component={BrowseScreen} options={
          {
            tabBarIcon: () => {
              return(
                <Icon name="search-outline" size={24} />
              )
            }
          }
        } />
        <Tab.Screen name="Bag" component={BagScreen} options={
         {
           tabBarIcon: () => {
             return(
               <Icon name="pricetag-outline" size={24} />
             )
           }
         } 
        }/>
        <Tab.Screen name="Hearts" component={HeartsScreen} options={{
          tabBarIcon: () => {
            return(
              <Icon name="heart-outline" size={24} />
            )
          }
        }}/>
        <Tab.Screen name="MyRTR" component={MyRTRScreen} options={
        {
          tabBarIcon: () => {
            return <Icon name="body-outline" size={24}/>
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default App;