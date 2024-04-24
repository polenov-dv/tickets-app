import { useState, useEffect } from "react";

export const useExchangeRate = () => {
  const [usdRate, setUsdRate] = useState(94);
  const [eurRate, setEurRate] = useState(100);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          "https://www.cbr-xml-daily.ru/daily_json.js"
        );
        const data = await response.json();
        const usd = data.Valute.USD.Value;
        const eur = data.Valute.EUR.Value;

        setUsdRate(usd);
        setEurRate(eur);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    fetchExchangeRate();
  }, []);

  return { usdRate, eurRate };
};
