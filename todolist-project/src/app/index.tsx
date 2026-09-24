import TodoList from "@/components/TodoList";
import { View, Text } from "react-native";

const Home = () => {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      <TodoList />
    </View>
  );
};

export default Home;
