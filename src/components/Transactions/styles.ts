import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter_700Bold",
  },
  link: {
    color: "#93C5FD",
    fontSize: 14,
    fontFamily: "Inter_300Light",
  },
  header: {
    width: "100%",
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  transactions:{
    marginTop: 32
  },

  transaction: {
    flexDirection: 'row',
    gap: 16
  },
  description: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 22,
    color: "#fff",
  },
  value: {
    fontFamily: "Inter_400Regular",
    color: "#aaa",
    fontSize: 16,
  },
  icon: {
    width: 60,
    height: 60,
  },
});
