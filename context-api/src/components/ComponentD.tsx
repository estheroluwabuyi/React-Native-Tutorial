import { userContext } from "@/context/UserContext";
import { View, Text } from "react-native";

const ComponentD = () => {
  const { user } = userContext();
  return (
    <View>
      <Text>{user}</Text>
    </View>
  );
};

export default ComponentD;
