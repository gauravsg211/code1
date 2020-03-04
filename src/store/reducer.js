

const initialState = {
    counter: 0,
    persons:[ ]

}
const reducer = (state = initialState, action) => {

    
    if (action.type === 'ADD') {
        return {
            counter: state.counter +10
        }

    }
    else if(action.type==='SUBTRACT')
    {
        return {
            counter: state.counter -10
    }
}

    else if(action.type==='INCREMENT')
    {
        return {
            counter: state.counter+1
        }
    }
    else if(action.type==='DECREMENT'){
        return{ 
     
         counter: state.counter-1
     }
    }
     else if(action.type==='RESET'){
        return{ 
     
            ...state,
            persons:Object.assign({},{name:'Alex', age:24, card_no:43}),
            
            
     }
     
}


 return state;
}

export default reducer;