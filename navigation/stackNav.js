import React, { useContext, useState } from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import Ingredient from '../screens/ingredient';
import Search from '../screens/search'
import Home from '../screens/home';
import Favourites from '../screens/favourites';
import homeExt from '../screens/homeExt';
import { Switch } from 'react-native';
import {ThemeContext} from '../themes/themes';
const stack = createStackNavigator();
    


const recipeStack = () => {        
    const { dark, toggle } = useContext(ThemeContext);
    return( 
        <stack.Navigator headerMode='screen' screenOptions={{
            headerStyle: {
                backgroundColor: '#2196F3',
            },
            headerTitleStyle: { 
                color:'white',
            },
        }}>
            <stack.Screen name='Search' component={Search} options={{ 
                headerRight: () => (
                    <Switch trackColor={{ false: '#767577', true: '#ccc'}} thumbColor={dark ? '#fff' : '#f4f3f4' } onValueChange={toggle} value={dark} />
                )
            }} />
            <stack.Screen name='Recipe' component={Ingredient} options={{ 
                headerRight: () => (
                    <Switch trackColor={{ false: '#767577', true: '#ccc'}} thumbColor={dark ? '#fff' : '#f4f3f4' } onValueChange={toggle} value={dark} />
                )
            }} />
        </stack.Navigator>
    );
}

const homeStack = () => { 
    const { dark, theme, toggle } = useContext(ThemeContext);
    return(
        <stack.Navigator headerMode='screen' screenOptions={{
            headerStyle: {
                backgroundColor: '#2196F3',
            },
            headerTitleStyle: { 
                color:'white',
            }
        }}>
            <stack.Screen name="Home" component={Home} options={{ 
                headerRight: () => (
                    <Switch trackColor={{ false: '#767577', true: '#ccc'}} thumbColor={dark ? '#fff' : '#f4f3f4' } onValueChange={toggle} value={dark} />
                )
            }}/>
            <stack.Screen name="Meals" component={homeExt} options={{ 
                headerRight: () => (
                    <Switch trackColor={{ false: '#767577', true: '#ccc'}} thumbColor={dark ? '#fff' : '#f4f3f4' } onValueChange={toggle} value={dark} />
                )
            }} />
            <stack.Screen name='Recipe' component={Ingredient} options={{ 
                headerRight: () => (
                    <Switch trackColor={{ false: '#767577', true: '#ccc'}} thumbColor={dark ? '#fff' : '#f4f3f4' } onValueChange={toggle} value={dark} />
                )
            }} />
        </stack.Navigator>
    )
}

const favStack = () => { 
    const { dark, toggle } = useContext(ThemeContext);
    return(
        <stack.Navigator headerMode='screen' screenOptions={{
            headerStyle: {
                backgroundColor: '#2196F3',
            },
            headerTitleStyle: { 
                color:'white',
            }
        }}>
            <stack.Screen name="Favourites" component={Favourites} options={{ 
                headerRight: () => (
                    <Switch trackColor={{ false: '#767577', true: '#ccc'}} thumbColor={dark ? '#fff' : '#f4f3f4' } onValueChange={toggle} value={dark} />
                )
            }} />

            <stack.Screen name='Recipe' component={Ingredient} options={{ 
                headerRight: () => (
                    <Switch trackColor={{ false: '#767577', true: '#ccc'}} thumbColor={dark ? '#fff' : '#f4f3f4' } onValueChange={toggle} value={dark} />
                )
            }} />
        </stack.Navigator>
    )
}


export {recipeStack, homeStack, favStack};