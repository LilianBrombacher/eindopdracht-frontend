import './Navigation.css';
import {NavLink} from "react-router-dom";
import {UserCircle, HeartStraight, SignOut} from "@phosphor-icons/react"

import {AuthContext} from "../../context/AuthContext.jsx";
import {useContext} from "react";

function Navigation() {
    const {isAuth} = useContext(AuthContext);

    return (
        <nav>
            <div className="nav-container">
                <h4>
                    <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/">
                        WorldWide Office Hours
                    </NavLink>
                </h4>

                <ul className="navbar-items">
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/favorites">
                            <HeartStraight size={30}/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/login">
                            <UserCircle size={30}/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/">
                            <SignOut size={32}/>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;