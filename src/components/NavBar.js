import React from "react";
import{Link} from 'react-router-dom';

const NavBar =()=>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to ="/">Startseite</Link>
                </li>
                <li>
                    <Link to ="/products">ProductList</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;