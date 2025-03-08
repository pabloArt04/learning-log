import { StyleSheet, Text, View } from "react-native";

function Option({ text, onSelect, isSelected }) {
  return (
    <Text
      style={[styles.option, isSelected && styles.selectedOption]}
      onPress={onSelect}
    >
      {text}
    </Text>
  );
}

export default function Switch({ value, options, onChange }) {
  return (
    <View style={styles.switch}>
      {options.map((option) => (
        <Option
          key={option}
          text={option}
          isSelected={option === value}
          onSelect={() => onChange(option)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  switch: {
    padding: 10,
    borderRadius: 30,
    flexDirection: "row",
    backgroundColor: "#F8F7FC",
  },
  option: {
    flex: 1,
    padding: 10,
    borderRadius: 30,
    fontSize: 20,
    textAlign: "center",
  },
  selectedOption: {
    backgroundColor: "#D1F068",
    fontWeight: "500",
  },
});
