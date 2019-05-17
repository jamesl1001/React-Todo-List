import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/React-Todo-List">Home</Link> | <Link style={linkStyle} to="/React-Todo-List/about">About</Link>
        </header>
    );
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: 10
}

const linkStyle = {
    color: '#fff'
}

export default Header;