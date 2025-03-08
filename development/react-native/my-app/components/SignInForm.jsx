import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import CheckBoxInput from "./CheckBoxInput";
import FormField from "./FormField";
import { useState } from "react";

export default function SignInForm({ method = "Email" }) {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    remember: false,
  });

  const handleChange = (key) => (value) => {
    setFormData((data) => ({ ...data, [key]: value }));
  };

  return (
    <View>
      <View style={styles.fields}>
        <FormField
          label={method}
          value={formData[method === "Email" ? "email" : "phoneNumber"]}
          onChange={handleChange(method === "Email" ? "email" : "phoneNumber")}
          keyboardType={method === "Email" ? "email-address" : "phone-pad"}
        />
        <FormField
          label="Password"
          value={formData.password}
          onChange={handleChange("password")}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.actions}>
        <CheckBoxInput
          value={formData.remember}
          label="Remember Me"
          onValueChange={handleChange("remember")}
        />
        <Link href="/forget-password">Forget Password?</Link>
      </View>
      <Pressable style={styles.submitButton}>
        <Text style={styles.submitText}>Sign In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  fields: {
    gap: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
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
});
