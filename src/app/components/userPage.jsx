import React, { useState, useEffect } from "react";
import api from "../api";
import QualitiesList from "./quilitiesList";
import { Link } from "react-router-dom";

const userPage = ({ match }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(match.params.userId).then((data) => setUser(data));
    }, []);

    if (user) {
        return (
            <div className="p-3">
                <h1>{user.name}</h1>
                <h1>Профессия: {user.profession.name}</h1>
                <QualitiesList qualities={user.qualities} />,
                <p>completedMeetings: {user.completedMeetings}</p>
                <p>rate: {user.rate}</p>
                {/* <button className="btn btn-secondary mt-2"> */}
                <Link className="btn btn-secondary mt-2" to={"/users/"}>
                    все пользователи
                </Link>
                {/* </button> */}
            </div>
        );
    }
    return <div className="p-3">loading</div>;
};

export default userPage;
