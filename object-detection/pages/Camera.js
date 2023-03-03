import { React, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import Facebox from '../components/FaceBox';

function CameraPage(){
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [bounds, setBounds] = useState({"origin": {"x": 0, "y": 0}, "size": {"height": 0, "width": 0}});
    const [features, setFeatures] = useState({"BOTTOM_MOUTH": {"x": 0, "y": 0}, "LEFT_CHEEK": {"x": 0, "y": 0}, "LEFT_EAR": {"x": 0, "y": 0}, "LEFT_EYE": {"x": 0, "y": 0}, "LEFT_MOUTH": {"x": 0, "y": 0}, "NOSE_BASE": {"x": 0, "y": 0}, "RIGHT_CHEEK": {"x": 0, "y": 0}, "RIGHT_EAR": {"x": 0, "y": 0}, "RIGHT_EYE": {"x": 0, "y": 0}, "RIGHT_MOUTH": {"x": 0, "y": 0}});
    const FEATURE_SIZE = {'height': 25, 'width': 25}
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
    
    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }
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
                    runClassifications: FaceDetector.FaceDetectorClassifications.none,
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
                name='Face'
            />
            <Facebox
                origin={features.BOTTOM_MOUTH}
                size={FEATURE_SIZE}
                name='Bottom Mouth'
            />
            <Facebox
                origin={features.LEFT_CHEEK}
                size={FEATURE_SIZE}
                name='Left Cheek'
            />
            <Facebox
                origin={features.LEFT_EAR}
                size={FEATURE_SIZE}
                name='Left Ear'
            />
            <Facebox
                origin={features.LEFT_EYE}
                size={FEATURE_SIZE}
                name='Left Eye'
            />
            <Facebox
                origin={features.LEFT_MOUTH}
                size={FEATURE_SIZE}
                name='Left Mouth'
            />
            <Facebox
                origin={features.NOSE_BASE}
                size={FEATURE_SIZE}
                name='Nose Base'
            />
            <Facebox
                origin={features.RIGHT_CHEEK}
                size={FEATURE_SIZE}
                name='Right Cheek'
            />
            <Facebox
                origin={features.RIGHT_EAR}
                size={FEATURE_SIZE}
                name='Right Ear'
            />
            <Facebox
                origin={features.RIGHT_EYE}
                size={FEATURE_SIZE}
                name='Right Eye'
            />
            <Facebox
                origin={features.RIGHT_MOUTH}
                size={FEATURE_SIZE}
                name='Right Mouth'
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