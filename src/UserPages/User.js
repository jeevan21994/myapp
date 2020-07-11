
            import React, { useState } from 'react';
            import AddUser from './AddUser';
            import EditUser from './EditUser';
            import UserList from './UserList';
            import * as commonService from '../utils/CommonService.js';
            
            const User= () => {
        

            const UsersData = [
            {image:'', id: 1, name: 'ram', email: 'ram@gmail.com', phone: '1233333',address:'knw' },
            ]
            
            const initialFormState = { id: null, name: '', email: '', phone: '' ,address:'' ,image:''}
            
            const [users, setUsers] = useState(UsersData)
            const [editing, setEditing] = useState(false);
            const [currentUser, setCurrentUser] = useState(initialFormState)
            
            // Add user...
            const addUser = user => {
                console.log(user)
                user.id = users.length + 1
            setUsers([...users, user])
            // NotificationManager.success('You have added a new book!', 'Successful!', 2000);

            }

            // delete users...
            const deleteUser = id => {
                console.log(id)
                commonService.forSuccess("user delete successfully","Deleted")
                setUsers(users => users.filter(item => item.id !== id));
            }

            const editUser = user => {
                console.log(user)
            setEditing(true)
            setCurrentUser({

            id: user.id,
            image: user.image,
            name: user.name,
            email: user.email,
            phone : user.phone,
            address : user.address,
            })
            }
            
            // update user
            const updateUser = (id, updatedUser) => {
            setEditing(false)
            console.log(id,'iddddd')
            setUsers(users.map(item => (item.id === id ? updatedUser : item)))
            }
            
            return (
            <div className="container">
            {/* <h2 className="text-center">React.js CRUD App using Hooks</h2> */}
            <div className="row">
            {editing ? (
            <div>
            {/* <div className="col-md-3"></div> */}

            <div className="col-md-12">
            <h2 className="text-center">Edit User</h2>
            <EditUser
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
            />

            </div>
            </div>
            ) : (
            <div>
            {/* <h3 className="text-center">Add User</h3> */}
            <div className="col-md-12 col-md-offset-12">
            <AddUser addUser={addUser} />
            </div>
            </div>
            )}
            
            
            
            </div>
            <div className="row">
            <h3 className="text-center">User List</h3>
            <div className="col-md-12 col-md-offset-6">
            <UserList  users={users} editUser={editUser} deleteUser={deleteUser}/>
            </div>
            </div>
            </div>
            );
            }
            
            export default User;
            