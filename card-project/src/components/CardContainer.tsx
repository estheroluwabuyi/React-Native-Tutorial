import { Text, View } from "react-native";
import ButtonComponent from "./ButtonComponent";
import ImgComponent from "./ImgComponent";

const CardContainer = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
        borderRadius: 10,
        backgroundColor: "white",
        // iOS
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 3 },
        // shadowOpacity: 0.24,
        // shadowRadius: 8,
        // // Android
        // elevation: 3,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <ImgComponent />

      <Text style={{ fontWeight: "600", fontSize: 32, marginVertical: 10 }}>
        Esther
      </Text>
      <Text style={{ fontSize: 22 }}>My name is Esther and I love art.</Text>

      <ButtonComponent />
    </View>
  );
};

export default CardContainer;
