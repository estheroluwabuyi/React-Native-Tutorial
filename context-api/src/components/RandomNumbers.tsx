import { useNumContext } from "@/context/RandomNumberContext";
import { View, Text, FlatList } from "react-native";

const RandomNumbers = () => {
  const { num } = useNumContext();

  console.log(num);

  return (
    <View>
      <Text>Numbers List:</Text>

      <FlatList
        data={num}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default RandomNumbers;
