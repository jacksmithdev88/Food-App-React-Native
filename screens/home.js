import React, { useContext, useEffect } from 'react';
import {Button} from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import {ThemeContext} from '../themes/themes';

const Home = () => { 
    const navigation = useNavigation();
    const { dark } = useContext(ThemeContext);


    return(    
        <ScrollView style={{backgroundColor: dark ? '#3f3f3f' : 'white' }}>
            <Text style={ dark ? stylesDark.bigText :styles.bigText}>Categories</Text>
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
                <ScrollView horizontal={true}>
                <Card style={{backgroundColor: dark ? '#d3d3d3' : 'white', outerWidth:"15%", marginTop:10, marginLeft: 10, borderRadius: 20}}>
                    <Card.Content>
                        <Title>Sides</Title>
                    </Card.Content>
                    <Card.Cover style={{width: '100%', aspectRatio: 1}} source={require('../images/side.jpg')} />
                    <Button style={{width: '90%', borderRadius: 20}} title="View" onPress={() => navigation.navigate('Meals', {id : 'Side', searchType : 'Category'})} />
                </Card>

                <Card style={{backgroundColor: dark ? '#d3d3d3' : 'white', outerWidth:"15%", marginTop:10, marginLeft: 10, borderRadius: 20}}>
                    <Card.Content>
                        <Title>Starter</Title>
                    </Card.Content>
                    <Card.Cover style={{width: '100%', aspectRatio: 1}} source={require('../images/starter.jpg')} />
                    <Button style={{width: '90%', borderRadius: 20}} title="View" onPress={() => navigation.navigate('Meals', {id : 'Starter', searchType : 'Category'})} />
                </Card>
                
                <Card style={{backgroundColor: dark ? '#d3d3d3' : 'white', outerWidth:"15%", marginTop:10, marginLeft: 10, borderRadius: 20}}>
                    <Card.Content>
                        <Title>Dessert</Title>
                    </Card.Content>
                    <Card.Cover style={{width: '100%', aspectRatio: 1}} source={require('../images/icecream.jpg')} />
                    <Button style={{width: '90%', borderRadius: 20}} title="View" onPress={() => navigation.navigate('Meals', {id : 'Dessert', searchType : 'Category'})} />
                </Card>

                <Card style={{backgroundColor: dark ? '#d3d3d3' : 'white', outerWidth:"15%", marginTop:10, marginLeft: 10, borderRadius: 20}}>
                    <Card.Content>
                        <Title>Vegetarian</Title>
                    </Card.Content>
                    <Card.Cover style={{width: '100%', aspectRatio: 1}} source={require('../images/veg.jpg')} />
                    <Button style={{width: '90%', borderRadius: 20}} title="View" onPress={() => navigation.navigate('Meals', {id : 'Vegetarian', searchType : 'Category'})} />
                </Card>


                <Card style={{backgroundColor: dark ? '#d3d3d3' : 'white', outerWidth:"15%", marginTop:10, marginLeft: 10, borderRadius: 20}}>
                    <Card.Content>
                        <Title>Breakfast</Title>
                    </Card.Content>
                    <Card.Cover style={{width: '100%', aspectRatio: 1}} source={require('../images/bacon.jpg')} />
                    <Button style={{width: '90%', borderRadius: 20}} title="View" onPress={() => navigation.navigate('Meals', {id : 'Breakfast', searchType : 'Category'})} />
                </Card>


                </ScrollView>
            </View>

            <Text style={ dark ? stylesDark.bigText :styles.bigText}>Cuisine</Text>
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
                <ScrollView horizontal={true}>
                <Card style={{backgroundColor: dark ? '#d3d3d3' : 'white', outerWidth:"15%", marginTop:10, marginLeft: 10, borderRadius: 20}}>
                    <Card.Content>
                        <Title>American</Title>
                    </Card.Content>
                    <Card.Cover style={{width: '100%', aspectRatio: 1}} source={require('../images/american.jpg')} />
                    <Button style={{width: '90%', borderRadius: 20}} title="View" onPress={() => navigation.navigate('Meals', {id : 'American', searchType : 'Areas'})} />
                </Card>


                <Card style={{backgroundColor: dark ? '#d3d3d3' : 'white', outerWidth:"15%", marginTop:10, marginLeft: 10, borderRadius: 20}}>
                    <Card.Content>
                        <Title>British</Title>
                    </Card.Content>
                    <Card.Cover style={{width: '100%', aspectRatio: 1}} source={require('../images/british.jpg')} />
                    <Button style={{width: '90%', borderRadius: 20}} title="View" onPress={() => navigation.navigate('Meals', {id : 'British', searchType : 'Areas'})} />
                </Card>

                <Card style={{backgroundColor: dark ? '#d3d3d3' : 'white', outerWidth:"15%", marginTop:10, marginLeft: 10, borderRadius: 20}}>
                    <Card.Content>
                        <Title>Indian</Title>
                    </Card.Content>
                    <Card.Cover style={{width: '100%', aspectRatio: 1}} source={require('../images/indian.jpg')} />
                    <Button style={{width: '90%', borderRadius: 20}} title="View" onPress={() => navigation.navigate('Meals', {id : 'Indian', searchType : 'Areas'})} />
                </Card>


                <Card style={{backgroundColor: dark ? '#d3d3d3' : 'white', outerWidth:"15%", marginTop:10, marginLeft: 10, borderRadius: 20}}>
                    <Card.Content>
                        <Title>Chinese</Title>
                    </Card.Content>
                    <Card.Cover style={{width: '100%', aspectRatio: 1}} source={require('../images/chinese.jpg')} />
                    <Button style={{width: '90%', borderRadius: 20}} title="View" onPress={() => navigation.navigate('Meals', {id : 'Chinese', searchType : 'Areas'})} />
                </Card>

                <Card style={{backgroundColor: dark ? '#d3d3d3' : 'white', outerWidth:"15%", marginTop:10, marginLeft: 10, borderRadius: 20}}>
                    <Card.Content>
                        <Title>French</Title>
                    </Card.Content>
                    <Card.Cover style={{width: '100%', aspectRatio: 1}} source={require('../images/french.jpg')} />
                    <Button style={{width: '90%', borderRadius: 20}} title="View" onPress={() => navigation.navigate('Meals', {id : 'French', searchType : 'Areas'})} />
                </Card>
    

                </ScrollView>
            </View>

            <Text style={ dark ? stylesDark.bigText :styles.bigText}>Ingredients</Text>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
                <ScrollView horizontal={true}>
                <Card style={{backgroundColor: dark ? '#d3d3d3' : 'white', outerWidth:"15%", marginTop:10, marginLeft: 10, borderRadius: 20}}>
                    <Card.Content>
                        <Title>Salmon</Title>
                    </Card.Content>
                    <Card.Cover style={{width: '100%', aspectRatio: 1}} source={require('../images/salmon.jpg')} />
                    <Button style={{width: '90%', borderRadius: 20}} title="View" onPress={() => navigation.navigate('Meals', {id : 'Salmon', searchType : 'Ingredients'})} />
                </Card>

                <Card style={{backgroundColor: dark ? '#d3d3d3' : 'white', outerWidth:"15%", marginTop:10, marginLeft: 10, borderRadius: 20}}>
                    <Card.Content>
                        <Title>Pork</Title>
                    </Card.Content>
                    <Card.Cover style={{width: '100%', aspectRatio: 1}} source={require('../images/pork.jpg')} />
                    <Button style={{width: '90%', borderRadius: 20}} title="View" onPress={() => navigation.navigate('Meals', {id : 'Pork', searchType : 'Ingredients'})} />
                </Card>

                <Card style={{backgroundColor: dark ? '#d3d3d3' : 'white', outerWidth:"15%", marginTop:10, marginLeft: 10, borderRadius: 20}}>
                    <Card.Content>
                        <Title>Avocado</Title>
                    </Card.Content>
                    <Card.Cover style={{width: '100%', aspectRatio: 1}} source={require('../images/avocado.jpg')} />
                    <Button style={{width: '90%', borderRadius: 20}} title="View" onPress={() => navigation.navigate('Meals', {id : 'Avocado', searchType : 'Ingredients'})} />
                </Card>


                <Card style={{backgroundColor: dark ? '#d3d3d3' : 'white', outerWidth:"15%", marginTop:10, marginLeft: 10, borderRadius: 20}}>
                    <Card.Content>
                        <Title>Basil</Title>
                    </Card.Content>
                    <Card.Cover style={{width: '100%', aspectRatio: 1}} source={require('../images/basil.jpg')} />
                    <Button style={{width: '90%', borderRadius: 20}} title="View" onPress={() => navigation.navigate('Meals', {id : 'Basil', searchType : 'Ingredients'})} />
                </Card>

                <Card style={{backgroundColor: dark ? '#d3d3d3' : 'white', outerWidth:"15%", marginTop:10, marginLeft: 10, borderRadius: 20}}>
                    <Card.Content>
                        <Title>Basmati Rice</Title>
                    </Card.Content>
                    <Card.Cover style={{width: '100%', aspectRatio: 1}} source={require('../images/basmati.jpg')} />
                    <Button style={{width: '90%', borderRadius: 20}} title="View" onPress={() => navigation.navigate('Meals', {id : 'Basmati Rice', searchType : 'Ingredients'})} />
                </Card>

                </ScrollView>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create( { 
    bigText : {
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
        color: 'black',
        fontWeight: 'bold'
    },
    button : { 
        alignContent: 'center',
        padding: 10,
    }, 

});

const stylesDark = StyleSheet.create( { 
    background : { 
        backgroundColor: '#121212',
    },
    bigText : {
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
        color: 'white',
        fontWeight: 'bold'
    }
})


export default Home;