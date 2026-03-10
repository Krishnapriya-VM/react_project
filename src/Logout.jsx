import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export default function Logout(){
    //Receiving dispatch instead of setUser
    //const {setUser} = useContext(UserContext);
    const {dispatch} = useContext(UserContext)
    return(
        <div>
            <button onClick={() => dispatch({type: 'logout', payload: 'Guest'})} ><b>LOGOUT</b></button>
        </div>
    )
}