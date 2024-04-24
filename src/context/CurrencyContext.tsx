import { useState, createContext } from "react";

//Создание контекста
interface CurrencyContextProps {
  symbolCurrency: string;
  valueCurrency: number;
  setSymbolCurrency: (newValue: string) => void;
  setValueCurrency: (newValue: number) => void;
}

export const CurrencyContext = createContext<CurrencyContextProps>({
  symbolCurrency: "₽",
  valueCurrency: 1,
  setSymbolCurrency: () => {},
  setValueCurrency: () => {},
});

//Создание провайдера
interface CurrencyProviderProps {
  children?: React.ReactNode;
}

export const CurrencyProvider = ({ children }: CurrencyProviderProps) => {
  const [symbolCurrency, setSymbolCurrency] = useState<string>("₽");
  const [valueCurrency, setValueCurrency] = useState<number>(1);

  return (
    <CurrencyContext.Provider
      value={{
        symbolCurrency,
        valueCurrency,
        setSymbolCurrency,
        setValueCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
