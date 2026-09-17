import { View, Text, Image } from "react-native";

const ImgComponent = () => {
  return (
    <View>
      <Image
        source={require("../assets/art.jpg")}
        style={{ width: 150, height: 150, borderRadius: 75 }}
      />
    </View>
  );
};

export default ImgComponent;
