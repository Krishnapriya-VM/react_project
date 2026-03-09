import { useContext, useState } from "react";
import { userContext } from "./Context";

export default function Login(){
    const [value, setValue] = useState("");
    const {user, setUser} = useContext(userContext);
    function handleSubmit(e){
        e.preventDefault();
        setUser(value)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={value} 
                onChange={(e) => setValue(e.target.value)} type="text" />
                <button type="submit">LOGIN</button>
            </form>
        </div>
    )
}