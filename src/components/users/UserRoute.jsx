import React from 'react'
import {Route} from 'react-router-dom'
import UserList from './userList'
import EditUser from './editUser'
import UserDetail from './userDetails'

const UserRoute = () => {
    return (
        <>
            <Route path="/users" exact>
                <UserList/>
            </Route>
            
            <Route path="/users/edit/:id" exact>
                <EditUser/>
            </Route>
            <Route path="/users/:id" exact>
                <UserDetail/>
            </Route>   
        </>
    )
}

export default UserRoute
