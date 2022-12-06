import React from "react";
import Proptypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    return (
        <ul className="list-group">
            {Object.keys(items).map((item) => (
                <li
                    key={items[item][valueProperty]}
                    className={
                        "list-group-item" +
                        (items[item] === selectedItem ? " active" : "")
                    }
                    onClick={() => onItemSelect(items[item])}
                    role="button"
                >
                    {items[item][contentProperty]}
                </li>
            ))}
        </ul>
    );
};

export default GroupList;

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: Proptypes.oneOfType([Proptypes.object, Proptypes.array]),
    valueProperty: Proptypes.string.isRequired,
    contentProperty: Proptypes.string.isRequired,
    onItemSelect: Proptypes.func.isRequired,
    selectedItem: Proptypes.object
};
