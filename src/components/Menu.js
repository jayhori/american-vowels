import { NavLink } from 'react-router-dom'

export const Menu = () =>
    <nav>
        <NavLink exact to='/' activeClassName='active'>
            Search
        </NavLink>
        <NavLink to='/about' activeClassName='active'>
            About
        </NavLink>
    </nav>
    