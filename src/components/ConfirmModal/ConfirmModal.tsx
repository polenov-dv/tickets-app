import React from "react";
import cls from "./ConfirmModal.module.scss";
import closeImg from "img/close_icon.svg";

interface ConfirmModalProps {
  visible: boolean;
  setVisible: (status: boolean) => void;
}

export const ConfirmModal = ({ visible, setVisible }: ConfirmModalProps) => {
  const onClose = () => {
    setVisible(false);
  };

  const modalClasses = [cls.modalWindow];
  if (visible) {
    modalClasses.push(cls.active);
  }

  return (
    <div className={modalClasses.join(" ")} onClick={() => onClose()}>
      <div
        className={cls.content}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <div className={cls.close_modal} onClick={() => onClose()}>
          <img src={closeImg} alt="" />
        </div>
        <h1 className={cls.title}>Спасибо за покупку!</h1>
      </div>
    </div>
  );
};
