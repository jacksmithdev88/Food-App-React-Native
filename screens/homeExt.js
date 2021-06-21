import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect, useState } from 'react';
import { Button, View,  StyleSheet, Dimensions, Text} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Card, Paragraph, Title } from 'react-native-paper';
import {ThemeContext} from '../themes/themes';
import Realm from 'realm';

const homeExt = ({route}) => { 
    const { dark } = useContext(ThemeContext);
    const searchQuery = route.params.id;
    const searchType = route.params.searchType;
    const navigation = useNavigation();
    
    let [screenWidth, setWidth] = React.useState('');
    let [screenHeight, setHeight] = React.useState('');
    let [orientation, setOrientation] = React.useState('PORTRAIT');

    let url = "";
    const [meals, setMeals] = useState({});

    const MealSchema = {
        name: "Meal",
        properties: {
          mealID: "string",
          mealName: "string",
          mealCategory: 'string',
          mealThumb: 'string',
        },
        primaryKey: "mealID",
      };


    function layout(e) { 
        setWidth(Dimensions.get('window').width)
        setHeight(Dimensions.get('window').height)
        if(screenHeight > screenWidth) { 
            setOrientation('PORTRAIT');
        } else if(screenHeight < screenWidth) { 
            setOrientation('LANDSCAPE');
        }
    }

    useEffect(() => {
        Dimensions.addEventListener('change', (e) => {
            setHeight(e.window.height)
            setWidth(e.window.width)
        })

        if(screenHeight > screenWidth) { 
            setOrientation('PORTRAIT');
        } else if(screenHeight < screenWidth) { 
            setOrientation('LANDSCAPE');
        }
  }, []);

    if(searchType == "Category") { 
        url = 'https://themealdb.com/api/json/v1/1/filter.php?c=' + searchQuery;
    } else if(searchType == "Areas") { 
        url = 'https://themealdb.com/api/json/v1/1/filter.php?a=' + searchQuery;
    } else { 
        url = 'https://themealdb.com/api/json/v1/1/filter.php?i=' + searchQuery;
    }

    useEffect( () => { 
        fetchData()
    }, [])

    async function fetchData() { 
        try {
        let response = await fetch(url);
        response = await response.json();
        setMeals(response.meals);
        } catch { 
            alert("Please check your connection. API error.");
        }
        
    }

    const saveItem = async (id, mealname, thumb) => { 
    
        try { 
           const realm = await Realm.open({ 
               path: 'mealRealm',
               schema: [MealSchema],
           });
 
            realm.write(() => { 
                realm.create('Meal', {
                    mealID: id,
                    mealName: mealname,
                    mealCategory: '',
                    mealThumb: thumb,
                });
            });
            realm.close();
        } catch (err) { 
        }
    }


 
    return( 
        <View  style={{backgroundColor: dark ? '#3f3f3f' : 'white' }} onLayout={layout.bind(this)}>
            <FlatList  style={ styles.portrait } 
            key={orientation}
            data={meals}
            numColumns={orientation == 'PORTRAIT' ? 1 : 3}
            horizontal={false}
            keyExtractor={(x,i) => i}
            renderItem={({ item }) => 
            <ScrollView >
               
                <Card style={{backgroundColor: dark ? '#d3d3d3' : 'white', margin: 10}}>
               
                <Card.Cover style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-end'}} source={{uri: item.strMealThumb}} />
                <Title style={{margin: 5, marginTop: 10, marginBottom: 10}}>{item.strMeal}</Title>  
                <Button onPress={() => navigation.navigate('Recipe', {id : item.idMeal})} title='View'></Button>   
                <Button onPress={() => saveItem(item.idMeal, item.strMeal, item.strMealThumb)} title='Add to Favourites' style={{ margin: 10, borderColor: 'black'}} />    
                
                </Card>
            </ScrollView>
            
        } />
        </View> 
    )
};

const styles = StyleSheet.create({ 
   
    flatlist: {
        width: "100%",
        backgroundColor: 'black',
    },
    portrait: {
        width:'100%', 
        borderStyle: 'solid' , 
        borderColor: 'black', 
        borderRadius:10,
        marginBottom:5,  
        zIndex: 1

    },
    landscape :{ 
        width:'100%', 
        height: '100%',
        borderStyle: 'solid' , 
        borderColor: 'black', 
        borderRadius:10,
        margin:5, 
        paddingLeft: 5, 
        zIndex: 1,

    },
})

export default homeExt;