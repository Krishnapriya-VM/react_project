import { useContext } from "react"
import { UserContext } from "./context/UserContext"


export default function Checkout(){
    /*
    Step 3:
    *) Consume the context using useContext() and assign it to variable
    *) Import the context that we need to provide
    *) Provide the context we need to use in useContext 
    *) Display the value
     
    Step 4:[Continuation(a)]
    *) As value is passed as an object destructor the value "user"
       instead of simply value
    
    */
    const {user} = useContext(UserContext)
    return (
        <div>
            <b>Checkout as {user}</b>
        </div>
    )
}