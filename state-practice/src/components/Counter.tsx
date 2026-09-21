import { useState } from "react";
import { View, Text, Button } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Counter: {count}</Text>
      <View style={{ gap: 32 }}>
        <Button
          title="Increment"
          onPress={() => setCount((count) => count + 1)}
        />
        <Button
          title="Decrement"
          onPress={() => setCount((count) => count - 1)}
        />
      </View>
    </View>
  );
};

export default Counter;
