import React from 'react';
const cameraPermission = await Camera.getCameraPermissionStatus()

function Camera(){
    const devices = useCameraDevices()
    const device = devices.back

    if (device == null) return <LoadingView />
    return(
        <Camera
    //   style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />
    )
}

export default Camera;