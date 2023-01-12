import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/page/userPage";

import UsersListPage from "../components/page/usersListPage";
import PropTypes from "prop-types";

const Users = ({ location }) => {
    const params = useParams();
    const { userId } = params;
    return <>{userId ? <UserPage userId={userId} /> : <UsersListPage />}</>;
};

Users.propTypes = {
    location: PropTypes.object
};

export default Users;
