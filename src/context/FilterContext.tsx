import { useState, createContext } from "react";

//Создание контекста
interface FilterContextProps {
  filters: number[];
  setFilters: (newValue: number[]) => void;
}

export const FilterContext = createContext<FilterContextProps>({
  filters: [],
  setFilters: () => {},
});

//Создание провайдера
interface FilterProviderProps {
  children?: React.ReactNode;
}

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [filters, setFilters] = useState<number[]>([]);

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
