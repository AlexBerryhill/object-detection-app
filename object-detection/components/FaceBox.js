import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function FaceBox({origin, size, name}){
    const styles = {
        box: {
            height: size.height,
            width: size.width,
            left: origin.x,
            top: origin.y,
            position: 'absolute',
            borderWidth: 1,
        },
        name: {
            fontSize: 10,
        }
    }
    return (
        <View style={styles.box}>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}


export default FaceBox;