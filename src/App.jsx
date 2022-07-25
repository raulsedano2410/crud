import { useState, useEffect } from 'react'
import axios from 'axios'
import UserList from './components/UserList'
import UserForm from './components/UserForm'
import './App.css'

function App() {
    const [users, setUsers] = useState([])
    const [usersSelected, setUserSelected] = useState(null)

    const [modalForm, setModalForm] = useState(false)

    const [titleEditCreat, setTitleEditCreat] = useState(true)

    useEffect(() => {

        axios.get('https://users-crud1.herokuapp.com/users/')
            .then(res => setUsers(res.data))

    }, [])

    const getUsers = () => {
        axios.get('https://users-crud1.herokuapp.com/users/')
            .then(res => setUsers(res.data))
    }

    const addUser = e => {
        console.log(e)
        axios.post('https://users-crud1.herokuapp.com/users/', e)
            .then(() => getUsers())
            .catch(error => console.log(error.response.data))
    }

    const editUser = e => {
        console.log(e)
        setUserSelected(e)
        setModalForm(!modalForm)
        setTitleEditCreat(false)
    }

    const updateUser = e => {
        console.log(e)
        axios.put(`https://users-crud1.herokuapp.com/users/${e.id}/`, e)
            .then(() => getUsers())
            .catch(error => console.log(error.response.data))
    }

    const userNull = () => setUserSelected(null)

    return (
        <>
            <div className="App">
                <div className='div-form-container'>
                    <h1 className='title'>Users</h1>
                    <UserForm
                        modalForm={modalForm}
                        setModalForm={setModalForm}
                        userNull={userNull}
                        updateUser={updateUser}
                        addUser={addUser}
                        usersSelected={usersSelected}
                        setTitleEditCreat={setTitleEditCreat}
                        titleEditCreat={titleEditCreat}
                    />
                </div>
                <UserList
                    users={users}
                    editUser={editUser}
                    getUsers={getUsers}
                />
            </div>
        </>
    )
}

export default App
