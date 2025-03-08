import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import Switch from "../components/Switch";

import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import SignInOption from "../components/SignInOption";
import SignInForm from "../components/SignInForm";

export default function SignIn() {
  const [method, setMethod] = useState("Phone Number");
  const options = ["Phone Number", "Email"];

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.message}>Login to access your account</Text>
        <Switch options={options} value={method} onChange={setMethod} />
      </View>
      <SignInForm method={method} />
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Or Sign In With</Text>
        <View style={styles.flexRow}>
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
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 40,
  },
  footer: {
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  footerTitle: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  dontHaveAccount: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
  },
  signUpLink: {
    color: "#8A81C6",
    fontWeight: 500,
  },
});
