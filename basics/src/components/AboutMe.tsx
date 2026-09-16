import { ReactNode } from "react";
import { Text } from "react-native";

type AboutMeProps = {
  children: ReactNode;
};

const AboutMe = ({ children }: AboutMeProps) => {
  return <Text>{children}</Text>;
};

export default AboutMe;
