import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { storage } from "../utils/storage";

const LoginScreen = ({ route }) => {
  const { loggedIn, setLoggedIn } = route?.params
  console.log(route.params, "roru")
  const [isLoginInProgress, setIsLoginInProgress] = useState(false);

  const onSubmit = () => {
      setIsLoginInProgress(true);
      setTimeout(()=>{
        setIsLoginInProgress(false)
       setLoggedIn(true)
      }, 2000)
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
                autoCapitalize="none"
    jas
              />

              <TextInput
                name="password"
                placeholder="Password"
                style={styles.input}
                secureTextEntry={true}
                autoCapitali
              />
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
              { isLoginInProgress ? <ActivityIndicator color={"white"} /> : 
              <Text style={styles.buttonText}>Prijavi se</Text>}
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
    borderColor: "#E0E0E0",
    borderWidth: 0.9,
  },
  form: {
    backgroundColor: "white",
    justifyContent: "space-around",
    padding: 20,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
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
