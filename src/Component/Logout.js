import React from 'react'
import { useHistory } from 'react-router-dom'
import * as commonService from '../utils/CommonService'
// import Auth from '../Router/Auth'
export const Logout = () => {
    const history = useHistory()
    const logoutBtn = () =>{
        const token = JSON.parse(localStorage.getItem('token'))
        console.log(token)
        localStorage.removeItem("token");
        history.push('/login')
        commonService.forSuccess("Logout Successfully !")
        // Auth.signout();
    }
    return (
        <div>
            <h5 onClick={logoutBtn} style ={{ cursor : 'pointer'}}>Logout</h5>
        </div>
    )
}
