// This code imports the required modules for React and React Native.
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// This is a functional component named "FaceBox" that takes in three props: "origin", "size", and "name".
function FaceBox({origin, size, name}){
    // This is an object literal that defines the styles for the "box" and "name" elements.
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
    // This component returns a "View" element with the style defined by the "box" object literal and a "Text" element with the style defined by the "name" object literal.
    return (
        <View style={styles.box}>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

// This line exports the "FaceBox" component as the default export of this module.
export default FaceBox;