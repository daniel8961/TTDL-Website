import { Link } from "react-router-dom";
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
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li className="dropdown" onMouseEnter={visibleToggle} onMouseLeave={visibleToggle}>
                    <Link to="/Portfolio">Portfolio</Link>
                    {isVisible && (
                        <ul className="dropdown-content">
                            <li>
                                <Link to="/Portfolio/Skills">Skills</Link>
                            </li>
                        </ul>
                    )}
                </li>
                {/* <li>
                    <Link to="/Portfolio/Skills" className="">Skills</Link>
                </li> */}
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
}
export default Header;