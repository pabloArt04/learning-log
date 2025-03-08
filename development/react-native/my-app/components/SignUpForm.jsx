import { Pressable, StyleSheet, Text, View } from "react-native";
import FormField from "./FormField";
import { useState } from "react";
import DateInput from "./DateInput";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    birthDate: new Date(),
  });

  const handleChange = (key) => (value) => {
    setFormData((data) => ({ ...data, [key]: value }));
  };

  return (
    <View>
      <View style={styles.fields}>
        <View style={styles.flexField}>
          <FormField label="First Name" onChange={handleChange("firstName")} />
          <FormField label="Last Name" onChange={handleChange("lastName")} />
        </View>
        <FormField
          label="Email"
          keyboardType="email-address"
          onChange={handleChange("email")}
        />
        <FormField
          label="Phone Number"
          keyboardType="phone-pad"
          onChange={handleChange("phoneNumber")}
        />
        <FormField
          label="Password"
          secureTextEntry={true}
          onChange={handleChange("password")}
        />
        <DateInput
          label="Date of Birth"
          value={formData.birthDate}
          onChange={handleChange("birthDate")}
        />
      </View>
      <Pressable
        style={styles.submitButton}
        onPress={() => console.log(formData)}
      >
        <Text style={styles.submitText}>Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  fields: {
    gap: 20,
  },
  flexField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
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
