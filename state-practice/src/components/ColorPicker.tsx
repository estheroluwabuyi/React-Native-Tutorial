// import { useState } from "react";
// import { View, Text, Pressable } from "react-native";

// const ColorPicker = () => {
//   const [selectedColor, setSelectedColor] = useState("");

//   const handleColorSelect = (color: string) => {
//     setSelectedColor(color);
//   };

//   return (
//     <View
//       style={{
//         gap: 32,
//         backgroundColor: selectedColor,
//         height: "100%",
//         padding: 32,
//       }}
//     >
//       <Text style={{ fontSize: 24, fontWeight: "bold" }}>ColorPicker</Text>

//       <Pressable
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: "red",
//           borderRadius: 50,
//         }}
//         onPress={() => handleColorSelect("red")}
//       />
//       <Pressable
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: "blue",
//           borderRadius: 50,
//         }}
//         onPress={() => handleColorSelect("blue")}
//       />
//       <Pressable
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: "green",
//           borderRadius: 50,
//         }}
//         onPress={() => handleColorSelect("green")}
//       />
//       <Pressable
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: "yellow",
//           borderRadius: 50,
//         }}
//         onPress={() => handleColorSelect("yellow")}
//       />
//     </View>
//   );
// };

// export default ColorPicker;

import { useState } from "react";
import { Pressable } from "react-native";
import { View, Text } from "react-native";

const colors = ["red", "purple", "pink", "gold"];

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("white");

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <View style={{ backgroundColor: selectedColor, padding: 32 }}>
      <Text>Pick A color</Text>
      {colors.map((color) => (
        <Pressable
          key={color}
          style={{
            width: 100,
            height: 100,
            backgroundColor: color,
            borderRadius: 50,
          }}
          onPress={() => handleColorSelect(color)}
        />
      ))}
    </View>
  );
};

export default ColorPicker;
