import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Error from "./components/Error.jsx";
import Favorite from "./pages/favorites/Favorite.jsx";


function App() {


  return (

        <BrowserRouter>
            <Navigation />
            <Routes>

                <Route path='/' element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/favorites' element={<Favorite/>}/>
                <Route path='*' element={<Error/>}/>

            </Routes>

        </BrowserRouter>

  )
}

export default App
