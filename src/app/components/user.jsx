import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = (user) => {
    return (
        <tr>
            <td>{user.name}</td>
            <td>
                {user.qualities.map((qualitie, index) => (
                    <Qualitie
                        key={index}
                        color={qualitie.color}
                        name={qualitie.name}
                    />
                ))}
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>
                <Bookmark
                    status={user.bookmark}
                    onToogleBookmark={user.onToogleBookmark}
                    id={user._id}
                />
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => user.onDelete(user._id)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};
User.protoTypes = {
    _id: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToogleBookmark: PropTypes.func.isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired
};

export default User;
