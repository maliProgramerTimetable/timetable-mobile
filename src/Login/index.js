import React from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";
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
            <View style={styles.inputGroup}>
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
            </View>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
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
    borderColor: "light grey",
    borderWidth: 0.9,
  },
  form: {
    backgroundColor: "white",
    justifyContent: "space-around",
    padding: 20,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    elevation: 10,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.95)",
    shadowOffset: { width: 100, height: 150 },
    shadowRadius: 5,
    height: "45%",
  },
  formTitle: {
    color: "#3c84dc",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#3c84dc",
    height: 44,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: 70,
    marginTop: 10,
    width: "90%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  inputGroup: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default LoginScreen;
