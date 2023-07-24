import axios from "axios";

export const quotesApi = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/last/",
});
