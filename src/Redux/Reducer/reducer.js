const initialState={
    name:"ram",
    wishes:['eat','code'],
    token : null
}

const reducer=(state=initialState,action)=>{
    console.log(action)
    if(action.type === 'CHANGE_NAME'){
        return {
            name:action.payload
        }
    }
return state;
}

export default reducer;