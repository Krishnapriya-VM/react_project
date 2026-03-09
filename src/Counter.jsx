import { useReducer } from "react"

export default function Counter(){
    const [state, dispatch] = useReducer(reducer, {count: 0})
    function reducer(state, action){
        if(action.type == 'increment'){
            return {...state, count: state.count + action.payload}    
        }
        if(action.type == 'decrement'){
            return {...state, count: state.count - action.payload}
        }
        
    }
    
    return(
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type: 'increment', payload: 1})} ><b>+</b></button>
            <button onClick={() => dispatch({type: 'decrement', payload: 1}) } ><b>-</b></button>
        </div>
    )
}