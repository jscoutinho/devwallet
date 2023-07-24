import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
type Status = "in" | "out";

interface SwitchButtonProps {
  onChange?: (type: Status) => void;
  state?: Status | null;
}

export default function SwitchButton({ onChange = ()=>{}, state = null }: SwitchButtonProps) {
  console.log(state);
  return (
    <View style={styles.viewBox}>
      <TouchableOpacity
        style={state === "in" ? styles.inchecked : styles.in}
        onPress={() => onChange("in")}
      >
        <Text style={styles.btnText}>Entrada</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={state === "out" ? styles.outchecked : styles.out}
        onPress={() => onChange("out")}
      >
        <Text style={styles.btnText}>Saí­da</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  viewBox: {
    flexDirection: "row",
    gap: 16,
    width: "100%",
  },
  btnText: { color: "#fff" },
  in: {
    backgroundColor: "#0F172A",
    borderColor: "#30B700",
    borderWidth: 1,
    borderRadius: 8,
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inchecked: {
    backgroundColor: "#30B700",
    borderColor: "#30B700",
    borderWidth: 1,
    borderRadius: 8,
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  out: {
    backgroundColor: "#0F172A",
    borderColor: "#E52A18",
    borderWidth: 1,
    borderRadius: 8,
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  outchecked: {
    backgroundColor: "#E52A18",
    borderColor: "#E52A18",
    borderWidth: 1,
    borderRadius: 8,
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});