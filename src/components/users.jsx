import React, { useState } from 'react'
import api from '../api'

const Users=()=>{
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userID) => {
        setUsers(
            users => users.filter(user=>user._id !== userID)
        );          
    };

    const renderPhrase = (number) => {
        let wordEnd = ''
        if((number.toString().endsWith('2')|| number.toString().endsWith('3')||number.toString().endsWith('4'))&&
        ![12,13,14].includes(number)){
            wordEnd = 'a'
        }
        if(number < 1) return <h2><span className = 'badge bg-danger'>Никто не тусанет с тобой</span></h2>
        return <h2><span className = 'badge bg-success'>{number} человек{wordEnd} тусанет с тобой</span></h2>
    };  

    const renderTable = () =>{
        return (
            <table className = 'table table-striped'>
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user=>(
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.qualities.map(qualitie=><span className = {"badge bg-"+qualitie.color}>{qualitie.name}</span>)}</td>
                            <td>{user.profession.name}</td>
                            <td>{user.completedMeetings}</td>
                            <td>{user.rate}</td>
                            <td><button className="btn btn-danger" onClick={() => handleDelete(user._id)}>delete</button></td>               
                        </tr>   
                    ))}
                </tbody>
            </table>
        )
    }
    return ( <>
        {renderPhrase(users.length)}
        {users.length>0?renderTable():null}
    </>
    )
}

export default Users;
