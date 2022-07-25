import { useState, useEffect } from 'react';
import images from '../assets/images'
import Modal from './Modal'



const UserForm = ({ usersSelected, userNull, updateUser, addUser, modalForm, setModalForm, titleEditCreat, setTitleEditCreat }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState('')

    useEffect(() => {
        if (usersSelected !== null) {
            setEmail(usersSelected.email)
            setPassword(usersSelected.password)
            setFirstName(usersSelected.first_name)
            setLastName(usersSelected.last_name)
            setBirthday(usersSelected.birthday)
        } else {
            reset()
        }
    }, [usersSelected])

    const submit = e => {

        e.preventDefault()
        const userform = {

            email,
            password,
            first_name: firstName,
            last_name: lastName,
            birthday,
        }

        if (usersSelected !== null) {
            userform.id = usersSelected.id
            updateUser(userform)
            userNull()
        }
        else {
            addUser(userform)
            reset()
        }
        setModalForm(!modalForm)
    }
    const reset = () => {

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
        setBirthday('')
        setTitleEditCreat(true)
    }

    const createNewUser = () => {
        setModalForm(!modalForm)
        reset()
    }

    return (<>
        <button className='newUserButton' onClick={createNewUser}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
            </svg>
            <p>Create new user</p>
        </button>
        {modalForm &&
            <Modal
                modalForm={modalForm}
                setModalForm={setModalForm}
            >

                <form className='card-form' onSubmit={submit}>
                    <h2> {titleEditCreat ? 'New user' : 'Edit user'}</h2>

                    <div className='card-input'>
                        <label htmlFor="name">
                            <img className='icon' src={images.contact} alt="name" />
                        </label>
                        <input
                            type="text"
                            id='name'
                            maxLength="15"
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
                            placeholder='Name'
                        />
                        <input
                            type="text"
                            maxLength="20"
                            onChange={e => setLastName(e.target.value)}
                            value={lastName}
                            placeholder='Last name'
                        />
                    </div>

                    <div className='card-input'>
                        <label htmlFor="email">
                            <img className='icon' src={images.email} alt="name" />
                        </label>
                        <input
                            type="email"
                            id='email'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            placeholder='Email'
                            maxLength="30"
                        />
                    </div>

                    <div className='card-input'>
                        <label htmlFor="password">
                            <img className='icon' src={images.password} alt="img" />
                        </label>
                        <input
                            type="password"
                            id='password'
                            minLength="7"
                            maxLength="10"
                            autoComplete='on'
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            placeholder='Password'
                        />
                    </div>

                    <div className='card-input'>
                        <label htmlFor="birthday">
                            <img className='icon' src={images.birthday} alt="img" />
                        </label>
                        <input
                            className='date'
                            type="date"
                            id='birthday'
                            onChange={e => setBirthday(e.target.value)}
                            value={birthday}
                            min="1970-01-01"
                            max="2012-12-31"




                        />
                    </div>
                    <div className='form-buttons'>
                        <button>
                            {usersSelected !== null ? 'Update' : 'Create'}
                        </button>
                        {usersSelected !== null && <button onClick={userNull} type='button'>Clear</button>}
                    </div>


                </form>
            </Modal>
        }
    </>
    );
};

export default UserForm;