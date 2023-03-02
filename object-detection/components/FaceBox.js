import React from 'react';
import { Text, View } from 'react-native';

function FaceBox({origin, size}){
    const styles = {
        box: {
            height: size.height,
            width: size.width,
            left: origin.x,
            top: origin.y,
            position: 'absolute',
            borderWidth: 1,
        }
    }
    return (
        <View style={styles.box}>
            <Text>Face</Text>
        </View>
    )
}

export default FaceBox;