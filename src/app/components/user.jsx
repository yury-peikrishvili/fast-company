import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

    const User = (user) => {

    return (
        <tr>
            <td>{user.name}</td>
            <td>
                {user.qualities.map((qualitie, index) => (
                    <Qualitie  key = {index} color = {qualitie.color} name = {qualitie.name}/>
                ))}
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>
                <Bookmark status = {user.bookmark} onToogleBookmark = {user.onToogleBookmark} id={user._id}/> 
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => user.onDelete(user._id)}>delete</button>
            </td>
        </tr>
        
    )
}

export default User;