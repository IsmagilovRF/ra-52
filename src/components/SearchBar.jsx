import React from "react";
import PropTypes from "prop-types";
import ServicesList from "./ServicesList";
import SearchExample from "./SearchExample";

// Поисковая форма со списком сервисов и примером запроса

const SearchBar = ({ links, example }) => {
  return (
    <React.Fragment>
      <ServicesList links={links} />
      <div className="ui fluid action input">
        <input type="text" placeholder="Search..." />
        <div className="ui button">Search</div>
      </div>
      <SearchExample example={example} />
    </React.Fragment>
  );
};

SearchBar.propTypes = {
  example: PropTypes.string.isRequired,
};

export default SearchBar;
