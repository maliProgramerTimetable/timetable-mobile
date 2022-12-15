import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const LoginScreen = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email()
        .required(),
      password: yup
        .string()
        .min(8)
        .required(),
    }),
  });

  const onSubmit = (data) => {
    // Handle login here
  };

  return (
    <View style={styles.container}>
      <TextInput
        name="email"
        placeholder="Email"
        style={styles.input}
        ref={register}
      />
      {errors.email && <Text>Please enter a valid email address.</Text>}

      <TextInput
        name="password"
        placeholder="Password"
        style={styles.input}
        ref={register}
      />
      {errors.password && <Text>Please enter a valid password.</Text>}

      <Button title="Login" onPress={handleSubmit(onSubmit)} />
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