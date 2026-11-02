import { useState } from "react";
import { View, Text, Button } from "react-native";

const number = [52, 12, 34, 56, 78, 90, 23, 45, 67, 89];

export default function RandomNumbers() {
  const [randomNum, setRandomNum] = useState(0);

  const getRandomNumber = () => {
    const randomIndex = Math.floor(Math.random() * number.length);
    setRandomNum(number[randomIndex]);
  };
  return (
    <View>
      <Text>Number:</Text>

      <Text>{randomNum}</Text>

      <Button title="Add Random Number" onPress={getRandomNumber} />
    </View>
  );
}
