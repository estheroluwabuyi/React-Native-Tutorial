import { View, Text } from "react-native";
import React from "react";
import WithoutHook from "./components/WithoutHook";
import WithHook from "./components/WithHook";
import CustomHookPractice from "./components/CustomHookPractice";

const Home = () => {
  return (
    <View>
      {/* <WithoutHook /> */}
      {/* <WithHook /> */}
      <CustomHookPractice />
    </View>
  );
};

export default Home;
