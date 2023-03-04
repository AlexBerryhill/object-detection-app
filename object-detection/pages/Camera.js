// This is a JavaScript code for a React Native app that uses Expo to access the camera and detect faces. Here is a brief explanation of what the code does:
import { React, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import Facebox from '../components/FaceBox';

// The code imports the necessary dependencies to use React Native components, the camera module and the face detector module from the Expo SDK, and a custom Facebox component from a local file.
function CameraPage(){
    // This is a functional React component that renders the camera and face detection components.
    // These are state variables used to store the camera type, the camera permission status, the bounding box and features of the detected face.
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [bounds, setBounds] = useState({"origin": {"x": 0, "y": 0}, "size": {"height": 0, "width": 0}});
    const [features, setFeatures] = useState({
        "BOTTOM_MOUTH": {"x": 0, "y": 0}, 
        "LEFT_CHEEK": {"x": 0, "y": 0}, 
        "LEFT_EAR": {"x": 0, "y": 0}, 
        "LEFT_EYE": {"x": 0, "y": 0}, 
        "LEFT_MOUTH": {"x": 0, "y": 0}, 
        "NOSE_BASE": {"x": 0, "y": 0}, 
        "RIGHT_CHEEK": {"x": 0, "y": 0}, 
        "RIGHT_EAR": {"x": 0, "y": 0}, 
        "RIGHT_EYE": {"x": 0, "y": 0}, 
        "RIGHT_MOUTH": {"x": 0, "y": 0},
        "faceID": 0, 
        "leftEyeOpenProbability": 0, 
        "rightEyeOpenProbability": 0, 
        "rollAngle": 0, 
        "smilingProbability": 0, 
        "yawAngle": 0
    });

    // This is a constant that sets the size of the face features boxes.
    const FEATURE_SIZE = {'height': 25, 'width': 25}
    
    // These if statements check if the camera permission has been granted. If not, the component renders a message asking for permission and a button to request it. If the permission is still loading, it renders an empty view.
    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }
    
    // This function toggles the camera type between front-facing and back-facing.
    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    // This function is called when a face is detected. It updates the bounding box and features state variables with the data from the detected face.
    const handleFacesDetected = ({ faces }) => {
        if(faces[0]!=undefined) {
            setBounds(faces[0].bounds);
            setFeatures(faces[0]);
        }
    };
    
    return(
        <View style={styles.container}>
            <Camera 
                style={styles.camera} 
                type={type}
                onFacesDetected={handleFacesDetected}
                faceDetectorSettings={{
                    mode: FaceDetector.FaceDetectorMode.fast,
                    detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
                    runClassifications: FaceDetector.FaceDetectorClassifications.all,
                    minDetectionInterval: 100,
                    tracking: true,
                }}
                >
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                </View>
            </Camera>
            <Facebox
                origin={bounds.origin}
                size={bounds.size}
                name={`Face ${features.faceID} Roll: ${Math.round(features.rollAngle)}° Yaw: ${Math.round(features.yawAngle)}°`}
            />
            <Facebox
                origin={features.BOTTOM_MOUTH}
                size={FEATURE_SIZE}
                name={`${Math.round(features.smilingProbability*100)}%`}
            />
            <Facebox
                origin={features.LEFT_CHEEK}
                size={FEATURE_SIZE}
                name='LCheek'
            />
            <Facebox
                origin={features.LEFT_EAR}
                size={FEATURE_SIZE}
                name='Left Ear'
            />
            <Facebox
                origin={features.LEFT_EYE}
                size={FEATURE_SIZE}
                name={`${Math.round(features.leftEyeOpenProbability*100)}%`}
            />
            <Facebox
                origin={features.LEFT_MOUTH}
                size={FEATURE_SIZE}
                name='LMouth'
            />
            <Facebox
                origin={features.NOSE_BASE}
                size={FEATURE_SIZE}
                name='Nose'
            />
            <Facebox
                origin={features.RIGHT_CHEEK}
                size={FEATURE_SIZE}
                name='RCheek'
            />
            <Facebox
                origin={features.RIGHT_EAR}
                size={FEATURE_SIZE}
                name='REar'
            />
            <Facebox
                origin={features.RIGHT_EYE}
                size={FEATURE_SIZE}
                name={`${Math.round(features.rightEyeOpenProbability*100)}%`}
            />
            <Facebox
                origin={features.RIGHT_MOUTH}
                size={FEATURE_SIZE}
                name='RMouth'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
});

export default CameraPage;