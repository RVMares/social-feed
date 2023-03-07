import React from 'react';

const Navbar = (props) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">
                <h3 style={{'margin': '1em'}}>social 
                <small className='text-muted'>FEED</small></h3>
            </span>
        </nav>
     );
}
 
export default Navbar;