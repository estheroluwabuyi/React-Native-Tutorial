import { View, Button } from "react-native";
import { useNumContext } from "@/context/RandomNumberContext";

const AddRandomNumber = () => {
  const { addNumber } = useNumContext();

  const handleAddNum = () => {
    addNumber({
      id: String(Date.now()),
      name: "Number " + Math.floor(Math.random() * 100),
    });
  };

  return (
    <View>
      <Button title="Add Random Number" onPress={handleAddNum} />
    </View>
  );
};

export default AddRandomNumber;
