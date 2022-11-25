import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

// import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
      const newUsers = users.filter((user) => user._id !== userId);
      setUsers(newUsers);
  };

  const hanldeToogleBookmark = (id) => 
    {
      const newUsers = users.map((user) => {
          if (user._id === id){
              user.bookmark = !user.bookmark ;
          }
          return user        
      })
      setUsers(newUsers);
  };

  return (
    <>
      <SearchStatus length={users.length} />
      <Users users={users} onDelete={handleDelete} onToogleBookmark = {hanldeToogleBookmark}/>
    </>
   );
   
}

export default App;