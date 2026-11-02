import ComponentA from "@/components/ComponentA";
import RandomNumbers from "@/components/RandomNumbers";
import { UserProvider } from "@/context/UserContext";
import { View } from "react-native";

const Home = () => {
  const name = "Esther";

  return (
    <View style={styles.container}>
      <UserProvider>
        <ComponentA />
        <RandomNumbers />
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
