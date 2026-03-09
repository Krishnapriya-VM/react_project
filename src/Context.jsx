import { createContext, useState } from "react"
import Checkout from "./Checkout"
import Login from "./Login"
export const userContext = createContext()


export default function Context(){
    //holds the value of useContext to make it dynamic
    const [user, setUser] = useState("GUEST")
    return(
        <div>
            {/* <input 
            onChange={(e) => setUser(e.target.value)} 
            type="text" value={user} /> */}
            
            <userContext.Provider value={{user, setUser}}>
                <Login/>
                <Checkout/>
            </userContext.Provider>
        </div>
    )
}