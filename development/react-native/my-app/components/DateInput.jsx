import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DateInput({ value, label, onChange }) {
  const [show, setShow] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShow(false);
    onChange(selectedDate);
  };

  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <Pressable style={styles.input} onPress={() => setShow(true)}>
        <Text>{value.toDateString()}</Text>
      </Pressable>
      {show && (
        <DateTimePicker value={value} mode="date" onChange={handleDateChange} />
      )}
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
