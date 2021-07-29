import React from 'react';
import Contact from './Contact';
const NavBar = (props) => {
    return (
        <div>
            NavBar
            <button onClick={() => props.setCurrentPage(<Contact/>)}></button>
        </div>
        )
}
export default NavBar;