import useFetch from "@/hooks/useFetch";
import { View, Text, FlatList } from "react-native";

const URL = "https://jsonplaceholder.typicode.com/todos";

const WithHook = () => {
  const { data } = useFetch(URL);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default WithHook;
