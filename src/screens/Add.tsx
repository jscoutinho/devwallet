import { Inter_400Regular, useFonts } from "@expo-google-fonts/inter";
import { TitilliumWeb_600SemiBold } from "@expo-google-fonts/titillium-web";

import {
  ActivityIndicator,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from "react-native";
type Status = "in" | "out";
import { StyleSheet } from "react-native";
import Header from "../components/Header";
import SwitchButton from "../components/SwitchButton";


export default function Add() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    TitilliumWeb_600SemiBold,
  });

  

  return (
    <View style={styles.container}>
      {fontsLoaded ? (
        <>
          <Header />
          <View>
            <Text style={styles.title}>Adicionar uma transação</Text>

            <View style={styles.inputInfo}>
              <Text style={styles.inputText}>Descrição</Text>
              <TextInput
                placeholder="Ex:Salário mensal"
                style={styles.inputCamp}
              />
            </View>

            <View style={styles.inputInfo}>
              <Text style={styles.inputText}>Valor</Text>
              <TextInput keyboardType="numeric" placeholder="R$ 9.000,00" style={styles.inputCamp} />
            </View>


          </View>

          <View>
            <Text style={styles.inputText}>Tipo</Text>
           <SwitchButton/>
          </View>

          <View >
            <TouchableOpacity style={styles.adicionar}><Text style={styles.adicionarText}>Adicionar</Text></TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.cancelar}><Text style={styles.cancelarText}>Cancelar</Text></TouchableOpacity>
          </View>

        </>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    paddingTop: 70,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 30,

    marginBottom: 30,
    marginTop: 20,
  },
  inputInfo: {
    marginBottom: 30,
  },
  inputText: {
    color: "white",
    fontSize: 16,
    lineHeight: 30,
    fontWeight: '400',
  },
  inputCamp: {
    width: 340,
    height: 50,

    borderColor: "#006EB7",
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#1E293B",
    placeholderTextColor: "rgba(68, 101, 155, 0.40)",
    padding: 15
  },
  adicionar: {
    width: 350,
    height: 70,
    borderRadius: 15,
    backgroundColor: '#1E293B',

    marginTop: 30,
  },
  adicionarText:{
    marginTop: 25,
    textAlign: "center",

    fontSize: 18,
    color: 'green'
  },
  cancelar:{
    width: 350,
    height: 70,
    backgroundColor: 'red',
    borderRadius: 15,
    marginTop: 10,
  },
  cancelarText:{
    marginTop: 25,
    textAlign: "center",

    fontSize: 18,
    color: 'white'
  }
});
