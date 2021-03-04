import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

// Список новостных разделов

const TopicsList = ({ topics }) => {
  return (
    <div className="ui horizontal bulleted list">
      {topics.map(topic => (
        <a href="https://ismagilovrf.github.io/ra-52/" className="item" key={shortid.generate()}>
          {topic}
        </a>
      ))}
    </div>
  );
};

TopicsList.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default TopicsList;
