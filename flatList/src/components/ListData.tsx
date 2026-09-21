import { View, Text, FlatList } from "react-native";
const FRUITS = [
  "banana",
  "apple",
  "mango",
  "grapes",
  "orange",
  "kiwi",
  "watermelon",
  "papaya",
  "pineapple",
  "strawberry",
];

const ListData = () => {
  return (
    <FlatList
      data={FRUITS}
      keyExtractor={(index) => index}
      renderItem={({ item }) => {
        return <Text>{item}</Text>;
      }}
    />
  );
};

export default ListData;
