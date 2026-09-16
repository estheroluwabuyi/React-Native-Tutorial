import { Text, Pressable } from "react-native";

const ButtonComponent = () => {
  return (
    <Pressable onPress={() => alert("Card button pressed?")}>
      <Text
        style={{
          fontSize: 18,
          backgroundColor: "#eee",
          paddingHorizontal: 30,
          paddingVertical: 10,
          borderRadius: 5,
          marginTop: 20,
        }}
      >
        Press Me
      </Text>
    </Pressable>
  );
};

export default ButtonComponent;
