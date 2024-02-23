
import './Navigation.css';
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <h4>WorldWide Office Hours</h4>

                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? 'active-menu-link': 'default-menu-link'}
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? 'active-menu-link': 'default-menu-link'}
                            to="/login">
                            Log in
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? 'active-menu-link': 'default-menu-link'}
                            to="/register">
                            Registeren
                        </NavLink>
                    </li>
                    {/*<li>*/}
                    {/*    <NavLink*/}
                    {/*        className={({ isActive }) => isActive ? 'active-menu-link': 'default-menu-link'}*/}
                    {/*        to="/whitening">*/}
                    {/*        Tanden bleken*/}
                    {/*    </NavLink>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;