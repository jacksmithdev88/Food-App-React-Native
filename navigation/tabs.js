import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Favourites from '../screens/favourites';
import Home from '../screens/home';
import Search from '../screens/search';
import { favStack, homeStack, recipeStack } from './stackNav';

const Tab = createBottomTabNavigator();

const Tabs = () => { 
    return( 
        <Tab.Navigator>
            <Tab.Screen 
            name="Home" 
            component={homeStack} 
            options={{
                title:"Home",
                tabBarIcon: ({focused}) => ( 
                    <View>
                        <Image source={require('../icons/home.png')}
                        resizeMode='contain' 
                        style={{
                            width: 35,
                            height: 35,
                        }}
                        />
                    </View>
                )
            }}
            />

            <Tab.Screen 
            name="Search" 
            component={recipeStack} 
            options={{
                tabBarIcon: ({focused}) => ( 
                    <View>
                        <Image source={require('../icons/search.png')}
                        resizeMode='contain' 
                        style={{
                            width: 35,
                            height: 35,
                        }}
                        />
                    </View>
                )
            }}
            />

        <Tab.Screen 
            name="Favourites" 
            component={favStack} 
            options={{
                tabBarIcon: ({focused}) => ( 
                    <View>
                        <Image source={require('../icons/favourites.png')}
                        resizeMode='contain' 
                        style={{
                            width: 35,
                            height: 35,
                        }}
                        />
                    </View>
                )
            }}
            />

        </Tab.Navigator>
    )
}
export default Tabs;