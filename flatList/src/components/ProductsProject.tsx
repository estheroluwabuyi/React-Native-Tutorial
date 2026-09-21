import { StyleSheet } from "react-native";
import { View, Text, FlatList, Image } from "react-native";

const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 25.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 89.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
  },
  {
    id: 3,
    name: "USB-C Hub",
    price: 39.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400",
  },
  {
    id: 4,
    name: "Bluetooth Headphones",
    price: 59.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: 34.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1616353071855-2c045c4458ae?w=400",
  },
  {
    id: 6,
    name: "Webcam 1080p",
    price: 49.99,
    category: "Video",
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400",
  },
  {
    id: 7,
    name: "External SSD 1TB",
    price: 109.99,
    category: "Storage",
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400",
  },
  {
    id: 8,
    name: "Desk Lamp",
    price: 22.99,
    category: "Home Office",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
  },
  {
    id: 9,
    name: "Phone Holder",
    price: 14.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400",
  },
  {
    id: 10,
    name: "Portable Charger",
    price: 29.99,
    category: "Power",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
  },
];

const renderItem = ({ item }: { item: (typeof PRODUCTS)[number] }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const ProductsProject = () => {
  return (
    <FlatList
      data={PRODUCTS}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 12,
    backgroundColor: "#f2f2f7",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    alignItems: "center",
    // shadow (iOS)
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    // shadow (Android)
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "#eee",
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    marginBottom: 2,
  },
  category: {
    fontSize: 12,
    color: "#888",
    marginBottom: 6,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2a9d8f",
  },
});

export default ProductsProject;
