import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Routes } from "react-router-native";
import Home from './pages/Home';
import Camera from './pages/Camera';
import FileViewer from './pages/FileViewer';

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/camera" element={<Camera/>} />
        <Route path="/fileviewer" element={<FileViewerPage/>} />
      </Routes>
    </NativeRouter>
  );
}
