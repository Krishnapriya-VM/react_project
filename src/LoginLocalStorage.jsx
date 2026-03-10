import { useState } from "react"
import useLocalStorage from "./hooks/useLocalStorage";

export default function LoginLocalStorage(){

    const [value, setValue] = useState("");
    const [user, setUser] = useLocalStorage()

    function handleClick(){
        setUser(value)
    }

    return(
        <div>
            <input 
            onChange={(e) => setValue(e.target.value)}
            value={value} type="text" />
            <button onClick={handleClick} ><b>LOGIN</b></button>
        </div>
    )
}