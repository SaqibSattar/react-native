import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View, StatusBar } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder="Enter your name"
        secureTextEntry
        autoCorrect={false}
        // autoCapitalize="none"
        // keyboardType="numeric"
      />
      <TextInput
        style={[styles.input, styles.multilineText]}
        placeholder="Enter your text"
        multiline
      />
      <Text style={styles.text}>{name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
