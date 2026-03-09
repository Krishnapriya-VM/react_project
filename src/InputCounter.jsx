import { useReducer } from "react"

export default function InputCounter(){

    const [state, dispatch] = useReducer(reducer, {count: 0, incrementBy: 1});

    function reducer(state, action){
        if(action.type == 'increment'){
            return {...state, count: state.count + state.incrementBy}
        }
        if(action.type == 'decrement'){
            return {...state, count: state.count - state.incrementBy}
        }
        if(action.type == 'setIncrement'){
            return {...state, incrementBy: action.payload}
        }
    }

    return(
        <div>
            <h3>COUNTER USING INPUT</h3>
            <h4>COUNT VALUE: {state.count}</h4>
            <input onChange={(e) => dispatch({type: 'setIncrement', payload: Number(e.target.value)}) } value={state.incrementBy} type="text"/>
            <button onClick={() => dispatch({type: 'increment', payload: 1}) } ><b>+</b></button>
            <button onClick={() => dispatch({type: 'decrement', payload: 1}) } ><b>-</b></button>
        </div>
    )
}