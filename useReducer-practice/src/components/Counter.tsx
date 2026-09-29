import { useReducer } from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";

type State = { count: number };

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View style={{ padding: 32 }}>
      <Text style={{ marginBottom: 32 }}>Counter: {state.count}</Text>

      <View style={{ gap: 16 }}>
        <Button
          title="Increment"
          onPress={() => dispatch({ type: "increment" })}
        />

        <Button
          title="Decrement"
          onPress={() => dispatch({ type: "decrement" })}
        />

        <Button title="Reset" onPress={() => dispatch({ type: "reset" })} />
      </View>
    </View>
  );
};

export default Counter;
