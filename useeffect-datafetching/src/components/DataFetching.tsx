import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

const DataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos",
        );

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>DataFetching</Text>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DataFetching;
