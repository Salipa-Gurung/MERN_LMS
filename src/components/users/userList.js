import React,{useState , useEffect} from 'react'
import { Edit3, Eye, Trash2 } from 'react-feather'
import { Link } from 'react-router-dom'
import { fetchUsers , deleteUser} from '../../api'
import ListLayout from '../../layouts/crudLayout/List'


const cHeader = [
    'userName',
    'email'
]

const UserList = () => {

    const [users,setUsers] = useState([])

    const getUser = async ()=>{fetchUsers().then(res=>setUsers(res.data.users))}

    useEffect(() => {
        getUser()
    }, [])

    const handleDelete = (id)=>{
        if(window.confirm("Are you sure you want to delete?"))
        {deleteUser(id).then((res) => console.log(res.data))
            window.location.reload()
        }
    }
    return (
        <ListLayout title="Users" createLink="" hideCreate columnHeaders={cHeader}>
            <tbody>
                {
                    users.map(user => (
                        <tr key={user.email}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            
                            <td>
                                <Link to={`/users/${user._id}`}>
                                    <Eye/>
                                </Link>
                                <Link to={`/users/edit/${user._id}`}>
                                    <Edit3/>
                                </Link>
                                <a href="#" onClick={()=>handleDelete(user._id)}>
                                    <Trash2/>
                                </a>
                            </td>
                        </tr>
                    ))    
                }           
            </tbody>
        </ListLayout>       
    )
}

export default UserList
