import { View } from "react-native";
import CardContainer from "@/components/CardContainer";

const HomeScreen = () => {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#f5f5f5",
      }}
    >
      <CardContainer />
    </View>
  );
};

export default HomeScreen;
