import { StyleSheet, Text, View } from "react-native";
import Checkbox from "expo-checkbox";

export default function CheckBoxInput({ value, label, onValueChange }) {
  return (
    <View style={styles.container}>
      <Checkbox value={value} onValueChange={onValueChange} />
      <Text>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
