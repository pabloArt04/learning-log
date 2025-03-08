import { Text, View, StyleSheet } from "react-native";
import SignIn from "./signin";

export default function Index() {
  return <SignIn />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
