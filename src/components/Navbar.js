import React from 'react';

import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../images/logo.svg'

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar-brand" to="/">
                        <img src={logo} alt=""/>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar