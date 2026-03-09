/*UseReducer have a state & a reducer() & an action which we dispatch
UseReducer Hook returns 2 things : state & dispatch()
To the useReducer we pass 2 things: reducer() & the initial value of state

Reducer is created by using the useReducer() and it returns 2 things:
-> state - variable that holds the state value
-> dispatch() - Its an action which we dispatch when we want to change the state
                ie, dispatch() is usually called inside event handlers.
                dispatch() sends an action object to the reducer.
                The action object contains 2 things:
                ->type of action
                ->payload for the action - means by what amount you want 
                to make changes to the state OR
                optional data needed to update the state

reducer() - Whenever we want to change the value of state in the useReducer,
            that job is done by the reducer
            The action dispatched will be handled by reducer()
            To change the value of the state, it accepts 2 things: 
            ->state
            ->action
*/

import { useReducer } from "react"

export default function Count(){

    const [state, dispatch] = useReducer(reducer, 0);
    function reducer(state, action){
        if(action.type == 'increment'){
            return state + action.payload;
        }
        if(action.type == 'decrement'){
            return state - action.payload;
        }
    }

    return(
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch({type: 'increment', payload: 1}) } ><b>+</b></button>
            <button onClick={() => dispatch({type: 'decrement', payload: 1}) } ><b>-</b></button>
        </div>
    )
}