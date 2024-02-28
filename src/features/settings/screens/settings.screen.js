import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]};
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const SettingScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" bacgroundColor="#2182BD" />
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
