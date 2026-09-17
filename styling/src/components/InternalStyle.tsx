import { View, Text, StyleSheet } from "react-native";

const InternalStyle = () => {
  return (
    <View>
      <Text
        style={[styles.textStyle, { color: "purple", backgroundColor: "red" }]}
      >
        {/* The later styling overrides the former */}
        Internal Style
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "crimson",
    fontSize: 30,
    backgroundColor: "yellow",
    margin: 20,
    padding: 20,
  },
});

export default InternalStyle;
