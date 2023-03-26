
import React, { Component } from 'react'
import { Link } from 'react-router-dom';


import { MenuItems } from './MenuItems';

import './Navbar.css';

class Navbar extends Component {
     state = { clicked: false};

     handleClick = () => {
         this.setState({clicked:!this.state.clicked})
     };

    render () {
        return (
            <nav className={"NavbarItems"}>
                <h1 className={"navbar-logo"}><Link to="/" className="Link">ShoeXone</Link><i className={"fab fa-typo3"}></i></h1>
              
                <div className={"menu-icon"} onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                    
                 </div>
               
                <ul className={this.state.clicked?'nav-menu active':'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <div key={index}>
                                <li >
                                    <Link className={item.cName} to={item.url}>
                                        {item.title}
                                    </Link>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar;