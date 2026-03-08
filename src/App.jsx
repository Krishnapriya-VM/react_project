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
