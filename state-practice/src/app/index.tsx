import Counter from "@/components/Counter";
import UpdateArray from "@/components/UpdateArray";
import UpdateObjects from "@/components/UpdateObjects";
import { View, Text } from "react-native";

const index = () => {
  return (
    <View style={{ padding: 32 }}>
      {/* <Counter /> */}
      {/* <UpdateArray /> */}
      <UpdateObjects />
    </View>
  );
};

export default index;
