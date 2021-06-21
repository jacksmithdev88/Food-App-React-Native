import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect } from 'react';
import { FlatList, TextInput, View, StyleSheet, Button, Dimensions, Text  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Title, Paragraph } from 'react-native-paper';
import {ThemeContext} from '../themes/themes';
import Realm from 'realm';

const Search = () => { 
    const { dark } = useContext(ThemeContext);
    let [mealName, setMeal] = React.useState('');
    let [mealArray, setArray] = React.useState([]);
    let [screenWidth, setWidth] = React.useState('');
    let [screenHeight, setHeight] = React.useState('');
    let [orientation, setOrientation] = React.useState('PORTRAIT');
    const navigation = useNavigation();


    const MealSchema = {
        name: "Meal",
        properties: {
          mealID: "string",
          mealName: "string",
          mealCategory: "string",
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


    const fetchCall = () => {
        const mealQuery = mealName;
        fetch('https://themealdb.com/api/json/v1/1/search.php?s=' + mealQuery)
        .then(response => response.json())
        .then(response => { 
            setArray(response.meals)
        }).catch(error => {
            alert("Please check your connection. API error.");
        });
    }


    const saveItem = async (id, mealname, category, thumb) => { 
    
        try { 
           const realm = await Realm.open({ 
               path: 'mealRealm',
               schema: [MealSchema],
           });

           let meal1;
            realm.write(() => {
            meal1 = realm.create("Meal", {
                mealID: id,
                mealName: mealname,
                mealCategory: category,
                mealThumb: thumb,
            });
            

            });

            realm.close();

        } catch (err) { 
        }
    }

    function clearSearch() {
        setArray([]);
    }

    function renderEmptyContainer() {
        return(
            <View style={{height: '100%', marginTop: 100, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color: dark ? '#3f3f3f' : 'white'}} >No result found.</Text>
             
        </View>
        ) 
    }



    return( 
        <View style={{height: '100%', backgroundColor: dark ? '#3f3f3f' : 'white', marginBottom: 50}} onLayout={layout}>
            <TextInput style={{color: dark ? 'white' : 'black', paddingLeft: 12, height: 50}}
            placeholder="Please input a meal name"
            placeholderTextColor={dark ? 'white' : 'black'}
            value={mealName}
            onChangeText={text => setMeal(text)}
            ></TextInput>

            <Button title="Submit" onPress={fetchCall}>
            </Button>
            <Button title="Clear search" onPress={clearSearch}></Button>
    
            <FlatList  style={{ backgroundColor: dark ? '#3f3f3f' : 'white'}}
            contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}} 
            key={orientation}
            data={mealArray}
            numColumns={orientation == 'PORTRAIT' ? 1 : 3}
            ListEmptyComponent={renderEmptyContainer()}
            horizontal={false}
            keyExtractor={(x,i) => i}
            renderItem={({ item }) => 
            <ScrollView style={{backgroundColor: dark ? '#3f3f3f' : 'white'}} >
               
                <Card style={{backgroundColor: dark ? '#d3d3d3' : 'white', margin: 10}}>
               
                <Card.Cover style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-end'}} source={{uri: item.strMealThumb}} />
                <Title style={{marginLeft: 5}}>{item.strMeal}</Title>  
                <Paragraph style={{marginLeft: 5}}>{item.strArea}</Paragraph> 
                <Button onPress={() => navigation.navigate('Recipe', {id : item.idMeal})} title='View'></Button>   
                <Button onPress={() => saveItem(item.idMeal, item.strMeal, item.strArea, item.strMealThumb)} title='Add to Favourites' style={{ margin: 10, borderColor: 'black'}} />    
                
                </Card>
            </ScrollView>
            
            } />
        </View> 
    )
};

const styles = StyleSheet.create({ 
    text: {
        color: 'darkslateblue', fontSize: 16,
        margin: 10,
    },
    flatlist: {
        width: "100%",
        backgroundColor: 'black',
    },
    portraitLight: {
        width:'100%', 
        borderStyle: 'solid' , 
        borderColor: 'black', 
        borderRadius:10,
        marginBottom:5, 
        paddingBottom: 30,
        marginBottom:30,  
        zIndex: 1

    },
    portratiDark: {
        width:'100%', 
        borderStyle: 'solid' , 
        borderColor: 'black', 
        borderRadius:10,
        marginBottom:5, 
        paddingBottom: 30,
        marginBottom:30,  
        zIndex: 1,
        backgroundColor: '#3f3f3f'

    }

})

export default Search;