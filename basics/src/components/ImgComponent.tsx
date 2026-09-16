import { View, Text, Image } from "react-native";

const ImgComponent = () => {
  return (
    <View>
      <Text>Let's Explore images</Text>
      <Image
        source={require("../assets/art.jpg")}
        style={{ width: "100%", height: 200 }}
      />

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1786088967808-2fc0eb6aec4f?q=80&w=426&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={{ width: "100%", height: 500 }}
      />
    </View>
  );
};

export default ImgComponent;
