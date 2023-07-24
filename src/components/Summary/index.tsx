import { Eye } from "phosphor-react-native";
import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { Inter_400Regular, useFonts } from "@expo-google-fonts/inter";
import { TitilliumWeb_600SemiBold } from "@expo-google-fonts/titillium-web";

export default function Summary() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    TitilliumWeb_600SemiBold,
  });

  return (
    <>
    {fontsLoaded && (
    <View style={styles.summary}>
      <View>
        <View style={styles.sumHeader}>
          <Text style={styles.sumHeaderText}>Total em caixa</Text>
          <Eye size={24} color="#fff" />
        </View>
        <Text style={styles.sumTotal}>R$ 9.600,00</Text>
      </View>

      <View style={styles.details}>
            <View >
              <View style={styles.detailHeader}>
                
                <Image 
                style={styles.detailIcon} 
                source={require("../../../assets/CircleUP.png")}
                />
               
                <Text style={styles.detailText}>
                  Entradas
                </Text>
                
              </View>
              <Text style={styles.detailValue}>R$ 20.000</Text>
            </View>

            <View>
              <View style={styles.detailHeader}>
                <Image style={styles.detailIcon} source={require("../../../assets/CircleDown.png")} />
                <Text style={styles.detailText}>Saída</Text>
              </View>
              <Text style={styles.detailValue}>R$ 30.000</Text>
            </View>
          </View>
    </View>
  )}
    </>
  );
}
