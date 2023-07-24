import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
    color: "#fff",
  },
  link: {
    fontFamily: "Inter_300Light",
    fontSize: 14,
    color: "#93C5FD",
  },

  quotes: {
    marginTop: 32,
    width: '100%',
  },

  singleQuote: {
    borderWidth: 1,
    borderColor: '#ccc', 
    width: '100%',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16
  },

  localImg: {width: 60, height: 60, borderRadius: 60},

  quoteDescription: {
    flex: 1
  },
  quoteName: {
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    color: "#fff",
  },
  quoteSlug: {
    fontFamily: "Inter_300Light",
    fontSize: 14,
    color: "#ccc",
  },

  quoteValues: {
    alignItems: 'flex-end'
  },
  quoteNow: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
    color: "#fff",
  },
  quotePercent:{
    fontFamily: "Inter_300Light",
    fontSize: 14,
    color: "#f00",
  }
});
