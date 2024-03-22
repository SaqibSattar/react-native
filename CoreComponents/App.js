import { useState } from "react";
import { Text, View, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar barStyle="dark-content" backgroundColor="lightblue" hidden />
    </View>
  );
}
