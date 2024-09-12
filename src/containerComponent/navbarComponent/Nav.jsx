import React from "react";
import './nav.css'

const Nav = () => {
    return (
        <nav>
            <div id="navContainer">
                <ul id="navbarList">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;