import {Routes, Route, Navigate} from "react-router-dom";
import './App.css'
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Error from "./components/Error.jsx";
import Favorite from "./pages/favorites/Favorite.jsx";
import Profile from "./pages/profile/Profile.jsx";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext.jsx";
import FavoriteLoggedIn from "./pages/favorites/FavoriteLoggedIn.jsx";


function App() {
    const {isAuth} = useContext(AuthContext);


    return (
        <div>
            <Navigation/>
            <Routes>

                <Route path='/' element={<Home/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/login' element={isAuth ? <Navigate to='/Profile' /> : <Login />} />
                <Route path='/favorites' element={isAuth ? <Navigate to='/FavoriteLoggedIn' /> : <Favorite />} />
                <Route path='/favoriteloggedin' element={<FavoriteLoggedIn/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='*' element={<Error/>} />

            </Routes>
        </div>
    )
}

export default App
