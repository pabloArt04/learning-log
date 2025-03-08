import { useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Checkbox from "expo-checkbox";
import Switch from "../components/Switch";
import { Link } from "expo-router";

import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import SignInOption from "../components/SignInOption";

export default function SignIn() {
  const [method, setMethod] = useState("Phone Number");
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    remember: false,
  });
  const options = ["Phone Number", "Email"];
  const handleChange = (key) => (value) => {
    setFormData((data) => ({ ...data, [key]: value }));
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <View style={styles.wrapper}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.message}>Login to access your account</Text>
        <Switch options={options} value={method} onChange={setMethod} />
        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>{method}</Text>
            <TextInput
              style={styles.input}
              value={formData[method === "Email" ? "email" : "phoneNumber"]}
              onChangeText={handleChange(
                method === "Email" ? "email" : "phoneNumber"
              )}
              keyboardType={method === "Email" ? "email-address" : "phone-pad"}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={handleChange("password")}
            />
          </View>
          <View style={styles.formFooter}>
            <View style={styles.rememberMe}>
              <Checkbox
                value={formData.remember}
                onValueChange={handleChange("remember")}
              />
              <Text>Remember me</Text>
            </View>
            <Link href="/forget-password">Forget Password?</Link>
          </View>
          <Pressable style={styles.submitButton}>
            <Text style={styles.submitText}>Sign In</Text>
          </Pressable>
        </View>
        <Text style={styles.signOptionsText}>Or Sign In With</Text>
        <View style={styles.signInOptions}>
          <SignInOption icon={google} text="Google" />
          <SignInOption icon={facebook} text="Facebook" />
        </View>
        <Text style={styles.dontHaveAccount}>
          Don't have an account?{"  "}
          <Link href="/signup" style={styles.signUpLink}>
            Sign Up
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    maxWidth: 500,
  },
  container: {
    // flex: 1,
    justifyContent: Platform.select({
      android: "center",
      default: "flex-start",
    }),
  },
  wrapper: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
  },
  form: {
    marginTop: 30,
  },
  field: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  input: {
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
  },
  formFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rememberMe: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  submitButton: {
    padding: 20,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: "#D1F068",
  },
  submitText: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: 16,
  },
  signOptionsText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginVertical: 25,
  },
  signInOptions: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  dontHaveAccount: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 25,
  },
  signUpLink: {
    color: "#8A81C6",
    fontWeight: 500,
  },
});
