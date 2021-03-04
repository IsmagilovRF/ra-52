import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

// Список поисковых сервисов

const ServicesList = ({ links }) => {
  return (
    <div className="ui horizontal list">
      {links.map(link => (
        <a href="https://ismagilovrf.github.io/ra-52/" className="item" key={shortid.generate()}>
          {link}
        </a>
      ))}
    </div>
  );
};

ServicesList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default ServicesList;
