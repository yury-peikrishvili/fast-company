import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const lastOne = Number(length.toString().slice(-1));
    let phrase = "";
    if (length > 4 && length < 15) phrase = "человек тусанет";
    else if ([2, 3, 4].indexOf(lastOne) >= 0) phrase = "человека тусанут";
    else if (lastOne === 1) phrase = "человек тусанет";
    else phrase = "человек тусанет";

    return (
        <h2>
            <span
                className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}
            >
                {length > 0
                    ? `${length + " " + phrase} с тобой сегодня`
                    : "Никто с тобой не тусанет"}
            </span>
        </h2>
    );
};
SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
