import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearchChange, search }) => {
    return (
        <input
            placeholder="поиск..."
            name="search"
            value={search}
            onChange={onSearchChange}
        />
    );
};

SearchBar.propTypes = {
    onSearchChange: PropTypes.func,
    search: PropTypes.object
};

export default SearchBar;
