import {
  Inter_300Light,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function Transactions() {
  // Carregamento das fontes
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_700Bold,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  return (
    <>
      {fontsLoaded && (
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>Transações Recentes</Text>
            <Text style={styles.link}>Exibir Todos</Text>
          </View>

          <View style={styles.transactions}>
            <View style={styles.transaction}>
              <Image 
              style={styles.icon}
              source={require("../../../assets/In.png")} 
              />
              <View>
                <Text style={styles.description}>
                  Salário Programador
                  </Text>
                <Text style={styles.value}>
                  R$ 6.000,00
                  </Text>
              </View>
            </View>
          </View>

          <View style={styles.transactions}>
            <View style={styles.transaction}>
              <Image 
              style={styles.icon}
              source={require("../../../assets/Out.png")} 
              />
              <View>
                <Text style={styles.description}>
                  Ifood
                  </Text>
                <Text style={styles.value}>
                  R$ 60,00
                  </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
}
