import { View, Text, Button, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation, route }) {
    const result = route.params?.result;
  //   const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About", { name: "Saqi" })}
        // onPress={() => navigation.navigate("About", { name: "Saqi" })}
      />
      <Text style={styles.text}>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
