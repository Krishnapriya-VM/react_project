import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import Bank from './Bank.jsx'
import Count from './Count.jsx'
import Counter from './Counter.jsx'
import InputCounter from './InputCounter.jsx'
import Context from './Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Bank/> */}
    {/* <Count/> */}
    {/* <Counter/> */}
    {/* <InputCounter/> */}
    <Context/>
  </StrictMode>,
)
