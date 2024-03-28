import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View, StatusBar, Switch } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false)
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
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((prevState) => !prevState)}
          trackColor={{ false: "lightblue", true: "green" }}
          ios_backgroundColor="lightblue"
          thumbColor="red"
        />
      </View>
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
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
