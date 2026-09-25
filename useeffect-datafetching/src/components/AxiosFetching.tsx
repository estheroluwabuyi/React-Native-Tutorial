import axios from "axios";

import { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const api = "https://randomuser.me/api/";

const AxiosFetching = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRandom = async () => {
      try {
        setLoading(true);

        const response = await axios.get(`${api}?results=10`);
        const result = response.data;
        setUsers(result.results);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRandom();
  }, []);

  const renderItemFunc = ({ item }: any) => {
    return (
      <View style={styles.row}>
        <Image source={{ uri: item.picture.thumbnail }} style={styles.avatar} />

        <View>
          <Text style={styles.name}>
            {item.name.first} {item.name.last}
          </Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    );
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={{ marginBottom: 32, marginTop: 16, paddingHorizontal: 25 }}>
      <FlatList
        data={users}
        renderItem={renderItemFunc}
        keyExtractor={(item: any) => item.login.uuid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
});

export default AxiosFetching;
