import { Text, View, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from "react-native";
import Greet from "./components/Greet";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Greet name={"User"} />
      <Greet name={"Saqi"} />
    </View>
  );
}
