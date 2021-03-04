import React from "react";
import PropTypes from "prop-types";
import Widget from "./Widget";

// Блок "погода"

const WidgetWeather = ({ weather, moment }) => {
  const current = moment.hour() < 6 ? weather.night : weather.day;
  return (
    <Widget title="Погода">
      <p>
        <b>+{current}&deg;</b>
      </p>
      <p>День: +{weather.day}</p>
      <p>Ночь: +{weather.night}</p>
    </Widget>
  );
};

WidgetWeather.propTypes = {
  current: PropTypes.shape({
    day: PropTypes.number.isRequired,
    night: PropTypes.number.isRequired
  }),
  moment: PropTypes.object
};

export default WidgetWeather;
