// const iState={
//     name:"ram",
//     wishes:['eat','code']
// }

const wishReducer=(state=[],action)=>{
    console.log(action)
    if(action.type === 'ADD_WISH'){
        // return {
        //     name:action.payload
        // }
        return [...state, action.payload]
    }
return state;
}

export default wishReducer;