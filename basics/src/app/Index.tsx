import ButtonComponent from "@/components/ButtonComponent";
import CustomButton from "@/components/CustomButton";
import ImgComponent from "@/components/ImgComponent";
import TextComponent from "@/components/TextComponent";
import ViewComponent from "@/components/ViewComponent";
import { View } from "react-native";

const index = () => {
  return (
    <View>
      <TextComponent />
      <ViewComponent />
      <ButtonComponent />
      <CustomButton />
      <ImgComponent />
    </View>
  );
};

export default index;
