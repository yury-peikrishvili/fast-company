import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = ({user, ...rest}) => {

    return (
        <tr>
            <td>{user.name}</td>
            <td>
                {user.qualities.map((qualitie) => (
                    <Qualitie  _id = {user._id} color = {qualitie.color} name = {qualitie.name}/>
                ))}
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>
                <Bookmark status = {user.bookmark} onToogleBookmark = {rest.onToogleBookmark} id={user._id}/> 
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => rest.onDelete(user._id)}>delete</button>
            </td>
        </tr>
        
    )
}

export default User;