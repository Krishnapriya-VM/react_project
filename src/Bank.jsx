import { useReducer, useState } from "react";

export default function Bank(){
    const [state, dispatch] = useReducer(reducer, {balance: 0});
    const [amount, setAmount] = useState(0);

    function reducer(state, action){
        if(action.type == 'deposit'){
            return {...state, balance: state.balance + action.payload}
        }
        if(action.type == 'withdraw'){
            return {...state, balance: state.balance - action.payload}
        }
    }

    return(
        <div>
            <h3>BALANCE: {state.balance}</h3>
            <input value = {amount} onChange={(e) => setAmount(e.target.value)} />
            <div>
                <button onClick={() => dispatch({type: 'deposit', payload: Number(amount)})}><b>DEPOSIT</b></button>
                <button onClick={() => dispatch({type: 'withdraw', payload: Number(amount)})} ><b>WITHDRAW</b></button>
            </div>
        </div>
    )


}