import { View, Text } from "react-native";
import React from "react";
import ListData from "../components/ListData";
import ArrayOfObject from "@/components/ArrayOfObject";
import ProductsProject from "@/components/ProductsProject";

const HomeScreen = () => {
  return (
    <View>
      {/* <ListData /> */}
      {/* <ArrayOfObject /> */}
      <ProductsProject />
    </View>
  );
};

export default HomeScreen;
