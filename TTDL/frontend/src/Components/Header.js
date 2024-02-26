import { Link, NavLink } from "react-router-dom";
import './Components.css';
import React, { useState } from "react";
import { MenuItem } from "./MenuItem";

function Header(){
    const [isVisible, setVisible] = useState(false);

    const visibleToggle = () => {
        setVisible(!isVisible);
    };

    return(
        <div className="Header-margin">
        <nav className='Header'>
            <h1>TTDL</h1>
            <ul className="nav">
                {MenuItem.map((item, index) => {
                    return(
                        <a href={item.url} className={item.cNameLink} onMouseEnter={visibleToggle} onMouseLeave={visibleToggle}>
                            <li key={index} className={item.cNameItem}> {item.label}
                                {/* Sub-Content in dropdown menu */}
                                {isVisible && item.subItem && (
                                    <ul className="dropdown-content">
                                        {item.subItem.map((subItem, subIndex) => {
                                            <a href={subItem.url} className={subItem.cNameLink}>
                                                <li key={subIndex} className={subItem.cNameItem}>{subItem.label}</li>
                                            </a>
                                        })}
                                    </ul>
                                )}
                            </li>
                        </a>
                    );
                })}
                {/* <a href="#" className="nav-item-link">
                    <li className="nav-item">TryMe</li>
                </a> */}
                
            </ul>
        </nav>
        </div>
    );
}
export default Header;