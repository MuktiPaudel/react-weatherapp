import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link to='/'>
                    <li>WEATHER</li>
                </Link>
                <Link to='/chart'>
                    <li>FORCAST</li>    
                </Link>           
            </ul>           
        </nav>
        )
    }
}

export default Nav
