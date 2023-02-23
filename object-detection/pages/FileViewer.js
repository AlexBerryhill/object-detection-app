import React from 'react';
import DocumentPicker from 'react-native-document-picker'

const res = await DocumentPicker.pick({
    type: [DocumentPicker.types.allFiles],
});


function FileViewer(){
    singleFile = res;

    let uri = singleFile.uri;
    if (Platform.OS === 'ios') {
        uri = res.uri.replace('file://', '');
    }
    FileViewer.open(uri)
    .then(() => {
        //Can do anything you want after opening the file successfully
        console.log('Success');
    })
    .catch(_err => {
        //Handle failure here
        console.log(_err);
    });

    return(
        <div></div>
    )
}

export default FileViewer;