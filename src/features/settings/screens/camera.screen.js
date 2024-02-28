import React, { useContext, useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "../../../typography/text.component";
import { TouchableOpacity } from "react-native";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const CaptureContainer = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const [hasPermissions, setHasPermissions] = useState(null);
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    const photo = await cameraRef.current.takePictureAsync();
    AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
    navigation.goBack();
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermissions(status === "granted");
    })();
  }, []);

  if (hasPermissions === null) {
    return <View />;
  }
  if (hasPermissions === false) {
    return <Text variant="error">No access to camera!</Text>;
  }

  return (
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
    >
      <CaptureContainer onPress={snap} />
    </ProfileCamera>
  );
};
