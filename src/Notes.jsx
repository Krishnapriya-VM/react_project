/*
Server Side Rendering VS Client Side Renedering

Server Side Rendering:
When we click anyone of links, we are essentially requesting a new page 
to the server, by making the use of the URL, the server reads the request  
and sends as back the requested page

Client Side Renedering
In CSR, an entire app will be rendered or hosted on a single page
_________________________________________________________________________
CONTEXT IN REACT:
Suppose there are 3 components: COMPONENT A, B, C
To pass data from A -> C we need to pass the state from A->B, then B->C 
The problem here is if B doesnt want the data that is passed, still
to reach C we need to pass it to B
This phenomena is called prop drilling.

To avoid prop drilling, we use Context
Here we create data& functions in A and then pass them to a context.
When some other components want those data & functions, 
they can get through accessing context 

STEPS TO CREATE CONTEXT
-> Create context object
-> Providing the context
-> Consuming the context
-> Updating the context


import { useReducer } from "react";

function App() {
  //Creating reducer state as a string
  //const [state, dispatch] = useReducer(reducer, 0);

  //Creating reducer with state as an object
  //const [state, dispatch] = useReducer(reducer, {count:0});

  //State using complex object as state in Reducer
  const [state, dispatch] = useReducer(reducer, {count: 0, incrementBy: 1})

  function reducer(state, action){
    if(action.type === 'increment'){
      //return state + 1 OR
      //state updation based string value
      //return state + action.payload;

      //state updation using state as an object
      //return { ...state, count: state.count + action.payload};

      //state updation using input value
      return { ...state, count: state.count + state.incrementBy};
    }
    if(action.type == 'decrement'){
      return {...state, count: state.count - state.incrementBy};
    }
    if(action.type == 'setIncrement'){
      return {...state, incrementBy: action.payload}
    }
  }

  return (
    <div>
      <h1>{state.count}</h1>
      <input value={state.incrementBy} 
      onChange={(e) => 
      dispatch({type: 'setIncrement', payload: Number(e.target.value)})} type="text" />
      <button onClick={() => dispatch({type:'increment', payload: 1})} ><b>INCREMENT</b></button>
      <button onClick={() => dispatch({type:'decrement', payload: 1}) } ><b>DECREMENT</b></button>
    </div>
  )
}

export default App;


*/