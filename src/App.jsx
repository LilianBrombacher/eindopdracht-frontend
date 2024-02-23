import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import Navigation from "./components/navigation/Navigation.jsx";


function App() {


  return (

        <BrowserRouter>
            <Navigation />
            <Routes>

                <Route path='/' element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>

            </Routes>
        </BrowserRouter>

  )
}

export default App
