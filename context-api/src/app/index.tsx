import ComponentA from "@/components/ComponentA";
import { UserProvider } from "@/context/UserContext";
import { View, Text } from "react-native";

const Home = () => {
  const name = "Esther";

  return (
    <View style={styles.container}>
      <UserProvider>
        {" "}
        <ComponentA />
      </UserProvider>
    </View>
  );
};

export default Home;

const styles = {
  container: {
    padding: 20,
  },
};
