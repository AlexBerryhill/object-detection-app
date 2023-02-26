import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Dimensions } from "react-native";
import * as ImagePicker from 'expo-image-picker';

function FileViewer(){
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return(
        <View style={styles.mainContainer}>
            <TouchableHighlight onPress={pickImage}>
                <Text style={styles.button}>Select Document</Text>
            </TouchableHighlight>
            {image && <Image source={{ uri: image }} style={styles.imageContainer} />}
        </View>
    );
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'black',
    },
    button: {
        width: window.width-40,
        backgroundColor:'grey',
        marginLeft:20,
        marginTop: 200,
        marginBottom: 20,
        padding:20,
        borderRadius: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    imageContainer: {
        width: window.width-40, 
        height: 200,
        marginLeft:20,
        borderRadius:10,
    },
});

export default FileViewer;
