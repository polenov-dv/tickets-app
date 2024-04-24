import { useState, useEffect, useContext } from "react";
import cls from "./TicketsList.module.scss";
import data from "data/tickets.json";
import { TicketModel } from "models/TicketModel";
import Ticket from "components/Ticket/Ticket";
import { FilterContext } from "context/FilterContext";

const TicketsList = () => {
  const tickets = data.tickets.sort(
    (a: TicketModel, b: TicketModel) => a.price - b.price
  );
  const [filterTickets, setFilterTickets] = useState<TicketModel[]>(tickets);
  const { filters } = useContext(FilterContext);

  //Фильтрация биллетов по количеству пересадок
  useEffect(() => {
    if (filters.length === 0 || filters.includes(Infinity)) {
      setFilterTickets(tickets);
    } else {
      setFilterTickets(
        tickets.filter((item: TicketModel) => {
          let status = false;
          filters.forEach((filter: number) => {
            if (item.stops === filter) {
              status = true;
            }
          });
          return status;
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <div className={cls.content}>
      {filterTickets.map((ticket: TicketModel, index) => (
        <Ticket key={index} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketsList;
