Header Original Navigation Method
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
<li>
    <NavLink to="/Contact">Contact</NavLink>
</li>
<li>
    {/* Back out and only bright around cursor */}
    {/* Ofc the TryMe Has to be On to see */}
    <NavLink to="#">TryMe</NavLink> 
</li>

Orginal Nav Menu Style:
.nav li{
    margin-left: 55px;
    padding: 15px;
    /* margin: 10px; */
    display: block;
    border-radius: 20px;
    border: 1px solid black;

    /* Making entire block clickable */
    cursor: pointer;
}
.nav li:hover{
    background-color: black;
    color: white;
    transition: 0.5s ease-in ease-out;
}
.nav li:hover a{
    color: white;    
    transition: 0.3s ease-in-out;
}
.nav a{
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    padding: 0;
}