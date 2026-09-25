import AxiosFetching from "@/components/AxiosFetching";
import DataFetching from "@/components/DataFetching";
import { View, Text } from "react-native";

const Home = () => {
  return (
    <View>
      {/* <DataFetching /> */}
      <AxiosFetching />
    </View>
  );
};

export default Home;
