import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ProfileButtonProps {
  onProfilePress?: () => void;
  name?: string;
}

export default function ProfileButton({
  onProfilePress = () => {},
}: ProfileButtonProps) {
  return (
    <>
      <TouchableOpacity 
      style={styles.button} 
      onPress={()=> onProfilePress()}
      >
        <Text style={styles.text}>JD</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor: "#0d7ebb",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textTransform: "uppercase",
    fontSize: 20,
    color: "#fff",
    fontFamily: "Inter_400Regular",
  },
});
