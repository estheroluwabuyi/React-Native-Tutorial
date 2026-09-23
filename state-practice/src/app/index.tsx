import Counter from "@/components/Counter";
import UpdateArray from "@/components/UpdateArray";
import UpdateObjects from "@/components/UpdateObjects";
import WeatherApp from "@/components/WeatherApp";
import { View, Text } from "react-native";

const index = () => {
  return (
    <View style={{ padding: 32 }}>
      {/* <Counter /> */}
      {/* <UpdateArray /> */}
      {/* <UpdateObjects /> */}
      <WeatherApp />
    </View>
  );
};

export default index;
