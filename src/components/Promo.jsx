import React from "react";

// Промо блок отдельного проекта

const Promo = ({ item }) => {
  return (
    <div className="ui fluid card">
      <div className="image">
        <img src={item.img} alt="" />
      </div>
      <div className="content">
        <p className="header">{item.title}</p>
        <div className="meta">{item.desc}</div>
      </div>
    </div>
  );
};

export default Promo;
