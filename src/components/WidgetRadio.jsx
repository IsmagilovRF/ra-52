import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import Widget from "./Widget";

// Блок "эфир"

const WidgetRadio = ({ podcasts }) => {
  return (
    <Widget title="Эфир">
      {podcasts.map(item => (
        <p key={shortid.generate()}>
          <b>{item.title}</b> {item.station}
        </p>
      ))}
    </Widget>
  );
};

WidgetRadio.propTypes = {
  podcasts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      station: PropTypes.string.isRequired
    })
  )
};

export default WidgetRadio;
