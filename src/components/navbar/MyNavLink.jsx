import { NavLink } from 'react-router';

const MyNavLink = ({ to, children }) => {
    return (
        <NavLink to={to} 
            className={({ isActive }) =>
                 `pb-1 ${isActive ? 'text-purple-500 border-b border-purple-500' : ''}`}>
                    {children}
        </NavLink>
    );
};

export default MyNavLink;