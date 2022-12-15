import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const LoginScreen = () => {
  const onSubmit = (data) => {
    // Handle login here
  };

  return (
    <View style={styles.container}>
      <TextInput
        name="email"
        placeholder="Email"
        style={styles.input}
      />

      <TextInput
        name="password"
        placeholder="Password"
        style={styles.input}
      />

      <Button title="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

export default LoginScreen;