import React from 'react';
import './NavBar.css';

const NavBar = ({ user }) => {
    console.log(user);
    return (
        <div className='navBar'>
            <h2>BookShelf</h2>
            <h2>Challenge</h2>
            <h1>ReadMore</h1>
            <h2>BookList</h2>
            <h2>{user ? 'Logout' : 'Login'}</h2>
        </div>
    )
}

export default NavBar;