export const anotherName=(name)=>{
    // return {
    //     type:"CHANGE_NAME",
    //     payload:name
    // }

    //online name change with api
    // return (dispatch)=>{
    //     fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(res2=>{
    //         dispatch({type:"CHANGE_NAME",payload:res2[0].name})
    //     })
    // }

    //async await
    return async (dispatch)=>{
      const data=await fetch('https://jsonplaceholder.typicode.com/users')
      const res2=await data.json()
      dispatch({type:"CHANGE_NAME",payload:res2[0].name})
    }
}

export const addwish=()=>{
    return {
        type:'ADD_WISH',
        payload:'write hard code'
    }
}
// json promise return karega promise ko resolve krne k liye await ka use karenge