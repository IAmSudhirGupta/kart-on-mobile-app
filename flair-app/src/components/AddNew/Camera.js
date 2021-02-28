import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Platform} from 'react-native';
// import {Camera} from 'expo-camera';
import {Ionicons} from '@expo/vector-icons';
// const {FlashMode: CameraFlashModes, Type: CameraTypes} = Camera.Constants;

const CameraApp = () => {
  // const [hasPermission, setHasPermission] = useState(null);
  // const [cameraRef, setCameraRef] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);
  // const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  // const [recording, setRecording] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const {status} = await Camera.requestPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   })();
  // }, []);
  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }
  return (
    <View style={styles.mainContainer}>
      <Text>No access to camera</Text>;
      {/* <Camera
        style={styles.mainContainer}
        type={type}
        ref={ref => {
          setCameraRef(ref);
        }}>
        <View style={styles.flipContainer}>
          <TouchableOpacity
            style={styles.flipBtn}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back,
              );
            }}>
            <Ionicons
              name={
                Platform.OS === 'ios'
                  ? 'ios-reverse-camera'
                  : 'md-reverse-camera'
              }
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.toolContainer}>
          {/* <TouchableOpacity
              style={styles.captureBtn}
              onPress={async () => {
                if (cameraRef) {
                  let photo = await cameraRef.takePictureAsync();
                  console.log('photo', photo);
                }
              }}>
              <View style={styles.clickBtnCover}>
                <View style={styles.imageBtn} />
              </View>
            </TouchableOpacity> }
          <TouchableOpacity
            style={styles.captureBtn}
            onPress={() => console.log('Gallery Images/Videos...')}>
            <Ionicons name="md-images" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.captureBtn}
            onPress={async () => {
              if (!recording) {
                setRecording(true);
                let video = await cameraRef.recordAsync();
                console.log('video', video);
              } else {
                setRecording(false);
                cameraRef.stopRecording();
              }
            }}>
            <View style={styles.clickBtnCover}>
              <View
                style={recording ? styles.recordStartBtn : styles.recordStopBtn}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.captureBtn}
            onPress={() => {
              console.log('FlashMode..');
              setFlashMode(
                flashMode === Camera.Constants.FlashMode.on
                  ? Camera.Constants.FlashMode.off
                  : Camera.Constants.FlashMode.on,
              );
            }}>
            <Ionicons
              name={
                flashMode === Camera.Constants.FlashMode.on
                  ? 'md-flash'
                  : 'md-flash-off'
              }
              color="white"
              size={30}
            />
          </TouchableOpacity>
        </View>
      </Camera>
      */}
    </View>
  );
};

export default CameraApp;

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  clickBtnCover: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'white',
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBtn: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'white',
    height: 40,
    width: 40,
    backgroundColor: 'white',
  },
  recordStartBtn: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'blue',
    height: 40,
    width: 40,
    backgroundColor: 'blue',
  },
  recordStopBtn: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'red',
    height: 40,
    width: 40,
    backgroundColor: 'red',
  },
  flipContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
  },
  flipBtn: {
    flex: 0.1,
    top: 45,
    right: 20,
    alignSelf: 'flex-end',
  },
  captureBtn: {
    top: 150,
    alignSelf: 'center',
  },
  toolContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
