import { useLocation } from "react-router-dom"

export default function Profile(){
    //Allows us to access the state being passed,
    // which occurred through an event
    const location = useLocation();
    const {userName} = location.state || {};
    return(
        <div>
            <b>This is your profile page, {userName}!</b>
        </div>
    )
}