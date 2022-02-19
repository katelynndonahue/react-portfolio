import React, { useState } from 'react';

function Nav() {
    return (
        <nav>
        <div className='nav-wrapper'>
        <a href='#!' className='brand-logo'>Katelynn Donahue-McCann</a>
        <a href='#' data-target='mobile-demo' className='sidenav-trigger'><i className='material-icons'>menu</i></a>
        <ul className='right hide-on-med-and-down'>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Portfolio</a></li>
        <li><a href='#'>Resume</a></li>
        <li><a href='#'>Contact</a></li>
        </ul>
        <ul className='sidenav' id='mobile-demo'>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Portfolio</a></li>
        <li><a href='#'>Resume</a></li>
        <li><a href='#'>Contact</a></li>
        </ul>
        </div>
        </nav>
    );
}

export default Nav;