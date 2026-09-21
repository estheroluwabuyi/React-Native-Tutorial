import { useState } from "react";
import { View, Text, FlatList, Button } from "react-native";

const UpdateArray = () => {
  const [friends, setFriends] = useState(["Alice", "John", "Temmy", "Timmy"]);

  const addNewFriend = () => {
    setFriends((friend) => [...friend, "James"]);
  };

  const removeFriend = () => {
    setFriends((friend) => friend.filter((f) => f !== "John"));
  };

  const updateFriend = () => {
    setFriends(friends.map((f) => (f === "Alice" ? "Alice Smith" : f)));
  };

  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <View style={{ gap: 16 }}>
        <Button
          title="Add Friend"
          onPress={() => {
            addNewFriend();
            console.log(friends);
          }}
        />
        <Button title="Remove Friend" onPress={removeFriend} />
        <Button title="Update Friend" onPress={updateFriend} />
      </View>
    </View>
  );
};

export default UpdateArray;
