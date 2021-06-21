import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableNativeFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';
import { Share } from 'react-native';
import {ThemeContext} from '../themes/themes';

const Ingredient = ({route}) => { 
    const { dark } = useContext(ThemeContext);
    const itemID = route.params.id;
    const [meals, setMeals] = useState([{}]);
    const url = 'https://themealdb.com/api/json/v1/1/lookup.php?i=' + itemID;

    useEffect( () => { 
        fetch(url)
        .then(response => response.json())
        .then(response => { 
            setMeals(response.meals)
        }).catch(error => {
            alert("Please check your connection. API error.");
        });
    }, [])

    async function share(url) { 
        try {
            const result = await Share.share({ 
                message: 'Come view the recipe I found at ' + url
            })
        } catch (error) {
            alert(error.message);
        }
    }


    console.log(meals);
        
    return( 
        <ScrollView style={{backgroundColor: dark ? '#3f3f3f' : 'white' , height: '100%', marginBottom: 5}}>
            <Card style={{ backgroundColor: dark ? '#d3d3d3' : 'white', height: '100%', margin: 5, borderRadius: 15}}>
                <Card.Cover style={{width: '100%'}} source={{uri: meals[0].strMealThumb}} />
                <Text style={{fontSize: 16, marginTop: 5, marginBottom: 5}}>{meals[0].strMeal}</Text>
                <Text style={{fontSize: 16}}>Method</Text>
                <Text style={{fontSize: 14}}>{meals[0].strInstructions}</Text>
                <Card.Actions>
                    <Button onPress={() => share(url)}>Share</Button>
                </Card.Actions>
            </Card>
        </ScrollView>
    )
};

export default Ingredient;