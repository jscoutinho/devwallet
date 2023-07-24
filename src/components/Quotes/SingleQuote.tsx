import { Image, Text, View } from "react-native";
import { QuotesProps } from "./index";
import { styles } from "./styles";

export default function SigleQuote({ bid, code, name, pctChange }: QuotesProps) {
  return (
    <>
      <View style={styles.singleQuote}>
        <Image
          style={styles.localImg}
          source={require("../../../assets/eua.png")}
        />

        <View style={styles.quoteDescription}>
          <Text style={styles.quoteName}>{name}</Text>
          <Text style={styles.quoteSlug}>{code}</Text>
        </View>

        <View style={styles.quoteValues}>
          <Text style={styles.quoteNow}>R${bid}</Text>
          <Text style={styles.quotePercent}>{pctChange}%</Text>
        </View>
      </View>
    </>
  );
}
