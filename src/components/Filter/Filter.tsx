import React, { useState, useEffect, useContext } from "react";
import cls from "./Filter.module.scss";
import data from "data/tickets.json";
import { TicketModel } from "models/TicketModel";
import { FilterContext } from "context/FilterContext";

interface filterStops {
  value: number;
  text: string;
}

const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState<number[]>([]);
  const { setFilters } = useContext(FilterContext);

  const maxStops = data.tickets.reduce(
    (maxValue: number, currentItem: TicketModel) => {
      return currentItem.stops > maxValue ? currentItem.stops : maxValue;
    },
    0
  );

  //Формирование массива фильтров
  const filterArray: filterStops[] = [{ value: Infinity, text: "Все" }];
  for (let i = 0; i <= maxStops; i++) {
    const newFilter: filterStops = {
      value: i,
      text:
        i === 0 ? "Без пересадок" : i === 1 ? "1 пересадка" : `${i} пересадки`,
    };
    filterArray.push(newFilter);
  }

  //Изменение состояния
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (selectedFilters.includes(value)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== value));
    } else {
      setSelectedFilters([...selectedFilters, value]);
    }
  };

  useEffect(() => {
    setFilters(selectedFilters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilters]);

  return (
    <div className={cls.content}>
      <p className={cls.text}>Количество пересадок</p>
      <ul className={cls.list}>
        {filterArray.map((filter, index) => (
          <li className={cls.list_item} key={index}>
            <label className={cls.checkbox_container}>
              <input
                className={cls.checkbox_input}
                type="checkbox"
                value={filter.value}
                checked={selectedFilters.includes(filter.value)}
                onChange={handleCheckboxChange}
              />
              <span className={cls.checkbox_custom}>
                <span className={cls.checkbox_tick}></span>
              </span>
              <p className={cls.label_text}>{filter.text}</p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
