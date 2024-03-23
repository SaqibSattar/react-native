import { Text, View, StyleSheet } from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBox]}>
        <Text>LightBlue Box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBox]}>
        <Text>LightGreen Box</Text>
      </View>
    </View>
  );
}


export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: {
    width: 100,
    height: 100,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5
  },
  lightblueBox: { backgroundColor: "lightblue" },
  lightgreenBox: { backgroundColor: "lightgreen" },
});