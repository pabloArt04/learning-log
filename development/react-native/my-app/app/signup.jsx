import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Switch from "../components/Switch";
import { useRouter } from "expo-router";
import SignUpForm from "../components/SignUpForm";

export default function SignUp() {
  const router = useRouter();
  const [authMethod, setAuthMethod] = useState("Sign Up");
  const options = ["Sign Up", "Sign In"];

  const handleSwitch = (option) => {
    if (option === authMethod) return; // Prevents unnecessary navigation
    setAuthMethod(option);
    router.push(option === "Sign Up" ? "/signup" : "/signin");
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Get Started Now</Text>
        <Text style={styles.message}>
          Create an account or log in to {"\n"} explore about our app
        </Text>
        <Switch options={options} value={authMethod} onChange={handleSwitch} />
      </View>
      <SignUpForm />
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
});
