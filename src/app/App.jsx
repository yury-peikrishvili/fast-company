import React, { useState, useEffect } from "react";
import Users from "./components/users";

import api from "./api";

function App() {
    const [users, setUsers] = useState();
    console.log(api.users);
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(Object.assign(data)));
    }, []);

    const handleDelete = (userId) => {
        const newUsers = users.filter((user) => user._id !== userId);
        setUsers(newUsers);
    };

    const hanldeToogleBookmark = (id) => {
        const newUsers = users.map((user) => {
            if (user._id === id) {
                user.bookmark = !user.bookmark;
            }
            return user;
        });
        setUsers(newUsers);
    };

    return (
        <>
            {users && (
                <Users
                    users={users}
                    onDelete={handleDelete}
                    onToogleBookmark={hanldeToogleBookmark}
                />
            )}
        </>
    );
}

export default App;
