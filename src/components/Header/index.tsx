import { Image, View } from "react-native";
import { headerStyles } from "./header.style";

export function Header() {
  return (
    <View style={headerStyles.container}>
      <Image
        style={headerStyles.logo}
        source={require("../../assets/Logo.png")}
      />
    </View>
  );
}
