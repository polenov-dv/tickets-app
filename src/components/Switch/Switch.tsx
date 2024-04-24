import cls from "./Switch.module.scss";

interface SwitchProps {
  isOn: boolean;
  handleToggle: (value: boolean) => void;
}

const Switch = (props: SwitchProps) => {
  const { isOn, handleToggle } = props;
  return (
    <label className={cls.switch}>
      <input
        className={cls.switch_input}
        type="checkbox"
        checked={isOn}
        onChange={() => handleToggle(!isOn)}
      />
      <span className={`${cls.slider} ${cls.round}`}></span>
    </label>
  );
};

export default Switch;
