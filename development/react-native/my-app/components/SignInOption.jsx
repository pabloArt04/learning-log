import { Image, Pressable, StyleSheet, Text } from "react-native";

export default function SignInOption({ icon, text }) {
  return (
    <Pressable style={styles.SignInOption}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  SignInOption: {
    borderRadius: 30,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "#F8F7FC",
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    padding: 10,
    color: "#666",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});
