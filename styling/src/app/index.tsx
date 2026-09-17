import ExternalStyling from "@/components/ExternalStyling";
import InlineStyling from "@/components/InlineStyling";
import InternalStyle from "@/components/InternalStyle";
import { View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={{ padding: 10 }}>
      {/* <InlineStyling /> */}
      {/* <InternalStyle /> */}
      <ExternalStyling />
    </View>
  );
};

export default HomeScreen;
