import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Card = (props) => { 
    return ( 
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({ 
    card: { 
        borderRadius: 5,
        elevation: 4,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.25,
        shadowRadius: 2,
        marginVertical: 2,
    },
    cardContent: {
        margin: 18

    }
})

export default Card;