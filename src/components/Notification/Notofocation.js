import React from "react";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const option = {
  position: "top-center",
  autoClose: 2500,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};
const Notify = (status) => {
  switch (status) {
    case "added":
      return toast.success("Сотрудник успешно добавлен", option);
    case "deleted":
      return toast.success("Сотрудник успешно удален", option);
    case "edited":
      return toast.success("Запись успешно изменена", option);
    case 400:
      return toast.error("Неверный запрос", option);
    case 404:
      return toast.error("Запрашиваемый сотрудник не найден", option);
    case 500:
      return toast.error("Ошибка работы сервера", option);
    default:
      return toast("Проверка", option);
  }
};

export default Notify;
