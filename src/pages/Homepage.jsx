import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Homepage(){

    const [userName, setUserName] = useState("")
    const navigate = useNavigate();
    function handleClick(){
        navigate('/dashboard/profile', {state: {userName}})
    }
    return(
        <div>
            <b>This is the Homepage</b>
            <p>
                <input type="text" value={userName}
                onChange={(e) => setUserName(e.target.value) } />
            </p>
            <div>
            <button onClick={handleClick} ><b>GO TO PROFILE</b></button>
            </div>
            {/* <div>
                <Link to='/dashboard' >DASHBOARD</Link>
            </div> */}
        </div>
    )
}