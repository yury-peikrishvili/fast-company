import React from 'react'
import api from '../api'

const Users=()=>{
    console.log(api.users.fetchAll())
    return <h1>users</h1>
}

export default Users;
