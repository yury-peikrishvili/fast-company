import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
    return (
        <div
            className={status ? "bi-bookmark-check-fill" : "bi-bookmark"}
            onClick={() => rest.onToogleBookmark(rest.id)}
            style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
        ></div>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool
};

export default BookMark;
