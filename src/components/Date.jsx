import React from "react";
import "moment/locale/ru";

// Вывод текущей даты и времени

const Date = ({ date }) => {
  return <div>{date.locale("ru").format("DD MMMM, dddd hh:mm")}</div>;
};

export default Date;
