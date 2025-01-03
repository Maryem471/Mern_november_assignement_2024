import React, { useContext } from 'react';
import { NameContext } from '../context';

const Navbar = () => {
    const { name } = useContext(NameContext);

    return (
        <nav style={{ padding: '10px', backgroundColor: '#282c34', color: 'white' }}>
            <h1>Hi, {name}!</h1>
        </nav>
    );
};

export default Navbar;
