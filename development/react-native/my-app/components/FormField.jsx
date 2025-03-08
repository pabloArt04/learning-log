import { StyleSheet } from "react-native";
import { Text, TextInput, View } from "react-native";

export default function FormField({
  value,
  label,
  onChange,
  keyboardType = "default",
  secureTextEntry = false,
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    flex: 1,
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
});
