import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./pages/Navbar";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/products/:id' element={<Products/>} />
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='profile' element={<Profile/>} />
          <Route path='settings' element={<Settings/>} />
        </Route>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
