
import './Navigation.css';
import { NavLink } from "react-router-dom";
import { UserCircle, HeartStraight } from "@phosphor-icons/react"

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <h4>
                    <NavLink
                    className={({ isActive }) => isActive ? 'active-menu-link': 'default-menu-link'}
                    to="/">
                    WorldWide Office Hours
                </NavLink>
                    </h4>

                <ul className="navbar-items">
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? 'active-menu-link': 'default-menu-link'}
                            to="/favorites">
                            <HeartStraight size={30} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? 'active-menu-link': 'default-menu-link'}
                            to="/login">
                            <UserCircle size={30} />
                        </NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Navigation;