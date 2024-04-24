import { useContext, useState } from "react";
import cls from "./Ticket.module.scss";
import { CurrencyContext } from "context/CurrencyContext";
import { TicketModel } from "models/TicketModel";
import Switch from "components/Switch/Switch";
import { ConfirmModal } from "components/ConfirmModal/ConfirmModal";

interface TicketProps {
  ticket: TicketModel;
}

const Ticket = ({ ticket }: TicketProps) => {
  const { symbolCurrency, valueCurrency } = useContext(CurrencyContext);
  const [luggageStatus, setLuggageStatus] = useState(false);
  const [modal, setModal] = useState(false);

  const transfer =
    ticket.stops === 0
      ? "Без пересадок"
      : ticket.stops === 1
      ? `${ticket.stops} пересадка`
      : `${ticket.stops} пересадки`;

  return (
    <div className={cls.content}>
      <ConfirmModal visible={modal} setVisible={setModal} />
      <div className={cls.company}>
        <p className={cls.carrier}>{ticket.carrier}</p>
        <div className={cls.luggage}>
          {luggageStatus ? (
            <p className={cls.luggage_text}>Багаж включён</p>
          ) : (
            <p className={cls.luggage_text}>
              Багаж
              <span className={cls.luggage_price}>
                +{Math.round(2500 / valueCurrency)}
              </span>
            </p>
          )}
          <Switch isOn={luggageStatus} handleToggle={setLuggageStatus} />
        </div>
        <button onClick={() => setModal(true)} className={cls.price}>
          <p>Купить</p>
          {luggageStatus ? (
            <p>
              {`за ${
                Math.round(ticket.price / valueCurrency) +
                Math.round(2500 / valueCurrency)
              } ${symbolCurrency}`}
            </p>
          ) : (
            <p>
              {`за ${Math.round(
                ticket.price / valueCurrency
              )} ${symbolCurrency}`}
            </p>
          )}
        </button>
      </div>

      <div className={cls.route}>
        <div className={cls.time}>
          <p className={cls.time_text}>{ticket.departure_time}</p>
          <div className={cls.stops}>
            <p className={cls.stops_text}>{transfer}</p>
            <span className={cls.line}></span>
          </div>
          <p className={cls.time_text}>{ticket.arrival_time}</p>
        </div>

        <div className={cls.airport_wrapper}>
          <div className={cls.airport}>
            <p className={cls.source}>
              {`${ticket.origin}, ${ticket.origin_name}`}
            </p>
            <p className={cls.date}>{ticket.departure_date}</p>
          </div>

          <div className={cls.airport}>
            <p className={cls.source}>
              {`${ticket.destination}, ${ticket.destination_name}`}
            </p>
            <p className={cls.date}>{ticket.arrival_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
