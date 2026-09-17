import { View, Text } from "react-native";

const InlineStyling = () => {
  return (
    <View>
      <View
        style={{ backgroundColor: "red", height: 100, width: 100, margin: 20 }}
      />
      <View
        style={{
          backgroundColor: "green",
          height: 100,
          width: 100,
          margin: 20,
        }}
      />
      <View
        style={{ backgroundColor: "blue", height: 100, width: 100, margin: 20 }}
      />
      <View
        style={{
          backgroundColor: "yellow",
          height: 100,
          width: 100,
          margin: 20,
        }}
      />
    </View>
  );
};

export default InlineStyling;
