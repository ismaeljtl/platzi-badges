import React from 'react'

import '../styles/Badge.css'
import confLogo from '../images/badge-header.svg'
import Gravatar from './Gravatar'

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="badge-header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                
                <div className="badge-section">
                    <Gravatar className="badge-avatar" email={this.props.email} />
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>

                <div className="badge-info">
                    <p className="title">{this.props.jobTitle}</p>
                    <p className="twitter">@{this.props.twitter}</p>
                </div>

                <div className="badge-footer">
                    <p>#platziConf</p>
                </div>
            </div>
        )
    }
}

export default Badge;