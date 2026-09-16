import { View, Text, Image } from "react-native";

const ImgComponent = () => {
  return (
    <View>
      <Image
        source={require("../assets/art.jpg")}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
    </View>
  );
};

export default ImgComponent;
