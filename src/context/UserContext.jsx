/*
Separating context into its own file

*) Cut userContext(createContext() step) from Context.jsx &
   Move it to here
*) Creating the custom provider UserProvider,
   instead of userContext from Context.jsx
*) Cut UserContext.Provider & move it to here

*/
import { createContext, useReducer, useState } from "react";
const UserContext = createContext();

function UserProvider({children}){
    //Commenting state and creating Reducer 
    //const [user, setUser] = useState("Guest")
    function userReducer(state, action){
        if(action.type == 'login'){
            //return action.payload
            return {user: action.payload}
        }
        if(action.type == 'logout'){
            //return action.payload
            return {user: 'Guest'}
        }
    }
    //Instead of const [user, dispatch] = useReducer(userReducer, "")
    //passing a complex object & renaming the user as state

    const [state, dispatch] = useReducer(userReducer, {user: null})
    return (
        //Passing dispatch instead of setUser
        //<UserContext.Provider value={{user, setUser}} >
        <UserContext.Provider value={{...state, dispatch}} >
            {children}
        </UserContext.Provider>
   )
    
}

export {UserContext, UserProvider}