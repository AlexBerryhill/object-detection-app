import { Camera } from "expo-camera";
import React from "react";
import { Button } from 'react-native';

import { LoadingView } from "../components/LoadingView";
import { ModelView } from "../components/ModelView";
import { useTensorFlowLoaded } from "../components/useTensorFlow";

function CameraPage() {
  const isLoaded = useTensorFlowLoaded();
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission?.granted) {
    return (
      <LoadingView message="Camera permission is required to continue">
        <Button title="Grant permission" onPress={requestPermission} />
      </LoadingView>
    );
  }
  
  if (!isLoaded) {
    return <LoadingView message="Loading TensorFlow" />;
  }

  return <ModelView />;
}

export default CameraPage;