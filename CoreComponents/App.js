import { Text, View, StyleSheet } from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheet ApI</Text>
    </View>
  );
}


export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  title: { fontSize: 16 }
});