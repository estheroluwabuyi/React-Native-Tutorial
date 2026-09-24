import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const TASKS: Task[] = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Walk the dog", completed: true },
  { id: 3, title: "Finish React Native tutorial", completed: false },
  { id: 4, title: "Call mom", completed: false },
  { id: 5, title: "Read 20 pages", completed: true },
];

const TodoList = () => {
  const [input, setInput] = useState("");
  // const [tasks, setTasks] = useState(TASKS || null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleAddTasks = () => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: input.trim(), completed: false },
    ]);

    setInput("");
  };

  const handleDeleteTasks = (id: number) => {
    setTasks((task) => task.filter((t) => t.id !== id));
  };

  const handleClearTasks = () => {
    setTasks([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <TextInput
        placeholder="Enter Task"
        style={[styles.input, isFocused && styles.inputFocused]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={input}
        onChangeText={setInput}
      />
      <Pressable
        style={styles.button}
        onPress={handleAddTasks}
        disabled={!input.trim()}
      >
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>

      {/* Tasks */}
      <FlatList
        contentContainerStyle={styles.tasks}
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 32,
            }}
          >
            <Text style={styles.tasksList}>{item.title}</Text>
            <Text
              style={{ fontSize: 32 }}
              onPress={() => handleDeleteTasks(item.id)}
            >
              X
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>📝</Text>
            <Text style={styles.emptyTitle}>No tasks yet</Text>
            <Text style={styles.emptySubtitle}>
              Add one above to get started
            </Text>
          </View>
        }
      />

      <Pressable style={styles.button} onPress={handleClearTasks}>
        <Text style={styles.buttonText}>Clear Note</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 900,
    letterSpacing: 1.5,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: "#BAE6FD",
  },
  inputFocused: {
    borderColor: "#007AFF",
    shadowColor: "#BAE6FD",
    shadowOpacity: 0.6,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 0 },
    elevation: 2,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 10,
    marginHorizontal: "auto",
    marginTop: 32,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    paddingHorizontal: 30,
    paddingVertical: 13,
  },
  tasks: {
    marginTop: 20,
    gap: 15,
  },
  tasksList: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    padding: 12,
    borderColor: "#BAE6FD",
    flex: 1,
  },

  empty: {
    alignItems: "center",
    marginTop: 60,
    gap: 8,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#007AFF",
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#9CA3AF",
    textAlign: "center",
  },
});

export default TodoList;
