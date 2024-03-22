import { Text, View, Image, ImageBackground, ScrollView, Button, Pressable } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Pressable
        onPress={() => {
          console.log("Image pressed");
        }}
      >
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>
      <Pressable
        onPress={() => {
          console.log("Text pressed");
        }}
      >
        <Text>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum, nisl eu ultricies ultricies, nunc nisl aliquam nunc, eget
          aliquam nisl nunc sit amet nisl. Donec condimentum, nisl eu ultricies
          ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc sit amet
          nisl. Donec condimentum, nisl eu ultricies ultricies, nunc nisl
          aliquam nunc, eget aliquam nisl nunc sit amet nisl. Donec condimentum,
          nisl eu ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl
          nunc sit amet nisl. Donec condimentum, nisl eu ultricies ultricies,
          nunc nisl aliquam nunc, eget aliquam nisl nunc sit amet nisl. Donec
          condimentum, nisl eu ultricies ultricies, nunc nisl aliquam nunc, eget
          aliquam nisl nunc sit amet nisl. Donec condimentum, nisl eu ultricies
          ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc sit amet
          nisl. Donec condimentum, nisl eu ultricies ultricies, nunc nisl
          aliquam nunc, eget aliquam nisl nunc sit amet nisl. Donec condimentum,
          nisl eu ultricies
        </Text>
      </Pressable>
    </View>
  );
}
