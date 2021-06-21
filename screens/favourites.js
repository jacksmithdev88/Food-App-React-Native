import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-native';
import { Share, Text, View } from 'react-native';
import Realm from 'realm';
import { useNavigation } from '@react-navigation/core';
import { FlatList } from 'react-native';
import {ThemeContext} from '../themes/themes';
import { Card, Title } from 'react-native-paper';
import { ScrollView } from 'react-native';

const Favourites = () => { 
    const {dark} = useContext(ThemeContext);
    const [mealsdata, setMeals] = useState({});
    const navigation = useNavigation();

    const MealSchema = { 
        name: "Meal",
        properties: { 
            mealID: "string",
            mealName: "string",
            mealCategory: "string",
            mealThumb: "string",
        },
        primaryKey: "mealID",
    };

    async function deleteItem(id){
        const realm = await Realm.open({
            path: 'mealRealm',
            schema: [MealSchema],
        });

        realm.write(() => { 
            realm.delete(realm.objectForPrimaryKey('Meal', id));
        })
        fetchData();
    }

    async function fetchData() { 
        const realm = await Realm.open({ 
            path: 'mealRealm',
            schema: [MealSchema],
        });

        const mealGet = realm.objects('Meal');
        const mealsJson = Array.from(mealGet);

        setMeals(mealsJson);
    }

    useEffect( () => { 
        fetchData();
    }, [])


    useEffect(() => { 
        const focus = navigation.addListener('focus', () => { 
            fetchData();
        })
        return focus;
    }, [navigation])
    


    return( 
        <View  style={{height: '100%' ,backgroundColor: dark ? '#3f3f3f' : 'white' }}>

            <FlatList
            style={{backgroundColor: dark ? '#3f3f3f' : 'white'}}
            data={mealsdata}
            horizontal={false}
            contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}
            keyExtractor={(x,i) => i}
            renderItem={({ item }) => 
            <ScrollView >
               
                <Card style={{backgroundColor: dark ? '#d3d3d3' : 'white', margin: 10}}>
               
                <Card.Cover style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-end'}} source={{uri: item.mealThumb}} />
                <Title style={{margin: 5, marginTop: 10, marginBottom: 10}}>{item.mealName}</Title>  
                <Button onPress={() => navigation.navigate('Recipe', {id : item.mealID})} title='View'></Button>   
                <Button onPress={() => deleteItem(item.mealID)} title='Remove from Favourites' style={{ borderColor: 'black'}} />    
                
                </Card>    
           
            </ScrollView>

        } />
        </View> 
    )
};

export default Favourites;