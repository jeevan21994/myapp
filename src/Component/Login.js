import React,{ useState } from 'react'
import { useHistory ,Link} from 'react-router-dom'
import * as commonService from '../utils/CommonService'
import {Form,FormGroup,Label,Input, Button } from 'reactstrap';
export const Login = () => {
    const [error , setError] =useState({ userNameError:'',
    passwordError:''})
    const history =useHistory()
    const [ user , setUser ] = useState({username :'',password :''} )

   const handleInputChange = (e) => {
    e.preventDefault()
        setUser({
            ...user,[e.target.name]:e.target.value
        })
    }

    const valid =()=>{
        // both condition check field
        if(!user.username.includes("jeevan") && (user.password.length < 3) ){
            setError({userNameError:"Invalid User name",passwordError:"password length more than 3"})
        }
        // pertular field
        else if(!user.username.includes("jeevan")){
            setError({userNameError:"Invalid User name"})
        }
        // pertular field
        else if(user.password.length < 3){
            setError({passwordError:"password length more than 3"})
        }
        else{
            return true
        }
    }
   
    const onSubmit = (e) =>{
        e.preventDefault()
        console.log(user)
        setError({
            error:''
        })
        if(valid()){
            // alert("form submit")
        if(user.username === "jeevan" && user.password === "123"){
            localStorage.setItem("token" ,JSON.stringify(user))
            history.push('/home')
            commonService.forSuccess("Login Successfully !")
        }
        else{
        commonService.forError("Login unSuccessfully Plz Enter Username & Password!")
        }
    }

    }
    return (
        <div className="App-header">
            <div className="container">
                <div className="row ">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    <Form  onSubmit={e=>onSubmit(e)}>
                        {/* <h2>Login Form</h2> */}
                        <p className="text-center p-5 m-10 h4 ">Sign in</p>

                        <FormGroup>
                        <Label>User Name</Label>
                        <Input type="text" placeholder="Enter User Name" name="username"
                            value={user.username} onChange={handleInputChange}></Input>
                       <p style={{color:"red" ,fontSize:"12px"}}>{error.userNameError}</p>


                        <Label>Password</Label>
                        <Input type="text" placeholder="Enter Password" name="password" value={user.password} 
                        onChange={handleInputChange}></Input>   
                       <p style={{color:"red" ,fontSize:"12px"}}>{error.passwordError}</p>


                        <div className="d-flex justify-content-around">
                        <div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                                <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember me</label>
                            </div>
                        </div>
                        <div>
                            <Link to='' >Forgot password?</Link >
                        </div>
                    </div>
                        </FormGroup>

                        <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>
                        {/* <Button type="submit" className="btn btn-primary">Submit</Button> */}

                    <p className="text-center">Not a member ?
                        <Link from="/" to='/register' >  Register</Link >
                    </p>
                        </Form>
       
                    </div>

                </div>
            </div>
        </div>
    )
}


         /* <form>
                <label>Name:</label>
                <input type="text" placeholder="Enter User Name" 
                name="username" value={user.username} onChange={handleInputChange} />
                <br/>
                <label>Password:</label>
                <input type="text" placeholder="Enter Password" 
                name="password" value={user.password} onChange={handleInputChange} />
                <br/>
                <button type="button" className="btn btn-primary" onClick={onSubmit}>Login</button> 
            </form> */