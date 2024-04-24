import { useState, useContext } from "react";
import cls from "./Currency.module.scss";
import { useExchangeRate } from "hooks/useExchangeRate";
import { CurrencyContext } from "context/CurrencyContext";

interface CurrencyProps {
  name: string;
  value: number;
  symbol: string;
}

const Currency = () => {
  const { usdRate, eurRate } = useExchangeRate();
  const [activeRate, setActiveRate] = useState<number>(0);
  const { setSymbolCurrency, setValueCurrency } = useContext(CurrencyContext);

  const currencies: CurrencyProps[] = [
    {
      name: "RUB",
      value: 1,
      symbol: "₽",
    },
    {
      name: "USD",
      value: usdRate,
      symbol: "$",
    },
    {
      name: "EUR",
      value: eurRate,
      symbol: "€",
    },
  ];

  const handleClick = (index: number, symbol: string, value: number) => {
    setSymbolCurrency(symbol);
    setValueCurrency(value);
    setActiveRate(index);
  };

  return (
    <div className={cls.content}>
      <p className={cls.text}>Валюта</p>
      <ul className={cls.list}>
        {currencies.map((item, index) => (
          <li
            className={activeRate === index ? cls.active : cls.not_active}
            key={item.name}
            onClick={() => handleClick(index, item.symbol, item.value)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Currency;
