import React, { useContext, useState } from "react";
import { List, Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]};
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const SettingScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [profilePicture, setProfilePicture] = useState("");

  console.log(profilePicture);
  //retrive profile pic
  const getProfilePicture = async () => {
    const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`);
    if (photoUri) {
      setProfilePicture(photoUri);
    }
  };
  useFocusEffect(() => {
    getProfilePicture();
  });
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!profilePicture && (
            <Avatar.Icon size={180} icon="human" bacgroundColor="#2182BD" />
          )}
          {profilePicture && (
            <Avatar.Image
              size={180}
              source={{ uri: profilePicture }}
              bacgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />

        <SettingsItem
          title="logout"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
