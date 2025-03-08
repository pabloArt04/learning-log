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
import Switch from "../components/Switch";
import { useRouter } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function SignUp() {
  const router = useRouter();
  const [authMethod, setAuthMethod] = useState("Sign Up");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const options = ["Sign Up", "Sign In"];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    birthDate: new Date(),
  });

  const handleSwitch = (option) => {
    if (option === authMethod) return;
    setAuthMethod(option);
    router.push(option === "Sign Up" ? "/signup" : "/signin");
  };

  const handleBirthDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    setFormData((data) => ({ ...data, birthDate: selectedDate }));
  };

  const handleChange = (key) => (text) => {
    setFormData((data) => ({ ...data, [key]: text }));
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <View style={styles.wrapper}>
        <Text style={styles.title}>Get Started Now</Text>
        <Text style={styles.message}>
          Create an account or log in to {"\n"} explore about our app
        </Text>
        <Switch options={options} value={authMethod} onChange={handleSwitch} />
        <View style={styles.form}>
          <View style={styles.flexField}>
            <View style={styles.field}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                value={formData.firstName}
                onChange={handleChange("firstName")}
              />
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                style={styles.input}
                value={formData.lastName}
                onChange={handleChange("lastName")}
              />
            </View>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              value={formData.email}
              onChange={handleChange("email")}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              value={formData.birthDate.toDateString()}
              onPress={() => setShowDatePicker(true)}
            />
            {showDatePicker && (
              <DateTimePicker
                value={formData.birthDate}
                mode="date"
                onChange={handleBirthDateChange}
              />
            )}
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              value={formData.phoneNumber}
              onChange={handleChange("phoneNumber")}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              value={formData.password}
              onChange={handleChange("password")}
            />
          </View>
          <Pressable style={styles.submitButton}>
            <Text style={styles.submitText}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    maxWidth: 500,
  },
  container: {
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
  flexField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  field: {
    flex: 1,
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
