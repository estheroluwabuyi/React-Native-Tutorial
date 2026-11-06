import ChangeUI from "@/components/ChangeUI";
import { useCounterStore } from "@/store/store";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  const count = useCounterStore((state) => state.count);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Counter</Text>

      <View style={styles.card}>
        <Text style={styles.count}>{count}</Text>
        <ChangeUI />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 24,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 32,
  },
  card: {
    width: "100%",
    maxWidth: 384,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 32,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  count: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#2563eb",
    marginBottom: 32,
  },
});

export default Home;
