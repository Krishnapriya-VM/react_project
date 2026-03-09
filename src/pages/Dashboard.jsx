import { Link, Outlet } from "react-router-dom";

export default function Dashboard(){
    return(
        <div>
            <div>
                <b><Link to='profile' >PROFILE</Link></b>
            </div>
            <div>
                <b><b><Link to='settings' >SETTINGS</Link></b></b>
            </div>
            <b>This is the Dashboard</b>
            <Outlet/>
            {/* <div>
                <Link to='/' >HOME</Link>
            </div>
            <div>
                <Link to='/*' >PROFILE</Link>
            </div> */}
        </div>
    )
}