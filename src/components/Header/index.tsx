import { Image, View } from "react-native";
import { styles } from "./styles";
export default function Header() {
  return (
    <View style={styles.top}>
      <Image style={styles.logo} source={require("../../../assets/logo.png")} />
      <Image style={styles.perfil} source={require("../../../assets/perfil.jpg")} />
    </View>
  );
}
