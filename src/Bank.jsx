import { useReducer, useState } from "react"

export default function Bank(){
    const [state, dispatch] = useReducer(reducer, {balance: 0});
    const [amount, setAmount] = useState(0)
    function reducer(state, action){
        if(action.type == 'add'){
            return {...state, balance: state.balance + action.payload}
        }
        if(action.type == 'sub'){
            return {...state, balance: state.balance - action.payload}
        }
    }
    return (
        <div>
            <h1>{state.balance}</h1>
            <input onChange={(e) => setAmount(e.target.value)} value={amount} type="text" />
            <button onClick={() => dispatch({type: 'add', payload: Number(amount)})} >DEPOSIT</button>
            <button onClick={() => dispatch({type:'sub', payload: Number(amount)})} >WITHDRAW</button>
        </div>
    )
}