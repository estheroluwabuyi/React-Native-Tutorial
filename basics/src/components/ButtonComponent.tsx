import { View, Text, Button } from "react-native";

const ButtonComponent = () => {
  return (
    <View>
      <Text>Button Component</Text>
      {/* 
      <Button title="Learn More" color="crimson" />
      <Button title="Tap Me" color="crimson"></Button> */}

      {/* Events */}
      <Button
        title="Click & Check Console"
        onPress={() => alert("You Pressed this Button!!!")}
      />
    </View>
  );
};

export default ButtonComponent;
