import { View, Text, Pressable } from "react-native";

const CustomButton = () => {
  return (
    <>
      <Pressable onPress={() => console.log("Press Me")}>
        <Text style={{ color: "teal" }}>Press Me</Text>
      </Pressable>

      <Pressable onPressIn={() => console.log("Press Me")}>
        <Text style={{ color: "coral" }}>Press Me</Text>
      </Pressable>

      <Pressable onPressOut={() => console.log("Press Me")}>
        <Text style={{ color: "magenta" }}>Press Me</Text>
      </Pressable>
    </>
  );
};

export default CustomButton;
