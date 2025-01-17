import { Link, NavLink } from 'react-router-dom';
import classes from './MainNav.module.css';

export default function MainNav() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><NavLink to="/" className={({ isActive }) =>
                        isActive ? classes.active : 'undefinded'
                    }
                        end
                    >
                        Home
                    </NavLink>
                    </li>
                    <li><NavLink to="/products" className={({ isActive }) =>
                        isActive ? classes.active : 'undefinded'
                    }
                    >
                        Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}