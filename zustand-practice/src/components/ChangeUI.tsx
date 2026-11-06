import { useCounterStore } from "@/store/store";
import { Button, StyleSheet } from "react-native";
import { View } from "react-native";

const ChangeUI = () => {
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);
  const reset = useCounterStore((state) => state.reset);

  return (
    <View style={styles.buttons}>
      <Button title="Increase Count" color="#2563EB" onPress={increase} />
      <Button title="Decrease Count" color="#64748B" onPress={decrease} />
      <Button title="Reset Count" color="#a72b92" onPress={reset} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    width: "100%",
    gap: 16,
  },
});

export default ChangeUI;
