import React, { useContext } from "react";
import { Text, View, Button } from "react-native";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <View style={{ padding: 50 }}>
      <Button title="Logout" onPress={() => onLogout()} />
    </View>
  );
};
