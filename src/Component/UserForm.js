import React, { useState } from 'react'

export const UserForm = () => {
    const [ user ,setUser ] = useState({name:'',password:'',nameError:'',
    passwordError:''})
//    const handleInputChange = e => {
//         e.preventDefault()
//         setUser({...user,[e.target.name]:e.target.value})
//     }
  const valid = () =>{
        // both condition check field
        if(!user.name.includes("admin") && (user.password.length < 5) ){
            setUser({nameError:"Invalid User",passwordError:"password length more than 5"})
        }
        // pertular field
        else if(!user.name.includes("admin")){
            setUser({nameError:"Invalid User"})
        }
        // pertular field
        else if(user.password.length < 5){
            setUser({passwordError:"password length more than 5"})
        }
        else{
            return true
        }
    }
   const onSubmit = e => {
        e.preventDefault()
        setUser({nameError:" ",passwordError:""})

        if(valid()){
            alert("form submit")
        }
        console.log(user)
    }

    return (
        <div>
            <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-10">

            <form>
                <label>Name:</label>
                <input type="text" name="name" onChange={(e)=>{setUser({user:e.target.value
                })}} />
                <p style={{color:"red" ,fontSize:"12px"}}>{user.nameError}</p>

                <label>Password:</label>

                <input type="text" name="password"  onChange={(e)=>{setUser({password:e.target.value
                })}}/>
                <p style={{color:"red" ,fontSize:"12px"}}>{user.passwordError}</p>
                 <button onClick={onSubmit}>Submit</button>
              </form>
            </div>
            </div>
            </div>
        </div>
    )
}
