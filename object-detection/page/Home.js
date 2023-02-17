import React from 'react';
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Link } from "react-router-native";

function Home(){
    return (
        <View style={styles.mainContainer}>
            <Link>
                <Text>Camera</Text>
            </Link>
            <Link>
                <Text>Upload</Text>
            </Link>
        </View>
    );
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'black',

    }
});

export default Home;