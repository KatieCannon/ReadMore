import React from 'react';
import './Header.css';

const Header = () => {
    return ( 
        <div className='header'>
            <h1>ReadMore</h1>
            <form className='header__form'>
                <div className='header__nameInput'>
                    <label>Username</label>
                    <input type='text'></input>
                </div>
                <div className='header__passwordInput'>
                    <label>Password</label>
                    <input type='text'></input>
                </div>
                <div className='header__submit'>
                    <input type='submit'value='Submit'></input>
                </div>
            </form>
        </div>
    )
}

export default Header;