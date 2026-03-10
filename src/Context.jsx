import Checkout from "./Checkout";
import Login from "./Login";
import Logout from "./Logout";
import { UserProvider } from "./context/UserContext";

//Step 1: Create Context object
// export const userContext = createContext();

export default function Context(){

    /* Step 2: Providing the Context
    *) 1st nest the Checkout component which wants the data
    *) use context Provider to provide the context 
       to the nested component Checkout 
    *) Providing data to the components through context
       data can be string or an object
       (Step 3 in Checkout.jsx) 

    Step 4:
    *)Instaed of having the hardcoded data(value="Guest") 
    Let's suppose the logged in value of the user to be dynamic
    *)For this we can use state variable through useState
    *)Now change the value in the provider to {user} 
    
    [Continuation (b)]
    *) Now, upadate the state using setUser()
    *) Creating an input field to accept the value of logged in user 
       and change the state.
       This changes the user value when we type on the input field.
       Which means it updates the state which is is provided to the components

    Passing functions to the context:
    *)Created a Login component, 
    *)Based on the submission the state gets updated
    *)Including the Login instead of the below input field
    [Continuation in Login.jsx(a)]

    [Continuation steps after Login.jsx(c)]
    *)Now to change the state, provide the setUser()
    */
    return(
        <div>
            {/* <input 
            onChange={(e) => setUser(e.target.value)}
            value={user} type="text" /> */}
            <UserProvider>
                <Login />
                <Checkout/>
                <Logout/>
            </UserProvider>
        </div>
    )
}