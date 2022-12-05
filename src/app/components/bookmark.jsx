import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, ...rest }) => {
    return (
        <div
            className={status ? "bi-bookmark-check-fill" : "bi-bookmark"}
            onClick={() => rest.onToogleBookmark(rest.id)}
            style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
        ></div>
    );
};

Bookmark.propTypes = {
    status: PropTypes.bool.isRequired
};

export default Bookmark;
