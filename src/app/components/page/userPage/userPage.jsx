import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import Qualities from "../../ui/qualities";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
    // const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);
    // const handleClick = () => {
    //     history.push(userId + `/edit`);
    // };
    if (user) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <h1> {user.name}</h1>
                        <h2>Профессия: {user.profession.name}</h2>
                        <Qualities qualities={user.qualities} />
                        <p>completedMeetings: {user.completedMeetings}</p>
                        <h2>Rate: {user.rate}</h2>
                        <Link to={`${user._id}/edit`}>
                            <button
                                className="btn btn-primary w-100 mx-auto"
                                type="button"
                            >
                                Изменить
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
