import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  summary: {
    backgroundColor: "#1E293B",
    width: "100%",
    padding: 30,
    borderRadius: 20,
    marginTop: 15,
  },

  sumHeaderText: {
    fontFamily: "Inter_400Regular",
    fontSize: 22,
    color: "#fff",
  },
  sumTotal: {
    fontFamily: "TitilliumWeb_600SemiBold",
    fontSize: 42,
    color: "#fff",
  },
  sumHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  
  details: {
    flexDirection: "row",
    marginTop: 16,
    gap: 24,
  },

  detailHeader: {
    flexDirection: "row",
    gap: 12,
    alignItems: 'center',
    marginBottom: 4
  },

  detailText: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "Inter_400Regular",
  },

  detailIcon: { width: 22, height: 22 },

  detailValue: {
    fontFamily: "TitilliumWeb_600SemiBold",
    fontSize: 26,
    color: "#fff",
  },
});
