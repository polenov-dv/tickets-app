import cls from "./App.module.scss";
import { SideBar } from "./components/SideBar/SideBar";
import TicketsList from "./components/TicketsList/TicketsList";
import planeImg from "img/planeImg.png";

function App() {
  return (
    <div className={`${cls.main} ${cls.container}`}>
      <img className={cls.plane} src={planeImg} alt="plane" />
      <div className={cls.app}>
        <SideBar />
        <TicketsList />
      </div>
    </div>
  );
}

export default App;
