import { View, Text, StyleSheet } from "react-native";

export default function ForgetPassword() {
  return (
    <View style={styles.container}>
      <Text>Forget Password</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
