import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ComponentA from "@/components/ComponentA";
import RandomNumbers from "@/components/RandomNumbers";
import { RandomNumberProvider } from "@/context/RandomNumberContext";
import { UserProvider } from "@/context/UserContext";
import AddRandomNumber from "@/components/AddRandomNumber";

const Home = () => {
  const name = "Esther";

  return (
    <View>
      <RandomNumberProvider>
        <SafeAreaView style={styles.container}>
          <RandomNumbers />
          <AddRandomNumber />
        </SafeAreaView>
      </RandomNumberProvider>

      {/* <UserProvider>
        <ComponentA />
        <RandomNumbers />
      </UserProvider> */}
    </View>
  );
};

export default Home;

const styles = {
  container: {
    paddingHorizontal: 20,
  },
};
