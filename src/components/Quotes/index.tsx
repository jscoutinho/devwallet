import {
  Inter_300Light,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { quotesApi } from "../../lib/axios";
import SingleQuote from "./SingleQuote";
import { styles } from "./styles";

interface QuotesResponseAPI {
  [key: string]: {
    code: string;
    name: string;
    pctChange: string;
    bid: string;
    varBid: string;
  };
}

export interface QuotesProps {
  code: string;
  name: string;
  pctChange: string;
  bid: string;
  varBid?: string;
  petFriendly?: boolean
}

export default function Quotes() {
  const [loadedFonts] = useFonts({
    Inter_300Light,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const [quotes, setQuotes] = useState<QuotesProps[]>([]);
  async function getQuoteFromApi() {
    const { data } = await quotesApi.get<QuotesResponseAPI>(
      "USD-BRL,EUR-BRL,ARS-BRL"
    );
    const arrayOfQuotes = Object.values(data);
    setQuotes(arrayOfQuotes);
  }

  useEffect(() => {
    getQuoteFromApi();
  }, []);

  return (
    <>
    
      {loadedFonts && (
        <>
          <View style={styles.header}>
            <Text style={styles.title}>Cotações</Text>
            <Text style={styles.link}>Exibir Todos</Text>
          </View>

          <View style={styles.quotes}>
            {quotes.map((quote) => (
              <SingleQuote
                key={quote.name}
                bid={quote.bid}
                code={quote.code}
                name={quote.name.split("/")[0]}
                pctChange={quote.pctChange}
              />
            ))}
          </View>
        </>
      )}
    </>
  );
}
