import { useState } from 'react';
import Modal from './Modal';
import axios from 'axios'
import images from '../assets/images'

const UserList = ({ users, editUser, getUsers }) => {

    const [delet, setDelet] = useState(false)

    const [nameDelete, setNameDelete] = useState({})

    const deletUser = e => {

        console.log(e)
        axios.delete(`https://users-crud1.herokuapp.com/users/${e.id}/`)
            .then(() => {
                getUsers()
                setDelet(false)
            })
            .catch(error => console.log(error.response.data))
    }

    const deleteOn = (e) => {
        setDelet(true)
        setNameDelete(e)
    }

    return (
        <>
            <div className='cards-container'>
                {users.map(user => (
                    <div key={user.id} className='card'>
                        <h3 className='card__name'>{user.first_name} {user.last_name}</h3>
                        <span>Email</span>
                        <p className='card__details'>{user.email}</p>
                        <span>Password</span>
                        <p className='card__details'>{user.password}</p>
                        <span>Birthday</span>
                        <p className='card__details'>
                            <img src={images.gift} alt="gift" />
                            {' '}{user.birthday}</p>
                        <hr className='hr' />
                        <div className='card__buttons'>
                            <button onClick={() => deleteOn(user)}>
                                <img className="bi-trash" src={images.trash} alt="trash" />
                            </button><br />
                            <button className="bi-pencil" onClick={() => editUser(user)}>
                                <img src={images.pencil} alt="pencil" />
                            </button>
                        </div>
                    </div>
                ))}
                {delet &&
                    <Modal
                        delet={delet}
                        setDelet={setDelet}

                    >
                        <div className='card_delet'>

                            <h2>Delet user</h2>
                            <p className='card__details-delete'>
                                Are you sure you want to delete the user <strong>{nameDelete.first_name} {nameDelete.last_name}</strong>?
                            </p>
                            <button className='list_button' onClick={() => deletUser(nameDelete)}>Delete</button>
                        </div>
                    </Modal>
                }
            </div>
        </>
    );
};

export default UserList;