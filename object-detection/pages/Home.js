import React from 'react';
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Link } from "react-router-native";

function Home(){
    return (
        <View style={styles.mainContainer}>
            <Link to='/camera'>
                <Text style={styles.button}>
                    Camera
                </Text>
            </Link>
            <Link to='/fileviewer'>
                <Text style={styles.button}>
                    Upload
                </Text>
            </Link>
        </View>
    );
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'black',
    },
    button:{
        width: window.width-40,
        backgroundColor:'grey',
        marginLeft:20,
        marginTop: 200,
        padding:20,
        borderRadius: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Home;