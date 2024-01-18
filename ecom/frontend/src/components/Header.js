import { Link, NavLink } from "react-router-dom";
import './Components.css';
import React, { useState } from "react";

function Header(){
    const [isVisible, setVisible] = useState(false);

    const visibleToggle = () => {
        setVisible(!isVisible);
    };

    return(
        <div className='Header'>
            <h1>TTDL</h1>
            <ul className="nav">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                {/* <NavLink to="/"><li className="home">Home</li></NavLink> */}
                <li>
                    <NavLink to="/About">About</NavLink>
                </li>
                <li className="dropdown" onMouseEnter={visibleToggle} onMouseLeave={visibleToggle}>
                    <NavLink to="/Portfolio">Portfolio</NavLink>
                    {isVisible && (
                        // <ul className="dropdown-content">
                            <li  className="dropdown-content">
                                <NavLink to="/Portfolio/Skills">Skills</NavLink>
                            </li>
                        // </ul> 
                    )}
                </li>
                {/* <li>
                    <NavLink to="/Portfolio/Skills" className="">Skills</NavLink>
                </li> */}
                <li>
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
                <li>
                    {/* Back out and only bright around cursor */}
                    {/* Ofc the TryMe Has to be On to see */}
                    <NavLink to="#">TryMe</NavLink> 
                </li>
            </ul>
        </div>
    );
}
export default Header;