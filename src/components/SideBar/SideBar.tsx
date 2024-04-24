import cls from "./SideBar.module.scss";
import Currency from "components/Currency/Currency";
import Filter from "components/Filter/Filter";

export const SideBar = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.content}>
        <Currency />
        <Filter />
      </div>
    </div>
  );
};
