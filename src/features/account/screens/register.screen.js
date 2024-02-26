import React, { useContext, useState } from "react";

import { ActivityIndicator, MD2Colors } from "react-native-paper";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { Text } from "../../../typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  Title,
  AuthButton,
  AuthInput,
  ErrorContainer,
} from "../components/account.styles";

export const RegisterScreen = ({ navigation }) => {
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />

        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(u) => setPassword(u)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Confirm Password"
            value={repeatedPassword}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(u) => setRepeatedPassword(u)}
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Spacer size="large">
              <Text variant="error">{error}</Text>
            </Spacer>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator
              size={30}
              animating={true}
              color={MD2Colors.blue400}
            />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
