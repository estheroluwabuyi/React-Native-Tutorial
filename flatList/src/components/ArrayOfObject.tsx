import { View, Text, FlatList } from "react-native";
const LOCATIONS = [
  { id: "1", name: "Lagos", country: "Nigeria", population: 15388000 },
  { id: "2", name: "Tokyo", country: "Japan", population: 13960000 },
  { id: "3", name: "New York", country: "USA", population: 8419000 },
  { id: "4", name: "London", country: "UK", population: 8982000 },
  { id: "5", name: "Paris", country: "France", population: 2148000 },
  { id: "6", name: "Cairo", country: "Egypt", population: 9540000 },
  { id: "7", name: "São Paulo", country: "Brazil", population: 12330000 },
  { id: "8", name: "Mumbai", country: "India", population: 12478000 },
];

const ArrayOfObject = () => {
  return (
    <View style={{ padding: 32 }}>
      <FlatList
        data={LOCATIONS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text> {item.name}</Text>
            <Text> {item.country}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ArrayOfObject;
