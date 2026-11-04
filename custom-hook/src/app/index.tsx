import { View, Text } from "react-native";
import React from "react";
import WithoutHook from "./components/WithoutHook";
import WithHook from "./components/WithHook";

const Home = () => {
  return (
    <View>
      {/* <WithoutHook /> */}
      <WithHook />
    </View>
  );
};

export default Home;
