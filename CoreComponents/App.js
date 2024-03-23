import { Text, View, StyleSheet } from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.darkMode]}>
        <Text style={[styles.darkModeText]}>
          Style inheritance <Text style={[styles.boldText]}>in bold</Text>
        </Text>
      </View>
      <View style={[styles.box, styles.lightblueBox, styles.boxShadow]}>
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
  darkMode: {
    backgroundColor: "black",
  },
  darkModeText: {
    color: "white"
  },
  boldText: {
    fontWeight: "bold"
  },
  box: {
    width: 250,
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5
  },
  lightblueBox: { backgroundColor: "lightblue" },
  lightgreenBox: { backgroundColor: "lightgreen" },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: .6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10
  }
});