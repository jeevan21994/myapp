

    import React, { useState, useEffect } from 'react'
    import * as commonService from '../utils/CommonService.js';
    import Loader from '../Loader/Spinner';
    const EditUser = props => {
      const [user, setUsers] = useState(props.currentUser)
      console.log(user)
      const [loading , setLoading]=useState(false)
      
    useEffect(
    () => {
      setLoading(false)
        setUsers(props.currentUser)
    },
    [ props ]
    )
   const hideLoader = () => {
      setLoading({ loading: false });
    }
  
    const showLoader = () => {
      setLoading({ loading: true });
    }
  
    const handleInputChange = event => {
    const { name, value } = event.target
    
    setUsers({ ...user, [name]: value })
    }
    
    const onSubmit=event => {
      event.preventDefault()
      setTimeout(() => {
        commonService.forSuccess("User update successfully","success")
          props.updateUser(user.id, user)
          hideLoader();
      }, 2000);
      showLoader();
    }
    return (
   
      <div className="modal-dialog modal-dialog-centered">

    <div className="modal-content">
    <form>

      {/* <!-- Modal Header --> */}
      <div className="modal-header">
        <h4 className="modal-title">Edit User Form</h4>
        <button type="button" onClick={() => props.setEditing(false)} className="close" data-dismiss="modal">&times;</button>
      </div>
      
      {/* <!-- Modal body --> */}
      <div className="modal-body">

      <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input type="text" className="form-control" id="name" 
      name="name"  value={user.name} 
      onChange={handleInputChange}/>
      </div>

      <div className="form-group">
      <label htmlFor="email">Email address:</label>
      <input type="text" className="form-control" id="email"
        name="email"  value={user.email} 
        onChange={handleInputChange}/>
      </div>

      <div className="form-group">
      <label htmlFor="phone">Phone Number:</label>
      <input type="number" className="form-control" id="phone"
        name="phone"  value={user.phone} 
        onChange={handleInputChange} />
      </div>

      <div className="form-group">
      <label htmlFor="address">Address:</label>
      <input type="text" className="form-control" id="address"
        name="address"  value={user.address} 
        onChange={handleInputChange}/>
      </div>
    
      <div className="form-group">
      <label htmlFor="profile">Profile Upload:</label>
      <input type="file" className="form-control" id="profile" name="profile" />
      </div>
      {/* <button type="submit" className="btn btn-default">Submit</button> */}

      </div>
      
      {/* <!-- Modal footer --> */}
      <div className="modal-footer">
      <button className="btn btn-primary" onClick={onSubmit}  >Update User</button>
    {/* <button onClick={() => props.setEditing(false)} className="btn btn-info">
    Cancel
    </button> */}
      </div>
      
    </form>
    </div>
    {(loading) ? <Loader /> : null}
    </div>

    )
    }

    export default EditUser

    // if (!user.name || !user.email || !user.phone || !user.address) return

    // <form onSubmit={((event) => {
    // event.preventDefault()
    // setTimeout(()=>{
    //   commonService.forSuccess("User update successfully","success")
    //   props.updateUser(user.id, user)
    // },10000)
    // }
    //  )?<Spinner/>:''
    //  }
    // >



















































