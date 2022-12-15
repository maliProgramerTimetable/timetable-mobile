import React from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
  const onSubmit = (data) => {
    // Handle login here
  };

  return (
    <>
      <View style={styles.container}>
        <LinearGradient
          colors={["#090979", "#00d4ff"]}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.form}>
            <Text style={styles.formTitle}>TABLER</Text>
            <TextInput name="email" placeholder="Email" style={styles.input} />

            <TextInput
              name="password"
              placeholder="Password"
              style={styles.input}
            />

            <Button title="Login" />
          </View>
        </LinearGradient>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: "90%",
    height: 44,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    marginTop: 10,
    elevation: 5,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.95)",
    shadowOffset: { width: 100, height: 150 },
    shadowRadius: 5,
  },
  form: {
    backgroundColor: "white",
    justifyContent: "center",
    padding: 20,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    elevation: 10,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.95)",
    shadowOffset: { width: 100, height: 150 },
    shadowRadius: 5,
  },
  formTitle: {
    color: "#3c84dc",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default LoginScreen;
