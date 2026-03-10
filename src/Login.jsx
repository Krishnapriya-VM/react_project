import { useContext, useState } from "react"
import { UserContext } from "./context/UserContext";
/*
Passing functions to the context:[continuation]

[Continuation steps after Context.jsx(b)]
Consume the context using useContext
[Go to Context.jsx]

[Continuation steps after Context.jsx(d)]
Consume setUser and handle the form submission
*/

export default function Login(){
    const [value, setValue] = useState("");

    //Receiving dispatch instead of setUser
    //const {user, setUser} = useContext(UserContext);
    const {state, dispatch} = useContext(UserContext)
    function handleSubmit(e){
        e.preventDefault();
        //handling using dispatch
        //setUser(value);
        dispatch({type: 'login', payload: value})
    }

    return(
        <div>
            <form onSubmit={handleSubmit} >
                <input 
                onChange={(e) => setValue(e.target.value)} 
                value={value} type="text" />
                <button><b>LOGIN</b></button>
            </form>
        </div>
    )
}