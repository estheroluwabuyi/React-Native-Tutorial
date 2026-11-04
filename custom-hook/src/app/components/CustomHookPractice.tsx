import useForm from "@/hooks/useForm";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const CustomHookPractice = () => {
  const nameInput = useForm({});
  const emailInput = useForm({});

  const handleLog = () => {
    if (nameInput.value && emailInput.value) {
      console.log("Name:", nameInput.value);
      console.log("Email:", emailInput.value);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        value={nameInput.value}
        onChangeText={nameInput.onChange}
        placeholder="Enter Your Name"
        style={styles.input}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        value={emailInput.value}
        onChangeText={emailInput.onChange}
        placeholder="Enter Your Email"
        style={styles.input}
        keyboardType="email-address"
      />

      <Button title="Submit" onPress={handleLog} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    marginBottom: 8,
  },

  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default CustomHookPractice;
