import React from 'react'

import { Link } from 'react-router-dom'
import '../styles/Home.css'
import logoConf from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'

function Home() {
    return(
        <React.Fragment>
            <div className="hero container-fluid">
                <div className="row">
                    <div className="col-4">
                        <img src={logoConf} alt="Logo conferencia"/>
                        <div className="text-container">
                            <h3>PRINT YOUR BADGES</h3>
                            <h5>The easiest way to manage your conference</h5>
                        </div>
                        <div className="btn-container">
                            <Link className="btn btn-success" to="/badges">Start Now!</Link>                            
                        </div>
                    </div>
                    <div className="col-8">
                        <img src={astronauts} alt="Astronautas"/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home