import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ({ user }) => {
    const section = window.location.pathname;
    return (
        <div className='navBar'>
            <Link to='/bookshelf' className={section === '/bookshelf' ? 'active' : ''}>
                <h2>BookShelf</h2>
            </Link>
            <Link to='/challenge' className={section === '/challenge' ? 'active' : ''} >
                <h2>Challenge</h2>
            </Link>
                <h1>ReadMore</h1>
            <Link to='booklist' className={section === '/booklist'? 'active' : ''}>
                <h2>BookList</h2>
            </Link>
            <Link to='/' className={section === '/'? 'active' : ''}>
            <h2>{user ? 'Logout' : 'Login'}</h2>
            </Link>
        </div>
    )
}

export default NavBar;